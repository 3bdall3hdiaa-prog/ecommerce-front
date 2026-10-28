"use client"
import React from 'react'
import Cardproduct from '../../features/products/components/Cardproduct';
import { motion } from "framer-motion";
import { useGetProductsWithFilter } from '@/features/products/hooks/useGetProductsWithFilter';
const FeatureProducts = () => {
    const [products, setProducts] = React.useState([]);
    const { data, isLoading } = useGetProductsWithFilter({ filter: 'isFeatured', page: 1, limit: 10, type: 'Featured' })
    React.useEffect(() => {
        if (data) {
            setProducts(data.data)
        }
    }, [data])
    const handleaddtocart = (id: number) => {
        alert(`added to cart ${id}`)
    }
    return (
        <div className="mt-25 mx-1 lg:mx-15">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className='flex items-center justify-between'>
                    <p className="text-2xl font-semibold">Featured Products</p>
                </div>
                <div className='mt-5'>


                    <div className='grid 
gap-4 
grid-cols-2
md:grid-cols-4 
lg:grid-cols-5'>



                        {isLoading ? <p className="text-center text-gray-400">Loading...</p>
                            : products.map((product: any) => (
                                <Cardproduct key={product.id} product={product} handleaddtocart={handleaddtocart} />

                            ))}



                    </div>
                </div>
            </motion.div>
        </div>

    )
}

export default FeatureProducts