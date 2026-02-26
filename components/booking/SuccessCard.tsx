"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2, Armchair, Hash, CalendarDays, CreditCard } from "lucide-react"
import type { SeatCategory } from "@/types"

interface SuccessCardProps {
  seatCategory: SeatCategory
  seatNumber: number
  startDate: string
  endDate: string
  amountPaid: number
}

export function SuccessCard({
  seatCategory,
  seatNumber,
  startDate,
  endDate,
  amountPaid,
}: SuccessCardProps) {
  return (
    <Card className="mx-auto max-w-lg border-accent/20">
      <CardContent className="flex flex-col items-center gap-6 pt-8 pb-8">
        {/* Success Icon */}
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
          <CheckCircle2 className="h-10 w-10 text-emerald-600" />
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
            Seat Booked Successfully!
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Your booking has been confirmed. Here are your details.
          </p>
        </div>

        <Separator />

        {/* Details */}
        <div className="w-full flex flex-col gap-3">
          <div className="flex items-center justify-between rounded-xl border border-border p-4">
            <div className="flex items-center gap-3">
              <Armchair className="h-5 w-5 text-accent" />
              <span className="text-sm text-muted-foreground">Category</span>
            </div>
            <span className="font-semibold text-foreground">
              {seatCategory} Seat
            </span>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-border p-4">
            <div className="flex items-center gap-3">
              <Hash className="h-5 w-5 text-accent" />
              <span className="text-sm text-muted-foreground">Seat Number</span>
            </div>
            <span className="font-semibold text-foreground">#{seatNumber}</span>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-border p-4">
            <div className="flex items-center gap-3">
              <CalendarDays className="h-5 w-5 text-accent" />
              <span className="text-sm text-muted-foreground">Booking Period</span>
            </div>
            <span className="font-semibold text-foreground text-right text-sm">
              {startDate} — {endDate}
            </span>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-border p-4">
            <div className="flex items-center gap-3">
              <CreditCard className="h-5 w-5 text-accent" />
              <span className="text-sm text-muted-foreground">Amount Paid</span>
            </div>
            <span className="text-lg font-bold text-foreground">
              {"₹"}{amountPaid.toLocaleString("en-IN")}
            </span>
          </div>
        </div>

        <Button
          asChild
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-6 text-base"
        >
          <Link href="/dashboard">Go to Dashboard</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
