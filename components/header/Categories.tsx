"use client"
import React, { useState } from 'react'
import CategoryItem from './CategoryItem'
import Subcategories from './Subcategories'
import { CategoryResponse } from '@/features/category/types/category.types'

interface Props {
    myCategories: CategoryResponse[]
    isLoading: boolean
}

const Categories = ({ myCategories, isLoading }: Props) => {
    const [activeCategory, setActiveCategory] = useState<CategoryResponse | null>(null)

    const isOpen = !!activeCategory
    const subCategories = activeCategory?.subcategories ?? []

    return (
        <div onMouseLeave={() => setActiveCategory(null)}>
            <ul className="flex items-center gap-x-4">
                {myCategories.map((category) => (
                    <li
                        key={category.id}
                        onMouseEnter={() => setActiveCategory(category)}
                    >
                        <CategoryItem category={category} />
                    </li>
                ))}
            </ul>

            <div
                onMouseOver={(e) => {
                    // يقفل بس لو الماوس فوق الأسود نفسه مش الأبيض
                    if (e.target === e.currentTarget) setActiveCategory(null)
                }}
                className={`absolute top-full left-0 z-50 w-screen h-screen bg-black/50 transition-opacity duration-200
                ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
                <div className="p-4 bg-white shadow-lg grid grid-cols-6 gap-4">
                    {subCategories.map((item: any, index: number) => (
                        <Subcategories
                            key={index}
                            activeCategory={activeCategory}
                            subcategory={item}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Categories