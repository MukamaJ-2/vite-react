"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Baby } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"

export default function LoginPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [userType, setUserType] = useState<"manager" | "babysitter">("manager")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // In a real app, you would handle login here
    // For now, we'll just redirect to the appropriate dashboard
    setTimeout(() => {
      setLoading(false)
      router.push(`/dashboard/${userType}`)
    }, 1000)
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <div className="container flex justify-center py-8">
        <Link href="/" className="flex items-center gap-2">
          <Baby className="h-6 w-6 text-primary" />
          <span>Back to Home</span>
        </Link>
      </div>
      <main className="flex flex-1 items-center justify-center">
        <Card className="mx-auto w-full max-w-md border bg-white shadow-sm">
          <CardHeader className="flex items-center justify-center pb-2">
            <Baby className="h-10 w-10 text-primary" />
            <h1 className="mt-4 text-2xl font-bold">Sign in</h1>
            <p className="text-sm text-muted-foreground">Enter your credentials to access your account</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required value={formData.password} onChange={handleChange} />
              </div>

              <div className="space-y-2">
                <Label>I am a:</Label>
                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant={userType === "manager" ? "default" : "outline"}
                    onClick={() => setUserType("manager")}
                    className="flex-1"
                  >
                    Manager
                  </Button>
                  <Button
                    type="button"
                    variant={userType === "babysitter" ? "default" : "outline"}
                    onClick={() => setUserType("babysitter")}
                    className="flex-1"
                  >
                    Babysitter
                  </Button>
                </div>
              </div>

              <div className="text-right">
                <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>

              <Button type="submit" className="w-full bg-black text-white hover:bg-black/90" disabled={loading}>
                {loading ? "Signing In..." : "Sign In"}
              </Button>

              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="text-primary hover:underline">
                  Create an account
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
