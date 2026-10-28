import { orderForm } from '@/features/order/types/order.types';
import React from 'react'

const PaymentInformations = ({ order, x, setX, setOrder, handleCreateOrder, isPending }: { order: orderForm, x: string, setX: any, setOrder: any, handleCreateOrder: () => void, isPending: boolean }) => {
    return (
        <div className='p-4  bg-white   rounded-2xl mt-10'>

            <p className='text-2xl font-semibold'>Payment information</p>
            <form className='mt-5'>
                <div className='space-x-1 '>
                    <input onClick={() => { setX("bank"); setOrder({ ...order, paymentMethod: "card" }) }} type="radio" id="bank" name="payment" />
                    <label htmlFor="bank">Direct bank transfer</label>
                </div>

                <div
                    className={`overflow-hidden transition-all duration-500 ${x === "bank" ? "max-h-96 opacity-100 p-3" : "max-h-0 opacity-0 p-0"
                        } rounded-2xl w-full flex flex-col gap-y-4 my-2 bg-gray-100`}
                >
                    <p className='text-gray-500'>
                        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                    </p>
                </div>



                <div className='space-x-1'>
                    <input onClick={() => { setX("cash"); setOrder({ ...order, paymentMethod: "cash" }) }} type="radio" id="cash" name="payment" />
                    <label htmlFor="cash">Cash on delivery</label>
                </div>

                <div
                    className={`overflow-hidden transition-all duration-500 ${x === "cash" ? "max-h-96 opacity-100 p-3" : "max-h-0 opacity-0 p-0"
                        } rounded-2xl w-full flex flex-col gap-y-4 my-2 bg-gray-100`}
                >
                    <p className='text-gray-500'>Pay with cash upon delivery.</p>
                </div>
            </form>
            <hr className='text-gray-200 mt-4'></hr>
            <button disabled={isPending} onClick={() => handleCreateOrder()} className={`w-full bg-red-400 text-white py-2 rounded-2xl mt-4 ${isPending ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}>Place Order</button>
        </div>
    )
}

export default PaymentInformations