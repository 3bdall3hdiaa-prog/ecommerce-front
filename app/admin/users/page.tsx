"use client"
import React, { useState } from 'react'
import { useGetUsers } from '@/features/user/hooks/useGetUsers';
import UserTable from '@/features/user/components/admin/UserTable';
import AddUserModal from '@/features/user/components/admin/AddUserModal';
import EditingUserModal from '@/features/user/components/admin/EditingUserModal';
import DeletingUserModal from '@/features/user/components/admin/DeletingUserModal';
import Stats from '@/features/user/components/admin/Stats';
import { UserForm, UserResponse } from '@/features/user/types/user.types';
import { useAddUser } from '@/features/user/hooks/useAddUser';
import { useUpdateUser } from '@/features/user/hooks/useUpdateUser';
import { useDeleteUser } from '@/features/user/hooks/useDeleteUser';

const Page = () => {
    const { data, isLoading, error } = useGetUsers()
    const { mutate, isPending } = useAddUser()
    const { mutate: updateUser, isPending: isUpdating } = useUpdateUser()
    const { mutate: deleteUser, isPending: isDeleting } = useDeleteUser()
    const [isOpen, setIsOpen] = useState(false)
    const [currUser, setCurrUser] = useState<any>(null)
    const [isEditOpen, setIsEditOpen] = useState(false)
    const [isDeleteOpen, setIsDeleteOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const [newUser, setNewUser] = useState<any>({
        name: "",
        email: "",
        password: "",
        role: '',

    })
    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error loading users</div>
    const users: UserResponse[] = data?.data
    const totalUsers = data?.count
    const activeUsers = data?.activeUsers
    const adminUsers = data?.adminUsers



    const handleOpenModal = ({ type, user }: { type: 'editing' | 'deleting' | 'adding', user?: UserResponse }) => {
        if (type === 'adding') setIsOpen(true)
        if (type === 'editing') {
            setCurrUser(user)
            setIsEditOpen(true)
        }
        if (type === 'deleting') {
            setCurrUser(user)
            setIsDeleteOpen(true)
        }
    }
    const handleAddUser = (user: UserForm) => {
        if (!user.name || !user.email || !user.password || !user.role) {
            alert("Please fill all fields")
            return
        }
        mutate(user, {
            onSuccess: () => {
                alert("User added successfully")
                setIsOpen(false)
                setNewUser({
                    name: "",
                    email: "",
                    password: "",
                    role: '',
                })
            }
        })
    }
    const handleEditUser = (user: UserResponse) => {
        updateUser({ id: user.id, user }, {
            onSuccess: () => {
                alert("User updated successfully")
                setIsEditOpen(false)
            }
        })
    }
    const handleDeleteUser = (user: UserResponse) => {
        deleteUser(user.id, {
            onSuccess: () => {
                alert("User deleted successfully")
                setIsDeleteOpen(false)
            }
        })
    }


    return (
        <div className="p-6">

            <Stats totalUsers={totalUsers} activeUsers={activeUsers} adminUsers={adminUsers} />
            <UserTable handleOpenModal={handleOpenModal} users={users} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <AddUserModal isPending={isPending} handleAddUser={handleAddUser} isOpen={isOpen} setIsOpen={setIsOpen} newUser={newUser} setNewUser={setNewUser} />
            <EditingUserModal isUpdating={isUpdating} handleEditUser={handleEditUser} isEditOpen={isEditOpen} setIsEditOpen={setIsEditOpen} currUser={currUser} setCurrUser={setCurrUser} />
            <DeletingUserModal handleDeleteUser={handleDeleteUser} isDeleting={isDeleting} isDeleteOpen={isDeleteOpen} setIsDeleteOpen={setIsDeleteOpen} currUser={currUser} />

        </div>
    )
}

export default Page