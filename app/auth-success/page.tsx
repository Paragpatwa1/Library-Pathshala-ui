"use client";

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function AuthSuccessContent() {
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);
      router.push("/dashboard");
    }
  }, [params, router]);

  return <p>Logging in...</p>;
}

export default function AuthSuccess() {
  return (
    <Suspense fallback={<p>Logging in...</p>}>
      <AuthSuccessContent />
    </Suspense>
  );
}