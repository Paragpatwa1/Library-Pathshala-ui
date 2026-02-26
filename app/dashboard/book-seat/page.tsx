"use client"

import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Tag, ArrowRight } from "lucide-react"
import { CategoryTabs, categories } from "@/components/seats/CategoryTabs"
import type { SeatCategory } from "@/types"

export default function BookSeatPage() {
  const router = useRouter()
  const [selected, setSelected] = useState<SeatCategory>("Common")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  const plan = categories.find((c) => c.id === selected)!

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

  const canProceed = startDate && endDate && months > 0

  function handleContinue() {
    const params = new URLSearchParams({
      category: selected,
      startDate,
      endDate,
      price: String(plan.price),
      months: String(months),
      total: String(total),
      discount: String(discount),
      final: String(finalAmount),
    })
    router.push(`/dashboard/book-seat/select-seat?${params.toString()}`)
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
        Book Your Seat
      </h1>

      {/* Step indicator */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold">
          1
        </span>
        <span className="font-medium text-foreground">Choose Plan & Dates</span>
        <ArrowRight className="h-4 w-4" />
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground text-xs font-semibold">
          2
        </span>
        <span>Select Seat</span>
        <ArrowRight className="h-4 w-4" />
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground text-xs font-semibold">
          3
        </span>
        <span>Payment</span>
      </div>

      {/* Seat Category */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Select Seat Type</CardTitle>
        </CardHeader>
        <CardContent>
          <CategoryTabs selected={selected} onSelect={setSelected} />
        </CardContent>
      </Card>

      {/* Date Selection */}
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
                onChange={(e) => setStartDate(e.target.value)}
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
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Price Preview & Continue */}
      {canProceed && (
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
                <span className="font-medium text-foreground">
                  {"₹"}{total.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Discount (20%)</span>
                <span className="font-medium text-accent">
                  -{"₹"}{discount.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between">
                <span className="font-semibold text-foreground">Total Amount</span>
                <span className="text-xl font-bold text-foreground">
                  {"₹"}{finalAmount.toLocaleString("en-IN")}
                </span>
              </div>
              <Badge className="self-start bg-accent/10 text-accent border-accent/20">
                20% New Member Discount Applied!
              </Badge>
              <Button
                onClick={handleContinue}
                className="mt-2 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
              >
                Continue to Select Seat
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
