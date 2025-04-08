"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/components/ui/use-toast"

export default function SettingsPage() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const [profileData, setProfileData] = useState({
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+256 701 234 567",
    role: "Manager",
    bio: "Experienced daycare manager with over 10 years in childcare management.",
  })

  const [daycareData, setDaycareData] = useState({
    name: "Daystar Daycare",
    address: "123 Main Street, Kampala, Uganda",
    phone: "+256 701 987 654",
    email: "info@daystardaycare.com",
    website: "www.daystardaycare.com",
    license: "DCC-12345",
    capacity: "50",
    openingHours: "8:00 AM - 5:00 PM",
    daysOpen: "Monday - Friday",
  })

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: true,
    loginNotifications: true,
    sessionTimeout: "30",
  })

  const [paymentSettings, setPaymentSettings] = useState({
    currency: "UGX",
    paymentMethods: ["cash", "bank", "mobile"],
    invoiceDueDate: "15",
    lateFeePercentage: "5",
    sendReminders: true,
  })

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setProfileData((prev) => ({ ...prev, [id]: value }))
  }

  const handleDaycareChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setDaycareData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSecurityChange = (id: string, value: boolean | string) => {
    setSecuritySettings((prev) => ({ ...prev, [id]: value }))
  }

  const handlePaymentChange = (id: string, value: string | string[] | boolean) => {
    setPaymentSettings((prev) => ({ ...prev, [id]: value }))
  }

  const saveSettings = () => {
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      toast({
        title: "Settings saved",
        description: "Your settings have been saved successfully.",
      })
    }, 1000)
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
      </div>

      <Tabs defaultValue="profile">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="daycare">Daycare</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Profile" />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <div>
                  <Button variant="outline" size="sm" className="mb-2">
                    Change Avatar
                  </Button>
                  <p className="text-xs text-muted-foreground">JPG, GIF or PNG. Max size of 2MB.</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" value={profileData.name} onChange={handleProfileChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={profileData.email} onChange={handleProfileChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" value={profileData.phone} onChange={handleProfileChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input id="role" value={profileData.role} readOnly disabled />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about yourself"
                  className="min-h-[100px]"
                  value={profileData.bio}
                  onChange={handleProfileChange}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={saveSettings} disabled={loading}>
                {loading ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="daycare" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Daycare Information</CardTitle>
              <CardDescription>Update your daycare center details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Daycare Name</Label>
                  <Input id="name" value={daycareData.name} onChange={handleDaycareChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="license">License Number</Label>
                  <Input id="license" value={daycareData.license} onChange={handleDaycareChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" value={daycareData.address} onChange={handleDaycareChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="capacity">Capacity</Label>
                  <Input id="capacity" type="number" value={daycareData.capacity} onChange={handleDaycareChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" value={daycareData.phone} onChange={handleDaycareChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={daycareData.email} onChange={handleDaycareChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" value={daycareData.website} onChange={handleDaycareChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="openingHours">Opening Hours</Label>
                  <Input id="openingHours" value={daycareData.openingHours} onChange={handleDaycareChange} />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="daysOpen">Days Open</Label>
                  <Input id="daysOpen" value={daycareData.daysOpen} onChange={handleDaycareChange} />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={saveSettings} disabled={loading}>
                {loading ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Manage your account security preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="twoFactorAuth">Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <Switch
                    id="twoFactorAuth"
                    checked={securitySettings.twoFactorAuth}
                    onCheckedChange={(checked) => handleSecurityChange("twoFactorAuth", checked)}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="loginNotifications">Login Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications when someone logs into your account
                    </p>
                  </div>
                  <Switch
                    id="loginNotifications"
                    checked={securitySettings.loginNotifications}
                    onCheckedChange={(checked) => handleSecurityChange("loginNotifications", checked)}
                  />
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                  <p className="text-sm text-muted-foreground">Automatically log out after a period of inactivity</p>
                  <Select
                    value={securitySettings.sessionTimeout}
                    onValueChange={(value) => handleSecurityChange("sessionTimeout", value)}
                  >
                    <SelectTrigger id="sessionTimeout">
                      <SelectValue placeholder="Select timeout" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">1 hour</SelectItem>
                      <SelectItem value="120">2 hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-medium">Password</h3>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={saveSettings} disabled={loading}>
                {loading ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="payment" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment Settings</CardTitle>
              <CardDescription>Configure payment options for your daycare</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <Select
                    value={paymentSettings.currency}
                    onValueChange={(value) => handlePaymentChange("currency", value)}
                  >
                    <SelectTrigger id="currency">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="UGX">Ugandan Shilling (UGX)</SelectItem>
                      <SelectItem value="USD">US Dollar (USD)</SelectItem>
                      <SelectItem value="EUR">Euro (EUR)</SelectItem>
                      <SelectItem value="GBP">British Pound (GBP)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="invoiceDueDate">Invoice Due Date (days)</Label>
                  <Input
                    id="invoiceDueDate"
                    type="number"
                    value={paymentSettings.invoiceDueDate}
                    onChange={(e) => handlePaymentChange("invoiceDueDate", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lateFeePercentage">Late Fee Percentage (%)</Label>
                  <Input
                    id="lateFeePercentage"
                    type="number"
                    value={paymentSettings.lateFeePercentage}
                    onChange={(e) => handlePaymentChange("lateFeePercentage", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Payment Methods</Label>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="cash"
                      checked={paymentSettings.paymentMethods.includes("cash")}
                      onChange={(e) => {
                        const methods = e.target.checked
                          ? [...paymentSettings.paymentMethods, "cash"]
                          : paymentSettings.paymentMethods.filter((m) => m !== "cash")
                        handlePaymentChange("paymentMethods", methods)
                      }}
                      className="h-4 w-4 rounded border-gray-300"
                    />
                    <Label htmlFor="cash">Cash</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="bank"
                      checked={paymentSettings.paymentMethods.includes("bank")}
                      onChange={(e) => {
                        const methods = e.target.checked
                          ? [...paymentSettings.paymentMethods, "bank"]
                          : paymentSettings.paymentMethods.filter((m) => m !== "bank")
                        handlePaymentChange("paymentMethods", methods)
                      }}
                      className="h-4 w-4 rounded border-gray-300"
                    />
                    <Label htmlFor="bank">Bank Transfer</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="mobile"
                      checked={paymentSettings.paymentMethods.includes("mobile")}
                      onChange={(e) => {
                        const methods = e.target.checked
                          ? [...paymentSettings.paymentMethods, "mobile"]
                          : paymentSettings.paymentMethods.filter((m) => m !== "mobile")
                        handlePaymentChange("paymentMethods", methods)
                      }}
                      className="h-4 w-4 rounded border-gray-300"
                    />
                    <Label htmlFor="mobile">Mobile Money</Label>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="sendReminders">Payment Reminders</Label>
                  <p className="text-sm text-muted-foreground">Automatically send payment reminders to parents</p>
                </div>
                <Switch
                  id="sendReminders"
                  checked={paymentSettings.sendReminders}
                  onCheckedChange={(checked) => handlePaymentChange("sendReminders", checked)}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={saveSettings} disabled={loading}>
                {loading ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
