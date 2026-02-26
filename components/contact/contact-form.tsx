"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="mt-6 rounded-xl border border-accent/30 bg-accent/5 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
          <Send className="h-6 w-6 text-accent" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-foreground">
          Message Sent!
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thank you for reaching out. We will get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" placeholder="Enter your name" required />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" type="email" placeholder="you@example.com" required />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Write your message here..."
          rows={5}
          required
        />
      </div>
      <Button
        type="submit"
        className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
      >
        <Send className="mr-2 h-4 w-4" />
        Send Message
      </Button>
    </form>
  )
}
