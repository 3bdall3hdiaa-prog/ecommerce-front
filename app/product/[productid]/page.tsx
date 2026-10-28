"use client"
import { useState } from "react"
import { useParams } from "next/navigation"
import { useAuthStore } from "@/Store/authStore"
import { useCreateCartItem } from "@/features/cart/hooks/useCreateCartItem"
import { useGetSingleProduct } from "@/features/products/hooks/useGetSingleProduct"
import ProductDetails from "@/features/products/components/ProductDetails"
import Reviews from "@/features/reviews/components/Reviews"
import Breadcrumb from "@/features/products/components/Breadcrumb"

const ProductPage = () => {
    const { productid } = useParams<{ productid: string }>()
    const [quantity, setQuantity] = useState(1)
    const { user } = useAuthStore()
    const { mutate: addToCart } = useCreateCartItem()
    const { data, isLoading, error } = useGetSingleProduct({ id: Number(productid) })

    if (isLoading) return <div>loading</div>
    if (error) return <div>error</div>

    const product = data?.data
    if (!product) return <div>product not found</div>

    const subsubcategory = product.subsubcategory
    const subcategory = subsubcategory?.subcategory
    const category = subcategory?.category

    const breadcrumbItems = [
        { label: "home", href: "/" },
        { label: category?.name, href: `/product-category/${category?.name}` },
        { label: subcategory?.name, href: `/product-category/${category?.name}/${subcategory?.name}` },
        { label: subsubcategory?.name, href: `/product-category/${category?.name}/${subcategory?.name}/${subsubcategory?.id}` },
        { label: product.name },
    ].filter((item): item is { label: string; href?: string } => !!item.label)

    const handleAddToCart = () => {
        if (user.role === "admin") {
            alert("you are admin and you can't add to cart")
            return
        }

        addToCart(
            { productId: product.id, quantity, userId: user.id },
            {
                onSuccess: (res) => alert(res.message),
                onError: (err: any) => alert(err.response?.data.message || err.message),
            }
        )
    }

    return (
        <div className="px-4 py-8 bg-white w-full">
            <Breadcrumb items={breadcrumbItems} />
            <div className="mt-5">
                <ProductDetails
                    product={product}
                    quantity={quantity}
                    setQuantity={setQuantity}
                    handleAddToCart={handleAddToCart}
                />
            </div>
            <Reviews productId={product.id} />
        </div>
    )
}

export default ProductPage