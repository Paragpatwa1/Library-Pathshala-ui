import type { Metadata } from "next"
import { MapPin, Phone, User } from "lucide-react"
import { ContactForm } from "@/components/contact/contact-form"

export const metadata: Metadata = {
  title: "Contact - Pathshala Library",
  description: "Get in touch with Pathshala Library, Vidisha.",
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 text-center lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-3xl font-extrabold text-primary-foreground md:text-4xl lg:text-5xl font-[family-name:var(--font-poppins)]">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/70">
            Have questions? We would love to hear from you.
          </p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
                Get In Touch
              </h2>
              <div className="mt-6 flex flex-col gap-5">
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Address</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Bijapi Karyale Hospital Road, Vidisha
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <User className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Contact Person</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Rupesh Chouksey
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      9876543210
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-6 overflow-hidden rounded-xl border border-border">
                <iframe
                  title="Pathshala Library Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.8!2d77.81!3d23.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMxJzEyLjAiTiA3N8KwNDgnMzYuMCJF!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
