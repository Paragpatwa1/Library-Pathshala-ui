// ──────────────────────────────────────────
// Shared TypeScript types for Pathshala Library
// ──────────────────────────────────────────

/** Seat categories offered by the library */
export type SeatCategory = "Common" | "Reserved" | "Cabin"

/** Booking lifecycle status */
export type BookingStatus = "Active" | "Pending" | "Completed" | "Cancelled"

/** Payment state */
export type PaymentStatus = "Paid" | "Pending" | "Failed"

/** Payment method identifier */
export type PaymentMethod = "upi" | "card" | "netbanking"

// ──────────── Entities ────────────

export interface User {
  id: string
  name: string
  email: string
  phone: string
  city: string
  role: "student" | "admin"
  createdAt: string
}

export interface Seat {
  id: number
  name: string
  category: SeatCategory
  floor: string
  dateAdded: string
  capacity: number
  status: boolean
}

export interface SeatPlan {
  id: string
  name: string
  price: number
  recommended: boolean
  description: string
  features: string[]
}

export interface Booking {
  id: number
  seatName: string
  seatCategory: SeatCategory
  userId: string
  userName: string
  amount: string
  startDate: string
  endDate: string
  status: BookingStatus
  payment: PaymentStatus
}

export interface ContactMessage {
  name: string
  email: string
  message: string
}

// ──────────── API helpers ────────────

export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}
