import axiosInstance from "@/lib/axios"

export const createWishList = async (data: { productId: number }) => {
    const res = await axiosInstance.post("/wishlist", data)
    if (res.status === 201) {
        return res.data
    }

}

export const getWishlist = async () => {
    try {
        const res = await axiosInstance.get("/wishlist")
        return res.data.data

    } catch (error) {
        throw (error)
    }

}
export const deleteWishlist = async (data: { id: number }) => {
    const res = await axiosInstance.delete(`/wishlist/${data.id}`)
    if (res.status === 200) {
        return res.data
    }
}