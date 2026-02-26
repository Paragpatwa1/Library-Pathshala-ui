import Link from "next/link"
import { BookOpen, MapPin, Phone, Facebook, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-6 w-6 text-accent" />
              <span className="text-lg font-bold font-[family-name:var(--font-poppins)]">
                Pathshala Library
              </span>
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              Comfortable, peaceful, and fully equipped 24-hour study environment in Vidisha.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-70">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/about", label: "About" },
                { href: "/facilities", label: "Facilities" },
                { href: "/seat-plans", label: "Seat Plans" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm opacity-80 transition-opacity hover:opacity-100"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-70">
              Contact
            </h3>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="opacity-80">
                  Bijapi Karyale Hospital Road, Vidisha
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <span className="opacity-80">Rupesh Chouksey | 9876543210</span>
              </div>
            </div>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-accent"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-accent"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-accent"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/20 pt-6 text-center text-xs opacity-60">
          &copy; {new Date().getFullYear()} Pathshala Library. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
