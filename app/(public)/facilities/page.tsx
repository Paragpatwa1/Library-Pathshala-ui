import type { Metadata } from "next"
import {
  Wifi,
  Coffee,
  Droplets,
  Wind,
  Armchair,
  Clock,
  DoorOpen,
  LayoutGrid,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Facilities - Pathshala Library",
  description: "Explore the world-class facilities at Pathshala Library.",
}

const facilities = [
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description:
      "Stay connected with our blazing fast internet. Perfect for online research, video lectures, and downloading study material without any buffering.",
  },
  {
    icon: Coffee,
    title: "Tea & Canteen",
    description:
      "Fuel your study sessions with refreshments from our in-house canteen. Fresh tea, coffee, and snacks available throughout the day.",
  },
  {
    icon: Droplets,
    title: "Free Water",
    description:
      "Pure RO drinking water available 24/7 at no extra cost. Stay hydrated and focused during long study hours.",
  },
  {
    icon: Wind,
    title: "AC Environment",
    description:
      "Study in comfort with centrally air-conditioned spaces maintained at optimal temperature year-round for maximum concentration.",
  },
  {
    icon: Armchair,
    title: "Comfortable Chairs",
    description:
      "Ergonomic seating designed for extended study sessions. Our chairs provide proper back support to keep you comfortable for hours.",
  },
  {
    icon: LayoutGrid,
    title: "Separate Desk",
    description:
      "Each student gets their own spacious desk with adequate space for books, laptop, and writing material. No sharing, no distractions.",
  },
  {
    icon: DoorOpen,
    title: "Private Cabins",
    description:
      "Premium enclosed cabins for students who prefer complete privacy. Ideal for video calls, group discussions, or focused solo study.",
  },
  {
    icon: Clock,
    title: "24/7 Open",
    description:
      "Study anytime, day or night. Our library operates round the clock so you can maintain your own schedule without any restrictions.",
  },
]

export default function FacilitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 text-center lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-3xl font-extrabold text-primary-foreground md:text-4xl lg:text-5xl font-[family-name:var(--font-poppins)]">
            Our Facilities
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/70">
            Everything you need for an exceptional study experience, all under one roof.
          </p>
        </div>
      </section>

      {/* Facility Cards */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-accent/30"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 transition-colors duration-300 group-hover:bg-accent">
                  <item.icon className="h-7 w-7 text-accent transition-colors duration-300 group-hover:text-accent-foreground" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
