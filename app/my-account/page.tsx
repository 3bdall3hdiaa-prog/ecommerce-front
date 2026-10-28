"use client"
import StatsCard from '@/features/dashboard/components/client/StatsCard'
import RecentOrderSection from '@/features/dashboard/components/client/RecentOrderSection'
import QuickAction from '@/features/dashboard/components/client/QuickAction'
import { useAuthStore } from '@/Store/authStore'
import { useGetOrder } from '@/features/order/hooks/useGetOrder'

const page = () => {
    const { user } = useAuthStore()
    const { data, isLoading } = useGetOrder()
    if (isLoading) return <div>loading</div>

    const countOrders = data?.count
    const countWishlist = data?.countWishlist

    const completedOrders = data?.completed
    const pendingOrders = data?.pending

    const recentOrders = data?.recentOrders
    return (
        <div className="flex flex-col gap-y-6">

            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
                <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl">
                        👋
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">Hello, {user?.name}!</h1>
                        <p className="text-white/80 mt-1">
                            Welcome back to your account dashboard. You can view your recent orders, manage your addresses, and edit your account details.
                        </p>
                    </div>
                </div>
            </div>
            <StatsCard pendingOrders={pendingOrders} completedOrders={completedOrders} totalOrders={countOrders} wishlistItems={countWishlist} />
            <RecentOrderSection recentOrders={recentOrders} />
            <QuickAction />

        </div>
    )
}

export default page