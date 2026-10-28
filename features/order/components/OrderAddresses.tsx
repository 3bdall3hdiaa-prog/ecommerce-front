import React from 'react'
import { orderResponse } from '../types/order.types'

const OrderAddresses = ({ order }: { order: orderResponse }) => {

    return (
        <div className="grid md:grid-cols-1 gap-6">
            {/* Billing */}
            <div className="bg-white shadow rounded-2xl p-6 ">
                <h3 className="text-xl font-bold mb-4">Billing address</h3>
                <div className="text-gray-600 space-y-1">
                    <p>{order.streetAddress}</p>
                    <p>{order.city}</p>
                    <p>Egypt</p>
                    <p>{order.phone}</p>
                    <p className="pt-2">{order.email}</p>
                </div>
            </div>


        </div>

    )
}

export default OrderAddresses