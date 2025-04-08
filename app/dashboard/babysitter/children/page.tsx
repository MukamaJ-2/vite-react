import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function BabysitterChildrenPage() {
  // Mock data for children
  const children = [
    { id: 1, name: "Emma Thompson", age: 3, allergies: "None", specialNeeds: "None", schedule: "9:00 AM - 4:00 PM" },
    { id: 2, name: "Noah Johnson", age: 4, allergies: "Peanuts", specialNeeds: "None", schedule: "8:30 AM - 3:30 PM" },
    { id: 3, name: "Olivia Davis", age: 2, allergies: "None", specialNeeds: "None", schedule: "9:00 AM - 5:00 PM" },
    { id: 4, name: "Liam Wilson", age: 5, allergies: "Dairy", specialNeeds: "ADHD", schedule: "8:00 AM - 4:00 PM" },
    { id: 5, name: "Ava Martinez", age: 3, allergies: "None", specialNeeds: "None", schedule: "9:30 AM - 3:30 PM" },
    { id: 6, name: "Lucas Brown", age: 4, allergies: "None", specialNeeds: "None", schedule: "8:30 AM - 4:30 PM" },
  ]

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Children</h1>
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search children..." className="pl-8" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {children.map((child) => (
          <Card key={child.id}>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{child.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Age:</span>
                  <span>{child.age} years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Allergies:</span>
                  <span>{child.allergies}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Special Needs:</span>
                  <span>{child.specialNeeds}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Schedule:</span>
                  <span>{child.schedule}</span>
                </div>
                <Button variant="outline" className="mt-2 w-full">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
