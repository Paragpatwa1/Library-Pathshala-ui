import { Suspense } from "react"
import SelectSeatContent from "./SelectSeatContent"

export default function SelectSeatPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center py-12 text-muted-foreground">Loading seat selection...</div>}>
      <SelectSeatContent />
    </Suspense>
  )
}
