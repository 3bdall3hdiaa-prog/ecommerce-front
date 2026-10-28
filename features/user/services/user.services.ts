import axiosInstance from "@/lib/axios"
import { UpdateUser, UserForm } from "../types/user.types"

export const getUsers = async () => {
    const res = await axiosInstance.get("/user")
    return res.data
}
export const addUser = async (user: UserForm) => {
    const res = await axiosInstance.post("/user", user)
    return res.data
}
export const updateUser = async ({ id, user }: { id: number, user: UpdateUser }) => {
    const res = await axiosInstance.patch(`/user/${id}`, user)
    return res.data
}
export const deleteUser = async (id: number) => {
    const res = await axiosInstance.delete(`/user/${id}`)
    return res.data
}