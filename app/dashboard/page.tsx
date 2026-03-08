import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CalendarCheck,
  ListOrdered,
  UserCircle,
  Armchair,
  CalendarDays,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Dashboard - Pathshala Library",
}

export default function StudentDashboard() {
  return (
    <div className="flex flex-col gap-6">

      {/* Welcome Section */}
      <div className="relative overflow-hidden rounded-2xl bg-primary p-6 text-primary-foreground lg:p-8">
        <div className="grid items-center gap-6 md:grid-cols-2">

          <div>

            <h1 className="text-2xl font-bold md:text-3xl font-[family-name:var(--font-poppins)]">
              Welcome to Pathshala Library
            </h1>

            <p className="mt-4 text-sm text-primary-foreground/80 leading-relaxed">
              A quiet place to study, focus, and achieve your goals.  
              Stay consistent, keep learning, and success will follow.
            </p>

          </div>

          <div className="relative hidden h-44 overflow-hidden rounded-xl md:block">
            <Image
              src="/images/library-interior.jpg"
              alt="Library"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>

        </div>
      </div>

      {/* Active Booking */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-[family-name:var(--font-poppins)]">
            Current Active Booking
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-3">

            <div className="flex items-center gap-3 rounded-xl border border-border p-4">
              <Armchair className="h-8 w-8 text-accent" />
              <div>
                <p className="text-xs text-muted-foreground">Seat Category</p>
                <p className="font-semibold text-foreground">Reserved Seat</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-border p-4">
              <CalendarDays className="h-8 w-8 text-accent" />
              <div>
                <p className="text-xs text-muted-foreground">Booking Expiry</p>
                <p className="font-semibold text-foreground">31 Mar 2026</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-border p-4">
              <Badge className="bg-accent/10 text-accent border-accent/20 px-3 py-1.5">
                Active
              </Badge>
            </div>

          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-4 sm:grid-cols-3">

        <Link href="/dashboard/book-seat">
          <Card className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 hover:border-accent/30">
            <CardContent className="flex flex-col items-center gap-3 py-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                <CalendarCheck className="h-7 w-7 text-accent" />
              </div>
              <span className="font-semibold text-foreground">
                Book Seat
              </span>
            </CardContent>
          </Card>
        </Link>

        <Link href="/dashboard/my-bookings">
          <Card className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 hover:border-accent/30">
            <CardContent className="flex flex-col items-center gap-3 py-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                <ListOrdered className="h-7 w-7 text-accent" />
              </div>
              <span className="font-semibold text-foreground">
                My Bookings
              </span>
            </CardContent>
          </Card>
        </Link>

        <Link href="/dashboard/profile">
          <Card className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 hover:border-accent/30">
            <CardContent className="flex flex-col items-center gap-3 py-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                <UserCircle className="h-7 w-7 text-accent" />
              </div>
              <span className="font-semibold text-foreground">
                Profile
              </span>
            </CardContent>
          </Card>
        </Link>

      </div>

    </div>
  )
}