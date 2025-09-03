"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageCircle, Repeat2, Heart, Share2 } from "lucide-react"

interface SocialPost {
  id: string
  user: {
    name: string
    username: string
    avatar: string
    auctions: number
    avgDiscount: number
  }
  content: string
  image?: string
  timestamp: string
  likes: number
  comments: number
  shares: number
}

interface SocialPageProps {
  socialPosts: SocialPost[]
}

export default function SocialPage({ socialPosts }: SocialPageProps) {
  return (
    <div className="space-y-6 pb-6">
      <div className="space-y-1">
        {socialPosts.map((post) => (
          <Card key={post.id} className="border-0 shadow-none border-b border-border/50 rounded-none last:border-b-0">
            <CardContent className="p-0">
              <div className="flex gap-3 p-4">
                <Avatar className="h-12 w-12 flex-shrink-0">
                  <AvatarImage src={post.user.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{post.user.name[0]}</AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-bold text-foreground">{post.user.name}</p>
                    <p className="text-sm text-muted-foreground">{post.user.username}</p>
                    <span className="text-muted-foreground">·</span>
                    <p className="text-sm text-muted-foreground">{post.timestamp}</p>
                  </div>

                  <div className="flex items-center gap-4 mb-3">
                    <Badge variant="secondary" className="text-xs px-2 py-0.5">
                      {post.user.auctions} auctions
                    </Badge>
                    <Badge className="text-xs px-2 py-0.5 bg-green-100 text-green-700 hover:bg-green-100">
                      -{post.user.avgDiscount}% avg discount
                    </Badge>
                  </div>

                  <p className="text-foreground mb-3 leading-relaxed">{post.content}</p>

                  {post.image && (
                    <div className="rounded-2xl overflow-hidden mb-3 border border-border/50">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt="Post image"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-between max-w-md pt-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-2 text-muted-foreground hover:text-blue-500 hover:bg-blue-50 mobile-tap-subtle"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-sm">{post.comments}</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-2 text-muted-foreground hover:text-green-500 hover:bg-green-50 mobile-tap-subtle"
                    >
                      <Repeat2 className="h-4 w-4" />
                      <span className="text-sm">{post.shares}</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-2 text-muted-foreground hover:text-red-500 hover:bg-red-50 mobile-tap-subtle"
                    >
                      <Heart className="h-4 w-4" />
                      <span className="text-sm">{post.likes}</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-2 text-muted-foreground hover:text-blue-500 hover:bg-blue-50 mobile-tap-subtle"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
