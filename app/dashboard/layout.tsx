import type React from "react"
import { Sidebar } from "@/components/dashboard/sidebar"

export default function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { userType: "manager" | "babysitter" }
}) {
  // Extract userType from the URL path
  const userType = params.userType || "manager"

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar userType={userType as "manager" | "babysitter"} />
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  )
}
