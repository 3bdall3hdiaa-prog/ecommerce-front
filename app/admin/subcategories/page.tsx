"use client"
import React, { useEffect, useState } from 'react'
import AddSubCategoryModal from '../../../features/subcategory/components/admin/AddSubCategoryModal'
import EditSubCategoryModal from '@/features/subcategory/components/admin/EditSubCategoryModal'
import DeleteSubCategoryModal from '@/features/subcategory/components/admin/DeleteSubCategoryModal'
import TableSubCategory from '@/features/subcategory/components/admin/TableSubCategory'
import { SubCategoryForm, SubCategoryResponse } from '@/features/subcategory/types/subcategory.types'
import { useGetSubCategories } from '@/features/subcategory/hooks/useGetSubCategories'
import { useGetCategories } from '@/features/category/hooks/useGetCategories'


const Page = () => {
    const [currSubCategory, setCurrSubCategory] = useState<SubCategoryResponse>(null as any)
    const [isEditOpen, setIsEditOpen] = useState<boolean>(false)
    const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false)
    const [newsubCategory, setNewsubCategory] = useState<SubCategoryForm>({ name: "", slug: "", file: null as any, categoryId: "" })
    const { data, isLoading }: any = useGetSubCategories()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { data: categories, isLoading: isCategoriesLoading } = useGetCategories()

    if (isLoading || isCategoriesLoading) return <div>Loading...</div>
    const mySubCategories: SubCategoryResponse[] = data.data

    const handleSetCurrentSubCategory = (subcategory: SubCategoryResponse, typeAction: string) => {
        setCurrSubCategory(subcategory)
        if (typeAction === "edit")
            setIsEditOpen(true)
        else if (typeAction === "delete")
            setIsDeleteOpen(true)

    }



    return (
        <div className="p-6">
            <TableSubCategory mysubCategories={mySubCategories} handleSetCurrentSubCategory={handleSetCurrentSubCategory} setIsOpen={setIsOpen} />
            <AddSubCategoryModal categories={categories?.data} isOpen={isOpen} setIsOpen={setIsOpen} newsubCategory={newsubCategory} setNewsubCategory={setNewsubCategory} />
            <EditSubCategoryModal categories={categories?.data} isEditOpen={isEditOpen} setIsEditOpen={setIsEditOpen} currSubCategory={currSubCategory} setCurrSubCategory={setCurrSubCategory} />
            <DeleteSubCategoryModal isDeleteOpen={isDeleteOpen} setIsDeleteOpen={setIsDeleteOpen} currSubCategory={currSubCategory} />
        </div>
    )
}

export default Page