"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Crown, Plus, Calendar, DollarSign } from "lucide-react"

interface User {
  name: string
  username: string
  avatar: string
  auctions: number
  avgDiscount: number
  isAmbassador: boolean
  ambassadorLevel: string
  totalFollowers: number
  successfulAuctions: number
}

interface ProfilePageProps {
  currentUser: User
  onCreateAuction: () => void
}

export default function ProfilePage({ currentUser, onCreateAuction }: ProfilePageProps) {
  return (
    <div className="space-y-6 pb-6">
      <div className="bg-primary text-primary-foreground px-4 py-6 rounded-b-3xl">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Avatar className="h-20 w-20 border-4 border-primary-foreground/20">
              <AvatarImage src="/user-profile-avatar.png" />
              <AvatarFallback className="text-2xl">YU</AvatarFallback>
            </Avatar>
            {currentUser.isAmbassador && (
              <div className="absolute -top-1 -right-1 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center border-2 border-primary-foreground">
                <Crown className="h-4 w-4 text-white" />
              </div>
            )}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-xl font-bold">{currentUser.name}</h2>
              {currentUser.isAmbassador && (
                <Badge className="bg-yellow-500 text-yellow-900 hover:bg-yellow-500 text-xs px-2 py-0.5">
                  <Crown className="h-3 w-3 mr-1" />
                  Ambassador
                </Badge>
              )}
            </div>
            <p className="text-primary-foreground/80">{currentUser.username}</p>
            <div className="flex items-center gap-4 mt-2">
              <div className="text-center">
                <p className="font-bold">{currentUser.auctions}</p>
                <p className="text-xs text-primary-foreground/80">Auctions</p>
              </div>
              <div className="text-center">
                <p className="font-bold">-{currentUser.avgDiscount}%</p>
                <p className="text-xs text-primary-foreground/80">Avg Discount</p>
              </div>
              {currentUser.isAmbassador && (
                <div className="text-center">
                  <p className="font-bold">{currentUser.totalFollowers}</p>
                  <p className="text-xs text-primary-foreground/80">Followers</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 space-y-4">
        {currentUser.isAmbassador && (
          <Card className="border-0 shadow-sm bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Crown className="h-5 w-5 text-yellow-600" />
                  <h3 className="font-semibold text-yellow-800">{currentUser.ambassadorLevel}</h3>
                </div>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
                  Level 3
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-yellow-700">{currentUser.successfulAuctions}</p>
                  <p className="text-xs text-yellow-600">Successful Auctions</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-yellow-700">4.9★</p>
                  <p className="text-xs text-yellow-600">Ambassador Rating</p>
                </div>
              </div>

              <Button
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-yellow-900 mobile-tap"
                onClick={onCreateAuction}
              >
                <Plus className="h-4 w-4 mr-2" />
                Create New Auction
              </Button>
            </CardContent>
          </Card>
        )}

        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-3">Account Settings</h3>
            <div className="space-y-3">
              <Button variant="ghost" className="w-full justify-start mobile-tap-subtle">
                Edit Profile
              </Button>
              <Button variant="ghost" className="w-full justify-start mobile-tap-subtle">
                Notification Settings
              </Button>
              <Button variant="ghost" className="w-full justify-start mobile-tap-subtle">
                Payment Methods
              </Button>
              <Button variant="ghost" className="w-full justify-start mobile-tap-subtle">
                Privacy Settings
              </Button>
              {currentUser.isAmbassador && (
                <Button variant="ghost" className="w-full justify-start mobile-tap-subtle text-yellow-700">
                  <Crown className="h-4 w-4 mr-2" />
                  Ambassador Dashboard
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-3">My Activity</h3>
            <div className="space-y-3">
              <Button variant="ghost" className="w-full justify-start mobile-tap-subtle">
                Purchase History
              </Button>
              <Button variant="ghost" className="w-full justify-start mobile-tap-subtle">
                Saved Items
              </Button>
              <Button variant="ghost" className="w-full justify-start mobile-tap-subtle">
                My Reviews
              </Button>
              <Button variant="ghost" className="w-full justify-start mobile-tap-subtle">
                Referral Program
              </Button>
              {currentUser.isAmbassador && (
                <>
                  <Button variant="ghost" className="w-full justify-start mobile-tap-subtle text-yellow-700">
                    <Calendar className="h-4 w-4 mr-2" />
                    My Auctions
                  </Button>
                  <Button variant="ghost" className="w-full justify-start mobile-tap-subtle text-yellow-700">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Earnings Report
                  </Button>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
