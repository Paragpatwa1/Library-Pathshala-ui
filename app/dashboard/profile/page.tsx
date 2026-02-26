"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  UserCircle,
  Mail,
  Phone,
  MapPin,
  Lock,
  Armchair,
  CalendarDays,
  Save,
} from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
        Profile
      </h1>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* User Info */}
        <Card className="lg:col-span-1">
          <CardContent className="flex flex-col items-center gap-4 pt-8 pb-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-3xl font-bold text-accent-foreground">
              RC
            </div>
            <div className="text-center">
              <h2 className="text-lg font-bold text-foreground">Rupesh Chouksey</h2>
              <p className="text-sm text-muted-foreground">rupesh@example.com</p>
            </div>
            <Badge className="bg-accent/10 text-accent border-accent/20">
              Active Member
            </Badge>
            <Separator />
            <div className="flex w-full flex-col gap-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-accent" />
                9876543210
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent" />
                Vidisha, MP
              </div>
            </div>
            <Separator />
            <div className="flex w-full flex-col gap-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Active Bookings
              </h3>
              <div className="flex items-center gap-3 rounded-lg border border-border p-3">
                <Armchair className="h-5 w-5 text-accent" />
                <div className="text-xs">
                  <p className="font-medium text-foreground">Reserved Seat</p>
                  <p className="text-muted-foreground">Expires 31 Mar 2026</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Edit Profile + Change Password */}
        <div className="flex flex-col gap-6 lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <UserCircle className="h-5 w-5 text-accent" />
                Edit Profile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="pName">Full Name</Label>
                  <Input id="pName" defaultValue="Rupesh Chouksey" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="pEmail" className="flex items-center gap-1">
                    <Mail className="h-3 w-3" /> Email
                  </Label>
                  <Input id="pEmail" type="email" defaultValue="rupesh@example.com" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="pPhone" className="flex items-center gap-1">
                    <Phone className="h-3 w-3" /> Phone
                  </Label>
                  <Input id="pPhone" defaultValue="9876543210" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="pCity" className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> City
                  </Label>
                  <Input id="pCity" defaultValue="Vidisha" />
                </div>
                <div className="sm:col-span-2">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Lock className="h-5 w-5 text-accent" />
                Change Password
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="currentPass">Current Password</Label>
                  <Input id="currentPass" type="password" placeholder="Enter current password" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="newPass">New Password</Label>
                    <Input id="newPass" type="password" placeholder="Enter new password" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="confirmNewPass">Confirm New Password</Label>
                    <Input id="confirmNewPass" type="password" placeholder="Confirm new password" />
                  </div>
                </div>
                <Button className="self-start bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                  <Lock className="mr-2 h-4 w-4" />
                  Update Password
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
