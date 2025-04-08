import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Plus, Search } from "lucide-react"

export default function ChildrenPage() {
  // Mock data for children
  const children = [
    { id: 1, name: "Emma Thompson", age: 3, parent: "Sarah Thompson", group: "Toddlers" },
    { id: 2, name: "Noah Johnson", age: 4, parent: "Michael Johnson", group: "Preschool" },
    { id: 3, name: "Olivia Davis", age: 2, parent: "Emily Davis", group: "Toddlers" },
    { id: 4, name: "Liam Wilson", age: 5, parent: "James Wilson", group: "Kindergarten" },
    { id: 5, name: "Ava Martinez", age: 3, parent: "Sofia Martinez", group: "Toddlers" },
    { id: 6, name: "Lucas Brown", age: 4, parent: "David Brown", group: "Preschool" },
    { id: 7, name: "Sophia Miller", age: 2, parent: "Jennifer Miller", group: "Toddlers" },
    { id: 8, name: "Mason Garcia", age: 5, parent: "Daniel Garcia", group: "Kindergarten" },
  ]

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Children</h1>
        <Link href="/dashboard/manager/children/register">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Register Child
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg font-medium">All Children</CardTitle>
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search children..." className="pl-8" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="grid grid-cols-5 border-b bg-slate-50 p-3 text-sm font-medium">
              <div>Name</div>
              <div>Age</div>
              <div>Parent/Guardian</div>
              <div>Group</div>
              <div className="text-right">Actions</div>
            </div>
            <div className="divide-y">
              {children.map((child) => (
                <div key={child.id} className="grid grid-cols-5 items-center p-3">
                  <div className="font-medium">{child.name}</div>
                  <div>{child.age} years</div>
                  <div>{child.parent}</div>
                  <div>{child.group}</div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
