import React from 'react'
import { SubCategoryForm } from '../../types/subcategory.types';
import { useCreateSubCategory } from '../../hooks/useCreateSubCategory';
interface Props {
    isOpen: boolean,
    setIsOpen: any,
    newsubCategory: SubCategoryForm,
    setNewsubCategory: any,
    categories: any
}
const AddSubCategoryModal = ({ categories, isOpen, setIsOpen, newsubCategory, setNewsubCategory }: Props) => {

    const { mutate, isPending } = useCreateSubCategory()
    const handleAdd = (e: any) => {
        e.preventDefault()
        mutate({ newSubCategory: newsubCategory }, {
            onSuccess: () => {
                setIsOpen(false)
                setNewsubCategory({ name: "", slug: "", file: null, categoryId: "" })
                window.location.reload()
            },
            onError: (err) => {
                alert(err.response?.data.message || err.message)
            }
        })
    }

    return (
        <>
            {isOpen && (
                <div onClick={() => setIsOpen(false)} className='fixed inset-0 bg-black/50 flex items-center justify-center z-999'>
                    <div className='bg-white p-6 rounded-md w-96' onClick={(e) => e.stopPropagation()}>
                        <h2 className='text-lg font-bold mb-4'>Add SubCategory</h2>
                        <form onSubmit={(e: any) => { handleAdd(e); }}
                        >
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    onChange={(e) => setNewsubCategory({ ...newsubCategory, name: e.target.value })}
                                    value={newsubCategory.name}
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="Enter Subcategory name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="Slug">
                                    Slug
                                </label>
                                <input
                                    onChange={(e) => setNewsubCategory({ ...newsubCategory, slug: e.target.value })}
                                    value={newsubCategory.slug}
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="Slug"
                                    type="text"
                                    placeholder="Enter Subcategory Slug"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="icon">
                                    Image
                                </label>
                                <input
                                    onChange={(e) =>
                                        setNewsubCategory({
                                            ...newsubCategory,
                                            file: e.target.files?.[0] || null,
                                        })
                                    }
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="icon"
                                    type="file"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="icon">
                                    Category
                                </label>
                                <select
                                    value={newsubCategory.categoryId}
                                    onChange={(e) =>
                                        setNewsubCategory({
                                            ...newsubCategory,
                                            categoryId: e.target.value,
                                        })
                                    }
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="icon"
                                >
                                    <option value='' disabled >Select Category</option>
                                    {categories?.map((category: any) => (
                                        <option key={category.id} value={category.id}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <button
                                disabled={isPending}
                                className={` bg-[#E14A5C] hover:opacity-60 transition duration-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isPending ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                type="submit"
                            >
                                Add SubCategory
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>

    )
}

export default AddSubCategoryModal