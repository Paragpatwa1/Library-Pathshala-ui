import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Tag } from "lucide-react"

interface PriceBreakdownProps {
  subtotal: number
  discountPercent: number
  finalAmount: number
}

export function PriceBreakdown({
  subtotal,
  discountPercent,
  finalAmount,
}: PriceBreakdownProps) {

  const discountAmount = subtotal - finalAmount

  return (
    <div className="flex flex-col gap-3">

      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Subtotal</span>
        <span className="font-medium text-foreground">
          ₹{subtotal.toLocaleString("en-IN")}
        </span>
      </div>

      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">
          Discount ({discountPercent}%)
        </span>
        <span className="font-medium text-accent">
          -₹{discountAmount.toLocaleString("en-IN")}
        </span>
      </div>

      <Separator />

      <div className="flex justify-between items-center">
        <span className="font-semibold text-foreground">Total</span>
        <span className="text-2xl font-bold text-foreground">
          ₹{finalAmount.toLocaleString("en-IN")}
        </span>
      </div>

      <Badge className="self-start bg-accent/10 text-accent border-accent/20">
        <Tag className="mr-1 h-3 w-3" />
        {discountPercent}% Discount Applied
      </Badge>

    </div>
  )
}