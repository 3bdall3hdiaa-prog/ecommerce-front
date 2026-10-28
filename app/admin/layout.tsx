"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useAuthStore } from '@/Store/authStore'
import { useEffect } from 'react'
const layout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()
    const { accessToken, isInitializing, user } = useAuthStore()
    const router = useRouter()


    const isActive = (path: string) => {
        return pathname === path
    }
    const links = [
        { label: "Dashboard", href: "/admin" },
        { label: "Orders", href: "/admin/orders" },
        { label: "Categories", href: "/admin/categories" },
        { label: "SubCategories", href: "/admin/subcategories" },
        { label: "SubSubCategories", href: "/admin/subsubcategories" },
        { label: "Products", href: "/admin/products" },
        { label: "Users", href: "/admin/users" },
        { label: "Reviews", href: "/admin/reviews" },
        { label: "Coupons", href: "/admin/coupons" },
        { label: "Analytics", href: "/admin/analytics" },
    ]

    React.useEffect(() => {
        if (!isInitializing && (!user || user.role !== 'admin')) {
            router.replace('/')
        }
    }, [isInitializing, user, router])

    if (isInitializing) return <p>Loading...</p>
    if (!user || user.role !== 'admin') return null

    return (
        <div className='px-4 py-6 '>
            {/* Header */}
            <div className='flex flex-col gap-y-3'>
                <p className='text-3xl font-semibold'>Admin Dashboard</p>
                <div className='flex gap-x-2'>
                    <Link className='text-gray-500 hover:text-black cursor-pointer' href='/' >Home</Link> /
                    <p>Admin</p>
                </div>
            </div>

            <div className='mt-10 flex'>
                {/* Sidebar */}
                <aside className='pr-5 w-1/4 border-r border-gray-300'>
                    <div className='pb-3 pl-3 border-b border-gray-300'>
                        <p className='text-xl uppercase'>Admin Panel</p>
                    </div>

                    <div className='py-3 flex flex-col'>
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`hover:bg-gray-200 transition duration-200 cursor-pointer 
                                ${isActive(link.href) ? 'bg-gray-200' : ''} 
                                text-md font-semibold rounded-full px-3 py-3`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </aside>

                {/* Main */}
                <main className='w-3/4 px-8'>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default layout