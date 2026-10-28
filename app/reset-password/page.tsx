
"use client";

import React, { useEffect, useState } from "react";
import { Eye, EyeOff, LockKeyhole } from "lucide-react";
import { useRouter } from "next/navigation";
import { useNewPassword } from "@/features/auth/hooks/useNewPassword";

const Page = () => {
    const router = useRouter();
    const { mutate, isPending } = useNewPassword();

    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordError, setPasswordError] = useState("");

    useEffect(() => {
        const savedEmail = localStorage.getItem("email");

        if (!savedEmail) {
            router.replace("/forgot-password");
            return;
        }

        setEmail(savedEmail);
    }, [router]);

    const handleResetPassword = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPasswordError("");

        if (newPassword.length < 8) {
            setPasswordError("Password must be at least 8 characters.");
            return;
        }

        if (newPassword !== confirmPassword) {
            setPasswordError("Passwords do not match.");
            return;
        }

        mutate(
            {
                email,
                newPassword,
            },
            {
                onSuccess: () => {
                    localStorage.removeItem("email");
                    alert("Password reset successfully!");
                    router.replace("/register");
                },
                onError: (error: any) => {
                    setPasswordError(
                        error.response?.data?.message ||
                        "Failed to reset password. Please try again."
                    );
                },
            }
        );
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
            <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="mb-6 flex flex-col items-center text-center">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
                        <LockKeyhole className="h-7 w-7 text-[#E14A5C]" />
                    </div>

                    <h1 className="text-2xl font-bold text-gray-900">
                        Reset Password
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Create a new password for your account.
                    </p>
                </div>

                <form
                    onSubmit={handleResetPassword}
                    className="flex flex-col gap-y-5"
                >
                    <div className="w-full text-black">
                        <label
                            htmlFor="newPassword"
                            className="mb-1.5 block text-sm font-medium"
                        >
                            New Password <span className="text-red-400">*</span>
                        </label>

                        <div className="flex w-full items-center rounded-full border border-gray-200 bg-white px-4 focus-within:border-transparent focus-within:ring-2 focus-within:ring-red-400">
                            <input
                                id="newPassword"
                                type={showPassword ? "text" : "password"}
                                required
                                minLength={8}
                                autoComplete="new-password"
                                placeholder="Enter new password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full bg-transparent py-2.5 text-black outline-none"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword((prev) => !prev)}
                                className="ml-2 text-gray-500 hover:text-gray-800"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? (
                                    <EyeOff size={19} />
                                ) : (
                                    <Eye size={19} />
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="w-full text-black">
                        <label
                            htmlFor="confirmPassword"
                            className="mb-1.5 block text-sm font-medium"
                        >
                            Confirm New Password{" "}
                            <span className="text-red-400">*</span>
                        </label>

                        <div className="flex w-full items-center rounded-full border border-gray-200 bg-white px-4 focus-within:border-transparent focus-within:ring-2 focus-within:ring-red-400">
                            <input
                                id="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                required
                                minLength={8}
                                autoComplete="new-password"
                                placeholder="Confirm new password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full bg-transparent py-2.5 text-black outline-none"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowConfirmPassword((prev) => !prev)
                                }
                                className="ml-2 text-gray-500 hover:text-gray-800"
                                aria-label={
                                    showConfirmPassword
                                        ? "Hide password"
                                        : "Show password"
                                }
                            >
                                {showConfirmPassword ? (
                                    <EyeOff size={19} />
                                ) : (
                                    <Eye size={19} />
                                )}
                            </button>
                        </div>
                    </div>

                    {passwordError && (
                        <p className="text-sm text-red-500" role="alert">
                            {passwordError}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={isPending || !email}
                        className={`mt-1 w-full rounded-full bg-[#E14A5C] py-2.5 font-semibold text-white shadow-md transition-all ${isPending || !email
                            ? "cursor-not-allowed opacity-50"
                            : "cursor-pointer hover:scale-[1.02] hover:bg-[#cf394b]"
                            }`}
                    >
                        {isPending ? "Resetting..." : "Reset Password"}
                    </button>

                    <button
                        type="button"
                        onClick={() => router.push("/login")}
                        className="text-sm text-gray-500 transition-colors hover:text-[#E14A5C]"
                    >
                        Back to Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Page;
