"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Armchair,
  IndianRupee,
  CalendarCheck,
} from "lucide-react"
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const stats = [
  {
    label: "Total Students",
    value: "236",
    icon: Users,
    change: "+12",
  },
  {
    label: "Total Seats",
    value: "150",
    icon: Armchair,
    change: "Available",
  },
  {
    label: "Total Revenue",
    value: "₹3,04,500",
    icon: IndianRupee,
    change: "+18%",
  },
  {
    label: "Active Bookings",
    value: "142",
    icon: CalendarCheck,
    change: "+8",
  },
]

const monthlyRevenue = [
  { month: "Jan", revenue: 28000 },
  { month: "Feb", revenue: 32000 },
  { month: "Mar", revenue: 25000 },
  { month: "Apr", revenue: 38000 },
  { month: "May", revenue: 42000 },
  { month: "Jun", revenue: 35000 },
  { month: "Jul", revenue: 48000 },
  { month: "Aug", revenue: 52000 },
  { month: "Sep", revenue: 45000 },
  { month: "Oct", revenue: 39000 },
  { month: "Nov", revenue: 55000 },
  { month: "Dec", revenue: 60000 },
]

const recentBookings = [
  { name: "Amit Kumar", seat: "Reserved Seat", amount: "₹1,200", status: "Active" },
  { name: "Priya Singh", seat: "Cabin Seat", amount: "₹2,000", status: "Active" },
  { name: "Rahul Sharma", seat: "Common Seat", amount: "₹800", status: "Pending" },
]

export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
        Admin Dashboard
      </h1>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="flex items-center gap-4 pt-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                <stat.icon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <p className="text-xl font-bold text-foreground">{stat.value}</p>
                <Badge variant="secondary" className="mt-1 text-xs">
                  {stat.change}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Revenue Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                revenue: {
                  label: "Revenue",
                  color: "#d97706",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyRevenue}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="revenue" fill="#d97706" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Recent Bookings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recent Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              {recentBookings.map((booking, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-lg border border-border p-3"
                >
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {booking.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{booking.seat}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-foreground">
                      {booking.amount}
                    </p>
                    <Badge
                      className={
                        booking.status === "Active"
                          ? "bg-accent/10 text-accent border-accent/20 text-xs"
                          : "bg-destructive/10 text-destructive border-destructive/20 text-xs"
                      }
                    >
                      {booking.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
