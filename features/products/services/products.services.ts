import axiosInstance from "@/lib/axios";
import { productForm, updataProduct } from "../types/Product";

export const getProducts = async ({ search }: { search?: string }) => {

    const res = await axiosInstance.get("/product?", {
        params: {
            search,
        },
    })
    return res.data

}
export const getProductsWithFilter = async (query: any) => {
    const res = await axiosInstance.get('/product/filter', {
        params: {
            page: query.page,
            limit: query.limit,
            filter: query.filter,
            fromPrice: query.fromPrice,
            toPrice: query.toPrice,
            sort: query.sort,
        },
    })
    return res.data
}
export const createProducts = async (
    data: { product: productForm }
): Promise<any> => {
    try {
        const formData = new FormData();
        formData.append("isFeatured", String(data.product.isFeatured));
        formData.append("isRecommended", String(data.product.isRecommended));
        formData.append("name", data.product.name);
        formData.append("slug", data.product.slug);

        if (data.product.description) {
            formData.append("description", data.product.description);
        }

        formData.append("price", String(data.product.price));

        formData.append("discount", String(data.product.discount || 0));


        formData.append(
            "subsubcategoryId",
            data.product.subsubcategoryId
        );

        formData.append("stock", String(data.product.stock));

        // الصور
        if (data.product.files?.length) {
            data.product.files.forEach((file: File) => {
                formData.append("files", file);
            });
        }

        const res = await axiosInstance.post("/product", formData);

        return res.data;
    } catch (error: any) {
        throw error;

    }
};
export const updateProduct: (data: { id: number, data: updataProduct }) => Promise<any> = async (data: { id: number, data: updataProduct }) => {
    try {
        if (!data.id || !data.data) return
        const formData = new FormData();
        if (data.data.name) formData.append("name", data.data.name);
        if (data.data.slug) formData.append("slug", data.data.slug);
        if (data.data.description) formData.append("description", data.data.description);
        if (data.data.price) formData.append("price", String(data.data.price));
        formData.append("discount", String(data.data.discount || 0));
        if (data.data.subsubcategoryId) formData.append("subsubcategoryId", String(data.data.subsubcategoryId));
        if (data.data.stock) formData.append("stock", String(data.data.stock));
        formData.append("isFeatured", String(data.data.isFeatured));
        formData.append("isRecommended", String(data.data.isRecommended));

        const res = await axiosInstance.patch(`/product/${data.id}`, formData)
        return res.data
    } catch (error) {
        console.log('this is error', error);
    }
}
export const deleteProduct: ({ id }: { id: number }) => Promise<any> = async ({ id }: { id: number }) => {
    try {
        const res = await axiosInstance.delete(`/product/${id}`)
        return res.data
    } catch (error) {
        console.log('this is error', error);
    }
}
export const getSingleProduct = async (id: number) => {

    const res = await axiosInstance.get(`/product/single/${id}`)
    if (res.status === 200) return res.data

}
