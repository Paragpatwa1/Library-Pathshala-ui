import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <Image
          src="/images/library-interior.jpg"
          alt="Pathshala Library interior"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/95" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 text-center lg:px-8 lg:py-32">
        <p className="mb-3 text-lg font-medium text-primary-foreground/80">
          Welcome to Pathshala Library
        </p>
        <h1 className="mx-auto max-w-3xl text-balance text-3xl font-extrabold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-poppins)]">
          24 Hour Silent Study Space{" "}
          <span className="text-accent">in Vidisha</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-primary-foreground/70">
          Comfortable, peaceful, and fully equipped study environment for
          serious learners.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 text-base font-semibold shadow-lg"
          >
            <Link href="/seat-plans">Book Your Seat</Link>
          </Button>
          <Badge className="bg-accent/20 text-accent border-accent/30 px-4 py-1.5 text-sm font-semibold">
            20% OFF for New Members
          </Badge>
        </div>
      </div>
      {/* Wave SVG */}
      <div className="relative -mb-1">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 60C240 0 480 120 720 60C960 0 1200 120 1440 60V120H0V60Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  )
}
