import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function MentorSection() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/mentor.jpg"
              alt="Shilpi Sahu Mam - Academic Mentor"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl font-[family-name:var(--font-poppins)]">
              Meet Your Mentor
            </h2>
            <h3 className="mt-2 text-xl font-semibold text-accent">
              Shilpi Sahu Mam
            </h3>
            <p className="mt-1 text-sm font-medium text-muted-foreground">
              Academic Mentor
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              With years of experience guiding students through competitive
              exams, Shilpi Sahu Mam provides personalized mentorship and
              academic guidance. Her dedication to student success makes
              Pathshala Library more than just a study space.
            </p>
            <Button
              asChild
              className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
