"use client"

import { cn } from "@/lib/utils"

export type SeatStatus = "available" | "selected" | "disabled"

interface SeatCardProps {
  seatNumber: number
  status: SeatStatus
  onSelect: (seatNumber: number) => void
}

export function SeatCard({ seatNumber, status, onSelect }: SeatCardProps) {
  const isClickable = status === "available" || status === "selected"

  return (
    <button
      type="button"
      disabled={!isClickable}
      onClick={() => onSelect(seatNumber)}
      aria-label={`Seat ${seatNumber} - ${status}`}
      className={cn(
        "flex items-center justify-center rounded-md text-xs font-medium transition-all h-9 w-full",
        status === "available" &&
          "bg-emerald-100 text-emerald-700 border border-emerald-300 hover:bg-emerald-200 hover:scale-105 cursor-pointer",
        status === "selected" &&
          "bg-primary text-primary-foreground border border-primary shadow-md scale-105 cursor-pointer ring-2 ring-primary/30",
        status === "disabled" &&
          "bg-muted text-muted-foreground/50 border border-border cursor-not-allowed opacity-60"
      )}
    >
      {seatNumber}
    </button>
  )
}
