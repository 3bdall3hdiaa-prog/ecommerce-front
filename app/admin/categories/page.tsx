"use client"
import React, { useEffect, useState } from 'react'
import AddCategoryModal from '@/features/category/components/admin/AddCategoryModal'
import EditCategoryModal from '@/features/category/components/admin/EditCategoryModal'
import CategoryTable from '@/features/category/components/admin/CategoryTable'
import DeleteCategoryModal from '@/features/category/components/admin/DeleteCategoryModal'
import { useGetCategories } from '@/features/category/hooks/useGetCategories'
import { CategoryResponse } from '@/features/category/types/category.types'
import { useAuthStore } from '@/Store/authStore'

const Page = () => {

    const { data, isLoading } = useGetCategories()
    const [currcategory, setCurrCategory] = useState<CategoryResponse>(null as any)
    const [isEditOpen, setIsEditOpen] = useState<boolean>(false)
    const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [message, setMessage] = useState<{ message: string; type: "success" | "error" } | null>(null)

    if (isLoading) return <div>Loading...</div>
    const myCategories: any = data?.data

    const handleSetCurrCategory = (category: CategoryResponse, typeAction: string) => {
        setCurrCategory(category)
        if (typeAction === "edit")
            setIsEditOpen(true)
        else if (typeAction === "delete")
            setIsDeleteOpen(true)
    }

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [message]);
    return (
        <div className="p-6">
            {message && (
                <div className={`bg-${message.type === 'success' ? 'green' : 'red'}-100 text-${message.type === 'success' ? 'green' : 'red'}-800 p-4 rounded mb-4`}>
                    {message.message}
                </div>
            )}
            <CategoryTable isLoading={isLoading} myCategories={myCategories} setIsOpen={setIsOpen} handleSetCurrCategory={handleSetCurrCategory} />
            {/*/////////////////Modals/////////////////*/}
            <AddCategoryModal setMessage={setMessage} isOpen={isOpen} setIsOpen={setIsOpen} />
            <EditCategoryModal setMessage={setMessage} isEditOpen={isEditOpen} setIsEditOpen={setIsEditOpen} currcategory={currcategory} setCurrCategory={setCurrCategory} />
            <DeleteCategoryModal setMessage={setMessage} isDeleteOpen={isDeleteOpen} setIsDeleteOpen={setIsDeleteOpen} currCategory={currcategory} />
        </div>
    )
}

export default Page