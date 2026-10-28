import React, { useEffect } from 'react'
import { productForm } from '../../types/Product';
import { useCreateProducts } from '../../hooks/useCreateProduct';
interface Props {
    isAddModalOpen: boolean;
    setIsAddModalOpen: (isOpen: boolean) => void;
    SubSubCategories: any[];
    setMessage: React.Dispatch<React.SetStateAction<{ message: string; type: "success" | "error" } | null>>
}
const AddProductModal = ({ isAddModalOpen, setIsAddModalOpen, SubSubCategories, setMessage }: Props) => {
    const [newProducts, setNewProducts] = React.useState<productForm>({
        name: "",
        slug: "",
        description: "",
        price: '',
        discount: '',
        subsubcategoryId: "",
        files: null as any,
        stock: "",
        colors: [],
        isFeatured: false,
        isRecommended: false
    })
    const { mutate, isPending } = useCreateProducts()
    const handleAddProduct = () => {
        mutate({ product: newProducts }, {
            onSuccess: (data) => {
                setIsAddModalOpen(false)
                setMessage({ message: data.message, type: "success" });
                setNewProducts({ name: "", slug: "", description: "", price: '', discount: '', subsubcategoryId: "", files: null, stock: "", colors: [], isFeatured: false, isRecommended: false })
            },
            onError: (err: any) => {
                alert(err.response?.data.message || err.message)
            }

        })
    }


    return (
        <>
            {isAddModalOpen && (
                <div
                    className="fixed inset-0 z-999 bg-black/50 flex items-center justify-center animate-fadeIn"
                    onClick={() => setIsAddModalOpen(false)}
                >
                    <div
                        className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6 max-h-[90vh] overflow-y-auto animate-slideUp"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-4 pb-2 border-b">
                            <h2 className="text-xl font-bold text-gray-800">Add New Product</h2>
                            <button
                                onClick={() => setIsAddModalOpen(false)}
                                className="text-gray-400 hover:text-gray-600 text-2xl transition-colors"
                            >
                                ✕
                            </button>
                        </div>

                        <form onSubmit={(e) => { e.preventDefault(); handleAddProduct(); }} className="space-y-4">
                            <div>
                                <label className="block mb-1 font-medium text-gray-700">Product Name *</label>
                                <input
                                    required
                                    minLength={3}
                                    value={newProducts.name}
                                    onChange={(e) => setNewProducts((prev: any) => ({ ...prev, name: e.target.value }))}
                                    type="text"
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium text-gray-700">Product slug *</label>
                                <input
                                    required
                                    minLength={3}
                                    value={newProducts.slug}
                                    onChange={(e) => setNewProducts((prev: any) => ({ ...prev, slug: e.target.value }))}
                                    type="text"
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium text-gray-700">Description</label>
                                <textarea
                                    required
                                    minLength={5}
                                    value={newProducts.description}
                                    onChange={(e) => setNewProducts((prev: any) => ({ ...prev, description: e.target.value }))}
                                    rows={3}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block mb-1 font-medium text-gray-700">Price *</label>
                                    <input
                                        required
                                        min="1"
                                        value={newProducts.price}
                                        onChange={(e) => setNewProducts((prev: any) => ({ ...prev, price: Number(e.target.value) }))}
                                        type="number"
                                        step="0.01"
                                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-1 font-medium text-gray-700">Stock *</label>
                                    <input
                                        required
                                        value={newProducts.stock}
                                        onChange={(e) => setNewProducts((prev: any) => ({ ...prev, stock: Number(e.target.value) }))}
                                        type="number"
                                        min="1"
                                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className={` w-full cursor-pointer `}>
                                    <label className="block mb-1 font-medium text-gray-700">isRecommended *</label>
                                    < p
                                        onClick={() => setNewProducts((prev: any) => ({ ...prev, isRecommended: !prev.isRecommended }))}
                                        className={`text-center w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent ${newProducts.isRecommended ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'}`}
                                    >{newProducts.isRecommended ? "true" : "false"}</p>
                                </div>
                                <div className={` w-full cursor-pointer `}>
                                    <label className="block mb-1 font-medium text-gray-700">isFeatured *</label>
                                    < p
                                        onClick={() => setNewProducts((prev: any) => ({ ...prev, isFeatured: !prev.isFeatured }))}
                                        className={`text-center w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent ${newProducts.isFeatured ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'}`}
                                    >{newProducts.isFeatured ? "true" : "false"}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-3">
                                <div>
                                    <label className="block mb-1 font-medium text-gray-700">Discount(%) *</label>
                                    <input

                                        value={newProducts.discount}
                                        onChange={(e) => setNewProducts((prev: any) => ({ ...prev, discount: Number(e.target.value) }))}
                                        type="number"
                                        min="0"
                                        step="0.01"
                                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="w-full">
                                    <label
                                        htmlFor="product-image"
                                        className="flex items-center justify-center w-full h-32 px-4 
                   border-2 border-dashed border-gray-300 rounded-xl
                   cursor-pointer bg-gray-50
                   hover:bg-gray-100 hover:border-red-400
                   transition-all duration-200"
                                    >
                                        <div className="text-center">
                                            <svg
                                                className="w-8 h-8 mx-auto mb-2 text-gray-400"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 0115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                                />
                                            </svg>

                                            <p className="text-sm text-gray-600">
                                                اضغط لاختيار صورة
                                            </p>

                                            <p className="text-xs text-gray-400 mt-1">
                                                PNG, JPG أو JPEG
                                            </p>
                                        </div>
                                    </label>

                                    <input
                                        multiple
                                        required
                                        id="product-image"
                                        type="file"
                                        accept="image/png,image/jpeg,image/jpg"
                                        className="hidden"
                                        onChange={(e) =>
                                            setNewProducts((prev: any) => ({
                                                ...prev,
                                                files: Array.from(e.target.files || []),
                                            }))
                                        }
                                    />
                                </div>
                            </div>

                            <div className="w-full grid grid-cols-1 gap-3">
                                <div className='border border-gray-300 rounded-lg'>
                                    <select
                                        required
                                        value={newProducts.subsubcategoryId}
                                        className="w-full    rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                                        onChange={(e) => setNewProducts((prev: any) => ({ ...prev, subsubcategoryId: e.target.value }))}
                                    >
                                        <option value='' disabled>Select SubSubCategory</option>
                                        {SubSubCategories.map((subSubCategory: any) => (
                                            <option key={subSubCategory.id} value={subSubCategory.id}>
                                                {subSubCategory.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                            </div>

                            <div className="flex justify-end gap-3 pt-4 border-t">
                                <button
                                    type="button"
                                    onClick={() => setIsAddModalOpen(false)}
                                    className="cursor-pointer px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    disabled={isPending}
                                    type="submit"
                                    className={`cursor-pointer ${isPending && 'opacity-50 cursor-not-allowed'} px-4 py-2 rounded-lg bg-[#E14A5C] hover:opacity-60 transition-all duration-200 text-white `}
                                >
                                    {isPending ? 'Adding...' : 'Add Product'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>

    )

}

export default AddProductModal