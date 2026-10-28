import React from 'react'
import Link from 'next/link'
import { ShoppingBag, Heart, CheckCircle, Clock } from 'lucide-react'


const StatsCard = ({ totalOrders, wishlistItems, pendingOrders, completedOrders }: { totalOrders: number, wishlistItems: number, pendingOrders: number, completedOrders: number }) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

            {/* Total Orders */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition">
                <div className="flex items-center justify-between">
                    <div className="p-3 bg-blue-50 rounded-xl">
                        <ShoppingBag className="w-6 h-6 text-blue-500" />
                    </div>
                    <span className="text-3xl font-bold text-gray-800">{totalOrders}</span>
                </div>
                <p className="text-gray-500 text-sm mt-3">Total Orders</p>
                <Link href="/my-account/orders" className="text-sm text-blue-600 hover:text-blue-700 mt-2 inline-flex items-center gap-1">
                    View Orders →
                </Link>
            </div>

            {/* Wishlist Items */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition">
                <div className="flex items-center justify-between">
                    <div className="p-3 bg-red-50 rounded-xl">
                        <Heart className="w-6 h-6 text-red-500" />
                    </div>
                    <span className="text-3xl font-bold text-gray-800">{wishlistItems}</span>
                </div>
                <p className="text-gray-500 text-sm mt-3">Wishlist Items</p>
                <Link href="/my-account/wishlist" className="text-sm text-blue-600 hover:text-blue-700 mt-2 inline-flex items-center gap-1">
                    View Wishlist →
                </Link>
            </div>

            {/* Completed Orders */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition">
                <div className="flex items-center justify-between">
                    <div className="p-3 bg-green-50 rounded-xl">
                        <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <span className="text-3xl font-bold text-gray-800">{completedOrders}</span>
                </div>
                <p className="text-gray-500 text-sm mt-3">Completed Orders</p>
                <Link href="/my-account/orders?status=completed" className="text-sm text-blue-600 hover:text-blue-700 mt-2 inline-flex items-center gap-1">
                    View Details →
                </Link>
            </div>

            {/* Pending Orders */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition">
                <div className="flex items-center justify-between">
                    <div className="p-3 bg-yellow-50 rounded-xl">
                        <Clock className="w-6 h-6 text-yellow-500" />
                    </div>
                    <span className="text-3xl font-bold text-gray-800">{pendingOrders}</span>
                </div>
                <p className="text-gray-500 text-sm mt-3">Pending Orders</p>
                <Link href="/my-account/orders?status=pending" className="text-sm text-blue-600 hover:text-blue-700 mt-2 inline-flex items-center gap-1">
                    View Details →
                </Link>
            </div>
        </div>
    )
}

export default StatsCard