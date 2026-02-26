import { Suspense } from "react"
import BookingSuccessContent from "./BookingSuccessContent"

export default function BookingSuccessPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center py-12 text-muted-foreground">Loading...</div>}>
      <BookingSuccessContent />
    </Suspense>
  )
}
