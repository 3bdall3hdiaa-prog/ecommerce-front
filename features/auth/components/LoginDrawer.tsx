"use client"
import React from 'react'
import { Eye, EyeOff, X } from 'lucide-react'
import Link from 'next/link'
import { useLogin } from '../hooks/useLogin'
import { useAuthStore } from '@/store/authStore'
import { useRouter } from 'next/navigation'
const LoginDrawer = ({ open2, setOpen2 }: any) => {
    const [eye, setEye] = React.useState(false)
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const { mutate, data, isPending } = useLogin()
    const { addAccessToken, setUser } = useAuthStore();
    const router = useRouter()

    const handleLogin = (e: any) => {
        e.preventDefault();
        mutate({ email, password }, {
            onSuccess: (data) => {
                setEmail("");
                setPassword("");
                addAccessToken(data.accessToken);
                setUser(data.data);
                if (data.data.role === "user") {
                    router.push("/my-account");
                } else if (data.data.role === "admin") {
                    router.push("/admin");
                }
            }
        });
    };
    return (
        <>
            {/* الخلفية */}
            <div
                onClick={() => setOpen2(false)}
                className={`z-[9999] inset-0 fixed bg-black/50 transition-opacity duration-500 ${open2 ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            />

            {/* البوكس نفسه */}
            <div
                className={`z-[9999] fixed top-0 right-0 h-full w-90 bg-white py-4 flex flex-col gap-y-4 
      transform transition-transform duration-500 ease-in-out
      ${open2 ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}`}
            >
                {/* Sign in و زر الإغلاق */}
                <div className='text-lg text-black px-4 flex justify-between'>
                    <p>Sign in</p>
                    <div className='flex items-center gap-x-2 cursor-pointer' onClick={() => setOpen2(false)}>
                        <X />
                        Close
                    </div>
                </div>

                <hr className='text-gray-300' />

                {/* Form */}
                <form onSubmit={(e: any) => { handleLogin(e); setOpen2(false) }} className='flex flex-col gap-y-4 px-4'>
                    <div className='w-full text-black'>
                        <label htmlFor="email">
                            Username or Email Address <span className='text-[#E14A5C]'>*</span>
                        </label>
                        <input id='email' onChange={(e) => setEmail(e.target.value)} className='px-4 py-2 w-full rounded-full text-black border border-gray-400' type="text" />
                    </div>
                    <div className='w-full text-black'>
                        <label htmlFor="password">
                            Password <span className='text-[#E14A5C]'>*</span>
                        </label>
                        <div className='px-4 flex justify-between items-center w-full rounded-full border border-gray-400'>
                            <input id='password' onChange={(e) => setPassword(e.target.value)} className='w-full outline-none py-2' type={eye ? "text" : "password"} />
                            {eye ? <EyeOff onClick={() => setEye(false)} /> : <Eye onClick={() => setEye(true)} />}
                        </div>
                    </div>
                    <button className='cursor-pointer hover:opacity-60 transition duration-300 mt-4 rounded-full bg-[#E14A5C] text-white py-2'>Sign in</button>
                </form>

                <hr className='text-gray-300 mt-10' />

                <div>
                    <p className='text-black text-center'>
                        Don't have an account? <Link href={"/register"} onClick={() => { setOpen2(false) }} className='text-[#E14A5C] cursor-pointer'>Register</Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default LoginDrawer