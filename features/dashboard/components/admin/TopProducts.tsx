import { productResponse } from '@/features/product/types/Product'
import React from 'react'
import { Star } from 'lucide-react'

const TopProducts = ({ topProducts }: { topProducts: productResponse[] }) => {
    const topRated = topProducts
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-4 border-b border-gray-100">
                <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    Top Rated Products
                </h2>
            </div>
            <div className="p-4 space-y-3">
                {topRated.map((p, idx) => (
                    <div key={p.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition">
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-bold text-gray-400 w-6">#{idx + 1}</span>
                            <div>
                                <p className="font-medium text-gray-800">{p.name}</p>
                                <p className="text-xs text-gray-400">${p.price}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded">
                            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                            <span className="text-sm font-semibold text-yellow-600">{p.ratings}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopProducts