"use client"

import { SeatCard, type SeatStatus } from "./SeatCard"
import type { SeatCategory } from "@/types"

interface SeatGridProps {
  category: SeatCategory
  selectedSeat: number | null
  onSelectSeat: (seatNumber: number) => void
  disabledSeats?: number[]
}

/** Generates seat numbers 1-100, with a prefix per category */
function getSeatLabel(category: SeatCategory, index: number): number {
  const offsets: Record<SeatCategory, number> = {
    Common: 0,
    Reserved: 100,
    Cabin: 200,
  }
  return offsets[category] + index + 1
}

/** Mock disabled seats per category */
const mockDisabled: Record<SeatCategory, number[]> = {
  Common: [3, 7, 15, 22, 38, 41, 56, 67, 73, 88, 94],
  Reserved: [105, 112, 128, 134, 149, 161, 177, 183, 195],
  Cabin: [202, 211, 225, 237, 248, 259, 266, 278, 289, 296],
}

export function SeatGrid({
  category,
  selectedSeat,
  onSelectSeat,
  disabledSeats,
}: SeatGridProps) {
  const disabled = disabledSeats ?? mockDisabled[category]

  return (
    <div>
      {/* Legend */}
      <div className="mb-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <span className="inline-block h-3.5 w-3.5 rounded-sm bg-emerald-100 border border-emerald-300" />
          Available
        </div>
        <div className="flex items-center gap-1.5">
          <span className="inline-block h-3.5 w-3.5 rounded-sm bg-primary border border-primary" />
          Selected
        </div>
        <div className="flex items-center gap-1.5">
          <span className="inline-block h-3.5 w-3.5 rounded-sm bg-muted border border-border opacity-60" />
          Booked
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-10 gap-1.5 sm:gap-2">
        {Array.from({ length: 100 }, (_, i) => {
          const seatNum = getSeatLabel(category, i)
          let status: SeatStatus = "available"
          if (disabled.includes(seatNum)) status = "disabled"
          if (selectedSeat === seatNum) status = "selected"

          return (
            <SeatCard
              key={seatNum}
              seatNumber={seatNum}
              status={status}
              onSelect={onSelectSeat}
            />
          )
        })}
      </div>
    </div>
  )
}
