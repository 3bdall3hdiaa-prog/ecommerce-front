"use client"
import { SubsubcategoryResponse } from '@/features/subsubcategory/types/subsubcategory';
import { Flame } from 'lucide-react'
import Link from 'next/link'
interface Props {
    mySubSubCategories: SubsubcategoryResponse[];
    isLoading: boolean
}
const HotCategories = ({ mySubSubCategories, isLoading }: Props) => {

    return (
        <div className=' flex flex-col gap-y-4  h-[400px] '>

            <div className="flex items-center gap-x-2">
                <Flame className="text-[#821ED9]" size={22} />
                <p className="text-2xl font-semibold">Hot categories</p>
            </div>

            {/*categories */}
            {isLoading ? <p className="text-center text-gray-400">Loading...</p> : null}
            {mySubSubCategories.length === 0 && <p className="text-center text-gray-400">No hot categories available</p>}
            <div className="    gap-x-4 gap-y-10 grid grid-cols-4">
                {mySubSubCategories.slice(0, 8).map((sub_subcategory: any) => {
                    const subcategory: any = sub_subcategory.subcategory;
                    const category: any = sub_subcategory.subcategory.category;

                    return (
                        <Link key={sub_subcategory.id} href={`/product-category/${category.name}/${subcategory.name}/${sub_subcategory.id}`} className=" hover:cursor-pointer flex flex-col gap-y-2">
                            <div className="flex flex-col gap-y-2 w-30 h-30 overflow-hidden rounded-full bg-white px-2 py-1 ">
                                <img className="hover:scale-125 transition-transform duration-500 w-full h-full object-cover" src={sub_subcategory.image.url} />
                            </div>
                            <p className="text-center font-semibold text-[15px] ">{sub_subcategory.name}</p>

                        </Link>
                    )
                }
                )}

            </div>

        </div>)
}

export default HotCategories