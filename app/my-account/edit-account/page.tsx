
"use client"
import React from 'react'
import { useAuthStore } from '@/store/authStore'
import { useChangePassword } from '@/features/auth/hooks/useChangePassword'

const page = () => {
    const { mutate, isPending } = useChangePassword()
    const { user } = useAuthStore()
    const [password, setPassword] = React.useState({
        curr: "",
        new: "",
        confirm: "",
    })
    const handlePasswordChange = () => {
        if (!password.curr || !password.new || !password.confirm) {
            return;
        }
        if (password.new !== password.confirm) {
            return;
        }
        mutate({
            email: user?.email || "",
            currentPassword: password.curr,
            newPassword: password.new,
        }, {
            onSuccess: (data) => {
                alert(data.message);
                setPassword({
                    curr: "",
                    new: "",
                    confirm: "",
                })
            }
        })
    }
    return (
        <div className=" mx-auto ">
            <form onSubmit={(e) => { e.preventDefault(); handlePasswordChange(); }} className="flex flex-col gap-y-6">


                {/* Display Name */}
                <div className="flex flex-col gap-y-1">
                    <label htmlFor="displayName">
                        Display name <span className='text-red-400'>*</span>
                    </label>
                    <input
                        className='bg-white outline-none border border-gray-300 rounded-full py-2 px-4'
                        type="text"
                        readOnly
                        id="displayName"
                        name="displayName"
                        defaultValue={user?.name}
                    />
                    <p className="text-sm text-gray-500">
                        This will be how your name will be displayed in the account section and in reviews
                    </p>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-y-1">
                    <label htmlFor="email">
                        Email address <span className='text-red-400'>*</span>
                    </label>
                    <input
                        className='bg-white outline-none border border-gray-300 rounded-full py-2 px-4'
                        type="email"
                        disabled
                        id="email"
                        readOnly
                        name="email"
                        defaultValue={user?.email}
                    />
                </div>

                {/* Password Change */}
                <div className="flex flex-col gap-y-4 border-t border-gray-300 pt-4">
                    <h2 className="text-lg font-semibold">Password change</h2>

                    <div className="flex flex-col gap-y-1">
                        <label htmlFor="currentPassword">
                            Current password (leave blank to leave unchanged)
                        </label>
                        <input
                            value={password.curr}
                            onChange={(e) => setPassword({ ...password, curr: e.target.value })}
                            className='bg-white outline-none border border-gray-300 rounded-full py-2 px-4'
                            type="password"
                            id="currentPassword"
                            name="currentPassword"
                        />
                    </div>

                    <div className="flex flex-col gap-y-1">
                        <label htmlFor="newPassword">
                            New password (leave blank to leave unchanged)
                        </label>
                        <input
                            value={password.new}
                            onChange={(e) => setPassword({ ...password, new: e.target.value })}
                            className='bg-white outline-none border border-gray-300 rounded-full py-2 px-4'
                            type="password"
                            id="newPassword"
                            name="newPassword"
                        />
                    </div>

                    <div className="flex flex-col gap-y-1">
                        <label htmlFor="confirmPassword">
                            Confirm new password
                        </label>
                        <input
                            value={password.confirm}
                            onChange={(e) => setPassword({ ...password, confirm: e.target.value })}
                            className='bg-white outline-none border border-gray-300 rounded-full py-2 px-4'
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                        />
                    </div>
                </div>

                {/* Submit */}
                <button
                    disabled={isPending}
                    type="submit"
                    className={`bg-[#E14A5C] text-white text-sm rounded-full py-3 px-2 w-30 hover:opacity-60 transition ${isPending ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                >
                    Save changes
                </button>

            </form>
        </div>
    )
}

export default page     