import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Armchair, CalendarDays, Hash, ShieldCheck } from "lucide-react"
import { PriceBreakdown } from "./PriceBreakdown"
import type { SeatCategory } from "@/types"

interface PaymentSummaryProps {
  seatCategory: SeatCategory
  seatNumber: number
  startDate: string
  endDate: string
  subtotal: number
  discountPercent: number
  finalAmount: number
}

export function PaymentSummary({
  seatCategory,
  seatNumber,
  startDate,
  endDate,
  subtotal,
  discountPercent,
  finalAmount,
}: PaymentSummaryProps) {
  return (
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
            <p className="text-xs text-muted-foreground">Seat Category</p>
            <p className="font-semibold text-foreground">{seatCategory} Seat</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-border p-4">
          <Hash className="h-6 w-6 text-accent" />
          <div>
            <p className="text-xs text-muted-foreground">Seat Number</p>
            <p className="font-semibold text-foreground">#{seatNumber}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-border p-4">
          <CalendarDays className="h-6 w-6 text-accent" />
          <div>
            <p className="text-xs text-muted-foreground">Duration</p>
            <p className="font-semibold text-foreground">
              {startDate} — {endDate}
            </p>
          </div>
        </div>

        <PriceBreakdown
          subtotal={subtotal}
          discountPercent={discountPercent}
          finalAmount={finalAmount}
        />
      </CardContent>
    </Card>
  )
}
