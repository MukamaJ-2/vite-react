"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, TrendingUp, DollarSign, BarChart } from "lucide-react"

// Import chart components
import {
  LineChart,
  BarChart as RechartsBarChart,
  PieChart,
  Pie,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts"

export default function ReportsPage() {
  const [timeRange, setTimeRange] = useState("this-month")

  // Sample data for charts
  const revenueData = [
    { name: "Week 1", amount: 280000 },
    { name: "Week 2", amount: 320000 },
    { name: "Week 3", amount: 350000 },
    { name: "Week 4", amount: 300000 },
  ]

  const expensesData = [
    { name: "Week 1", amount: 200000 },
    { name: "Week 2", amount: 220000 },
    { name: "Week 3", amount: 240000 },
    { name: "Week 4", amount: 190000 },
  ]

  const profitMarginData = [
    { name: "Week 1", margin: 28 },
    { name: "Week 2", margin: 31 },
    { name: "Week 3", margin: 31 },
    { name: "Week 4", margin: 36 },
  ]

  const expenseBreakdownData = [
    { name: "Salaries", value: 500000, percentage: "58.8%" },
    { name: "Food", value: 200000, percentage: "23.5%" },
    { name: "Supplies", value: 100000, percentage: "11.8%" },
    { name: "Utilities", value: 50000, percentage: "5.9%" },
  ]

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

  const attendanceData = [
    { name: "Monday", children: 22, staff: 8 },
    { name: "Tuesday", children: 24, staff: 8 },
    { name: "Wednesday", children: 23, staff: 7 },
    { name: "Thursday", children: 21, staff: 8 },
    { name: "Friday", children: 20, staff: 6 },
  ]

  const incidentsData = [
    { name: "Week 1", incidents: 2 },
    { name: "Week 2", incidents: 1 },
    { name: "Week 3", incidents: 3 },
    { name: "Week 4", incidents: 0 },
  ]

  const performanceData = [
    { name: "Jane Smith", rating: 4.8 },
    { name: "John Doe", rating: 4.5 },
    { name: "Emily Johnson", rating: 4.9 },
    { name: "Michael Brown", rating: 4.2 },
    { name: "Sarah Wilson", rating: 4.7 },
  ]

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
          <p className="text-muted-foreground">Generate and view reports for your daycare center</p>
        </div>
        <Button className="gap-2">
          <Download className="h-4 w-4" />
          Export Reports
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Select defaultValue={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="this-week">This Week</SelectItem>
            <SelectItem value="this-month">This Month</SelectItem>
            <SelectItem value="last-month">Last Month</SelectItem>
            <SelectItem value="last-quarter">Last Quarter</SelectItem>
            <SelectItem value="this-year">This Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="financial">
        <TabsList>
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="incidents">Incidents</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="financial" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">UGX 1,250,000</div>
                <div className="flex items-center text-xs text-green-500">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  +12% from previous period
                </div>
                <div className="mt-4 h-[80px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueData}>
                      <Line type="monotone" dataKey="amount" stroke="#0088FE" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-xs text-center mt-2 text-muted-foreground">Revenue Chart</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">UGX 850,000</div>
                <div className="flex items-center text-xs text-yellow-500">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  +5% from previous period
                </div>
                <div className="mt-4 h-[80px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={expensesData}>
                      <Line type="monotone" dataKey="amount" stroke="#FF8042" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-xs text-center mt-2 text-muted-foreground">Expenses Chart</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Profit Margin</CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">32%</div>
                <div className="flex items-center text-xs text-green-500">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  +3% from previous period
                </div>
                <div className="mt-4 h-[80px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={profitMarginData}>
                      <Line type="monotone" dataKey="margin" stroke="#00C49F" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-xs text-center mt-2 text-muted-foreground">Profit Margin Chart</div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Expense Breakdown</CardTitle>
              <p className="text-sm text-muted-foreground">Breakdown of expenses by category</p>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={expenseBreakdownData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percentage }) => `${name}: ${percentage}`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {expenseBreakdownData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Salaries</p>
                  <p className="text-xl font-bold">UGX 500,000</p>
                  <p className="text-xs text-muted-foreground">58.8% of expenses</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Food</p>
                  <p className="text-xl font-bold">UGX 200,000</p>
                  <p className="text-xs text-muted-foreground">23.5% of expenses</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Supplies</p>
                  <p className="text-xl font-bold">UGX 100,000</p>
                  <p className="text-xs text-muted-foreground">11.8% of expenses</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Utilities</p>
                  <p className="text-xl font-bold">UGX 50,000</p>
                  <p className="text-xs text-muted-foreground">5.9% of expenses</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="attendance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Daily Attendance</CardTitle>
              <p className="text-sm text-muted-foreground">Attendance records for children and staff</p>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBarChart data={attendanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="children" fill="#0088FE" name="Children" />
                    <Bar dataKey="staff" fill="#00C49F" name="Staff" />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Average Daily Attendance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">22 children</div>
                    <p className="text-xs text-muted-foreground">7.4 staff members</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Attendance Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">92%</div>
                    <p className="text-xs text-muted-foreground">+2% from last month</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="incidents" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Incident Reports</CardTitle>
              <p className="text-sm text-muted-foreground">Summary of reported incidents</p>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBarChart data={incidentsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="incidents" fill="#FF8042" name="Incidents" />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Total Incidents</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">6</div>
                    <p className="text-xs text-muted-foreground">This month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Incident Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1.5%</div>
                    <p className="text-xs text-green-500">-0.5% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Resolution Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24 hours</div>
                    <p className="text-xs text-muted-foreground">Average time to resolve</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Staff Performance</CardTitle>
              <p className="text-sm text-muted-foreground">Performance ratings for babysitters</p>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBarChart data={performanceData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" domain={[0, 5]} />
                    <YAxis dataKey="name" type="category" width={100} />
                    <Tooltip />
                    <Bar dataKey="rating" fill="#0088FE" name="Rating (out of 5)" />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Average Rating</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">4.6/5.0</div>
                    <p className="text-xs text-green-500">+0.2 from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Top Performer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xl font-bold">Emily Johnson</div>
                    <p className="text-xs text-muted-foreground">Rating: 4.9/5.0</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Reviews Submitted</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">42</div>
                    <p className="text-xs text-muted-foreground">From parents this month</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
