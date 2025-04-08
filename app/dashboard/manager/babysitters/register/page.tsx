"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"

export default function RegisterBabysitterPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nin: "",
    dob: "",
    age: "",
    nextOfKinName: "",
    nextOfKinRelationship: "",
    nextOfKinPhone: "",
    address: "",
    qualifications: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target

    if (id === "dob") {
      // Calculate age based on date of birth
      const birthDate = new Date(value)
      const today = new Date()
      let age = today.getFullYear() - birthDate.getFullYear()
      const monthDiff = today.getMonth() - birthDate.getMonth()

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }

      setFormData((prev) => ({ ...prev, dob: value, age: age.toString() }))
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Validate age (21-35 years)
    const age = Number.parseInt(formData.age)
    if (isNaN(age) || age < 21 || age > 35) {
      toast({
        title: "Invalid Age",
        description: "Babysitters must be between 21 and 35 years old.",
        variant: "destructive",
      })
      setLoading(false)
      return
    }

    // Validate NIN format (example validation)
    if (!formData.nin || formData.nin.length < 10) {
      toast({
        title: "Invalid NIN",
        description: "Please enter a valid National Identification Number.",
        variant: "destructive",
      })
      setLoading(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      toast({
        title: "Babysitter Registered",
        description: "The babysitter has been successfully registered.",
      })
      router.push("/dashboard/manager/babysitters")
    }, 1000)
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center gap-2">
        <Link href="/dashboard/manager/babysitters">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Register New Babysitter</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Babysitter Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" required value={formData.firstName} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" required value={formData.lastName} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email (Optional)</Label>
                <Input id="email" type="email" value={formData.email} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" required value={formData.phone} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nin">National Identification Number (NIN)</Label>
                <Input id="nin" required value={formData.nin} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth</Label>
                <Input id="dob" type="date" required value={formData.dob} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">Age (21-35 years required)</Label>
                <Input id="age" type="number" required min="21" max="35" value={formData.age} readOnly />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Textarea id="address" required value={formData.address} onChange={handleChange} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="qualifications">Qualifications</Label>
              <Textarea
                id="qualifications"
                placeholder="Enter qualifications, certifications, etc."
                className="min-h-[100px]"
                value={formData.qualifications}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Next of Kin Information</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="nextOfKinName">Full Name</Label>
                  <Input id="nextOfKinName" required value={formData.nextOfKinName} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nextOfKinRelationship">Relationship</Label>
                  <Input
                    id="nextOfKinRelationship"
                    required
                    value={formData.nextOfKinRelationship}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nextOfKinPhone">Phone Number</Label>
                  <Input
                    id="nextOfKinPhone"
                    type="tel"
                    required
                    value={formData.nextOfKinPhone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button type="submit" disabled={loading}>
                {loading ? "Registering..." : "Register Babysitter"}
              </Button>
              <Link href="/dashboard/manager/babysitters">
                <Button variant="outline">Cancel</Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
