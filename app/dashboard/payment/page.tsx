import { Suspense } from "react"
import PaymentContent from "./PaymentContent"

export default function PaymentPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center py-12 text-muted-foreground">Loading payment...</div>}>
      <PaymentContent />
    </Suspense>
  )
}
