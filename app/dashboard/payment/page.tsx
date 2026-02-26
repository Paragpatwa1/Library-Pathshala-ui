"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, CreditCard, Landmark, ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState, useCallback } from "react"
import { PaymentSummary } from "@/components/payment/PaymentSummary"
import type { SeatCategory } from "@/types"
import Link from "next/link"
import { Loader2 } from "lucide-react"

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

export default function PaymentPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [method, setMethod] = useState("upi")
  const [isProcessing, setIsProcessing] = useState(false)

  const category = (searchParams.get("category") as SeatCategory) || "Reserved"
  const seat = Number(searchParams.get("seat")) || 0
  const startDate = searchParams.get("startDate") || ""
  const endDate = searchParams.get("endDate") || ""
  const total = Number(searchParams.get("total")) || 1200
  const finalAmount = Number(searchParams.get("final")) || 960

  const discountPercent = 20
  const formattedStart = formatDate(startDate)
  const formattedEnd = formatDate(endDate)

  const handleDummyPayment = useCallback(() => {
    setIsProcessing(true)
    setTimeout(() => {
      const params = new URLSearchParams({
        category,
        seat: String(seat),
        startDate: formattedStart,
        endDate: formattedEnd,
        amount: String(finalAmount),
      })
      router.push(`/dashboard/booking-success?${params.toString()}`)
    }, 800)
  }, [category, seat, formattedStart, formattedEnd, finalAmount, router])

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/dashboard/book-seat" aria-label="Go back">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
          Secure Payment
        </h1>
      </div>

      {/* Step indicator */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-semibold">
          1
        </span>
        <span className="text-accent font-medium">Plan & Dates</span>
        <ArrowRight className="h-4 w-4" />
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-semibold">
          2
        </span>
        <span className="text-accent font-medium">Select Seat</span>
        <ArrowRight className="h-4 w-4" />
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold">
          3
        </span>
        <span className="font-medium text-foreground">Payment</span>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Booking Summary */}
        <PaymentSummary
          seatCategory={category}
          seatNumber={seat}
          startDate={formattedStart || "01 Mar 2026"}
          endDate={formattedEnd || "31 Mar 2026"}
          subtotal={total}
          discountPercent={discountPercent}
          finalAmount={finalAmount}
        />

        {/* Payment Method */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Payment Method</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="grid grid-cols-3 gap-3">
              {paymentMethods.map((pm) => (
                <button
                  key={pm.id}
                  onClick={() => setMethod(pm.id)}
                  className={cn(
                    "flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all",
                    method === pm.id
                      ? "border-accent bg-accent/5"
                      : "border-border hover:border-accent/30"
                  )}
                >
                  <pm.icon
                    className={cn(
                      "h-6 w-6",
                      method === pm.id ? "text-accent" : "text-muted-foreground"
                    )}
                  />
                  <span className="text-xs font-medium text-foreground">
                    {pm.label}
                  </span>
                </button>
              ))}
            </div>

            <div className="rounded-xl border border-border bg-secondary p-4 text-center text-sm text-muted-foreground">
              {paymentMethods.find((pm) => pm.id === method)?.description}
            </div>

            <Button
              onClick={handleDummyPayment}
              disabled={isProcessing}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base py-6"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>{"Pay Now - ₹"}{finalAmount.toLocaleString("en-IN")}</>
              )}
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              Your payment is secured with 256-bit encryption
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
