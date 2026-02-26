"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle2, XCircle, Eye } from "lucide-react"
import { useState } from "react"

const bookings = [
  { id: 1, type: "Seat A1", user: "Amit Kumar", amount: "₹960", startDate: "01 Mar 2026", endDate: "31 Mar 2026", status: "Active", payment: "Paid" },
  { id: 2, type: "Seat B1", user: "Priya Singh", amount: "₹1,600", startDate: "01 Mar 2026", endDate: "30 Apr 2026", status: "Active", payment: "Paid" },
  { id: 3, type: "Cabin C1", user: "Rahul Sharma", amount: "₹1,920", startDate: "15 Mar 2026", endDate: "15 Apr 2026", status: "Pending", payment: "Pending" },
  { id: 4, type: "Seat A2", user: "Neha Patel", amount: "₹640", startDate: "01 Feb 2026", endDate: "28 Feb 2026", status: "Completed", payment: "Paid" },
  { id: 5, type: "Cabin C2", user: "Vikram Joshi", amount: "₹3,200", startDate: "01 Mar 2026", endDate: "31 May 2026", status: "Active", payment: "Paid" },
]

export default function ManageBookingsPage() {
  const [statusFilter, setStatusFilter] = useState("all")

  const filtered = bookings.filter(
    (b) => statusFilter === "all" || b.status === statusFilter
  )

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
        Manage Bookings
      </h1>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle className="text-lg">All Bookings</CardTitle>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-36">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Seat</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">{booking.type}</TableCell>
                  <TableCell>{booking.user}</TableCell>
                  <TableCell>{booking.amount}</TableCell>
                  <TableCell>{booking.startDate}</TableCell>
                  <TableCell>{booking.endDate}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        booking.payment === "Paid"
                          ? "bg-accent/10 text-accent border-accent/20"
                          : "bg-destructive/10 text-destructive border-destructive/20"
                      }
                    >
                      {booking.payment}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        booking.status === "Active"
                          ? "bg-accent/10 text-accent border-accent/20"
                          : booking.status === "Completed"
                          ? "bg-muted text-muted-foreground"
                          : "bg-destructive/10 text-destructive border-destructive/20"
                      }
                    >
                      {booking.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">View</span>
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-accent">
                        <CheckCircle2 className="h-4 w-4" />
                        <span className="sr-only">Approve</span>
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-destructive">
                        <XCircle className="h-4 w-4" />
                        <span className="sr-only">Cancel</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
