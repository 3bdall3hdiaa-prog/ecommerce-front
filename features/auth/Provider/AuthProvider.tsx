"use client";
import React from "react";
import { useEffect } from "react";
import { useAuthStore } from "@/Store/authStore";
import axiosInstance from "@/lib/axios";

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}


export default function AuthProvider({ children, }: { children: React.ReactNode; }) {

    const { addAccessToken, setIsInitializing, setUser } = useAuthStore();
    useEffect(() => {
        const initializeAuth = async () => {
            try {
                const { data } = await axiosInstance.post(
                    "/auth/refresh",
                    {},
                    {
                        withCredentials: true,
                    }
                );
                addAccessToken(data.accessToken);

                if (data) {
                    const res = await axiosInstance.get("/user/me", {
                        headers: {
                            Authorization: `Bearer ${data.accessToken}`,
                        },
                    })
                    if (res.status === 200) {
                        setUser(res.data.data);
                    }
                }


            } catch (err) {
                console.error(err);
                addAccessToken("");
            } finally {
                setIsInitializing(false);
            }
        };


        initializeAuth();
    }, []);

    return <>{children}</>;
}