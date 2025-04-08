import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Plus, Search } from "lucide-react"

export default function BabysittersPage() {
  // Mock data for babysitters
  const babysitters = [
    { id: 1, name: "Jane Smith", email: "jane.smith@example.com", phone: "(555) 123-4567", status: "Active" },
    { id: 2, name: "John Doe", email: "john.doe@example.com", phone: "(555) 234-5678", status: "Active" },
    { id: 3, name: "Emily Johnson", email: "emily.johnson@example.com", phone: "(555) 345-6789", status: "On Leave" },
    { id: 4, name: "Michael Brown", email: "michael.brown@example.com", phone: "(555) 456-7890", status: "Active" },
    { id: 5, name: "Sarah Wilson", email: "sarah.wilson@example.com", phone: "(555) 567-8901", status: "Active" },
    { id: 6, name: "David Lee", email: "david.lee@example.com", phone: "(555) 678-9012", status: "Inactive" },
  ]

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Babysitters</h1>
        <Link href="/dashboard/manager/babysitters/register">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Register Babysitter
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg font-medium">All Babysitters</CardTitle>
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search babysitters..." className="pl-8" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="grid grid-cols-5 border-b bg-slate-50 p-3 text-sm font-medium">
              <div>Name</div>
              <div>Email</div>
              <div>Phone</div>
              <div>Status</div>
              <div className="text-right">Actions</div>
            </div>
            <div className="divide-y">
              {babysitters.map((babysitter) => (
                <div key={babysitter.id} className="grid grid-cols-5 items-center p-3">
                  <div className="font-medium">{babysitter.name}</div>
                  <div>{babysitter.email}</div>
                  <div>{babysitter.phone}</div>
                  <div>
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                        babysitter.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : babysitter.status === "On Leave"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {babysitter.status}
                    </span>
                  </div>
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
