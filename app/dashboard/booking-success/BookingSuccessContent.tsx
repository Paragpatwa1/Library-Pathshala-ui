"use client"

import { useSearchParams } from "next/navigation"
import { SuccessCard } from "@/components/booking/SuccessCard"
import type { SeatCategory } from "@/types"

export default function BookingSuccessContent() {
  const searchParams = useSearchParams()

  const category = (searchParams.get("category") as SeatCategory) || "Reserved"
  const seat = Number(searchParams.get("seat")) || 0
  const startDate = searchParams.get("startDate") || "01 Mar 2026"
  const endDate = searchParams.get("endDate") || "31 Mar 2026"
  const amount = Number(searchParams.get("amount")) || 960

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-8">
      <SuccessCard
        seatCategory={category}
        seatNumber={seat}
        startDate={startDate}
        endDate={endDate}
        amountPaid={amount}
      />
    </div>
  )
}
