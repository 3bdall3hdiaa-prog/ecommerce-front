import React from 'react'
import Link from 'next/link';
import { motion } from "framer-motion";
import { SubsubcategoryResponse } from '@/features/subsubcategory/types/subsubcategory';
interface Props {
    mySubSubCategories: SubsubcategoryResponse[],
    isLoading: boolean
}
const CategoriesSection = ({ mySubSubCategories, isLoading }: any) => {
    return (
        <div className="mt-25 mx-15  space-y-8 ">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <p className="text-2xl font-semibold pb-3">Shop by category</p>
                <div className=" gap-x-8 gap-y-10 flex">

                    {mySubSubCategories.slice(0, 8).map((sub_subcategory: any) => {
                        const subcategory: any = sub_subcategory.subcategory;
                        const category: any = sub_subcategory.subcategory.category;

                        return (

                            <Link key={sub_subcategory.id} href={`/product-category/${category.name}/${subcategory.name}/${sub_subcategory.id}`} className=" hover:cursor-pointer flex flex-col gap-y-2">
                                <div className="flex flex-col gap-y-2 w-30 h-30 overflow-hidden rounded-full bg-white px-2 py-1 ">
                                    <img className="hover:scale-110 transition-transform duration-500 w-full h-full object-cover" src={sub_subcategory.image.url} />
                                </div>
                                <p className="text-center">{sub_subcategory.name}</p>
                            </Link>
                        )
                    }
                    )}
                </div>
            </motion.div>

        </div>

    )
}

export default CategoriesSection