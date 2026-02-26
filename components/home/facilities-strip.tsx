import {
  Wifi,
  Coffee,
  Droplets,
  Wind,
  Armchair,
  Clock,
} from "lucide-react"

const facilities = [
  { icon: Wifi, label: "High-Speed Wi-Fi" },
  { icon: Coffee, label: "Tea & Canteen" },
  { icon: Droplets, label: "Free Water" },
  { icon: Wind, label: "Air Conditioning" },
  { icon: Armchair, label: "Comfortable Chairs" },
  { icon: Clock, label: "Open 24/7" },
]

export function FacilitiesStrip() {
  return (
    <section className="bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {facilities.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <item.icon className="h-6 w-6 text-accent" />
              </div>
              <span className="text-xs font-medium text-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
