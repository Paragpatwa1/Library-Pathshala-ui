"use client"

import { useState } from "react"
import Link from "next/link"
import { BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { register, googleLogin } from "@/lib/auth"

export function RegisterForm() {

const [errors, setErrors] = useState<Record<string, string>>({})
const [loading, setLoading] = useState(false)

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

e.preventDefault()

const form = new FormData(e.currentTarget)

const name = (form.get("name") as string)?.trim()
const email = (form.get("email") as string)?.trim()
const password = (form.get("password") as string) || ""
const confirmPassword = (form.get("confirmPassword") as string) || ""

const newErrors: Record<string, string> = {}

if (!name) newErrors.name = "Name is required"

if (!email) newErrors.email = "Email is required"

if (password.length < 6)
  newErrors.password = "Password must be at least 6 characters"

if (confirmPassword.length < 6)
  newErrors.confirmPassword =
    "Confirm password must be at least 6 characters"

if (password !== confirmPassword)
  newErrors.confirmPassword = "Passwords do not match"

setErrors(newErrors)

if (Object.keys(newErrors).length > 0) return

try {

  setLoading(true)

 await register(name, email, password, confirmPassword)

  alert("Account created successfully!")

  window.location.href = "/login"

} catch (error:any) {

  console.log(error.response?.data)

  alert(error.response?.data?.message || "Registration failed")

} finally {

  setLoading(false)

}

}

return (

<div className="rounded-2xl border border-border bg-card p-8 shadow-lg">

  <div className="mb-6 text-center">

    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
      <BookOpen className="h-6 w-6 text-accent" />
    </div>

    <h1 className="mt-4 text-2xl font-bold text-foreground">
      Create Your Account
    </h1>

    <p className="mt-1 text-sm text-muted-foreground">
      Join Pathshala Library today
    </p>

  </div>

  <form onSubmit={handleSubmit} className="flex flex-col gap-4">

    <div className="flex flex-col gap-1.5">
      <Label htmlFor="name">Full Name</Label>
      <Input id="name" name="name" placeholder="Enter your name" />
      {errors.name && (
        <p className="text-xs text-red-500">{errors.name}</p>
      )}
    </div>

    <div className="flex flex-col gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="you@example.com"
      />
      {errors.email && (
        <p className="text-xs text-red-500">{errors.email}</p>
      )}
    </div>

    <div className="flex flex-col gap-1.5">
      <Label htmlFor="password">Password</Label>
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="Minimum 6 characters"
      />
      {errors.password && (
        <p className="text-xs text-red-500">{errors.password}</p>
      )}
    </div>

    <div className="flex flex-col gap-1.5">
      <Label htmlFor="confirmPassword">Confirm Password</Label>
      <Input
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        placeholder="Confirm password"
      />
      {errors.confirmPassword && (
        <p className="text-xs text-red-500">{errors.confirmPassword}</p>
      )}
    </div>

    <Button
      type="submit"
      disabled={loading}
      className="mt-2 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
    >
      {loading ? "Creating Account..." : "Sign Up"}
    </Button>

  </form>

  <div className="my-5 flex items-center gap-3">
    <Separator className="flex-1" />
    <span className="text-xs text-muted-foreground">or</span>
    <Separator className="flex-1" />
  </div>

  <Button
    onClick={googleLogin}
    variant="outline"
    className="w-full"
  >
    Continue with Google
  </Button>

  <p className="mt-5 text-center text-sm text-muted-foreground">
    Already have an account?{" "}
    <Link
      href="/login"
      className="font-medium text-accent hover:underline"
    >
      Log in
    </Link>
  </p>

</div>

)
}