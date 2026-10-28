"use client"
import { useGetUsers } from '@/features/users/hooks/useGetUsers'
import { useGetProducts } from '@/features/products/hooks/useGetProducts'
import { useGetCategories } from '@/features/category/hooks/useGetCategories'
import { useGetSubCategories } from '@/features/subcategory/hooks/useGetSubCategories'
import { useGetSubSubCategories } from '@/features/subsubcategory/hooks/useGetSubSubCategories'
import StatsCards from '@/features/dashboard/components/admin/StatsCards'
import RecentUsers from '@/features/dashboard/components/admin/RecentUsers'
import { UserResponse } from '@/features/users/types/user.types'
import { productResponse } from '@/features/products/types/Product'
import TopProducts from '@/features/dashboard/components/admin/TopProducts'

const Page = () => {
    const { data, isLoading } = useGetUsers()
    const { data: productsData, isLoading: isLoadingProducts } = useGetProducts({ search: "" })
    const { data: categoriesData, isLoading: isLoadingCategories }: any = useGetCategories()
    const { data: subcategoriesData, isLoading: isLoadingSubCategories }: any = useGetSubCategories()
    const { data: subSubCategoriesData, isLoading: isLoadingSubSubCategories }: any = useGetSubSubCategories()
    if (isLoading || isLoadingProducts || isLoadingCategories || isLoadingSubCategories || isLoadingSubSubCategories) {
        return <p className="text-center text-gray-400">Loading...</p>
    }
    const countUsers: number = data?.count || 0
    const countProducts: number = productsData?.total || 0
    const countCategories: number = categoriesData?.count || 0
    const countSubCategories: number = subcategoriesData?.count || 0
    const countSubSubCategories: number = subSubCategoriesData?.count || 0

    const recentUsers: UserResponse[] = data?.recentUsers
    const topProducts: productResponse[] = productsData.topProducts

    // ====== CALCULATIONS ======
    const avgPrice = productsData.averagePrice || 0
    const totalStock = productsData.totalStock || 0
    const totalValue = productsData.inventoryValue || 0
    const avgRating = productsData.averageRating || 0





    return (
        <div className="p-6 space-y-6  min-h-screen">

            <StatsCards avgRating={avgRating} totalStock={totalStock} totalValue={totalValue} avgPrice={avgPrice} countSubSubCategories={countSubSubCategories} countSubCategories={countSubCategories} countCategories={countCategories} countProducts={countProducts} countUsers={countUsers} topRated={topProducts[0]} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <TopProducts topProducts={topProducts} />
                <RecentUsers users={recentUsers} />
            </div>

        </div>
    )
}

export default Page