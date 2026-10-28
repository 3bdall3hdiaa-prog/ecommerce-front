"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useAuthStore } from '@/Store/authStore'
import { useLogout } from '@/features/auth/hooks/useLogout'

const navLinks = [
    { href: '/my-account', label: 'Dashboard' },
    { href: '/my-account/orders', label: 'Orders' },
    { href: '/my-account/edit-account', label: 'Account details' },
    { href: '/my-account/wishlist', label: 'Wishlist' },
]

const linkClass = (isActive: boolean) =>
    `hover:bg-gray-200 transition duration-200 ease-in-out cursor-pointer text-md font-semibold rounded-full px-3 py-3 ${isActive ? 'bg-gray-200' : ''
    }`

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()
    const router = useRouter()
    const { user, isInitializing, accessToken } = useAuthStore()
    const pageTitle = pathname === '/my-account/wishlist' ? 'Wishlist' : 'My Account'
    const { mutate, isPending } = useLogout()

    React.useEffect(() => {
        if (!isInitializing && (!user || user.role !== 'user')) {
            router.replace('/')
        }
    }, [isInitializing, user, router])

    if (isInitializing) return <p>Loading...</p>
    if (!user || user.role !== 'user') return null


    const handleLogout = async () => {
        mutate(accessToken, {
            onSuccess: () => {
                window.location.href = "/"
            }
        })
    }

    return (
        <div className='px-4 py-6'>
            <div className='flex flex-col gap-y-3'>
                <p className='text-3xl font-semibold'>{pageTitle}</p>
                <div className='flex gap-x-2'>
                    <Link className='text-gray-500 hover:text-black cursor-pointer' href='/'>
                        Home
                    </Link>
                    /
                    <p>{pageTitle}</p>
                </div>
            </div>

            <div className='mt-10 flex'>
                <aside className='pr-5 w-1/4 border-r border-gray-300'>
                    <div className='pb-3 pl-3 border-b border-gray-300'>
                        <p className='text-xl uppercase'>My Account</p>
                    </div>
                    <div className='py-3 flex flex-col'>
                        {navLinks.map(({ href, label }) => {
                            const isActive =
                                pathname === href ||
                                (href === '/my-account/orders' && pathname.startsWith('/my-account/view-order'))

                            return (
                                <Link key={href} href={href} className={linkClass(isActive)}>
                                    {label}
                                </Link>
                            )
                        })}
                        <Link
                            className={linkClass(pathname === '/')}
                            onClick={handleLogout}
                            href='/'
                        >
                            Logout
                        </Link>
                    </div>
                </aside>
                <main className='w-3/4 px-8'>{children}</main>
            </div>
        </div>
    )
}

export default AccountLayout