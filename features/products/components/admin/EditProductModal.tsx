import React from 'react'
import { useUpdateProducts } from '../../hooks/useUpdateProducts'
interface Props {
    setMessage: React.Dispatch<React.SetStateAction<{ message: string; type: "success" | "error" } | null>>
    SubSubCategories: any
    isEditModalOpen: boolean
    setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    selectedProduct: any
    setSelectedProduct: React.Dispatch<React.SetStateAction<any>>
}
const EditProductModal = ({ setMessage, SubSubCategories, isEditModalOpen, setIsEditModalOpen, selectedProduct, setSelectedProduct }: Props) => {
    const { mutate, isPending } = useUpdateProducts()
    const handleEditProduct = () => {
        mutate({
            id: selectedProduct.id,
            data: selectedProduct
        }, {
            onSuccess: (data) => {
                setIsEditModalOpen(false)
                setMessage({ type: 'success', message: data.message })
            },
            onError: (err: any) => {
                setMessage({ type: 'error', message: err.response?.data.message || err.message })
            }
        })
    }
    return (
        <>
            {isEditModalOpen && selectedProduct && (
                <div
                    className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center animate-fadeIn"
                    onClick={() => setIsEditModalOpen(false)}
                >
                    <div
                        className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6 max-h-[90vh] overflow-y-auto animate-slideUp"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-4 pb-2 border-b">
                            <h2 className="text-xl font-bold text-gray-800">Edit Product</h2>
                            <button
                                onClick={() => setIsEditModalOpen(false)}
                                className="text-gray-400 hover:text-gray-600 text-2xl transition-colors"
                            >
                                ✕
                            </button>
                        </div>

                        <form onSubmit={(e) => { e.preventDefault(); handleEditProduct(); }} className="space-y-4">
                            <div>
                                <label className="block mb-1 font-medium text-gray-700">Product Name *</label>
                                <input
                                    required
                                    value={selectedProduct.name}
                                    onChange={(e) => setSelectedProduct({ ...selectedProduct, name: e.target.value })}
                                    type="text"
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium text-gray-700">Description</label>
                                <textarea
                                    value={selectedProduct.description}
                                    onChange={(e) => setSelectedProduct({ ...selectedProduct, description: e.target.value })}
                                    rows={3}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block mb-1 font-medium text-gray-700">Price *</label>
                                    <input
                                        required
                                        value={selectedProduct.price}
                                        onChange={(e) => setSelectedProduct({ ...selectedProduct, price: Number(e.target.value) })}
                                        type="number"
                                        min="0"
                                        step="0.01"
                                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1 font-medium text-gray-700">Stock *</label>
                                    <input
                                        required
                                        value={selectedProduct.stock}
                                        onChange={(e) => setSelectedProduct({ ...selectedProduct, stock: Number(e.target.value) })}
                                        type="number"
                                        min="0"
                                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className={` w-full cursor-pointer `}>
                                    <label className="block mb-1 font-medium text-gray-700">isRecommended *</label>
                                    < p
                                        onClick={() => setSelectedProduct((prev: any) => ({ ...prev, isRecommended: !prev.isRecommended }))}
                                        className={`text-center w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent ${selectedProduct.isRecommended ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'}`}
                                    >{selectedProduct.isRecommended ? "true" : "false"}</p>
                                </div>
                                <div className={` w-full cursor-pointer `}>
                                    <label className="block mb-1 font-medium text-gray-700">isFeatured *</label>
                                    < p
                                        onClick={() => setSelectedProduct((prev: any) => ({ ...prev, isFeatured: !prev.isFeatured }))}
                                        className={`text-center w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent ${selectedProduct.isFeatured ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'}`}
                                    >{selectedProduct.isFeatured ? "true" : "false"}</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label className="block mb-1 font-medium text-gray-700">discount *</label>
                                    <input
                                        required
                                        value={selectedProduct.discount}
                                        onChange={(e) => setSelectedProduct({ ...selectedProduct, discount: Number(e.target.value) })}
                                        type="number"
                                        min="0"
                                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    />
                                </div>
                            </div>
                            <div className="w-full grid grid-cols-1 gap-3">
                                <div className='border border-gray-300 rounded-lg'>
                                    <select
                                        required
                                        value={selectedProduct.subsubcategoryId}
                                        className="w-full    rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                                        onChange={(e) => setSelectedProduct({ ...selectedProduct, subsubcategoryId: e.target.value })}
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

                            <div className="flex justify-start gap-3 pt-4 border-t">
                                <button
                                    disabled={isPending}
                                    type="submit"
                                    className={`px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors ${isPending ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                >
                                    {isPending ? 'Updating...' : 'Update'}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsEditModalOpen(false)}
                                    className="cursor-pointer px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </>
    )
}

export default EditProductModal