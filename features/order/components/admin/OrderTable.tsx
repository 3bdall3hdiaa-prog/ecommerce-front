
import React from "react";
import { orderResponse } from "../../types/order.types";
import { Search } from "lucide-react";
import OrderRow from "./OrderRow";

interface Props {
    orders: orderResponse[];
    setOrderView: (order: any) => void;
    handleOpenModal: (type: "editing" | "deleting") => void;
    searchTerm: string;
    setSearchTerm: (value: string) => void;
    setCurrOrder: (order: any) => void;
    searchInput: string;
    setSearchInput: (value: string) => void;
    handleSearch: () => void;
}

const OrderTable = ({
    handleSearch,
    searchInput,
    setSearchInput,
    orders,
    setOrderView,
    handleOpenModal,
    setCurrOrder,
}: Props) => {
    return (
        <div className="w-full">
            <div className="flex justify-between items-center">
                <p className="text-xl">Manage Orders</p>

                <div className="flex rounded-3xl border border-gray-300 px-3 py-2 mt-2 w-[250px] items-center gap-x-2">
                    <Search
                        size={20}
                        className="cursor-pointer shrink-0 hover:scale-125 transition-all duration-300"
                        onClick={handleSearch}
                    />

                    <input
                        value={searchInput}
                        onChange={(e) =>
                            setSearchInput(e.target.value)
                        }
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleSearch();
                            }
                        }}
                        type="number"
                        min="1"
                        placeholder="Search by order ID..."
                        className="outline-none w-full min-w-0"
                    />
                </div>
            </div>

            <div className="w-full overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="uppercase border-b border-gray-300">
                            <th className="py-3">Order Id</th>
                            <th>Date</th>
                            <th>Customer</th>
                            <th>Status</th>
                            <th>Payment Method</th>
                            <th>Total</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.length > 0 ? (
                            orders.map((order) => (
                                <OrderRow
                                    key={order.id}
                                    order={order}
                                    setCurrOrder={setCurrOrder}
                                    handleOpenModal={handleOpenModal}
                                    setOrderView={setOrderView}
                                />
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={7}
                                    className="text-center py-6 text-gray-500"
                                >
                                    No orders found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderTable;
