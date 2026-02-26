import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Star } from "lucide-react"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Seat Plans - Pathshala Library",
  description: "Choose from Common, Reserved, or Cabin seats at Pathshala Library.",
}

const plans = [
  {
    name: "Common Seat",
    price: 800,
    recommended: false,
    description:
      "Affordable open-area seating with all basic amenities for focused study.",
    features: [
      "Shared study area",
      "High-speed WiFi",
      "AC environment",
      "Free water",
      "24/7 access",
      "Book access",
    ],
  },
  {
    name: "Reserved Seat",
    price: 1200,
    recommended: true,
    description:
      "Your own dedicated desk reserved exclusively for you, every single day.",
    features: [
      "Personal reserved desk",
      "High-speed WiFi",
      "AC environment",
      "Free water & tea",
      "24/7 access",
      "Locker facility",
      "Book access",
      "Priority support",
    ],
  },
  {
    name: "Cabin Seat",
    price: 2000,
    recommended: false,
    description:
      "Premium private cabin for complete privacy and distraction-free study.",
    features: [
      "Private enclosed cabin",
      "Personal power outlet",
      "High-speed WiFi",
      "AC environment",
      "Free water & tea",
      "24/7 access",
      "Locker facility",
      "Book access",
      "Mentor guidance",
      "Priority support",
    ],
  },
]

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 text-center lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-3xl font-extrabold text-primary-foreground md:text-4xl lg:text-5xl font-[family-name:var(--font-poppins)]">
            Choose Your Seat Plan
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/70">
            Flexible plans designed for every type of student. All plans include
            core amenities.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  "relative flex flex-col overflow-hidden rounded-2xl border shadow-sm transition-all hover:shadow-xl",
                  plan.recommended
                    ? "border-accent shadow-lg scale-[1.02]"
                    : "border-border bg-card"
                )}
              >
                {plan.recommended && (
                  <div className="flex items-center justify-center gap-1 bg-accent py-2 text-sm font-semibold text-accent-foreground">
                    <Star className="h-4 w-4" />
                    Recommended
                  </div>
                )}
                <div className="relative h-44 w-full">
                  <Image
                    src="/images/library-interior.jpg"
                    alt={plan.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-foreground">
                      {"₹"}{plan.price}
                    </span>
                    <span className="text-sm text-muted-foreground">/month</span>
                  </div>
                  <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={cn(
                      "mt-6 w-full font-semibold",
                      plan.recommended
                        ? "bg-accent text-accent-foreground hover:bg-accent/90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    )}
                  >
                    <Link href="/register">Book Now</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Badge className="bg-accent/10 text-accent border-accent/20 text-sm px-4 py-1.5">
              20% OFF for new members on all plans!
            </Badge>
          </div>
        </div>
      </section>
    </>
  )
}
