"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Check, Clock, Download, Search, X } from "lucide-react"

export default function AttendancePage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [view, setView] = useState("daily")
  const [calendarOpen, setCalendarOpen] = useState(false)

  // Mock data for children attendance
  const childrenAttendance = [
    { id: 1, name: "Emma Thompson", checkIn: "08:45 AM", checkOut: "04:30 PM", status: "present" },
    { id: 2, name: "Noah Johnson", checkIn: "08:30 AM", checkOut: "03:45 PM", status: "present" },
    { id: 3, name: "Olivia Davis", checkIn: "09:15 AM", checkOut: "05:00 PM", status: "present" },
    { id: 4, name: "Liam Wilson", checkIn: "", checkOut: "", status: "absent" },
    { id: 5, name: "Ava Martinez", checkIn: "08:55 AM", checkOut: "04:15 PM", status: "present" },
    { id: 6, name: "Lucas Brown", checkIn: "Late - 10:30 AM", checkOut: "04:00 PM", status: "late" },
    { id: 7, name: "Sophia Miller", checkIn: "09:05 AM", checkOut: "", status: "present" },
    { id: 8, name: "Mason Garcia", checkIn: "", checkOut: "", status: "absent" },
  ]

  // Mock data for staff attendance
  const staffAttendance = [
    { id: 1, name: "Jane Smith", checkIn: "08:15 AM", checkOut: "05:30 PM", status: "present" },
    { id: 2, name: "John Doe", checkIn: "08:00 AM", checkOut: "05:00 PM", status: "present" },
    { id: 3, name: "Emily Johnson", checkIn: "", checkOut: "", status: "absent" },
    { id: 4, name: "Michael Brown", checkIn: "08:45 AM", checkOut: "05:15 PM", status: "present" },
    { id: 5, name: "Sarah Wilson", checkIn: "Late - 09:30 AM", checkOut: "05:00 PM", status: "late" },
    { id: 6, name: "David Lee", checkIn: "08:10 AM", checkOut: "05:05 PM", status: "present" },
  ]

  // Mock data for weekly attendance
  const weeklyAttendance = [
    {
      id: 1,
      name: "Emma Thompson",
      monday: "present",
      tuesday: "present",
      wednesday: "present",
      thursday: "present",
      friday: "absent",
    },
    {
      id: 2,
      name: "Noah Johnson",
      monday: "present",
      tuesday: "present",
      wednesday: "absent",
      thursday: "present",
      friday: "present",
    },
    {
      id: 3,
      name: "Olivia Davis",
      monday: "present",
      tuesday: "present",
      wednesday: "present",
      thursday: "present",
      friday: "present",
    },
    {
      id: 4,
      name: "Liam Wilson",
      monday: "absent",
      tuesday: "present",
      wednesday: "present",
      thursday: "absent",
      friday: "present",
    },
    {
      id: 5,
      name: "Ava Martinez",
      monday: "present",
      tuesday: "present",
      wednesday: "present",
      thursday: "present",
      friday: "present",
    },
    {
      id: 6,
      name: "Lucas Brown",
      monday: "late",
      tuesday: "present",
      wednesday: "present",
      thursday: "present",
      friday: "late",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "present":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Present</Badge>
      case "absent":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Absent</Badge>
      case "late":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Late</Badge>
      default:
        return null
    }
  }

  const getDayStatus = (status: string) => {
    switch (status) {
      case "present":
        return <Check className="h-5 w-5 text-green-500 mx-auto" />
      case "absent":
        return <X className="h-5 w-5 text-red-500 mx-auto" />
      case "late":
        return <Clock className="h-5 w-5 text-yellow-500 mx-auto" />
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Attendance</h1>
          <p className="text-muted-foreground">Track and manage attendance for children and staff</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button className="gap-2">Take Attendance</Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-end">
        <div className="md:w-[300px]">
          <Label htmlFor="date-view">View</Label>
          <Select defaultValue={view} onValueChange={setView}>
            <SelectTrigger id="date-view">
              <SelectValue placeholder="Select view" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily View</SelectItem>
              <SelectItem value="weekly">Weekly View</SelectItem>
              <SelectItem value="monthly">Monthly View</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="md:w-[300px]">
          <Label>Date</Label>
          <div className="relative">
            <Input
              value={date ? date.toLocaleDateString() : ""}
              readOnly
              onClick={() => setCalendarOpen(!calendarOpen)}
            />
            {calendarOpen && (
              <div className="absolute z-10 mt-1">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(newDate) => {
                    setDate(newDate)
                    setCalendarOpen(false)
                  }}
                  className="bg-white border rounded-md shadow-md"
                  initialFocus
                />
              </div>
            )}
          </div>
        </div>

        <div className="relative md:w-[300px]">
          <Label htmlFor="search">Search</Label>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input id="search" placeholder="Search by name..." className="pl-8" />
          </div>
        </div>
      </div>

      <Tabs defaultValue="children">
        <TabsList>
          <TabsTrigger value="children">Children</TabsTrigger>
          <TabsTrigger value="staff">Staff</TabsTrigger>
        </TabsList>

        <TabsContent value="children" className="space-y-6">
          {view === "daily" ? (
            <Card>
              <CardHeader>
                <CardTitle>Children's Attendance - {date?.toLocaleDateString()}</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Check In</TableHead>
                      <TableHead>Check Out</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {childrenAttendance.map((child) => (
                      <TableRow key={child.id}>
                        <TableCell className="font-medium">{child.name}</TableCell>
                        <TableCell>{child.checkIn || "-"}</TableCell>
                        <TableCell>{child.checkOut || "-"}</TableCell>
                        <TableCell>{getStatusBadge(child.status)}</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Children's Weekly Attendance - Week of {date?.toLocaleDateString()}</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead className="text-center">Monday</TableHead>
                      <TableHead className="text-center">Tuesday</TableHead>
                      <TableHead className="text-center">Wednesday</TableHead>
                      <TableHead className="text-center">Thursday</TableHead>
                      <TableHead className="text-center">Friday</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {weeklyAttendance.map((child) => (
                      <TableRow key={child.id}>
                        <TableCell className="font-medium">{child.name}</TableCell>
                        <TableCell>{getDayStatus(child.monday)}</TableCell>
                        <TableCell>{getDayStatus(child.tuesday)}</TableCell>
                        <TableCell>{getDayStatus(child.wednesday)}</TableCell>
                        <TableCell>{getDayStatus(child.thursday)}</TableCell>
                        <TableCell>{getDayStatus(child.friday)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Children</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Present Today</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">20</div>
                <p className="text-xs text-muted-foreground">83% attendance rate</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Absent Today</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-muted-foreground">17% absence rate</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="staff" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Staff Attendance - {date?.toLocaleDateString()}</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Check In</TableHead>
                    <TableHead>Check Out</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {staffAttendance.map((staff) => (
                    <TableRow key={staff.id}>
                      <TableCell className="font-medium">{staff.name}</TableCell>
                      <TableCell>{staff.checkIn || "-"}</TableCell>
                      <TableCell>{staff.checkOut || "-"}</TableCell>
                      <TableCell>{getStatusBadge(staff.status)}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Staff</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Present Today</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">6</div>
                <p className="text-xs text-muted-foreground">75% attendance rate</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Absent Today</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground">25% absence rate</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
