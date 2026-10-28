"use client"
import React from 'react'
import Link from 'next/link'
import { useLogout } from '@/features/auth/hooks/useLogout'
const ProfileMenu = ({ open, accessToken, user }: { open: boolean, accessToken: string, user: { id: number, name: string, email: string, role: string } }) => {
    const LinksForUser = [{
        id: 1,
        name: "Dashboard",
        slug: "/my-account"
    }, {
        id: 2,
        name: "Orders",
        slug: "/my-account/orders"
    }, {
        id: 3,
        name: "Wishlist",
        slug: "/my-account/wishlist"
    }, {
        id: 4,
        name: "Account Details",
        slug: "/my-account/edit-account"
    }]
    const LinksForAdmin = [{
        id: 1,
        name: "Dashboard",
        slug: "/admin"
    }]
    const { mutate, isPending } = useLogout()
    const handleLogout = async () => {
        mutate(accessToken, {
            onSuccess: () => {
                window.location.href = "/"
            }
        })
    }
    return (
        <div
            className={`w-40 rounded-md absolute top-full right-0 bg-white p-2 flex flex-col gap-y-2 border border-gray-400 shadow-md
transition-all duration-200
${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
`}
        >
            {(user.role === 'admin' ? LinksForAdmin : LinksForUser).map((link: any) => (<Link key={link.id} href={link.slug} className='hover:bg-gray-100 px-2 py-1 text-left'>{link.name}</Link>))}
            <button disabled={isPending} onClick={() => { handleLogout() }} className='cursor-pointer hover:bg-gray-100 px-2 py-1 text-left'>Logout</button>
        </div>
    )
}

export default ProfileMenu