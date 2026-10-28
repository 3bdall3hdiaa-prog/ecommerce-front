"use client"
import React, { useEffect, useState } from 'react'
import AddSubSubCategory from '@/features/subsubcategory/components/admin/AddSubSubCategory'
import EditSubSubCategory from '@/features/subsubcategory/components/admin/EditSubSubCategory'
import DeleteSubSubCategory from '@/features/subsubcategory/components/admin/DeleteSubSubCategory'
import TableSubSubCategory from '@/features/subsubcategory/components/admin/TableSubSubCategory'
import { useGetSubSubCategories } from '@/features/subsubcategory/hooks/useGetSubSubCategories'
import { useGetSubCategories } from '@/features/subcategory/hooks/useGetSubCategories'


const Page = () => {
    const { data, isLoading, isError, error }: any = useGetSubSubCategories()
    const { data: subcategories, isLoading: isSubCategoriesLoading } = useGetSubCategories()
    const [currSubSubCategory, setCurrSubSubCategory] = useState<any>(null)
    const [isEditOpen, setIsEditOpen] = useState(false)
    const [isDeleteOpen, setIsDeleteOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false)


    if (isLoading || isSubCategoriesLoading) return <div>Loading...</div>


    const mySubCategories: any = subcategories?.data
    const mysubsubCategories: any = data?.data


    const handleOpen = (subsubcategory: any, action: string) => {
        setCurrSubSubCategory(subsubcategory)
        if (action === "edit") {
            setIsEditOpen(true)
        } else if (action === "delete") {
            setIsDeleteOpen(true)
        }
    }



    return (
        <div className="p-6">


            <TableSubSubCategory handleOpen={handleOpen} setIsOpen={setIsOpen} isLoading={isLoading} isError={isError} mysubsubCategories={mysubsubCategories} />
            <AddSubSubCategory subcategories={mySubCategories} isOpen={isOpen} setIsOpen={setIsOpen} />
            <EditSubSubCategory subcategories={mySubCategories} isEditOpen={isEditOpen} setIsEditOpen={setIsEditOpen} currSubSubCategory={currSubSubCategory} setCurrSubSubCategory={setCurrSubSubCategory} />
            <DeleteSubSubCategory currSubSubCategory={currSubSubCategory} isDeleteOpen={isDeleteOpen} setIsDeleteOpen={setIsDeleteOpen} />

        </div>
    )
}

export default Page