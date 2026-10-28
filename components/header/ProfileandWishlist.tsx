"use client"
import React from 'react'
import { Heart, UserRound, X } from 'lucide-react'
import Link from 'next/link'
import LoginDrawer from '../../features/auth/components/LoginDrawer'
import ProfileMenu from './ProfileMenu'
const ProfileandWishlist = ({ accessToken, user }: { accessToken: string, user: { id: number, name: string, email: string, role: string } }) => {
    const [open, setOpen] = React.useState(false)
    const [open2, setOpen2] = React.useState(false)
    return (
        <div className='flex gap-x-2'>
            {/*wishlist */}
            {user.role !== "admin" &&
                <div className='hover:text-gray-500 cursor-pointer duration-75 transition flex text-white gap-x-2 pr-4 border-r border-[#FFFFFF] items-center justify-center'>
                    <Heart />
                    <Link href="/my-account/wishlist">Wishlist</Link>
                </div>
            }
            {/*profile */}
            <div onMouseEnter={() => { setOpen(true); }} onMouseLeave={() => { setOpen(false) }} className='relative hover:text-gray-500 cursor-pointer duration-75 transition flex gap-x-2 items-center text-white justify-center  '>
                {/* <UserRound /> */}
                {accessToken ?

                    <div className='flex gap-x-2'><UserRound /> <p>Hello, {user.name || user.email.split("@")[0]}</p>
                        <ProfileMenu user={user} accessToken={accessToken} open={open} />
                    </div>
                    :
                    <div className='flex gap-x-2' onClick={() => setOpen2(true)}>
                        <UserRound />
                        <p> Login/Register</p>
                    </div>}


                <LoginDrawer open2={open2} setOpen2={setOpen2} />
            </div>
        </div>
    )
}

export default ProfileandWishlist