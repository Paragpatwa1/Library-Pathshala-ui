"use client"

import { cn } from "@/lib/utils"
import { LayoutGrid, Armchair, DoorOpen } from "lucide-react"
import type { SeatCategory } from "@/types"

interface CategoryTabsProps {
  selected: SeatCategory
  onSelect: (category: SeatCategory) => void
}

const categories: {
  id: SeatCategory
  label: string
  price: number
  icon: React.ComponentType<{ className?: string }>
}[] = [
  { id: "Common", label: "Common Seat", price: 800, icon: LayoutGrid },
  { id: "Reserved", label: "Reserved Seat", price: 1200, icon: Armchair },
  { id: "Cabin", label: "Cabin Seat", price: 2000, icon: DoorOpen },
]

export { categories }

export function CategoryTabs({ selected, onSelect }: CategoryTabsProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {categories.map((cat) => (
        <button
          key={cat.id}
          type="button"
          onClick={() => onSelect(cat.id)}
          className={cn(
            "flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-all",
            selected === cat.id
              ? "border-primary bg-primary/5 shadow-sm"
              : "border-border hover:border-primary/30"
          )}
        >
          <div
            className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
              selected === cat.id
                ? "bg-primary/10 text-primary"
                : "bg-muted text-muted-foreground"
            )}
          >
            <cat.icon className="h-5 w-5" />
          </div>
          <div>
            <p className="font-semibold text-foreground">{cat.label}</p>
            <p className="text-sm text-muted-foreground">
              {"₹"}{cat.price}/month
            </p>
          </div>
        </button>
      ))}
    </div>
  )
}
