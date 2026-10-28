import React from 'react'
import { Users } from 'lucide-react'
import { UserResponse } from '@/features/users/types/user.types'

const RecentUsers = ({ users }: { users: UserResponse[] }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-4 border-b border-gray-100">
                <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <Users className="w-5 h-5 text-green-500" />
                    Users
                </h2>
            </div>
            <div className="p-4 space-y-3">
                {users.map((u) => (
                    <div key={u.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition">
                        <div>
                            <p className="font-medium text-gray-800">{u.name}</p>
                            <p className="text-xs text-gray-400">{u.email}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                {u.role}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentUsers