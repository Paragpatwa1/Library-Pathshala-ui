"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
Table,
TableBody,
TableCell,
TableHead,
TableHeader,
TableRow,
} from "@/components/ui/table"

export default function MyBookingsPage() {

const [bookings,setBookings] = useState<any[]>([])
const [loading,setLoading] = useState(true)

useEffect(()=>{

async function loadBookings(){

try{

const token = localStorage.getItem("token")

if(!token){
setLoading(false)
return
}

const res = await fetch(
`${process.env.NEXT_PUBLIC_API_URL}/booking/my`,
{
headers:{
Authorization:`Bearer ${token}`
}
}
)

const data = await res.json()

if(Array.isArray(data)){
setBookings(data)
}else{
setBookings([])
}

}catch(err){

console.error("Booking fetch error",err)
setBookings([])

}

setLoading(false)

}

loadBookings()

},[])

return (

<div className="flex flex-col gap-6">

<h1 className="text-2xl font-bold">
My Bookings
</h1>

<Card>

<CardHeader>
<CardTitle>
Booking History
</CardTitle>
</CardHeader>

<CardContent>

<Table>

<TableHeader>

<TableRow>
<TableHead>Seat</TableHead>
<TableHead>Start</TableHead>
<TableHead>End</TableHead>
<TableHead>Payment</TableHead>
</TableRow>

</TableHeader>

<TableBody>

{loading && (

<TableRow>
<TableCell colSpan={4} className="text-center py-10">
Loading...
</TableCell>
</TableRow>

)}

{!loading && bookings.length === 0 && (

<TableRow>
<TableCell colSpan={4} className="text-center py-10 text-muted-foreground">
No bookings yet
</TableCell>
</TableRow>

)}

{bookings.map((b:any)=>(

<TableRow key={b.id}>

<TableCell>
{b.seat?.category} #{b.seat?.seatNumber}
</TableCell>

<TableCell>
{b.startDate
? new Date(b.startDate).toLocaleDateString()
: "-"}
</TableCell>

<TableCell>
{b.endDate
? new Date(b.endDate).toLocaleDateString()
: "-"}
</TableCell>

<TableCell>

<Badge
className={
b.paymentStatus === "CONFIRMED"
? "bg-green-100 text-green-700"
: "bg-yellow-100 text-yellow-700"
}
>

{b.paymentStatus}

</Badge>

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