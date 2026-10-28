import React from 'react'
import { Pencil, Trash, Check, X } from 'lucide-react'

const ProductRow = ({ product, openId, toggleRow, onDelete, onEdit }: any) => {
    return (

        <React.Fragment>

            {/* Main Row */}
            <tr
                onClick={() => toggleRow(product.id)}
                className='cursor-pointer hover:bg-gray-200 text-center border-b border-gray-300'
            >
                <td className='py-2'>{product.id}</td>
                <td className='py-2'>
                    {product.images && <img
                        src={product.images.mainImage.url}
                        alt={product.name}
                        className='w-14 h-14 object-cover rounded mx-auto'
                    />}
                </td>

                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>%{product.discount || 0}</td>
                <td>${product.priceAfterDiscount || 0}</td>
                <td>{product.stock}</td>

                <td onClick={(e) => e.stopPropagation()}>
                    <div className='flex justify-center gap-3'>
                        <Pencil onClick={() => onEdit(product)} className='text-blue-400 hover:text-blue-600 cursor-pointer' />
                        <Trash onClick={() => onDelete(product)} className='text-red-400 hover:text-red-600 cursor-pointer' />
                    </div>
                </td>
            </tr>

            {/* Expanded Row */}
            {openId === product.id && (
                <tr className="bg-gray-50">
                    <td colSpan={8}>
                        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50">

                            <div className="space-y-3">
                                <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                                    Product Details
                                </h3>

                                <p className="text-gray-700">
                                    <span className="font-semibold text-gray-900">
                                        Description:
                                    </span>{" "}
                                    {product.description || "No description"}
                                </p>

                                <p className="text-gray-700">
                                    <span className="font-semibold text-gray-900">
                                        Category:
                                    </span>{" "}
                                    {product.subsubcategory?.subcategory?.category?.name}
                                </p>

                                <p className="text-gray-700">
                                    <span className="font-semibold text-gray-900">
                                        Sub Category:
                                    </span>{" "}
                                    {product.subsubcategory?.subcategory?.name}
                                </p>

                                <p className="text-gray-700">
                                    <span className="font-semibold text-gray-900">
                                        Sub Sub Category:
                                    </span>{" "}
                                    {product.subsubcategory?.name}
                                </p>

                                <p className="text-gray-700 flex items-center gap-2">
                                    <span className="font-semibold text-gray-900">
                                        Featured:
                                    </span>

                                    {product.isFeatured ? (
                                        <Check className="text-green-500" size={20} />
                                    ) : (
                                        <X className="text-red-500" size={20} />
                                    )}
                                </p>

                                <p className="text-gray-700 flex items-center gap-2">
                                    <span className="font-semibold text-gray-900">
                                        Recommended:
                                    </span>

                                    {product.isRecommended ? (
                                        <Check className="text-green-500" size={20} />
                                    ) : (
                                        <X className="text-red-500" size={20} />
                                    )}
                                </p>
                            </div>


                            {/* Product Images */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">
                                    Images
                                </h3>

                                <div className="flex gap-4 items-start">

                                    {/* Main Image */}
                                    {product.images?.mainImage?.url && (
                                        <img
                                            src={product.images.mainImage.url}
                                            alt={product.name}
                                            className="w-32 h-32 object-cover rounded-xl border border-gray-200 shadow-sm"
                                        />
                                    )}

                                    {/* Other Images */}
                                    <div className="flex flex-wrap gap-3">
                                        {product.images?.otherImages?.map(
                                            (img: any, index: number) => (
                                                <img
                                                    key={index}
                                                    src={img.url}
                                                    alt={`${product.name} ${index + 1}`}
                                                    className="w-16 h-16 object-cover rounded-lg border border-gray-200 cursor-pointer hover:scale-105 transition-transform duration-200"
                                                />
                                            )
                                        )}
                                    </div>

                                </div>
                            </div>

                        </div>
                    </td>
                </tr>
            )}

        </React.Fragment>
    )
}

export default ProductRow