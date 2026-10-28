// services/auth.service.ts
import { RegisterData } from "../types/types";
import axiosInstance from "@/lib/axios";


export const register = async (data: RegisterData) => {
    const res = await axiosInstance.post("/auth/register", data);
    return res.data;
};

export const verifyOtp = async (data: { email: string, otp: string, mode: string }) => {
    if (!data.email || !data.otp) {
        throw new Error("Email and OTP are required");
    }
    const res = await axiosInstance.post(`/auth/verify-otp?mode=${data.mode}`, data);
    return res.data;

}
export const login = async (data: { email: string, password: string }) => {
    if (!data.email || !data.password) {
        throw new Error("Email and password are required");
    }
    const res = await axiosInstance.post("/auth/login", data);
    return res.data

}
export const logout = async (accessToken: string) => {
    if (!accessToken) return
    const res = await axiosInstance.post("/auth/logout", { headers: { Authorization: `Bearer ${accessToken}` } });
    return res.data
}
export const changePassword = async (data: { email: string, currentPassword: string, newPassword: string }) => {
    if (!data.currentPassword || !data.newPassword) {
        throw new Error("Current password and new password are required");
    }
    const res = await axiosInstance.post("/auth/reset-password", data);
    return res.data
}
export const newPassword = async (data: { email: string, newPassword: string }) => {
    if (!data.newPassword) {
        throw new Error("New password is required");
    }
    const res = await axiosInstance.post("/auth/new-password", data);
    return res.data
}
export const forgotPassword = async (data: { email: string }) => {
    if (!data.email) {
        throw new Error("Email is required");
    }
    const res = await axiosInstance.post("/auth/forgot-password", data);
    return res.data
}