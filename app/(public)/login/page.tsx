import type { Metadata } from "next"
import { LoginForm } from "@/components/auth/login-form"

export const metadata: Metadata = {
  title: "Login - Pathshala Library",
  description: "Login to your Pathshala Library account.",
}

export default function LoginPage() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-secondary py-12">
      <div className="w-full max-w-md px-4">
        <LoginForm />
      </div>
    </section>
  )
}
