import React from 'react'
import Link from 'next/link'
import { ShoppingBag, Heart, Package, CheckCircle, Clock, Eye } from 'lucide-react'
import { orderResponse } from '@/features/order/types/order.types'
const RecentOrderSection = ({ recentOrders }: { recentOrders: orderResponse[] }) => {
    const handleStyle = (status: string) => {
        switch (status) {
            case 'pending':
                return 'bg-yellow-50 text-yellow-500'
            case 'completed':
                return 'bg-green-50 text-green-500'
            case 'cancelled':
                return 'bg-red-50 text-red-500'
            default:
                return 'bg-gray-50 text-gray-500'
        }
    }
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="p-5 border-b border-gray-100">
                <div className="flex items-center gap-2">
                    <Package className="w-5 h-5 text-gray-700" />
                    <h2 className="text-lg font-semibold text-gray-800">Recent Orders</h2>
                </div>
            </div>

            <div className="p-5 space-y-3">
                {recentOrders.map((order, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 border border-gray-100 rounded-xl p-4 hover:bg-gray-50 transition">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                <Package className="w-5 h-5 text-gray-500" />
                            </div>
                            <div>
                                <p className="font-medium text-gray-800">{order.id}</p>
                                <p className="text-sm text-gray-400">Placed on {new Date(order.createdAt).toDateString()}</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between sm:justify-end gap-6">
                            <div className="text-right">
                                <span className={`text-sm font-medium ${handleStyle(order.status)} px-2 py-1 rounded-full`}>
                                    {order.status}
                                </span>
                                <p className="text-sm text-gray-500 mt-1">${order.totalAmount}</p>
                            </div>
                            <Link href={`/my-account/view-order/${order.id}`} className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1">
                                View <Eye className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                ))}

                {recentOrders.length === 0 && (
                    <div className="text-center py-8">
                        <Package className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                        <p className="text-gray-500">No orders yet</p>
                        <Link href="/shop" className="text-blue-600 text-sm mt-2 inline-block">
                            Start Shopping →
                        </Link>
                    </div>
                )}
            </div>

            {recentOrders.length > 0 && (
                <div className="p-4 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
                    <Link href="/my-account/orders" className="text-blue-600 hover:text-blue-700 text-sm flex items-center justify-center gap-1">
                        View All Orders →
                    </Link>
                </div>
            )}
        </div>

    )
}

export default RecentOrderSection