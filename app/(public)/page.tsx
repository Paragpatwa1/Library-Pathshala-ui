import { HeroSection } from "@/components/home/hero-section"
import { FacilitiesStrip } from "@/components/home/facilities-strip"
import { BooksSection } from "@/components/home/books-section"
import { MentorSection } from "@/components/home/mentor-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FacilitiesStrip />
      <BooksSection />
      <MentorSection />
    </>
  )
}
