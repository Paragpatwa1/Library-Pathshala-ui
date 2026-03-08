"use client"

import { useEffect, useState } from "react"
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

export default function MyBookingsPage() {

  const [bookings,setBookings] = useState<any[]>([])

 useEffect(()=>{

const token = localStorage.getItem("token")

fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking/my-bookings`,{
headers:{
Authorization:`Bearer ${token}`
}
})
.then(res=>res.json())
.then(data=>setBookings(data))

},[])

  return (
    <div className="flex flex-col gap-6">

      <h1 className="text-2xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
        My Bookings
      </h1>

      <Card>

        <CardHeader>
          <CardTitle className="text-lg">
            Booking History
          </CardTitle>
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

              {bookings.map((booking)=>{

                const status =
                  booking.paymentStatus === "CONFIRMED"
                    ? "Active"
                    : "Pending"

                return (

                  <TableRow key={booking.id}>

                    <TableCell className="font-medium">
                      {booking.seat?.category} Seat
                    </TableCell>

                    <TableCell>
                      {new Date(booking.startDate).toLocaleDateString()}
                    </TableCell>

                    <TableCell>
                      {new Date(booking.endDate).toLocaleDateString()}
                    </TableCell>

                    <TableCell>

                      <Badge
                        className={
                          booking.paymentStatus === "CONFIRMED"
                            ? "bg-accent/10 text-accent border-accent/20"
                            : "bg-destructive/10 text-destructive border-destructive/20"
                        }
                      >
                        {booking.paymentStatus === "CONFIRMED" ? "Paid" : "Pending"}
                      </Badge>

                    </TableCell>

                    <TableCell>

                      <Badge
                        className={
                          status === "Active"
                            ? "bg-accent/10 text-accent border-accent/20"
                            : "bg-muted text-muted-foreground"
                        }
                      >
                        {status}
                      </Badge>

                    </TableCell>

                    <TableCell className="text-right">

                      <div className="flex items-center justify-end gap-2">

                        {status === "Active" && (

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

                )

              })}

            </TableBody>

          </Table>

        </CardContent>

      </Card>

    </div>
  )
}