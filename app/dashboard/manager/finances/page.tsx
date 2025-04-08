import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, Download, Plus } from "lucide-react"

export default function FinancesPage() {
  // Mock data for invoices
  const invoices = [
    { id: "INV-001", date: "2023-06-01", parent: "Sarah Thompson", amount: 450, status: "Paid" },
    { id: "INV-002", date: "2023-06-01", parent: "Michael Johnson", amount: 350, status: "Paid" },
    { id: "INV-003", date: "2023-06-01", parent: "Emily Davis", amount: 500, status: "Pending" },
    { id: "INV-004", date: "2023-06-01", parent: "James Wilson", amount: 400, status: "Paid" },
    { id: "INV-005", date: "2023-06-01", parent: "Sofia Martinez", amount: 450, status: "Pending" },
    { id: "INV-006", date: "2023-06-01", parent: "David Brown", amount: 350, status: "Overdue" },
  ]

  // Mock data for expenses
  const expenses = [
    { id: "EXP-001", date: "2023-06-05", category: "Supplies", amount: 250, status: "Paid" },
    { id: "EXP-002", date: "2023-06-10", category: "Utilities", amount: 180, status: "Paid" },
    { id: "EXP-003", date: "2023-06-15", category: "Food", amount: 320, status: "Pending" },
    { id: "EXP-004", date: "2023-06-20", category: "Maintenance", amount: 150, status: "Paid" },
    { id: "EXP-005", date: "2023-06-25", category: "Staff Salaries", amount: 2800, status: "Pending" },
  ]

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Finances</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Transaction
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,450</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$3,700</div>
            <p className="text-xs text-muted-foreground">+2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Net Profit</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$8,750</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="invoices">
        <TabsList>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
        </TabsList>
        <TabsContent value="invoices">
          <Card>
            <CardHeader>
              <CardTitle>Invoices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-5 border-b bg-slate-50 p-3 text-sm font-medium">
                  <div>Invoice #</div>
                  <div>Date</div>
                  <div>Parent</div>
                  <div>Amount</div>
                  <div>Status</div>
                </div>
                <div className="divide-y">
                  {invoices.map((invoice) => (
                    <div key={invoice.id} className="grid grid-cols-5 items-center p-3">
                      <div className="font-medium">{invoice.id}</div>
                      <div>{invoice.date}</div>
                      <div>{invoice.parent}</div>
                      <div>${invoice.amount}</div>
                      <div>
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                            invoice.status === "Paid"
                              ? "bg-green-100 text-green-800"
                              : invoice.status === "Pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {invoice.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="expenses">
          <Card>
            <CardHeader>
              <CardTitle>Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-5 border-b bg-slate-50 p-3 text-sm font-medium">
                  <div>Expense #</div>
                  <div>Date</div>
                  <div>Category</div>
                  <div>Amount</div>
                  <div>Status</div>
                </div>
                <div className="divide-y">
                  {expenses.map((expense) => (
                    <div key={expense.id} className="grid grid-cols-5 items-center p-3">
                      <div className="font-medium">{expense.id}</div>
                      <div>{expense.date}</div>
                      <div>{expense.category}</div>
                      <div>${expense.amount}</div>
                      <div>
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                            expense.status === "Paid"
                              ? "bg-green-100 text-green-800"
                              : expense.status === "Pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {expense.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
