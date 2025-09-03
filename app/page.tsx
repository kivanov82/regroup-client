"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Users, Wallet, User, Crown } from "lucide-react"

import HomePage from "@/components/HomePage"
import SocialPage from "@/components/SocialPage"
import WalletPage from "@/components/WalletPage"
import ProfilePage from "@/components/ProfilePage"
import ProductDetailsPage from "@/components/ProductDetailsPage"

export default function SneakerApp() {
  const [activeTab, setActiveTab] = useState("home")
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [showCreateAuction, setShowCreateAuction] = useState(false)

  const products = [
    {
      id: "1",
      name: "Air Jordan 1 Retro High",
      brand: "Jordan",
      price: 129.99,
      originalPrice: 170.0,
      image: "/air-jordan-1-retro-high-sneaker.png",
      rating: 4.8,
      reviews: 2847,
      likes: 1205,
      stock: 23,
      discount: 24,
      seller: { name: "SneakerHead", avatar: "/sneaker-seller-avatar.png", verified: true },
      description:
        "The Air Jordan 1 Retro High brings back the classic silhouette that started it all. Premium leather upper with iconic colorway and Nike Air cushioning for all-day comfort. A timeless design that never goes out of style.",
      sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11"],
      colors: ["White/Black/Red", "Black/White", "Royal Blue"],
      features: ["Premium Leather Upper", "Nike Air Cushioning", "Rubber Outsole", "Classic High-Top Design"],
      auction: {
        totalItems: 300,
        itemsSold: 127,
        currentDiscount: 45,
        timeLeft: "2h 34m",
        friendBonus: 5,
      },
    },
    {
      id: "2",
      name: "Nike Dunk Low",
      brand: "Nike",
      price: 89.99,
      originalPrice: 110.0,
      image: "/nike-dunk-low-sneaker.png",
      rating: 4.6,
      reviews: 1923,
      likes: 892,
      stock: 15,
      discount: 18,
      seller: { name: "KickzStore", avatar: "/kicks-store-avatar.png", verified: true },
      description:
        "The Nike Dunk Low returns with crisp overlays and original team colors. This basketball icon channels '80s vibes with premium materials and classic color-blocking.",
      sizes: ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11"],
      colors: ["White/Black", "University Blue", "Syracuse Orange"],
      features: ["Leather and Synthetic Upper", "Foam Midsole", "Rubber Outsole", "Low-Top Profile"],
      auction: {
        totalItems: 200,
        itemsSold: 85,
        currentDiscount: 35,
        timeLeft: "5h 12m",
        friendBonus: 5,
      },
    },
    {
      id: "3",
      name: "Adidas Yeezy Boost 350",
      brand: "Adidas",
      price: 199.99,
      originalPrice: 220.0,
      image: "/adidas-yeezy-boost-350-sneaker.png",
      rating: 4.9,
      reviews: 3421,
      likes: 2156,
      stock: 8,
      discount: 9,
      seller: { name: "YeezyWorld", avatar: "/yeezy-seller-avatar.png", verified: true },
      description:
        "The Yeezy Boost 350 V2 features an upper composed of re-engineered Primeknit. The post-dyed monofilament side stripe is woven into the upper construction.",
      sizes: ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "12"],
      colors: ["Zebra", "Cream White", "Beluga"],
      features: ["Primeknit Upper", "Boost Midsole", "Rubber Outsole", "Distinctive Side Stripe"],
      auction: {
        totalItems: 150,
        itemsSold: 142,
        currentDiscount: 25,
        timeLeft: "1h 45m",
        friendBonus: 5,
      },
    },
    {
      id: "4",
      name: "New Balance 550",
      brand: "New Balance",
      price: 79.99,
      originalPrice: 110.0,
      image: "/new-balance-550-sneaker.png",
      rating: 4.5,
      reviews: 876,
      likes: 543,
      stock: 31,
      discount: 27,
      seller: { name: "NBCollective", avatar: "/new-balance-seller-avatar.png", verified: false },
      description:
        "The New Balance 550 is a clean, simple design that's true to the original with premium leather construction and classic basketball silhouette.",
      sizes: ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11"],
      colors: ["White/Green", "White/Grey", "White/Navy"],
      features: ["Premium Leather", "EVA Midsole", "Rubber Outsole", "Vintage Basketball Style"],
      auction: {
        totalItems: 180,
        itemsSold: 45,
        currentDiscount: 50,
        timeLeft: "8h 22m",
        friendBonus: 5,
      },
    },
  ]

  const upcomingAuction = {
    id: "upcoming-1",
    name: "Nike Air Max 90 'Infrared'",
    brand: "Nike",
    originalPrice: 140.0,
    image: "/nike-air-max-90-infrared-sneaker.png",
    startTime: "Tomorrow, 2:00 PM",
    maxDiscount: 55,
    totalItems: 250,
    seller: { name: "NikeOfficial", avatar: "/nike-official-store-avatar.png", verified: true },
    price: 89.99,
    rating: 4.7,
    reviews: 1456,
    likes: 892,
    stock: 250,
    discount: 36,
    description:
      "The Nike Air Max 90 'Infrared' brings back the classic colorway that defined a generation. Features visible Air cushioning and premium materials for ultimate comfort and style.",
    sizes: ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "12"],
    colors: ["White/Infrared", "Black/Infrared", "Grey/Infrared"],
    features: ["Visible Air Max Unit", "Premium Leather Upper", "Rubber Waffle Outsole", "Classic 90s Design"],
    auction: {
      totalItems: 250,
      itemsSold: 0,
      currentDiscount: 55,
      timeLeft: "Starts Tomorrow",
      friendBonus: 5,
    },
  }

  const socialPosts = [
    {
      id: "1",
      user: {
        name: "Alex Chen",
        username: "@alexkicks",
        avatar: "/sneaker-seller-avatar.png",
        auctions: 47,
        avgDiscount: 35,
      },
      content: "Just copped these fire Jordan 1s! The quality is insane 🔥",
      image: "/air-jordan-1-retro-high-sneaker.png",
      likes: 234,
      comments: 45,
      shares: 12,
      timestamp: "2h ago",
      product: products[0],
    },
    {
      id: "2",
      user: {
        name: "Maya Rodriguez",
        username: "@mayasneaks",
        avatar: "/kicks-store-avatar.png",
        auctions: 23,
        avgDiscount: 28,
      },
      content: "Yeezy drop was crazy today! Managed to get my size 🙌",
      image: "/adidas-yeezy-boost-350-sneaker.png",
      likes: 189,
      comments: 67,
      shares: 23,
      timestamp: "4h ago",
      product: products[2],
    },
    {
      id: "3",
      user: {
        name: "Jordan Smith",
        username: "@jordankicks",
        avatar: "/yeezy-seller-avatar.png",
        auctions: 89,
        avgDiscount: 42,
      },
      content: "Another successful auction! My followers always get the best deals 💪",
      image: "/nike-dunk-low-sneaker.png",
      likes: 312,
      comments: 78,
      shares: 34,
      timestamp: "6h ago",
    },
  ]

  const currentUser = {
    name: "Your Name",
    username: "@yourhandle",
    avatar: "/user-profile-avatar.png",
    auctions: 23,
    avgDiscount: 32,
    isAmbassador: true,
    ambassadorLevel: "Gold Ambassador",
    totalFollowers: 1247,
    successfulAuctions: 89,
  }

  const renderCreateAuction = () => (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-background">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Crown className="h-5 w-5 text-yellow-500" />
              Create New Auction
            </h2>
            <Button variant="ghost" size="sm" onClick={() => setShowCreateAuction(false)} className="mobile-tap-subtle">
              ✕
            </Button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Product Name</label>
              <input
                type="text"
                placeholder="e.g., Nike Air Jordan 4 Retro"
                className="w-full mt-1 p-3 border border-border rounded-lg bg-background"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Starting Price</label>
                <input
                  type="number"
                  placeholder="299.99"
                  className="w-full mt-1 p-3 border border-border rounded-lg bg-background"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Max Discount %</label>
                <input
                  type="number"
                  placeholder="60"
                  className="w-full mt-1 p-3 border border-border rounded-lg bg-background"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Total Items</label>
                <input
                  type="number"
                  placeholder="300"
                  min="100"
                  className="w-full mt-1 p-3 border border-border rounded-lg bg-background"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Duration (hours)</label>
                <input
                  type="number"
                  placeholder="48"
                  className="w-full mt-1 p-3 border border-border rounded-lg bg-background"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-muted-foreground">Description</label>
              <textarea
                placeholder="Describe the product features and why it's special..."
                className="w-full mt-1 p-3 border border-border rounded-lg bg-background h-20 resize-none"
              />
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <Crown className="h-4 w-4 text-yellow-600" />
                <span className="text-sm font-medium text-yellow-800">Ambassador Privileges</span>
              </div>
              <ul className="text-xs text-yellow-700 space-y-1">
                <li>• Eligible for the highest discount</li>
                <li>• Earn % of the total pool if auction completed</li>
                <li>• Enhanced visibility to followers</li>
              </ul>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1 mobile-tap-subtle bg-transparent"
                onClick={() => setShowCreateAuction(false)}
              >
                Cancel
              </Button>
              <Button className="flex-1 mobile-tap">Create Auction</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <HomePage
            products={products}
            upcomingAuction={upcomingAuction}
            onProductSelect={setSelectedProduct}
            onProfileClick={() => setActiveTab("profile")}
          />
        )
      case "social":
        return <SocialPage socialPosts={socialPosts} />
      case "wallet":
        return <WalletPage />
      case "profile":
        return <ProfilePage currentUser={currentUser} onCreateAuction={() => setShowCreateAuction(true)} />
      default:
        return (
          <HomePage
            products={products}
            upcomingAuction={upcomingAuction}
            onProductSelect={setSelectedProduct}
            onProfileClick={() => setActiveTab("profile")}
          />
        )
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="pb-20">
        <div className="max-w-md mx-auto">{renderContent()}</div>
      </main>

      {selectedProduct &&
        (() => {
          let product = products.find((p) => p.id === selectedProduct)
          if (!product && selectedProduct === upcomingAuction.id) {
            product = upcomingAuction
          }
          return product ? <ProductDetailsPage product={product} onBack={() => setSelectedProduct(null)} /> : null
        })()}

      {showCreateAuction && renderCreateAuction()}

      <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center justify-around">
            {[
              { id: "home", icon: Home },
              { id: "social", icon: Users },
              { id: "wallet", icon: Wallet },
              { id: "profile", icon: User },
            ].map((tab) => (
              <Button
                key={tab.id}
                variant="ghost"
                size="sm"
                className={`flex items-center justify-center h-12 w-12 rounded-xl transition-all duration-200 mobile-tap-subtle ${
                  activeTab === tab.id ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => {
                  setActiveTab(tab.id)
                  setSelectedProduct(null)
                }}
              >
                <tab.icon
                  className={`h-6 w-6 transition-transform duration-200 ${activeTab === tab.id ? "scale-110" : ""}`}
                />
              </Button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  )
}
