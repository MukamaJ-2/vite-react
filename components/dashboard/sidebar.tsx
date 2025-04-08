"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Baby,
  BarChart3,
  Bell,
  Calendar,
  CreditCard,
  Home,
  LogOut,
  Settings,
  Users,
  AlertTriangle,
  DollarSign,
  FileText,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  userType: "manager" | "babysitter"
}

export function Sidebar({ userType }: SidebarProps) {
  const pathname = usePathname()

  const managerLinks = [
    { href: "/dashboard/manager", label: "Dashboard", icon: Home },
    { href: "/dashboard/manager/children", label: "Children", icon: Baby },
    { href: "/dashboard/manager/babysitters", label: "Babysitters", icon: Users },
    { href: "/dashboard/manager/finances", label: "Finances", icon: CreditCard },
    { href: "/dashboard/manager/budget", label: "Budget", icon: DollarSign },
    { href: "/dashboard/manager/reports", label: "Reports", icon: BarChart3 },
    { href: "/dashboard/manager/attendance", label: "Attendance", icon: Calendar },
    { href: "/dashboard/manager/incidents", label: "Incidents", icon: AlertTriangle },
    { href: "/dashboard/manager/notifications", label: "Notifications", icon: Bell },
    { href: "/dashboard/manager/settings", label: "Settings", icon: Settings },
  ]

  const babysitterLinks = [
    { href: "/dashboard/babysitter", label: "Dashboard", icon: Home },
    { href: "/dashboard/babysitter/children", label: "Children", icon: Baby },
    { href: "/dashboard/babysitter/schedule", label: "Schedule", icon: Calendar },
    { href: "/dashboard/babysitter/attendance", label: "Attendance", icon: FileText },
    { href: "/dashboard/babysitter/incidents", label: "Incident Reports", icon: AlertTriangle },
    { href: "/dashboard/babysitter/payments", label: "Payments", icon: CreditCard },
    { href: "/dashboard/babysitter/settings", label: "Settings", icon: Settings },
  ]

  const links = userType === "manager" ? managerLinks : babysitterLinks

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-white">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Baby className="h-5 w-5 text-primary" />
          <span>Daystar Daycare</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-100",
                pathname === link.href ? "bg-slate-100" : "text-muted-foreground",
              )}
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t p-4">
        <Link href="/">
          <Button variant="outline" className="w-full justify-start gap-2">
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        </Link>
      </div>
    </div>
  )
}
