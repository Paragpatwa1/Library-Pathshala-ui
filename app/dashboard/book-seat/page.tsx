"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import {
  Armchair,
  CalendarDays,
  DoorOpen,
  LayoutGrid,
  Tag,
} from "lucide-react"

const seatTypes = [
  { id: "common", label: "Common Seat", price: 800, icon: LayoutGrid },
  { id: "reserved", label: "Reserved Seat", price: 1200, icon: Armchair },
  { id: "cabin", label: "Cabin Seat", price: 2000, icon: DoorOpen },
]

export default function BookSeatPage() {
  const [selected, setSelected] = useState("common")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [checked, setChecked] = useState(false)

  const plan = seatTypes.find((s) => s.id === selected)!
  const months = useMemo(() => {
    if (!startDate || !endDate) return 0
    const start = new Date(startDate)
    const end = new Date(endDate)
    const diff =
      (end.getFullYear() - start.getFullYear()) * 12 +
      end.getMonth() -
      start.getMonth()
    return Math.max(diff, 1)
  }, [startDate, endDate])

  const total = plan.price * months
  const discount = Math.round(total * 0.2)
  const finalAmount = total - discount

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
        Book Your Seat
      </h1>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Select Seat Type</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-3">
            {seatTypes.map((seat) => (
              <button
                key={seat.id}
                onClick={() => {
                  setSelected(seat.id)
                  setChecked(false)
                }}
                className={cn(
                  "flex items-center gap-3 rounded-xl border-2 p-4 transition-all text-left",
                  selected === seat.id
                    ? "border-accent bg-accent/5"
                    : "border-border hover:border-accent/30"
                )}
              >
                <seat.icon
                  className={cn(
                    "h-6 w-6",
                    selected === seat.id ? "text-accent" : "text-muted-foreground"
                  )}
                />
                <div>
                  <p className="font-semibold text-foreground">{seat.label}</p>
                  <p className="text-sm text-muted-foreground">
                    {"₹"}{seat.price}/month
                  </p>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Choose Date</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="start" className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-accent" />
                Start Date
              </Label>
              <Input
                id="start"
                type="date"
                value={startDate}
                onChange={(e) => {
                  setStartDate(e.target.value)
                  setChecked(false)
                }}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="end" className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-accent" />
                End Date
              </Label>
              <Input
                id="end"
                type="date"
                value={endDate}
                onChange={(e) => {
                  setEndDate(e.target.value)
                  setChecked(false)
                }}
              />
            </div>
          </div>
          <Button
            className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            onClick={() => setChecked(true)}
            disabled={!startDate || !endDate}
          >
            Check Availability
          </Button>
        </CardContent>
      </Card>

      {checked && months > 0 && (
        <Card className="border-accent/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Tag className="h-5 w-5 text-accent" />
              Price Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Seat Type</span>
                <span className="font-medium text-foreground">{plan.label}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Duration</span>
                <span className="font-medium text-foreground">
                  {months} month{months > 1 ? "s" : ""}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium text-foreground">{"₹"}{total}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Discount (20%)</span>
                <span className="font-medium text-accent">-{"₹"}{discount}</span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between">
                <span className="font-semibold text-foreground">Total Amount</span>
                <span className="text-xl font-bold text-foreground">
                  {"₹"}{finalAmount}
                </span>
              </div>
              <Badge className="self-start bg-accent/10 text-accent border-accent/20">
                20% New Member Discount Applied!
              </Badge>
              <Button className="mt-2 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                Proceed to Payment
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
