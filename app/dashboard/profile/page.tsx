"use client"

import { useEffect, useState } from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

import {
  UserCircle,
  Phone,
  MapPin,
  Lock,
  Save,
} from "lucide-react"

export default function ProfilePage() {

  const [user,setUser] = useState<any>(null)

  useEffect(()=>{

    const token = localStorage.getItem("token")

    if(!token) return

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/profile`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    .then(res=>res.json())
    .then(data=>setUser(data))

  },[])

  if(!user){
    return <p>Loading...</p>
  }

  return (
    <div className="flex flex-col gap-6">

      <h1 className="text-2xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
        Profile
      </h1>

      <div className="grid gap-6 lg:grid-cols-3">

        <Card className="lg:col-span-1">

          <CardContent className="flex flex-col items-center gap-4 pt-8 pb-6">

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-3xl font-bold text-accent-foreground">
              {user?.name?.charAt(0)}
            </div>

            <div className="text-center">

              <h2 className="text-lg font-bold text-foreground">
                {user?.name}
              </h2>

              <p className="text-sm text-muted-foreground">
                {user?.email}
              </p>

            </div>

            <Badge className="bg-accent/10 text-accent border-accent/20">
              Active Member
            </Badge>

            <Separator />

            <div className="flex w-full flex-col gap-3 text-sm">

              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-accent" />
                {user?.phone || "Not added"}
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent" />
                {user?.address || "India"}
              </div>

            </div>

          </CardContent>

        </Card>

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
                  <Label>Full Name</Label>
                  <Input defaultValue={user?.name} />
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label>Email</Label>
                  <Input type="email" defaultValue={user?.email} />
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

                <Input placeholder="Current Password" type="password" />

                <Input placeholder="New Password" type="password" />

                <Input placeholder="Confirm Password" type="password" />

                <Button className="self-start bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">

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