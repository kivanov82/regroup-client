"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, Star, Clock, Crown } from "lucide-react"

interface Product {
  id: string
  name: string
  brand: string
  price: number
  originalPrice: number
  discount: number
  image: string
  rating: number
  reviews: number
  stock: number
  seller: {
    name: string
    avatar: string
    verified: boolean
  }
}

interface UpcomingAuction {
  id: string // Added id field for navigation
  name: string
  brand: string
  image: string
  startTime: string
  maxDiscount: number
  seller: {
    name: string
    avatar: string
    verified: boolean
  }
}

interface HomePageProps {
  products: Product[]
  upcomingAuction: UpcomingAuction
  onProductSelect: (id: string) => void
  onProfileClick: () => void
}

export default function HomePage({ products, upcomingAuction, onProductSelect, onProfileClick }: HomePageProps) {
  const [liked, setLiked] = useState<Record<string, boolean>>({})

  const toggleLike = (id: string) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="space-y-6 pb-6">
      <div className="bg-primary text-primary-foreground px-4 py-4 rounded-b-3xl">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Regroup</h1>
          <div className="relative cursor-pointer" onClick={onProfileClick}>
            <Avatar className="h-10 w-10 border-2 border-primary-foreground/20">
              <AvatarImage src="/user-profile-avatar.png" />
              <AvatarFallback>YU</AvatarFallback>
            </Avatar>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center border-2 border-primary-foreground">
              <Crown className="h-3 w-3 text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-foreground">Trending Now</h2>
          <Button variant="ghost" size="sm" className="text-muted-foreground mobile-tap-subtle">
            View All
          </Button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          {products.map((product) => (
            <Card
              key={product.id}
              className="min-w-[200px] max-w-[200px] flex-shrink-0 border-0 shadow-lg cursor-pointer mobile-tap-subtle"
              onClick={() => onProductSelect(product.id)}
            >
              <CardContent className="p-3">
                <div className="relative mb-3">
                  <div className="aspect-square w-full bg-muted rounded-xl flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground text-xs">
                    -{product.discount}%
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 h-7 w-7 p-0 bg-background/80 hover:bg-background"
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleLike(product.id)
                    }}
                  >
                    <Heart className={`h-3 w-3 ${liked[product.id] ? "fill-red-500 text-red-500" : ""}`} />
                  </Button>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-1">
                    <Avatar className="h-5 w-5">
                      <AvatarImage src={product.seller.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="text-xs">{product.seller.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-muted-foreground truncate">{product.seller.name}</span>
                    {product.seller.verified && (
                      <Badge variant="secondary" className="text-xs px-1 py-0">
                        ✓
                      </Badge>
                    )}
                  </div>

                  <h3 className="font-semibold text-sm text-foreground line-clamp-2">{product.name}</h3>
                  <p className="text-xs text-muted-foreground">{product.brand}</p>

                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-primary">${product.price}</span>
                    <span className="text-xs text-muted-foreground line-through">${product.originalPrice}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">{product.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{product.stock} left</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-foreground">Upcoming</h2>
          <Button variant="ghost" size="sm" className="text-muted-foreground mobile-tap-subtle">
            View All
          </Button>
        </div>

        <Card
          className="border-0 shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white cursor-pointer mobile-tap-subtle"
          onClick={() => onProductSelect(upcomingAuction.id)}
        >
          {" "}
          {/* Added click handler for upcoming auction */}
          <CardContent className="p-4">
            <div className="flex gap-4">
              <div className="aspect-square w-20 bg-white/20 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0">
                <img
                  src={upcomingAuction.image || "/placeholder.svg"}
                  alt={upcomingAuction.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <Avatar className="h-5 w-5">
                    <AvatarImage src={upcomingAuction.seller.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="text-xs">{upcomingAuction.seller.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-white/80">{upcomingAuction.seller.name}</span>
                  {upcomingAuction.seller.verified && (
                    <Badge variant="secondary" className="text-xs px-1 py-0 bg-white/20 text-white border-0">
                      ✓
                    </Badge>
                  )}
                </div>

                <h3 className="font-bold text-sm mb-1">{upcomingAuction.name}</h3>
                <p className="text-xs text-white/80 mb-2">{upcomingAuction.brand}</p>

                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-3 w-3" />
                  <span className="text-xs">Starts {upcomingAuction.startTime}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-xs">
                    <span className="text-white/80">Up to </span>
                    <span className="font-bold">-{upcomingAuction.maxDiscount}% off</span>
                  </div>
                  <Button
                    size="sm"
                    className="bg-white/20 hover:bg-white/30 text-white border-0 mobile-tap text-xs px-3 py-1 h-6"
                  >
                    Notify Me
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="px-4">
        <h2 className="text-xl font-bold text-foreground mb-4">Shop by Brand</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: "Nike", logo: "https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png" },
            { name: "Adidas", logo: "https://logos-world.net/wp-content/uploads/2020/04/Adidas-Logo.png" },
            { name: "Jordan", logo: "https://logos-world.net/wp-content/uploads/2020/06/Jordan-Logo.png" },
            { name: "New Balance", logo: "https://logos-world.net/wp-content/uploads/2020/09/New-Balance-Logo.png" },
          ].map((brand) => (
            <Card key={brand.name} className="border-0 shadow-sm hover:shadow-md transition-shadow mobile-tap-subtle">
              <CardContent className="p-4 text-center">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-3 flex items-center justify-center shadow-sm border">
                  <img
                    src={brand.logo || "/placeholder.svg"}
                    alt={`${brand.name} logo`}
                    className="w-10 h-10 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = "none"
                      const parent = target.parentElement
                      if (parent) {
                        parent.innerHTML = `<span class="text-lg font-bold text-muted-foreground">${brand.name[0]}</span>`
                      }
                    }}
                  />
                </div>
                <p className="font-medium text-foreground">{brand.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
