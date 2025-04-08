"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Download, Eye, Plus, Search } from "lucide-react"

export default function IncidentsPage() {
  const [selectedIncident, setSelectedIncident] = useState<any>(null)
  
  // Mock data for incidents
  const incidents = [
    {
      id: 1,
      child: "Emma Thompson",
      date: "2023-06-15",
      time: "10:30 AM",
      type: "Injury",
      severity: "Minor",
      reportedBy: "Jane Smith",
      status: "Resolved",
      description: "Emma fell while playing on the playground and scraped her knee. First aid was administered, and the area was cleaned and bandaged.",
      actions: "Area was cleaned with antiseptic and a bandage was applied. Parent was notified via phone call.",
      parentNotified: "Yes - 10:45 AM",
    },
    {
      id: 2,
      child: "Noah Johnson",
      date: "2023-06-14",
      time: "2:15 PM",
      type: "Behavioral",
      severity: "Moderate",
      reportedBy: "John Doe",
      status: "Pending",
      description: "Noah had a conflict with another child over a toy. He pushed the other child, resulting in both children being upset.",
      actions: "Both children were separated and calmed down. They were encouraged to talk about their feelings and to share toys.",
      parentNotified: "Yes - 3:00 PM",
    },
    {
      id: 3,
      child: "Olivia Davis",
      date: "2023-06-13",
      time: "11:45 AM",
      type: "Illness",
      severity: "Moderate",
      reportedBy: "Emily Johnson",
      status: "Resolved",
      description: "Olivia complained of a headache and had a temperature of 100.2°F. She was separated from other children and monitored.",
      actions: "Temperature was taken every 30 minutes. Parent was called to pick up the child. Recommended medical follow-up.",
      parentNotified: "Yes - 12:00 PM",
    },
    {
      id: 4,
      child: "Liam Wilson",
      date: "2023-06-12",
      time: "9:20 AM",
      type: "Allergic Reaction",
      severity: "Severe",
      reportedBy: "Sarah Wilson",
      status: "Resolved",
      description: "Liam showed signs of an allergic reaction (hives, swelling) after breakfast. He has a known allergy to dairy products.",
      actions: "Administered EpiPen as per emergency protocol. Called emergency services. Parent was notified immediately.",
      parentNotified: "Yes - 9:25 AM",
    },
    {
      id: 5,
      child: "Ava Martinez",
      date: "2023-06-09",
      time: "3:40 PM",
      type: "Injury",
      severity: "Minor",
      reportedBy: "Michael Brown",
      status: "Resolved",
      description: "Ava bumped her head on a shelf while picking up toys. No visible bruising or swelling was observed.",
      actions: "Applied cold compress to the area. Monitored for signs of concussion. Documented incident.",
      parentNotified: "Yes - 4:00 PM",
    },
  ]
  
  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "Minor":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Minor</Badge>
      case "Moderate":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Moderate</Badge>
      case "Severe":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Severe</Badge>
      default:
        return null
    }
  }
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Resolved":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Resolved</Badge>
      case "Pending":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>
      case "Investigating":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Investigating</Badge>
      default:
        return null
    }
  }
  
  const viewIncidentDetails = (incident: any) => {
    setSelectedIncident(incident)
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Incident Reports</h1>
          <p className="text-muted-foreground">Track and manage incidents involving children</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                New Incident
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Report New Incident</DialogTitle>
                <DialogDescription>
                  Fill in the details of the incident. All fields marked with * are required.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="child">Child *</Label>
                    <Select>
                      <SelectTrigger id="child">
                        <SelectValue placeholder="Select child" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emma">Emma Thompson</SelectItem>
                        <SelectItem value="noah">Noah Johnson</SelectItem>
                        <SelectItem value="olivia">Olivia Davis</SelectItem>
                        <SelectItem value="liam">Liam Wilson</SelectItem>
                        <SelectItem value="ava">Ava Martinez</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="type">Incident Type *</Label>
                    <Select>
                      <SelectTrigger id="type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="injury">Injury</SelectItem>
                        <SelectItem value="illness">Illness</SelectItem>
                        <SelectItem value="behavioral">Behavioral</SelectItem>
                        <SelectItem value="allergic">Allergic Reaction</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date *</Label>
                    <Input id="date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Time *</Label>
                    <Input id="time" type="time" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="severity">Severity *</Label>
                    <Select>
                      <SelectTrigger id="severity">
                        <SelectValue placeholder="Select severity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="minor">Minor</SelectItem>
                        <SelectItem value="moderate">Moderate</SelectItem>
                        <SelectItem value="severe">Severe</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reportedBy">Reported By *</Label>
                    <Select>
                      <SelectTrigger id="reportedBy">
                        <SelectValue placeholder="Select staff" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="jane">Jane Smith</SelectItem>
                        <SelectItem value="john">John Doe</SelectItem>
                        <SelectItem value="emily">Emily Johnson</SelectItem>
                        <SelectItem value="michael">Michael Brown</SelectItem>
                        <SelectItem value="sarah">Sarah Wilson</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe what happened in detail..."
                    className="min-h-[100px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="actions">Actions Taken *</Label>
                  <Textarea
                    id="actions"
                    placeholder="Describe the actions taken to address the incident..."
                    className="min-h-[100px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="parentNotified">Parent Notified *</Label>
                  <div className="flex items-center gap-4">
                    <Select>
                      <SelectTrigger id="parentNotified" className="w-[100px]">
                        <SelectValue placeholder="Yes/No" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input id="notificationTime" type="time" placeholder="Time" />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Submit Report</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-end">
        <div className="md:w-[200px]">
          <Label htmlFor="filter-type">Incident Type</Label>
          <Select defaultValue="all">
            <SelectTrigger id="filter-type">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="injury">Injury</SelectItem>
              <SelectItem value="illness">Illness</SelectItem>
              <SelectItem value="behavioral">Behavioral</SelectItem>
              <SelectItem value="allergic">Allergic Reaction</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="md:w-[200px]">
          <Label htmlFor="filter-severity">Severity</Label>
          <Select defaultValue="all">
            <SelectTrigger id="filter-severity">
              <SelectValue placeholder="All Severities" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Severities</SelectItem>
              <SelectItem value="minor">Minor</SelectItem>
              <SelectItem value="moderate">Moderate</SelectItem>
              <SelectItem value="severe">Severe</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="md:w-[200px]">
          <Label htmlFor="filter-status">Status</Label>
          <Select defaultValue="all">
            <SelectTrigger id="filter-status">
              <SelectValue placeholder="All Statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="resolved">Resolved</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="investigating">Investigating</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="relative md:w-[300px]">
          <Label htmlFor="search">Search</Label>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input id="search" placeholder="Search by child name..." className="pl-8" />
          </div>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Incidents</TabsTrigger>
          <TabsTrigger value="recent">Recent (7 Days)</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>All Incident Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Child</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Severity</TableHead>
                    <TableHead>Reported By</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {incidents.map((incident) => (
                    <TableRow key={incident.id}>
                      <TableCell className="font-medium">{incident.child}</TableCell>
                      <TableCell>{incident.date}</TableCell>
                      <TableCell>{incident.type}</TableCell>
                      <TableCell>{getSeverityBadge(incident.severity)}</TableCell>
                      <TableCell>{incident.reportedBy}</TableCell>
                      <TableCell>{getStatusBadge(incident.status)}</TableCell>
                      <TableCell>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" onClick={() => viewIncidentDetails(incident)}>
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[600px]">
                            <DialogHeader>
                              <DialogTitle>Incident Report Details</DialogTitle>
                              <DialogDescription>
                                Incident #{incident.id} - {incident.date}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 py-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <h4 className="text-sm font-semibold">Child</h4>
                                  <p>{incident.child}</p>
                                </div>
                                <div>
                                  <h4 className="text-sm font-semibold">Date & Time</h4>
                                  <p>{incident.date} at {incident.time}</p>
                                </div>
                                <div>
                                  <h4 className="text-sm font-semibold">Type</h4>
                                  <p>{incident.type}</p>
                                </div>
                                <div>\
