"use client"

import { Button } from "@/components/ui/button"
import { Plus, ArrowUpRight, Send } from "lucide-react"

export default function WalletPage() {
  return (
    <div className="space-y-6 pb-6">
      <div className="bg-gradient-to-r from-primary to-accent text-white px-4 py-6 rounded-b-3xl">
        <h1 className="text-2xl font-bold mb-2">Wallet</h1>
        <div className="bg-white/10 rounded-2xl p-4">
          <p className="text-white/80 text-sm mb-1">Available Balance</p>
          <p className="text-3xl font-bold">$247.50</p>

          <div className="flex items-center gap-1.5 mt-4">
            <Button
              size="sm"
              className="bg-white/20 hover:bg-white/30 text-white border-0 flex items-center gap-1 mobile-tap text-xs px-2 py-1 h-7 flex-1"
            >
              <Plus className="h-3 w-3" />
              <span>Add money</span>
            </Button>
            <Button
              size="sm"
              className="bg-white/20 hover:bg-white/30 text-white border-0 flex items-center gap-1 mobile-tap text-xs px-2 py-1 h-7 flex-1"
            >
              <ArrowUpRight className="h-3 w-3" />
              <span>Cash Out</span>
            </Button>
            <Button
              size="sm"
              className="bg-white/20 hover:bg-white/30 text-white border-0 flex items-center gap-1 mobile-tap text-xs px-2 py-1 h-7 flex-1"
            >
              <Send className="h-3 w-3" />
              <span>Send</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="px-4">
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white mb-6">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-bold">4.5% per year</h2>
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-xs font-bold">i</span>
            </div>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <p className="text-white/90 text-sm">Earn digital EUR on Deposit</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <p className="text-white/90 text-sm">Cash out instantly</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <p className="text-white/90 text-sm">Yield accrues every second</p>
            </div>
          </div>

          <Button size="sm" className="bg-white text-green-600 hover:bg-white/90 mobile-tap">
            Deposit
          </Button>
        </div>
      </div>

      <div className="px-4">
        <h2 className="text-xl font-bold text-foreground mb-4">Recent Transactions</h2>
        <div className="space-y-0 bg-card rounded-2xl overflow-hidden border">
          {[
            { type: "purchase", item: "Air Jordan 1 Retro High", amount: -129.99, date: "Today, 2:30 PM" },
            { type: "refund", item: "Nike Dunk Low", amount: +89.99, date: "Yesterday, 4:15 PM" },
            { type: "deposit", item: "Wallet Top-up", amount: +200.0, date: "Dec 15, 10:22 AM" },
            { type: "purchase", item: "Adidas Yeezy Boost 350", amount: -199.99, date: "Dec 14, 6:45 PM" },
          ].map((transaction, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border-b border-border/50 last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    transaction.type === "purchase"
                      ? "bg-red-100 text-red-600"
                      : transaction.type === "refund"
                        ? "bg-green-100 text-green-600"
                        : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {transaction.type === "purchase" ? "−" : transaction.type === "refund" ? "↵" : "+"}
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{transaction.item}</p>
                  <p className="text-xs text-muted-foreground">{transaction.date}</p>
                </div>
              </div>
              <p className={`font-semibold text-sm ${transaction.amount > 0 ? "text-green-600" : "text-foreground"}`}>
                {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
