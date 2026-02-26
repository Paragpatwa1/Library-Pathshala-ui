import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const categories = [
  {
    title: "Competition Books",
    description: "Latest competitive exam preparation guides",
  },
  {
    title: "IT & Software",
    description: "Top books for software & IT aspirants",
  },
  {
    title: "General Knowledge",
    description: "Enhance your general knowledge with our collection",
  },
  {
    title: "Class 6-12 Books",
    description: "Textbooks and guides for school students",
  },
]

export function BooksSection() {
  return (
    <section className="bg-secondary py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl font-[family-name:var(--font-poppins)]">
          Books Available for All Students
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <Card
              key={cat.title}
              className="overflow-hidden border-border transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-40 w-full bg-primary/10">
                <Image
                  src="/images/library-interior.jpg"
                  alt={cat.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground">{cat.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {cat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link href="/facilities">View All Books</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
