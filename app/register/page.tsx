"use client"
import React from 'react'
import Link from 'next/link'
import LoginForm from '../../features/auth/components/LoginForm'
import RegisterForm from '../../features/auth/components/RegisterForm'
import ForgotForm from '@/features/auth/components/ForgotForm'
const page = () => {
    const [form, setForm] = React.useState<"login" | "register" | "forgot">("login");
    return (
        <div className=' '>
            {/*navbar */}
            <div className='space-y-2 p-5'>
                <p className='text-3xl font-semibold  capitalize'>My Account</p>
                <ul className='flex gap-x-2 '>
                    <li className='hover:text-black text-gray-500'><Link href="/">Home</Link></li>/
                    <li className='capitalize'>My Account</li>
                </ul>
            </div>
            {/* */}
            <div className='py-10 '>

                <div className='grid grid-cols-2 px-50'>
                    {/*login*/}
                    <LoginForm form={form} setForm={setForm} />
                    {/*register */}
                    <RegisterForm form={form} />
                    <ForgotForm form={form} />
                    <div className=' col-span-1 px-5  flex flex-col items-center gap-y-4'>
                        <p className=' text-2xl font-bold'>Login</p>
                        <p className='text-gray-500 '>
                            Registering for this site allows you to access your order status and history. Just fill in the fields below, and we'll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.
                        </p>
                        <button onClick={() => setForm(form === "login" ? "register" : "login")} className='px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-full'>{form === "login" ? "Register" : "Login"}</button>
                    </div>
                </div>

            </div>




        </div>

    )
}

export default page