import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import {
  CheckCircle2,
  BookOpen,
  Target,
  Eye,
} from "lucide-react"

export const metadata: Metadata = {
  title: "About - Pathshala Library",
  description: "Learn about Pathshala Library, our mission, vision, and facilities.",
}

const facilities = [
  "High-Speed Wi-Fi",
  "Tea & Canteen",
  "Free Water",
  "Comfortable Chairs",
  "Mentor Guidance",
  "Competition & General Study Books",
  "AC Environment",
  "Private Cabins Available",
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-primary py-16 lg:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/library-interior.jpg"
            alt="Pathshala Library"
            fill
            className="object-cover opacity-15"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
        <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h1 className="text-3xl font-extrabold text-primary-foreground md:text-4xl lg:text-5xl font-[family-name:var(--font-poppins)]">
            About Pathshala Library
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/70">
            Your trusted 24-hour study companion in Vidisha
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl font-[family-name:var(--font-poppins)]">
                A Place Built for Focused Learning
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Pathshala Library is a modern, fully-equipped silent study space
                located in Vidisha. We provide an ideal environment for
                students preparing for competitive exams, board exams, and
                professional certifications. With comfortable seating, reliable
                internet, and a peaceful atmosphere, we help students
                achieve their academic goals.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Founded with the vision of making quality study infrastructure
                accessible to every student, Pathshala Library has quickly
                become the go-to study destination for serious learners in the
                region.
              </p>
            </div>
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/library-interior.jpg"
                alt="Pathshala Library study area"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
                Our Mission
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To provide a distraction-free, comfortable, and well-equipped
                study environment that empowers students to focus on their
                academic pursuits. We aim to make quality study infrastructure
                affordable and accessible to all learners in Vidisha and beyond.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <Eye className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
                Our Vision
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To become the leading study hub in Madhya Pradesh, recognized
                for fostering academic excellence. We envision a network of
                modern libraries that transforms how students prepare, learn,
                and succeed in their careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities List */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl font-[family-name:var(--font-poppins)]">
            What We Offer
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm font-medium text-foreground">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/mentor.jpg"
                alt="Shilpi Sahu Mam"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm text-accent font-semibold">
                <BookOpen className="h-4 w-4" />
                Meet Your Mentor
              </div>
              <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl font-[family-name:var(--font-poppins)]">
                Shilpi Sahu Mam
              </h2>
              <p className="mt-1 font-medium text-muted-foreground">
                Academic Mentor & Founder
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                With extensive experience in academic mentoring and student
                guidance, Shilpi Sahu Mam brings a passion for education and
                dedication to student success. Under her leadership, Pathshala
                Library provides not just a physical space, but a complete
                academic support system for students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-center">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl font-[family-name:var(--font-poppins)]">
            Ready to Start Your Journey?
          </h2>
          <p className="mt-3 text-primary-foreground/70">
            Book your seat today and join hundreds of successful students.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90 px-8 text-base font-semibold"
          >
            <Link href="/seat-plans">Book Your Seat</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
