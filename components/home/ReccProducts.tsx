import React, { useEffect, useState } from 'react'
import Cardproduct from '../../features/products/components/Cardproduct';
import { motion } from "framer-motion";
import { useGetProductsWithFilter } from '@/features/products/hooks/useGetProductsWithFilter';
const ReccProducts = () => {
    const { data: productRecommended, isLoading: productLoading } = useGetProductsWithFilter({ filter: 'isRecommended', page: 1, limit: 10, type: 'Recommended' })
    const [products, setProducts] = useState([]);
    useEffect(() => {
        if (productRecommended) {
            setProducts(productRecommended.data)
        }
    }, [productRecommended])

    return (
        <div className="mt-25 mx-1 lg:mx-15">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >

                <p className="text-2xl">More recommended products </p>

                <div className='mt-5 grid 
gap-4 
grid-cols-2
md:grid-cols-4 
lg:grid-cols-5'>

                    {productLoading ? <p className="text-center text-gray-400">Loading...</p> :
                        products.map((product: any) => (
                            <Cardproduct key={product.id} product={product} handleaddtocart={() => alert(`added to cart ${product.id}`)} />
                        ))}
                </div>
            </motion.div>
        </div>
    )
}

export default ReccProducts