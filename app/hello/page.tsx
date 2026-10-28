"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

export const Page = () => {
    const searchParams = useSearchParams();
    const { addAccessToken } = useAuthStore();

    const accessToken = searchParams.get("accessToken");

    React.useEffect(() => {
        if (!accessToken) return;

        addAccessToken(accessToken);

        window.location.href = "/";
    }, [accessToken, addAccessToken]);

    return <div>Loading...</div>;
};

export default Page;