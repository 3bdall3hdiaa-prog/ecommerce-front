"use client"
import React from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { useRegister } from '../hooks/useRegister'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
const RegisterForm = ({ form }: { form: 'register' | 'login' | 'forgot' }) => {

    const { mutate, isPending, data } = useRegister();

    const [eye, setEye] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const router = useRouter();
    const handleRegister = (e: any) => {
        e.preventDefault();
        mutate({ email, password }, {
            onSuccess: () => {

                setEmail("");
                setPassword("");
                localStorage.setItem("email", email);
                alert("Registration successful!");
                router.push("/otp?mode=register");
            }
        });

    };

    const handleGoogleRegister = () => {
        window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/oauth2/google`;
    };



    return (
        <>
            {form === 'register' && (
                <div className={` col-span-1 border-r border-gray-300 px-8 gap-y-4 h-full transition-all duration-500 ease-in-out flex flex-col ${form === 'register' ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6 pointer-events-none"}`}>
                    <p className='text-2xl font-bold'>Register</p>

                    {/* Form */}
                    <form onSubmit={(e) => handleRegister(e)} className='flex flex-col gap-y-4'>
                        <div className='w-full text-black'>
                            <label htmlFor="email" className='text-sm font-medium'>
                                Email Address <span className='text-red-400'>*</span>
                            </label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='bg-white px-4 py-2 w-full rounded-full text-black border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent'
                                type="email"
                                required
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className='w-full text-black'>
                            <label htmlFor="password" className='text-sm font-medium'>
                                Password <span className='text-red-400'>*</span>
                            </label>
                            <div className='bg-white px-4 flex justify-between items-center w-full rounded-full border border-gray-200 focus-within:ring-2 focus-within:ring-red-400'>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full outline-none py-2"
                                    type={eye ? "text" : "password"}
                                    placeholder="Create a password"
                                    required
                                    minLength={6}
                                    pattern="^(?=.*[A-Za-z])(?=.*\d).{6,}$"
                                    title="Password must be at least 6 characters long and contain at least one letter and one number."
                                />
                                <button type="button" onClick={() => setEye(!eye)} className='ml-2'>
                                    {eye ? <EyeOff className='hover:cursor-pointer hover:text-gray-500' size={18} /> : <Eye className='hover:cursor-pointer hover:text-gray-500' size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Register Button - Red-400 */}
                        <button
                            type="submit"
                            disabled={isPending}
                            className={` ${isPending ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} w-full mt-4 rounded-full bg-[#E14A5C]  text-white py-2.5 font-semibold transition-all transform hover:scale-[1.02] shadow-md`}
                        >
                            Register
                        </button>

                        {/* Divider */}
                        <div className='relative my-2'>
                            <div className='absolute inset-0 flex items-center'>
                                <div className='w-full border-t border-gray-300'></div>
                            </div>
                            <div className='relative flex justify-center text-sm'>
                                <span className='px-3 bg-white text-gray-500'>Or continue with</span>
                            </div>
                        </div>

                        {/* Google Sign Up Button */}
                        <button
                            type="button"
                            onClick={handleGoogleRegister}
                            className='cursor-pointer w-full rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 py-2.5 font-semibold transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3 shadow-sm'
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    fill="#4285F4"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="#FBBC05"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                />
                                <path
                                    fill="#EA4335"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
                            </svg>
                            Continue with Google
                        </button>
                    </form>
                </div>
            )}
        </>
    )
}

export default RegisterForm