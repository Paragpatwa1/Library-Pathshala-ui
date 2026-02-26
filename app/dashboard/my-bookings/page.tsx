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
import { RefreshCw, XCircle } from "lucide-react"

const bookings = [
  {
    id: 1,
    seat: "Common Seat",
    startDate: "01 Jan 2026",
    endDate: "31 Jan 2026",
    payment: "Paid",
    status: "Completed",
  },
  {
    id: 2,
    seat: "Reserved Seat",
    startDate: "01 Feb 2026",
    endDate: "28 Feb 2026",
    payment: "Paid",
    status: "Active",
  },
  {
    id: 3,
    seat: "Cabin Seat",
    startDate: "01 Mar 2026",
    endDate: "31 Mar 2026",
    payment: "Pending",
    status: "Pending",
  },
  {
    id: 4,
    seat: "Reserved Seat",
    startDate: "01 Apr 2026",
    endDate: "30 Apr 2026",
    payment: "Paid",
    status: "Active",
  },
]

export default function MyBookingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
        My Bookings
      </h1>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Booking History</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Seat</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">{booking.seat}</TableCell>
                  <TableCell>{booking.startDate}</TableCell>
                  <TableCell>{booking.endDate}</TableCell>
                  <TableCell>
                    <Badge
                      variant={booking.payment === "Paid" ? "default" : "secondary"}
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
                    <div className="flex items-center justify-end gap-2">
                      {booking.status === "Active" && (
                        <>
                          <Button size="sm" variant="outline" className="gap-1">
                            <RefreshCw className="h-3 w-3" />
                            Renew
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="gap-1 border-destructive/30 text-destructive hover:bg-destructive/10"
                          >
                            <XCircle className="h-3 w-3" />
                            Cancel
                          </Button>
                        </>
                      )}
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
