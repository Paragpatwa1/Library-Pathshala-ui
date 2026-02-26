"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  IndianRupee,
  CalendarCheck,
  Armchair,
  Download,
  TrendingUp,
} from "lucide-react"
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

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

const bookingStats = [
  { month: "Jan", common: 45, reserved: 30, cabin: 12 },
  { month: "Feb", common: 50, reserved: 35, cabin: 15 },
  { month: "Mar", common: 40, reserved: 28, cabin: 10 },
  { month: "Apr", common: 55, reserved: 38, cabin: 18 },
  { month: "May", common: 60, reserved: 42, cabin: 20 },
  { month: "Jun", common: 52, reserved: 36, cabin: 16 },
]

const occupancy = [
  { month: "Jan", rate: 72 },
  { month: "Feb", rate: 78 },
  { month: "Mar", rate: 65 },
  { month: "Apr", rate: 82 },
  { month: "May", rate: 88 },
  { month: "Jun", rate: 75 },
  { month: "Jul", rate: 90 },
  { month: "Aug", rate: 94 },
  { month: "Sep", rate: 85 },
  { month: "Oct", rate: 80 },
  { month: "Nov", rate: 92 },
  { month: "Dec", rate: 95 },
]

const summaryStats = [
  { label: "Total Revenue", value: "₹4,99,000", icon: IndianRupee, change: "+18%" },
  { label: "Total Bookings", value: "847", icon: CalendarCheck, change: "+24%" },
  { label: "Avg. Occupancy", value: "83%", icon: Armchair, change: "+5%" },
]

export default function RevenueReportPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
          Revenue Report
        </h1>
        <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
          <Download className="mr-2 h-4 w-4" />
          Download Report
        </Button>
      </div>

      {/* Summary Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        {summaryStats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="flex items-center gap-4 pt-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                <stat.icon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <p className="text-xl font-bold text-foreground">{stat.value}</p>
                <Badge variant="secondary" className="mt-1 text-xs gap-1">
                  <TrendingUp className="h-3 w-3" />
                  {stat.change}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Monthly Revenue Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Monthly Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              revenue: {
                label: "Revenue (₹)",
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

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Booking Statistics */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Booking Statistics by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                common: { label: "Common", color: "#6b7280" },
                reserved: { label: "Reserved", color: "#1e3a5f" },
                cabin: { label: "Cabin", color: "#d97706" },
              }}
              className="h-[280px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={bookingStats}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="common" fill="#6b7280" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="reserved" fill="#1e3a5f" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="cabin" fill="#d97706" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Seat Occupancy */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Seat Occupancy %</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                rate: { label: "Occupancy %", color: "#d97706" },
              }}
              className="h-[280px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={occupancy}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="rate"
                    fill="#d9770633"
                    stroke="#d97706"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
