"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/components/ui/use-toast"

export default function RegisterChildPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    age: "",
    gender: "",
    group: "",
    allergies: "",
    medicalInfo: "",
    specialNeeds: "",
    stayDuration: "half-day", // half-day or full-day
    parentName: "",
    parentRelationship: "",
    parentEmail: "",
    parentPhone: "",
    emergencyName: "",
    emergencyRelationship: "",
    emergencyPhone: "",
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

  const handleSelectChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      toast({
        title: "Child Registered",
        description: "The child has been successfully registered.",
      })
      router.push("/dashboard/manager/children")
    }, 1000)
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center gap-2">
        <Link href="/dashboard/manager/children">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Register New Child</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Child Information</CardTitle>
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
                <Label htmlFor="dob">Date of Birth</Label>
                <Input id="dob" type="date" required value={formData.dob} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input id="age" type="text" required value={formData.age} readOnly />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select onValueChange={(value) => handleSelectChange("gender", value)}>
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="group">Group</Label>
                <Select onValueChange={(value) => handleSelectChange("group", value)}>
                  <SelectTrigger id="group">
                    <SelectValue placeholder="Select group" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="infants">Infants (0-1)</SelectItem>
                    <SelectItem value="toddlers">Toddlers (1-3)</SelectItem>
                    <SelectItem value="preschool">Preschool (3-5)</SelectItem>
                    <SelectItem value="kindergarten">Kindergarten (5-6)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="allergies">Allergies</Label>
                <Input id="allergies" placeholder="None" value={formData.allergies} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label>Duration of Stay</Label>
                <RadioGroup
                  defaultValue="half-day"
                  className="flex gap-4"
                  onValueChange={(value) => handleSelectChange("stayDuration", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="half-day" id="half-day" />
                    <Label htmlFor="half-day">Half-day (2,000K)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="full-day" id="full-day" />
                    <Label htmlFor="full-day">Full-day (5,000K)</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialNeeds">Special Needs</Label>
              <Textarea
                id="specialNeeds"
                placeholder="Enter any special needs or requirements..."
                className="min-h-[100px]"
                value={formData.specialNeeds}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="medicalInfo">Medical Information</Label>
              <Textarea
                id="medicalInfo"
                placeholder="Enter any relevant medical information..."
                className="min-h-[100px]"
                value={formData.medicalInfo}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Parent/Guardian Information</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="parentName">Full Name</Label>
                  <Input id="parentName" required value={formData.parentName} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="parentRelationship">Relationship</Label>
                  <Select onValueChange={(value) => handleSelectChange("parentRelationship", value)}>
                    <SelectTrigger id="parentRelationship">
                      <SelectValue placeholder="Select relationship" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mother">Mother</SelectItem>
                      <SelectItem value="father">Father</SelectItem>
                      <SelectItem value="guardian">Legal Guardian</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="parentEmail">Email</Label>
                  <Input id="parentEmail" type="email" required value={formData.parentEmail} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="parentPhone">Phone Number</Label>
                  <Input id="parentPhone" type="tel" required value={formData.parentPhone} onChange={handleChange} />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Emergency Contact</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="emergencyName">Full Name</Label>
                  <Input id="emergencyName" required value={formData.emergencyName} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emergencyRelationship">Relationship</Label>
                  <Input
                    id="emergencyRelationship"
                    required
                    value={formData.emergencyRelationship}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emergencyPhone">Phone Number</Label>
                  <Input
                    id="emergencyPhone"
                    type="tel"
                    required
                    value={formData.emergencyPhone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button type="submit" disabled={loading}>
                {loading ? "Registering..." : "Register Child"}
              </Button>
              <Link href="/dashboard/manager/children">
                <Button variant="outline">Cancel</Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
