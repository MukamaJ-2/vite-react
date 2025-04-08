"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Bell, Check, Clock, AlertTriangle, CreditCard, MessageSquare, Baby, User } from "lucide-react"

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "alert",
      title: "New Incident Report",
      description: "Emma Thompson has a minor injury report that needs your attention.",
      time: "10 minutes ago",
      read: false,
    },
    {
      id: 2,
      type: "info",
      title: "Payment Received",
      description: "Sarah Thompson has paid the monthly fee for Emma Thompson.",
      time: "1 hour ago",
      read: false,
    },
    {
      id: 3,
      type: "success",
      title: "New Child Registration",
      description: "Noah Johnson has been successfully registered.",
      time: "3 hours ago",
      read: true,
    },
    {
      id: 4,
      type: "info",
      title: "Staff Schedule Update",
      description: "Emily Johnson has requested time off for next Friday.",
      time: "Yesterday",
      read: true,
    },
    {
      id: 5,
      type: "alert",
      title: "Low Supplies Alert",
      description: "Art supplies inventory is running low. Consider restocking soon.",
      time: "Yesterday",
      read: true,
    },
    {
      id: 6,
      type: "info",
      title: "Parent Message",
      description: "Michael Johnson has sent you a message regarding Noah's allergies.",
      time: "2 days ago",
      read: true,
    },
  ])

  const [notificationSettings, setNotificationSettings] = useState({
    email: {
      childRegistration: true,
      incidentReports: true,
      paymentReceipts: true,
      staffUpdates: false,
      lowSupplies: false,
      parentMessages: true,
    },
    push: {
      childRegistration: true,
      incidentReports: true,
      paymentReceipts: true,
      staffUpdates: true,
      lowSupplies: true,
      parentMessages: true,
    },
    sms: {
      childRegistration: false,
      incidentReports: true,
      paymentReceipts: false,
      staffUpdates: false,
      lowSupplies: false,
      parentMessages: false,
    },
  })

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((notification) => ({ ...notification, read: true })))
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "alert":
        return <AlertTriangle className="h-5 w-5 text-red-500" />
      case "success":
        return <Check className="h-5 w-5 text-green-500" />
      case "info":
        return <Bell className="h-5 w-5 text-blue-500" />
      default:
        return <Bell className="h-5 w-5 text-blue-500" />
    }
  }

  const toggleSetting = (category: "email" | "push" | "sms", setting: string) => {
    setNotificationSettings({
      ...notificationSettings,
      [category]: {
        ...notificationSettings[category],
        [setting]: !notificationSettings[category][setting as keyof (typeof notificationSettings)[typeof category]],
      },
    })
  }

  const unreadCount = notifications.filter((notification) => !notification.read).length

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
          <p className="text-muted-foreground">Manage your notifications and preferences</p>
        </div>
        <Button variant="outline" onClick={markAllAsRead}>
          Mark All as Read
        </Button>
      </div>

      <Tabs defaultValue="all">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="all">
              All
              {unreadCount > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {unreadCount} new
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="unread">Unread</TabsTrigger>
            <TabsTrigger value="settings">Notification Settings</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="space-y-4 mt-6">
          {notifications.map((notification) => (
            <Card key={notification.id} className={notification.read ? "bg-white" : "bg-blue-50"}>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1">{getNotificationIcon(notification.type)}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{notification.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground flex items-center">
                          <Clock className="mr-1 h-3 w-3" />
                          {notification.time}
                        </span>
                        {!notification.read && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                            onClick={() => markAsRead(notification.id)}
                          >
                            <Check className="h-4 w-4" />
                            <span className="sr-only">Mark as read</span>
                          </Button>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{notification.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="unread" className="space-y-4 mt-6">
          {notifications.filter((notification) => !notification.read).length > 0 ? (
            notifications
              .filter((notification) => !notification.read)
              .map((notification) => (
                <Card key={notification.id} className="bg-blue-50">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">{getNotificationIcon(notification.type)}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">{notification.title}</h3>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground flex items-center">
                              <Clock className="mr-1 h-3 w-3" />
                              {notification.time}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0"
                              onClick={() => markAsRead(notification.id)}
                            >
                              <Check className="h-4 w-4" />
                              <span className="sr-only">Mark as read</span>
                            </Button>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{notification.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Bell className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">No unread notifications</h3>
              <p className="text-sm text-muted-foreground">You're all caught up!</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="settings" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Email Notifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Baby className="h-4 w-4 text-muted-foreground" />
                        <Label htmlFor="email-child-registration">Child Registration</Label>
                      </div>
                      <Switch
                        id="email-child-registration"
                        checked={notificationSettings.email.childRegistration}
                        onCheckedChange={() => toggleSetting("email", "childRegistration")}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                        <Label htmlFor="email-incident-reports">Incident Reports</Label>
                      </div>
                      <Switch
                        id="email-incident-reports"
                        checked={notificationSettings.email.incidentReports}
                        onCheckedChange={() => toggleSetting("email", "incidentReports")}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                        <Label htmlFor="email-payment-receipts">Payment Receipts</Label>
                      </div>
                      <Switch
                        id="email-payment-receipts"
                        checked={notificationSettings.email.paymentReceipts}
                        onCheckedChange={() => toggleSetting("email", "paymentReceipts")}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <Label htmlFor="email-staff-updates">Staff Updates</Label>
                      </div>
                      <Switch
                        id="email-staff-updates"
                        checked={notificationSettings.email.staffUpdates}
                        onCheckedChange={() => toggleSetting("email", "staffUpdates")}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                        <Label htmlFor="email-low-supplies">Low Supplies Alerts</Label>
                      </div>
                      <Switch
                        id="email-low-supplies"
                        checked={notificationSettings.email.lowSupplies}
                        onCheckedChange={() => toggleSetting("email", "lowSupplies")}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                        <Label htmlFor="email-parent-messages">Parent Messages</Label>
                      </div>
                      <Switch
                        id="email-parent-messages"
                        checked={notificationSettings.email.parentMessages}
                        onCheckedChange={() => toggleSetting("email", "parentMessages")}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Push Notifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Baby className="h-4 w-4 text-muted-foreground" />
                        <Label htmlFor="push-child-registration">Child Registration</Label>
                      </div>
                      <Switch
                        id="push-child-registration"
                        checked={notificationSettings.push.childRegistration}
                        onCheckedChange={() => toggleSetting("push", "childRegistration")}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                        <Label htmlFor="push-incident-reports">Incident Reports</Label>
                      </div>
                      <Switch
                        id="push-incident-reports"
                        checked={notificationSettings.push.incidentReports}
                        onCheckedChange={() => toggleSetting("push", "incidentReports")}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                        <Label htmlFor="push-payment-receipts">Payment Receipts</Label>
                      </div>
                      <Switch
                        id="push-payment-receipts"
                        checked={notificationSettings.push.paymentReceipts}
                        onCheckedChange={() => toggleSetting("push", "paymentReceipts")}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <Label htmlFor="push-staff-updates">Staff Updates</Label>
                      </div>
                      <Switch
                        id="push-staff-updates"
                        checked={notificationSettings.push.staffUpdates}
                        onCheckedChange={() => toggleSetting("push", "staffUpdates")}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                        <Label htmlFor="push-low-supplies">Low Supplies Alerts</Label>
                      </div>
                      <Switch
                        id="push-low-supplies"
                        checked={notificationSettings.push.lowSupplies}
                        onCheckedChange={() => toggleSetting("push", "lowSupplies")}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                        <Label htmlFor="push-parent-messages">Parent Messages</Label>
                      </div>
                      <Switch
                        id="push-parent-messages"
                        checked={notificationSettings.push.parentMessages}
                        onCheckedChange={() => toggleSetting("push", "parentMessages")}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">SMS Notifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Baby className="h-4 w-4 text-muted-foreground" />
                        <Label htmlFor="sms-child-registration">Child Registration</Label>
                      </div>
                      <Switch
                        id="sms-child-registration"
                        checked={notificationSettings.sms.childRegistration}
                        onCheckedChange={() => toggleSetting("sms", "childRegistration")}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                        <Label htmlFor="sms-incident-reports">Incident Reports</Label>
                      </div>
                      <Switch
                        id="sms-incident-reports"
                        checked={notificationSettings.sms.incidentReports}
                        onCheckedChange={() => toggleSetting("sms", "incidentReports")}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                        <Label htmlFor="sms-payment-receipts">Payment Receipts</Label>
                      </div>
                      <Switch
                        id="sms-payment-receipts"
                        checked={notificationSettings.sms.paymentReceipts}
                        onCheckedChange={() => toggleSetting("sms", "paymentReceipts")}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <Label htmlFor="sms-staff-updates">Staff Updates</Label>
                      </div>
                      <Switch
                        id="sms-staff-updates"
                        checked={notificationSettings.sms.staffUpdates}
                        onCheckedChange={() => toggleSetting("sms", "staffUpdates")}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                        <Label htmlFor="sms-low-supplies">Low Supplies Alerts</Label>
                      </div>
                      <Switch
                        id="sms-low-supplies"
                        checked={notificationSettings.sms.lowSupplies}
                        onCheckedChange={() => toggleSetting("sms", "lowSupplies")}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                        <Label htmlFor="sms-parent-messages">Parent Messages</Label>
                      </div>
                      <Switch
                        id="sms-parent-messages"
                        checked={notificationSettings.sms.parentMessages}
                        onCheckedChange={() => toggleSetting("sms", "parentMessages")}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button>Save Preferences</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
