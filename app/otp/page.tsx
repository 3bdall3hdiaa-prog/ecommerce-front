'use client'

import { useState } from 'react'
import { useVerifyOtp } from "@/features/auth/hooks/useVerifyOtp";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
const Page = () => {
    const searchParams = useSearchParams()
    const mode = searchParams.get("mode")
    const [otp, setOtp] = useState(['', '', '', '', '', ''])
    const { mutate, isPending } = useVerifyOtp()
    const router = useRouter()
    const handleChange = (value: string, index: number) => {
        if (!/^\d?$/.test(value)) return

        const newOtp = [...otp]
        newOtp[index] = value
        setOtp(newOtp)

        if (value && index < otp.length - 1) {
            const nextInput = document.getElementById(
                `otp-${index + 1}`
            ) as HTMLInputElement
            nextInput?.focus()
        }
    }

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            const prevInput = document.getElementById(
                `otp-${index - 1}`
            ) as HTMLInputElement
            prevInput?.focus()
        }
    }

    const handleSubmit = () => {
        const code = otp.join('');
        const email = localStorage.getItem("email") || "";
        mutate(
            { email, otp: code, mode: mode as string },
            {
                onSuccess: () => {
                    if (mode === "forgot") {
                        localStorage.setItem("email", email);
                        alert("OTP verified successfully!");
                        router.push("/reset-password");
                    } else if (mode === "register") {
                        alert("OTP verified successfully!");
                        localStorage.removeItem("email");
                        router.push("/");
                    }
                },
                onError: (error) => {
                    console.log(error);
                    alert(error.response?.data.message || "Something went wrong");
                },
            }
        );

    }
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
                <h1 className="text-3xl font-bold text-gray-900">
                    Verify Your Email
                </h1>

                <p className="mt-2 text-sm text-gray-500">
                    We've sent a 6-digit verification code to your email.
                    Enter it below to continue.
                </p>

                <div className="mt-8 flex justify-between gap-3">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            id={`otp-${index}`}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(e.target.value, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            className="h-14 w-14 rounded-xl border border-gray-300 text-center text-xl font-semibold outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
                        />
                    ))}
                </div>

                <button
                    disabled={isPending || otp.join('').length !== 6}
                    onClick={handleSubmit}
                    className={` ${isPending || otp.join('').length !== 6 ? 'cursor-not-allowed ' : 'cursor-pointer hover:opacity-90'} bg-[#E14A5C] mt-8 w-full rounded-xl text-white py-3 font-semibold  transition  `}
                >
                    {isPending ? 'Verifying...' : 'Verify Code'}
                </button>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Didn't receive the code?{' '}
                    <button className="font-semibold text-red-400 hover:underline">
                        Resend Code
                    </button>
                </p>
            </div>
        </div>
    )
}

export default Page 