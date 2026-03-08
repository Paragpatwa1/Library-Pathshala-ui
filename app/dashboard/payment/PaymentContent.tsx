"use client"

import { useCallback, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, CreditCard, Landmark, ArrowLeft, ArrowRight, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { PaymentSummary } from "@/components/payment/PaymentSummary"
import type { SeatCategory } from "@/types"
import Link from "next/link"
import { loadRazorpay } from "@/lib/razorpay"

const paymentMethods = [
  { id: "upi", label: "UPI", icon: Smartphone, description: "You will be redirected to your UPI app to complete payment." },
  { id: "card", label: "Card", icon: CreditCard, description: "Enter your card details to proceed with payment." },
  { id: "netbanking", label: "Net Banking", icon: Landmark, description: "Select your bank to proceed with netbanking payment." },
]

function formatDate(dateStr: string) {
  if (!dateStr) return ""
  const d = new Date(dateStr)
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })
}

export default function PaymentContent() {

  const router = useRouter()
  const searchParams = useSearchParams()

  const [method, setMethod] = useState("upi")
  const [isProcessing, setIsProcessing] = useState(false)

  const category = (searchParams.get("category") as SeatCategory) || "Reserved"
  const seat = Number(searchParams.get("seat"))
  const startDate = searchParams.get("startDate") || ""
  const endDate = searchParams.get("endDate") || ""
  const total = Number(searchParams.get("total") ?? 0)
const finalAmount = Number(searchParams.get("final") ?? 0)

  const discountPercent = 20
  const formattedStart = formatDate(startDate)
  const formattedEnd = formatDate(endDate)

  const handlePayment = useCallback(async () => {

    try {

      setIsProcessing(true)

      const token = localStorage.getItem("token")

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/payment/create-order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            amount: finalAmount
          })
        }
      )

      const order = await res.json()

      const razorpayLoaded = await loadRazorpay()

      if (!razorpayLoaded) {
        alert("Razorpay SDK failed to load")
        return
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        order_id: order.id,
        name: "Pathshala Library",
        description: "Seat Booking Payment",

        handler: async function (response: any) {

          const token = localStorage.getItem("token")

          await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/payment/verify`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
              },
              body: JSON.stringify(response)
            }
          )

          await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/seats/${seat}/toggle`,
            {
              method: "PATCH",
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          )

          const params = new URLSearchParams({
            category,
            seat: String(seat),
            startDate: formattedStart,
            endDate: formattedEnd,
            amount: String(finalAmount),
          })

          router.push(`/dashboard/booking-success?${params.toString()}`)
        },

        theme: {
          color: "#f97316"
        }

      }

      const rzp = new (window as any).Razorpay(options)
      rzp.open()

    } catch (err) {

      console.error(err)
      alert("Payment failed")

    } finally {

      setIsProcessing(false)

    }

  }, [category, seat, formattedStart, formattedEnd, finalAmount, router])

  return (
    <div className="flex flex-col gap-6">

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/dashboard/book-seat">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>

        <h1 className="text-2xl font-bold">
          Secure Payment
        </h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <PaymentSummary
          seatCategory={category}
          seatNumber={seat}
          startDate={formattedStart || "01 Mar 2026"}
          endDate={formattedEnd || "31 Mar 2026"}
          subtotal={total}
          discountPercent={discountPercent}
          finalAmount={finalAmount}
        />

        <Card>

          <CardHeader>
            <CardTitle className="text-lg">
              Payment Method
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col gap-4">

            <div className="grid grid-cols-3 gap-3">
              {paymentMethods.map((pm) => (

                <button
                  key={pm.id}
                  onClick={() => setMethod(pm.id)}
                  className={cn(
                    "flex flex-col items-center gap-2 rounded-xl border-2 p-4",
                    method === pm.id
                      ? "border-accent bg-accent/5"
                      : "border-border"
                  )}
                >

                  <pm.icon className="h-6 w-6" />

                  <span className="text-xs font-medium">
                    {pm.label}
                  </span>

                </button>

              ))}
            </div>

            <Button
              onClick={handlePayment}
              disabled={isProcessing}
              className="bg-accent text-accent-foreground font-semibold text-base py-6"
            >

              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>Pay Now - ₹{finalAmount.toLocaleString("en-IN")}</>
              )}

            </Button>

          </CardContent>

        </Card>

      </div>

    </div>
  )
}