"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Baby } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"

export default function RegisterPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [userType, setUserType] = useState<"manager" | "babysitter">("manager")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords do not match",
        description: "Please ensure both passwords match.",
        variant: "destructive",
      })
      setLoading(false)
      return
    }

    // In a real app, you would handle registration here
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
            <h1 className="mt-4 text-2xl font-bold">Create an account</h1>
            <p className="text-sm text-muted-foreground">Enter your information to get started</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label>I want to register as a:</Label>
                <RadioGroup
                  defaultValue="manager"
                  className="flex gap-4"
                  onValueChange={(value) => setUserType(value as "manager" | "babysitter")}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="manager" id="manager" />
                    <Label htmlFor="manager">Manager</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="babysitter" id="babysitter" />
                    <Label htmlFor="babysitter">Babysitter</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" required value={formData.firstName} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" required value={formData.lastName} onChange={handleChange} />
                </div>
              </div>

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
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>

              <Button type="submit" className="w-full bg-black text-white hover:bg-black/90" disabled={loading}>
                {loading ? "Creating Account..." : "Create Account"}
              </Button>

              <div className="text-center text-sm">
                Already have an account?{" "}
                <Link href="/login" className="text-primary hover:underline">
                  Sign in
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
