import React from 'react'
import { useForgetPassword } from '../hooks/useForgetPassword'
import { useRouter } from 'next/navigation';

const ForgotForm = ({ form }: { form: "login" | "register" | "forgot" }) => {
    const [email, setEmail] = React.useState("");
    const { mutate, isPending } = useForgetPassword()
    const router = useRouter()
    const handleForgotPassword = () => {
        mutate({ email }, {
            onSuccess: () => {
                localStorage.setItem("email", email);
                router.push("/otp?mode=forgot")
            },
            onError: (error: any) => {
                alert(error.response?.data.message || "Failed to send reset email")
            }
        })
    }
    return (
        <>
            {form === "forgot" && (
                <div className={`col-span-1   border-r border-gray-300 px-8 gap-y-4 h-full transition-all duration-500 ease-in-out flex flex-col ${form === "forgot" ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6 pointer-events-none"}`}>
                    <p className='text-2xl font-bold'>Forgot Password</p>

                    {/* Form */}
                    <form onSubmit={(e: any) => {
                        e.preventDefault();
                        handleForgotPassword();
                    }} className='flex flex-col gap-y-4'>
                        <div className='w-full text-black'>
                            <label htmlFor="email" className='text-sm font-medium'>
                                Email Address <span className='text-red-400'>*</span>
                            </label>
                            <input
                                className='bg-white px-4 py-2 w-full rounded-full text-black border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent'
                                type="email"
                                required
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <button type="submit" className={`w-full mt-2 rounded-full bg-[#E14A5C] ${isPending ? "opacity-50 cursor-not-allowed" : " cursor-pointer hover:from-red-600 hover:to-red-700"} text-white py-2.5 font-semibold transition-all transform hover:scale-[1.02] shadow-md `} disabled={isPending}>
                            {isPending ? "Sending..." : "Send"}
                        </button>
                    </form>
                </div>
            )}
        </>
    )
}

export default ForgotForm