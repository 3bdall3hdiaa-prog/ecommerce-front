import React from 'react'
import Link from 'next/link'
import { Settings, ShoppingCart, ListOrdered, Heart, User } from 'lucide-react'
const QuickAction = () => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="p-5 border-b border-gray-100">
                <div className="flex items-center gap-2">
                    <Settings className="w-5 h-5 text-gray-700" />
                    <h2 className="text-lg font-semibold text-gray-800">Quick Actions</h2>
                </div>
            </div>

            <div className="p-5">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <Link href="/shop" className="flex flex-col items-center gap-2 p-3 bg-black text-white rounded-xl hover:bg-gray-800 transition group">
                        <ShoppingCart className="w-5 h-5" />
                        <span className="text-sm font-medium">Shop Now</span>
                    </Link>

                    <Link href="/my-account/orders" className="flex flex-col items-center gap-2 p-3 bg-gray-50 text-gray-700 rounded-xl hover:bg-gray-100 transition">
                        <ListOrdered className="w-5 h-5" />
                        <span className="text-sm font-medium">My Orders</span>
                    </Link>

                    <Link href="/my-account/wishlist" className="flex flex-col items-center gap-2 p-3 bg-gray-50 text-gray-700 rounded-xl hover:bg-gray-100 transition">
                        <Heart className="w-5 h-5" />
                        <span className="text-sm font-medium">Wishlist</span>
                    </Link>

                    <Link href="/my-account/edit-account" className="flex flex-col items-center gap-2 p-3 bg-gray-50 text-gray-700 rounded-xl hover:bg-gray-100 transition">
                        <User className="w-5 h-5" />
                        <span className="text-sm font-medium">Account</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default QuickAction