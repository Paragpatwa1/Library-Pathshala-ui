"use client";

import { SeatCard, type SeatStatus } from "./SeatCard";
import type { SeatCategory } from "@/types";
import { useEffect, useState } from "react";

interface SeatGridProps {
  category: SeatCategory;
  selectedSeat: number | null;
  onSelectSeat: (seatNumber: number) => void;
}

function getSeatLabel(category: SeatCategory, index: number): number {
  const offsets: Record<SeatCategory, number> = {
    Common: 0,
    Reserved: 100,
    Cabin: 200,
  };

  return offsets[category] + index + 1;
}

export function SeatGrid({
  category,
  selectedSeat,
  onSelectSeat,
}: SeatGridProps) {

  const [disabledSeats, setDisabledSeats] = useState<number[]>([]);

  useEffect(() => {
    async function loadSeats() {

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/seats?category=${category}`
      );

      const data = await res.json();

      const booked = data
        .filter((seat: any) => seat.isBooked)
        .map((seat: any) => seat.seatNumber);

      setDisabledSeats(booked);
    }

    loadSeats();
  }, [category]);

  return (
    <div>

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

      <div className="grid grid-cols-10 gap-1.5 sm:gap-2">

        {Array.from({ length: 100 }, (_, i) => {

          const seatNum = getSeatLabel(category, i);

          let status: SeatStatus = "available";

          if (disabledSeats.includes(seatNum)) status = "disabled";

          if (selectedSeat === seatNum) status = "selected";

          return (
            <SeatCard
              key={seatNum}
              seatNumber={seatNum}
              status={status}
              onSelect={onSelectSeat}
            />
          );
        })}

      </div>
    </div>
  );
}