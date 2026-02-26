import type { Metadata } from "next"
import { RegisterForm } from "@/components/auth/RegisterForm"

export const metadata: Metadata = {
  title: "Register - Pathshala Library",
  description: "Create your Pathshala Library account.",
}

export default function RegisterPage() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-secondary py-12">
      <div className="w-full max-w-md px-4">
        <RegisterForm />
      </div>
    </section>
  )
}
