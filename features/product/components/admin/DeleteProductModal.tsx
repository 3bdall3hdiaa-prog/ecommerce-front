import React from 'react'
import { PackageX } from 'lucide-react';
import { useDeleteProducts } from '../../hooks/useDeleteProduct';
import { productResponse } from '../../types/Product';

interface Props {
    isDeleteModalOpen: boolean;
    setIsDeleteModalOpen: (isOpen: boolean) => void;
    selectedProduct: productResponse;
    setMessage: (message: { message: string; type: "success" | "error" } | null) => void;
}

const DeleteProductModal = ({ isDeleteModalOpen, setIsDeleteModalOpen, selectedProduct, setMessage }: Props) => {
    const { mutate, isPending } = useDeleteProducts()
    const handleDeleteProduct = () => {
        mutate({ id: selectedProduct?.id }, {
            onSuccess: (data) => {
                setMessage({ message: data.message, type: "success" });
                setIsDeleteModalOpen(false)
            },
            onError: (err: any) => {
                console.error("Error deleting product:", err);
                setMessage({ message: `Failed to delete product.`, type: "error" });
            }
        }
        )
    }
    return (

        <>
            {isDeleteModalOpen && selectedProduct && (
                <div
                    className="fixed inset-0 z-[999] bg-black/50 flex items-center justify-center animate-fadeIn"
                    onClick={() => setIsDeleteModalOpen(false)}
                >
                    <div
                        className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 animate-slideUp"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="text-center">
                            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                                <PackageX className="h-6 w-6 text-red-600" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-800 mb-2">Delete Product</h2>
                            <p className="text-gray-600 mb-6">
                                Are you sure you want to delete <span className="font-semibold">{selectedProduct.name}</span>?
                                This action cannot be undone.
                            </p>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => setIsDeleteModalOpen(false)}
                                    className="flex-1 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    disabled={isPending}
                                    onClick={handleDeleteProduct}
                                    className={`${isPending && 'opacity-50 cursor-not-allowed'} cursor-pointer flex-1 px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white transition-colors`}
                                >
                                    {isPending ? 'Deleting...' : 'Delete'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default DeleteProductModal