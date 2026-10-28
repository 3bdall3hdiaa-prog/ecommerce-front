import React from 'react'
import ProductRow from './ProductRow'
import { Search } from 'lucide-react'
import { productResponse } from '../../types/Product'

interface Props {
    products: productResponse[];
    isLoading: boolean;
    toggleRow: (id: number) => void;
    openId: number | null;
    openEditModal: (product: productResponse) => void;
    openDeleteModal: (product: productResponse) => void;
    setIsAddModalOpen: (isOpen: boolean) => void;
    searchInput: string;
    setSearchInput: (input: string) => void;
}
const TableProducts = ({ products, isLoading, toggleRow, openId, openEditModal, openDeleteModal, setIsAddModalOpen, searchInput, setSearchInput }: Props) => {
    return (
        <>

            <div className='w-full flex justify-between items-center mb-4'>
                <p className='text-xl font-semibold'>Manage Products</p>
                <div className='flex rounded-3xl border border-gray-300 px-3 py-2 w-[250px] items-center gap-x-2'>
                    <Search size={18} className='text-gray-400' />
                    <input
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        type="text"
                        placeholder="Search by name..."
                        className='outline-none w-full'
                    />
                </div>
            </div>


            <div className='text-right mb-4'>
                <button
                    onClick={() => setIsAddModalOpen(true)}
                    className='cursor-pointer bg-[#E14A5C] hover:opacity-60 text-white px-4 py-2 rounded-md transition-colors'
                >
                    + Add Product
                </button>
            </div>
            <table className='w-full table-fixed'>
                <thead>
                    <tr className='border-b border-gray-300 text-center uppercase bg-gray-50'>
                        <th className='w-24 py-3'>ID</th>
                        <th className='w-24 py-3'>Image</th>
                        <th className='w-24 py-3'>Name</th>
                        <th className='w-24 py-3'>Price</th>
                        <th className='w-24 py-3'>discount</th>
                        <th className='w-24 py-3'>newPrice</th>
                        <th className='w-24 py-3'>Stock</th>
                        <th className='w-24 py-3'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading ? (
                        <tr className='text-center'>
                            <td colSpan={8} className='p-4'>Loading...</td>
                        </tr>
                    ) : products.length === 0 ? (
                        <tr className='text-center'>
                            <td colSpan={8} className='p-4'>No products found</td>
                        </tr>
                    ) :
                        products.map((product: productResponse) => (
                            <ProductRow
                                key={product.id}
                                toggleRow={toggleRow}
                                product={product}
                                openId={openId}
                                onEdit={openEditModal}
                                onDelete={openDeleteModal}
                            />
                        ))}
                </tbody>
            </table>
        </>
    )
}

export default TableProducts