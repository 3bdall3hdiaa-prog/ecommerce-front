
"use client";

import React, { useState } from "react";
import OrderTable from "@/features/order/components/admin/OrderTable";
import { useGetOrders } from "@/features/order/hooks/useGetOrders";
import OrderViewModal from "@/features/order/components/admin/OrderViewModal";
import OrderEditingModal from "@/features/order/components/admin/OrderEditingModal";
import OrderDeletingModal from "@/features/order/components/admin/OrderDeletingModal";
import OrderStats from "@/features/order/components/admin/OrderStats";

const Page = () => {
    const [searchInput, setSearchInput] = useState("");

    const [searchId, setSearchId] = useState<number | null>(null);

    const [orderView, setOrderView] = useState<any>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [currOrder, setCurrOrder] = useState<any>(null);

    const { data, isLoading, error }: any = useGetOrders(searchId);

    const handleSearch = () => {
        const value = searchInput.trim();

        if (!value) {
            setSearchId(null);
            return;
        }

        const id = Number(value);

        if (!Number.isInteger(id) || id <= 0) {
            return;
        }

        setSearchId(id);
    };

    const handleOpenModal = (
        type: "editing" | "deleting"
    ) => {
        if (type === "editing") {
            setIsEditing(true);
        }

        if (type === "deleting") {
            setIsDeleting(true);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return (
            <div>
                Error: {error.response?.data?.message || "Failed to fetch orders"}
            </div>
        );
    }

    const orders = data?.data ?? [];

    return (
        <div>
            <OrderStats data={data} />

            <OrderTable
                orders={orders}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                handleSearch={handleSearch}
                setCurrOrder={setCurrOrder}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleOpenModal={handleOpenModal}
                setOrderView={setOrderView}
            />

            <OrderViewModal
                orderView={orderView}
                setOrderView={setOrderView}
            />

            <OrderEditingModal
                currOrder={currOrder}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
            />

            <OrderDeletingModal
                currOrder={currOrder}
                isDeleting={isDeleting}
                setIsDeleting={setIsDeleting}
            />
        </div>
    );
};

export default Page;
