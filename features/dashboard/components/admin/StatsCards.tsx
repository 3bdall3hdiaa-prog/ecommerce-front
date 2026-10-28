import React from 'react'
import { Package, Users, Layers, DollarSign, ShoppingBag, TrendingUp, Award, Star } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface Props {
    countUsers: number
    countProducts: number
    countCategories: number
    countSubCategories: number
    countSubSubCategories: number
    avgPrice: number
    totalStock: number
    totalValue: number
    avgRating: number
    topRated: any

}
const StatsCards = ({ countUsers, countProducts, countCategories, countSubCategories, countSubSubCategories, avgPrice, totalStock, totalValue, avgRating, topRated }: Props) => {
    const router = useRouter()
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                <div className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-3 border border-gray-100">
                    <div className="p-3 bg-blue-50 rounded-lg">
                        <Package className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-400">Total Products</p>
                        <p className="text-2xl font-bold text-gray-800">{countProducts}</p>
                    </div>
                </div>


                <div className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-3 border border-gray-100">
                    <div className="p-3 bg-green-50 rounded-lg">
                        <Users className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-400">Total Users</p>
                        <p className="text-2xl font-bold text-gray-800">{countUsers}</p>
                        <p className="text-xs text-green-600"> active</p>
                    </div>
                </div>


                <div className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-3 border border-gray-100">
                    <div className="p-3 bg-purple-50 rounded-lg">
                        <Layers className="w-6 h-6 text-purple-500" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-400">Categories</p>
                        <p className="text-2xl font-bold text-gray-800">{countCategories}</p>
                        <p className="text-xs text-gray-500">{countSubCategories} sub, {countSubSubCategories} sub-sub</p>
                    </div>
                </div>


                <div className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-3 border border-gray-100">
                    <div className="p-3 bg-yellow-50 rounded-lg">
                        <DollarSign className="w-6 h-6 text-yellow-500" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-400">Avg Price</p>
                        <p className="text-2xl font-bold text-gray-800">${avgPrice.toFixed(2)}</p>
                    </div>
                </div>
            </div>
            {/* Second Row - Products Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-3 border border-gray-100">
                    <div className="p-3 bg-emerald-50 rounded-lg">
                        <ShoppingBag className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-400">Total Stock</p>
                        <p className="text-2xl font-bold text-gray-800">{totalStock}</p>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-3 border border-gray-100">
                    <div className="p-3 bg-amber-50 rounded-lg">
                        <TrendingUp className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-400">Inventory Value</p>
                        <p className="text-2xl font-bold text-gray-800">${totalValue.toLocaleString()}</p>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-3 border border-gray-100">
                    <div className="p-3 bg-rose-50 rounded-lg">
                        <Star className="w-6 h-6 text-rose-500" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-400">Avg Rating</p>
                        <p className="text-2xl font-bold text-gray-800">
                            {avgRating.toFixed(1)}
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-3 border border-gray-100">
                    <div className="p-3 bg-indigo-50 rounded-lg">
                        <Award className="w-6 h-6 text-indigo-500" />
                    </div>
                    <div onClick={() => router.push(`/product/${topRated?.id}`)} className='cursor-pointer hover:scale-105 transition duration-200'>
                        <p className="text-sm text-gray-400">Top Rated</p>
                        <p className="line-clamp-1 text-lg font-bold text-gray-800">{topRated?.name || 'N/A'}</p>
                        <p className="text-xs text-yellow-500">⭐ {topRated?.ratings || 0}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StatsCards