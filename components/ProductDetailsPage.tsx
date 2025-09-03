"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Share2, Heart, Clock, Info, TrendingUp, UserPlus, Star, ShoppingCart } from "lucide-react"

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
  description: string
  sizes: string[]
  features: string[]
  seller: {
    name: string
    avatar: string
    verified: boolean
  }
  auction: {
    totalItems: number
    itemsSold: number
    timeLeft: string
    friendBonus: number
  }
}

interface ProductDetailsPageProps {
  product: Product
  onBack: () => void
}

export default function ProductDetailsPage({ product, onBack }: ProductDetailsPageProps) {
  const [liked, setLiked] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [startY, setStartY] = useState(0)
  const [currentY, setCurrentY] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => {
      onBack()
    }, 300)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartY(e.touches[0].clientY)
    setIsDragging(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const deltaY = e.touches[0].clientY - startY
    if (deltaY > 0) {
      setCurrentY(deltaY)
    }
  }

  const handleTouchEnd = () => {
    if (currentY > 100) {
      handleClose()
    } else {
      setCurrentY(0)
    }
    setIsDragging(false)
  }

  const remainingItems = product.auction.totalItems - product.auction.itemsSold
  const progress = (product.auction.itemsSold / product.auction.totalItems) * 100
  const discountPoints = [
    { range: "First 75 items", discount: 60 },
    { range: "Items 76-150", discount: 50 },
    { range: "Items 151-225", discount: 40 },
    { range: "Items 226-300", discount: 30 },
  ]

  return (
    <div className="fixed inset-0 z-50 bg-black/50">
      <div
        className={`fixed inset-x-0 bottom-0 bg-background rounded-t-3xl transition-transform duration-300 ease-out ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
        style={{
          transform: `translateY(${currentY}px)`,
          height: "95vh",
          maxHeight: "95vh",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-12 h-1 bg-muted-foreground/30 rounded-full"></div>
        </div>

        <div className="h-full overflow-y-auto">
          <div className="space-y-6 pb-6">
            <div className="sticky top-0 z-10 px-4 py-4 bg-background/95 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-foreground hover:bg-muted p-2 mobile-tap-subtle rounded-full"
                  onClick={handleClose}
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-foreground hover:bg-muted p-2 mobile-tap-subtle rounded-full"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="px-4 space-y-6">
              <div className="relative">
                <div className="aspect-square w-full bg-muted rounded-2xl flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <Badge className="absolute top-4 left-4 bg-destructive text-destructive-foreground">
                  -{product.discount}%
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-4 right-4 h-10 w-10 p-0 bg-background/80 hover:bg-background mobile-tap-subtle rounded-full"
                  onClick={() => setLiked(!liked)}
                >
                  <Heart className={`h-5 w-5 ${liked ? "fill-red-500 text-red-500" : ""}`} />
                </Button>
              </div>

              <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      <span className="font-bold">Limited Auction</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Info className="h-4 w-4" />
                      <span className="text-sm">{product.auction.timeLeft} left</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>
                        Items sold: {product.auction.itemsSold}/{product.auction.totalItems}
                      </span>
                      <span>{remainingItems} left</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div
                        className="bg-white rounded-full h-2 transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      Discount Timeline
                    </h3>
                    <div className="space-y-1">
                      {discountPoints.map((point, index) => (
                        <div
                          key={index}
                          className={`flex justify-between text-xs p-1 rounded ${
                            index <= Math.floor(product.auction.itemsSold / 75) ? "bg-white/20" : "bg-white/10"
                          }`}
                        >
                          <span>{point.range}</span>
                          <span className="font-bold">-{point.discount}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <UserPlus className="h-4 w-4" />
                      <span className="font-semibold text-sm">Invite Friends Bonus</span>
                    </div>
                    <p className="text-xs mb-2">
                      Get an extra {product.auction.friendBonus}% off when you invite a friend to this auction!
                    </p>
                    <Button size="sm" className="bg-white text-orange-500 hover:bg-white/90 mobile-tap text-xs">
                      Invite Friend
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={product.seller.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{product.seller.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-muted-foreground">{product.seller.name}</span>
                  {product.seller.verified && (
                    <Badge variant="secondary" className="text-xs px-2 py-0.5">
                      ✓ Verified
                    </Badge>
                  )}
                </div>

                <div>
                  <h1 className="text-2xl font-bold text-foreground mb-1">{product.name}</h1>
                  <p className="text-lg text-muted-foreground">{product.brand}</p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-primary">${product.price}</span>
                  <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{product.rating}</span>
                    </div>
                    <span className="text-muted-foreground">({product.reviews} reviews)</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{product.stock} left in stock</span>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Available Sizes</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <Button
                        key={size}
                        variant="outline"
                        size="sm"
                        className="w-12 h-10 mobile-tap-subtle bg-transparent"
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Features</h3>
                  <div className="space-y-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 p-4 bg-background/95 backdrop-blur-sm border-t">
              <Button size="lg" className="w-full mobile-tap">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart - ${product.price}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
