"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axiosInstance from "@/lib/axios";
import CategoryHeader from "@/features/category/components/CategoryHeader";
import SubSubCategories from "@/features/category/components/SubSubCategories";

const Page = () => {
    const params = useParams();
    const categoryid = params.categoryid as string;

    const [category, setCategory] = useState<any | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!categoryid) return;

        const getCategory = async () => {
            try {
                setIsLoading(true);

                const res = await axiosInstance.get(
                    `/category/${categoryid}`
                );

                if (res.status === 200) {
                    setCategory(res.data.data);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };

        getCategory();
    }, [categoryid]);

    if (isLoading) {
        return <div className="p-5">Loading...</div>;
    }

    return (
        <div className="px-5 w-full h-full py-10">

            <CategoryHeader category={category} />
            <SubSubCategories category={category} />

        </div>
    );
};

export default Page;