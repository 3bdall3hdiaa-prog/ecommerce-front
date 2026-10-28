import React, { useState } from 'react'
import { SubsubcategoryForm } from '../../types/subsubcategory';
import { useCreateSubSubCategory } from '../../hooks/useCreateSubSubCategory';

const AddSubSubCategory = ({ subcategories, isOpen, setIsOpen }: any) => {
    const { mutate, isPending } = useCreateSubSubCategory()
    const [newsubsubCategory, setNewsubsubCategory] = useState<SubsubcategoryForm>({
        name: "",
        file: null as any,
        slug: "",
        subcategoryId: 0
    });
    const handleadd = () => {
        mutate({ newSubSubCategory: newsubsubCategory }, {
            onSuccess: (data: any) => {
                alert('SubSubCategory added successfully')
                setNewsubsubCategory({ name: "", slug: "", file: null, subcategoryId: 0 })
                setIsOpen(false)
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
                        <h2 className='text-lg font-bold mb-4'>Add SubSubCategory</h2>
                        <form onSubmit={(e) => { e.preventDefault(); handleadd() }}>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    onChange={(e) => setNewsubsubCategory({ ...newsubsubCategory, name: e.target.value })}
                                    value={newsubsubCategory.name}
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
                                    onChange={(e) => setNewsubsubCategory({ ...newsubsubCategory, slug: e.target.value })}
                                    value={newsubsubCategory.slug}
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="Slug"
                                    type="text"
                                    placeholder="Enter Subcategory name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
                                    Image
                                </label>
                                <input
                                    onChange={(e) => { setNewsubsubCategory({ ...newsubsubCategory, file: e.target.files?.[0] || null }) }}
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="image"
                                    type="file"
                                    placeholder="Upload Image"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="icon">
                                    SubCategory
                                </label>
                                <select value={newsubsubCategory.subcategoryId} className='shadow  rounded py-2 px-3 border-1 border-black w-full ' onChange={(e) => { setNewsubsubCategory({ ...newsubsubCategory, subcategoryId: Number(e.target.value) }) }}>
                                    <option value={0} disabled>Select SubCategory</option>
                                    {subcategories.map((subsubCategory: any) => (
                                        <option key={subsubCategory.id} value={subsubCategory.id}>
                                            {subsubCategory.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <button
                                disabled={isPending}
                                className="cursor-pointer bg-[#E14A5C] hover:opacity-60 transition duration-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                {isPending ? "Adding..." : "Add"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default AddSubSubCategory