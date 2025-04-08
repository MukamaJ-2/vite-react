import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-900">404</h1>
        <h2 className="mt-4 text-xl font-semibold">This page could not be found.</h2>
        <p className="mt-2 text-muted-foreground">The page you are looking for doesn't exist or has been moved.</p>
        <Link href="/" className="mt-6 inline-block">
          <Button>Return to Home</Button>
        </Link>
      </div>
    </div>
  )
}
