"use client"

import { Suspense, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowLeft, Hash } from "lucide-react"
import { SeatGrid } from "@/components/seats/SeatGrid"
import { CategoryTabs } from "@/components/seats/CategoryTabs"
import type { SeatCategory } from "@/types"
import Link from "next/link"

export default function SelectSeatPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center py-12 text-muted-foreground">Loading seat selection...</div>}>
      <SelectSeatContent />
    </Suspense>
  )
}

function SelectSeatContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const categoryParam = (searchParams.get("category") as SeatCategory) || "Common"
  const startDate = searchParams.get("startDate") || ""
  const endDate = searchParams.get("endDate") || ""
  const price = searchParams.get("price") || "800"
  const months = searchParams.get("months") || "1"
  const total = searchParams.get("total") || "800"
  const discount = searchParams.get("discount") || "160"
  const finalAmount = searchParams.get("final") || "640"

  const [category, setCategory] = useState<SeatCategory>(categoryParam)
  const [selectedSeat, setSelectedSeat] = useState<number | null>(null)

  function handleSelectSeat(seatNumber: number) {
    setSelectedSeat((prev) => (prev === seatNumber ? null : seatNumber))
  }

  function handleCategoryChange(newCategory: SeatCategory) {
    setCategory(newCategory)
    setSelectedSeat(null)
  }

  function handleContinue() {
    if (!selectedSeat) return
    const params = new URLSearchParams({
      category,
      seat: String(selectedSeat),
      startDate,
      endDate,
      price,
      months,
      total,
      discount,
      final: finalAmount,
    })
    router.push(`/dashboard/payment?${params.toString()}`)
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/dashboard/book-seat" aria-label="Go back">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
          Select Your Seat
        </h1>
      </div>

      {/* Step indicator */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-semibold">
          1
        </span>
        <span className="text-accent font-medium">Plan & Dates</span>
        <ArrowRight className="h-4 w-4" />
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold">
          2
        </span>
        <span className="font-medium text-foreground">Select Seat</span>
        <ArrowRight className="h-4 w-4" />
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground text-xs font-semibold">
          3
        </span>
        <span>Payment</span>
      </div>

      {/* Category Tabs */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Seat Category</CardTitle>
        </CardHeader>
        <CardContent>
          <CategoryTabs selected={category} onSelect={handleCategoryChange} />
        </CardContent>
      </Card>

      {/* Seat Grid */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-lg">
            <span>
              {category} Seats
            </span>
            <span className="text-sm font-normal text-muted-foreground">
              100 seats
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <SeatGrid
            category={category}
            selectedSeat={selectedSeat}
            onSelectSeat={handleSelectSeat}
          />
        </CardContent>
      </Card>

      {/* Selected Seat Info + Continue */}
      <Card className={selectedSeat ? "border-primary/30" : ""}>
        <CardContent className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Hash className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Selected Seat</p>
              {selectedSeat ? (
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-foreground">
                    Seat #{selectedSeat}
                  </span>
                  <Badge variant="outline" className="text-xs">
                    {category}
                  </Badge>
                </div>
              ) : (
                <p className="text-sm font-medium text-muted-foreground">
                  Click on an available seat to select it
                </p>
              )}
            </div>
          </div>
          <Button
            onClick={handleContinue}
            disabled={!selectedSeat}
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
          >
            Continue to Payment
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
