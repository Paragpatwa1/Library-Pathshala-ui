"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ShieldCheck,
  Smartphone,
  CreditCard,
  Landmark,
  CalendarDays,
  Armchair,
  Tag,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

const paymentMethods = [
  { id: "upi", label: "UPI", icon: Smartphone },
  { id: "card", label: "Card", icon: CreditCard },
  { id: "netbanking", label: "Netbanking", icon: Landmark },
]

export default function PaymentPage() {
  const [method, setMethod] = useState("upi")

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
        Secure Payment
      </h1>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Booking Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <ShieldCheck className="h-5 w-5 text-accent" />
              Booking Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex items-center gap-3 rounded-xl border border-border p-4">
              <Armchair className="h-6 w-6 text-accent" />
              <div>
                <p className="text-xs text-muted-foreground">Seat Type</p>
                <p className="font-semibold text-foreground">Reserved Seat</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-border p-4">
              <CalendarDays className="h-6 w-6 text-accent" />
              <div>
                <p className="text-xs text-muted-foreground">Duration</p>
                <p className="font-semibold text-foreground">
                  01 Mar 2026 — 31 Mar 2026
                </p>
              </div>
            </div>
            <Separator />
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium text-foreground">{"₹"}1,200</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Discount (20%)</span>
                <span className="font-medium text-accent">-{"₹"}240</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="font-semibold text-foreground">Total</span>
                <span className="text-2xl font-bold text-foreground">{"₹"}960</span>
              </div>
              <Badge className="self-start bg-accent/10 text-accent border-accent/20">
                <Tag className="mr-1 h-3 w-3" />
                20% Discount Applied
              </Badge>
            </div>
          </CardContent>
        </Card>

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
              {method === "upi" &&
                "You will be redirected to your UPI app to complete payment."}
              {method === "card" &&
                "Enter your card details to proceed with payment."}
              {method === "netbanking" &&
                "Select your bank to proceed with netbanking payment."}
            </div>

            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base py-6">
              Pay Now - {"₹"}960
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
