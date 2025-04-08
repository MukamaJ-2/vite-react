import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock } from "lucide-react"

export default function BabysitterSchedulePage() {
  // Mock data for weekly schedule
  const weeklySchedule = [
    { day: "Monday", date: "June 12", hours: "9:00 AM - 5:00 PM", children: 6 },
    { day: "Tuesday", date: "June 13", hours: "9:00 AM - 5:00 PM", children: 7 },
    { day: "Wednesday", date: "June 14", hours: "9:00 AM - 5:00 PM", children: 5 },
    { day: "Thursday", date: "June 15", hours: "9:00 AM - 5:00 PM", children: 6 },
    { day: "Friday", date: "June 16", hours: "9:00 AM - 5:00 PM", children: 8 },
    { day: "Saturday", date: "June 17", hours: "Off", children: 0 },
    { day: "Sunday", date: "June 18", hours: "Off", children: 0 },
  ]

  // Mock data for daily schedule
  const dailySchedule = [
    { time: "9:00 AM", activity: "Arrival & Free Play" },
    { time: "9:30 AM", activity: "Morning Circle Time" },
    { time: "10:00 AM", activity: "Snack Time" },
    { time: "10:30 AM", activity: "Outdoor Play" },
    { time: "11:30 AM", activity: "Arts & Crafts" },
    { time: "12:00 PM", activity: "Lunch Time" },
    { time: "12:30 PM", activity: "Nap/Quiet Time" },
    { time: "2:30 PM", activity: "Afternoon Snack" },
    { time: "3:00 PM", activity: "Story Time" },
    { time: "3:30 PM", activity: "Free Play" },
    { time: "4:30 PM", activity: "Clean Up & Prepare for Departure" },
    { time: "5:00 PM", activity: "End of Day" },
  ]

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Schedule</h1>
        <Button variant="outline">Request Time Off</Button>
      </div>

      <Tabs defaultValue="weekly">
        <TabsList>
          <TabsTrigger value="weekly">Weekly Schedule</TabsTrigger>
          <TabsTrigger value="daily">Daily Schedule</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
        </TabsList>
        <TabsContent value="weekly">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-4 border-b bg-slate-50 p-3 text-sm font-medium">
                  <div>Day</div>
                  <div>Date</div>
                  <div>Hours</div>
                  <div>Children</div>
                </div>
                <div className="divide-y">
                  {weeklySchedule.map((day, index) => (
                    <div key={index} className="grid grid-cols-4 items-center p-3">
                      <div className="font-medium">{day.day}</div>
                      <div>{day.date}</div>
                      <div>{day.hours}</div>
                      <div>{day.children}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="daily">
          <Card>
            <CardHeader>
              <CardTitle>Daily Schedule - Thursday, June 15</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-2 border-b bg-slate-50 p-3 text-sm font-medium">
                  <div>Time</div>
                  <div>Activity</div>
                </div>
                <div className="divide-y">
                  {dailySchedule.map((item, index) => (
                    <div key={index} className="grid grid-cols-2 items-center p-3">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{item.time}</span>
                      </div>
                      <div>{item.activity}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="calendar">
          <Card>
            <CardHeader>
              <CardTitle>Calendar View</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar mode="single" className="mx-auto" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
