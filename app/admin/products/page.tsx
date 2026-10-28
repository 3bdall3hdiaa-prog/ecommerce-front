"use client"
import React, { useEffect, useState } from 'react'
import AddProductModal from '@/features/product/components/admin/AddProductModal';
import EditProductModal from '@/features/product/components/admin/EditProductModal';
import DeleteProductModal from '@/features/product/components/admin/DeleteProductModal';
import TableProducts from '@/features/product/components/admin/TableProducts';
import ProductStats from '@/features/product/components/admin/ProductStats';
import { useGetProducts } from '@/features/product/hooks/useGetProducts';
import { productResponse } from '@/features/product/types/Product';
import { useGetSubSubCategories } from '@/features/subsubcategory/hooks/useGetSubSubCategories';
import { SubsubcategoryResponse } from '@/features/subsubcategory/types/subsubcategory';



const Page = () => {
    const [message, setMessage] = useState<{ message: string; type: "success" | "error" } | null>(null);
    const [openId, setOpenId] = useState<number | null>(null)
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState<any>(null)
    const [searchInput, setSearchInput] = useState("")
    const [search, setSearch] = useState("")
    const { data, isLoading } = useGetProducts({ search })
    const { data: subsubcategories, isLoading: isSubSubCategoriesLoading }: any = useGetSubSubCategories()

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    useEffect(() => {
        if (search) {
            clearTimeout(search);
        }
        const timeout = setTimeout(() => {
            setSearch(searchInput);
        }, 500);
        return () => clearTimeout(timeout);
    }, [searchInput]);

    if (isLoading || isSubSubCategoriesLoading) return <div>Loading...</div>

    const myProducts: productResponse[] = data?.data
    const mySubSubCategories: SubsubcategoryResponse[] = subsubcategories?.data

    const toggleRow = (id: number) => {
        setOpenId(prev => (prev === id ? null : id))
    }





    const openEditModal = (product: productResponse) => {
        setSelectedProduct(product)
        setIsEditModalOpen(true)
    }

    const openDeleteModal = (product: productResponse) => {
        setSelectedProduct(product)
        setIsDeleteModalOpen(true)
    }



    return (
        <div className="p-6">
            {message && (
                <div className={`bg-${message.type === 'success' ? 'green' : 'red'}-100 text-${message.type === 'success' ? 'green' : 'red'}-800 p-4 rounded mb-4`}>
                    {message.message}
                </div>
            )}
            <ProductStats myProducts={myProducts} />
            <div className='overflow-x-auto'>
                <TableProducts products={myProducts} isLoading={isLoading} toggleRow={toggleRow} openId={openId} openEditModal={openEditModal} openDeleteModal={openDeleteModal} setIsAddModalOpen={setIsAddModalOpen} searchInput={searchInput} setSearchInput={setSearchInput} />
            </div>
            <AddProductModal setMessage={setMessage} SubSubCategories={mySubSubCategories} isAddModalOpen={isAddModalOpen} setIsAddModalOpen={setIsAddModalOpen} />
            <EditProductModal setMessage={setMessage} SubSubCategories={mySubSubCategories} isEditModalOpen={isEditModalOpen} setIsEditModalOpen={setIsEditModalOpen} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />
            <DeleteProductModal setMessage={setMessage} isDeleteModalOpen={isDeleteModalOpen} setIsDeleteModalOpen={setIsDeleteModalOpen} selectedProduct={selectedProduct} />
        </div>
    )
}

export default Page