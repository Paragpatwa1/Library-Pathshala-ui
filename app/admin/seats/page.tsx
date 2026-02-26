"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
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
import { Switch } from "@/components/ui/switch"
import { Plus, Pencil, Trash2, Search } from "lucide-react"

const initialSeats = [
  { id: 1, name: "Seat A1", category: "Common", floor: "Ground", date: "01 Jan 2026", capacity: 1, status: true },
  { id: 2, name: "Seat A2", category: "Common", floor: "Ground", date: "01 Jan 2026", capacity: 1, status: true },
  { id: 3, name: "Seat B1", category: "Reserved", floor: "First", date: "15 Jan 2026", capacity: 1, status: true },
  { id: 4, name: "Seat B2", category: "Reserved", floor: "First", date: "15 Jan 2026", capacity: 1, status: false },
  { id: 5, name: "Cabin C1", category: "Cabin", floor: "Second", date: "01 Feb 2026", capacity: 1, status: true },
  { id: 6, name: "Cabin C2", category: "Cabin", floor: "Second", date: "01 Feb 2026", capacity: 1, status: true },
]

export default function SeatManagementPage() {
  const [filter, setFilter] = useState("all")
  const [search, setSearch] = useState("")
  const [seats, setSeats] = useState(initialSeats)

  const filtered = seats.filter((s) => {
    const matchesFilter = filter === "all" || s.category === filter
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase())
    return matchesFilter && matchesSearch
  })

  function toggleStatus(id: number) {
    setSeats((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: !s.status } : s))
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
          Seat Management
        </h1>
        <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
          <Plus className="mr-2 h-4 w-4" />
          Add Seat
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle className="text-lg">All Seats</CardTitle>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search seats..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9 w-48"
                />
              </div>
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-36">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="Common">Common</SelectItem>
                  <SelectItem value="Reserved">Reserved</SelectItem>
                  <SelectItem value="Cabin">Cabin</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Floor</TableHead>
                <TableHead>Date Added</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((seat) => (
                <TableRow key={seat.id}>
                  <TableCell className="font-medium">{seat.name}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={
                        seat.category === "Cabin"
                          ? "bg-accent/10 text-accent border-accent/20"
                          : seat.category === "Reserved"
                          ? "bg-primary/10 text-primary border-primary/20"
                          : ""
                      }
                    >
                      {seat.category}
                    </Badge>
                  </TableCell>
                  <TableCell>{seat.floor}</TableCell>
                  <TableCell>{seat.date}</TableCell>
                  <TableCell>
                    <Switch
                      checked={seat.status}
                      onCheckedChange={() => toggleStatus(seat.id)}
                    />
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button size="sm" variant="outline" className="gap-1">
                        <Pencil className="h-3 w-3" />
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="gap-1 border-destructive/30 text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="h-3 w-3" />
                        Delete
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
