import { orderForm } from '@/features/order/types/order.types'
import React, { useState } from 'react'
import { useCreateOrder } from '@/features/order/hooks/useCreateOrder'
import { useRouter } from 'next/navigation'

const BillingDetails = ({ order, setOrder }: { order: orderForm, setOrder: any }) => {
    const router = useRouter()
    const { mutate, isPending } = useCreateOrder()
    const [x, setX] = useState('')
    const handleCreateOrder = () => {
        mutate(order, {
            onSuccess: (data) => {
                if (data.data?.id) {
                    router.push(`/checkout/order-received/${data.data.id}`)
                }
                else {
                    window.location.href = data.checkoutUrl
                }
            }
        })
    }
    return (
        <div className=''>
            <form onSubmit={(e) => { e.preventDefault(); handleCreateOrder(); }} className='w-full flex flex-col gap-y-4 mt-4'>
                <div className='px-4 py-8  bg-white space-y-2 rounded-2xl'>
                    <p className='text-2xl font-semibold'>Billing Details</p>

                    <div className='flex gap-x-4 w-full'>
                        <div className='flex flex-col gap-y-1 w-1/2'>
                            <label>First Name <span className='text-red-400'>*</span></label>
                            <input required value={order.fname} onChange={(e) => setOrder({ ...order, fname: e.target.value })} type="text" className=' py-2 px-3 border border-gray-300 rounded-full ' />
                        </div>
                        <div className='flex flex-col gap-y-2 w-1/2'>
                            <label>Last Name <span className='text-red-400'>*</span></label>
                            <input required value={order.lname} onChange={(e) => setOrder({ ...order, lname: e.target.value })} type="text" className='py-2 px-3 border border-gray-300 rounded-full' />
                        </div>
                    </div>

                    <div className='flex gap-x-4 w-full'>
                        <div className='flex flex-col gap-y-1 w-1/2'>
                            <label>Email</label>
                            <input required value={order.email} onChange={(e) => setOrder({ ...order, email: e.target.value })} type="text" className='py-2 px-3 border border-gray-300 rounded-full ' />
                        </div>
                        <div className='flex flex-col gap-y-1 w-1/2'>
                            <label>Phone</label>
                            <input required onChange={(e) => setOrder({ ...order, phone: e.target.valueAsNumber })} type="number" className='py-2 px-3 border border-gray-300 rounded-full ' />
                        </div>
                    </div>

                    <div className='flex gap-x-4 w-full'>
                        <div className='flex flex-col gap-y-1 w-1/2'>
                            <label>Street address <span className='text-red-400'>*</span></label>
                            <input required value={order.streetAddress} onChange={(e) => setOrder({ ...order, streetAddress: e.target.value })} type="text" className='py-2 px-3 border border-gray-300 rounded-full ' />
                        </div>
                        <div className='flex flex-col gap-y-1 w-1/2'>
                            <label>Town / City <span className='text-red-400'>*</span></label>
                            <input required value={order.city} onChange={(e) => setOrder({ ...order, city: e.target.value })} type="text" className='py-2 px-3 border border-gray-300 rounded-full ' />
                        </div>
                    </div>


                    <div className='flex flex-col gap-y-1'>
                        <label>Order Notes (optional)</label>
                        <textarea value={order.orderNotes} onChange={(e) => setOrder({ ...order, orderNotes: e.target.value })} placeholder='Notes about your order , e.g special notes for delivery' name="" id="" cols={30} rows={10} className='py-2 px-3 border border-gray-300 rounded-2xl w-full '></textarea>
                    </div>
                </div>
                <div className='p-4  bg-white   rounded-2xl mt-10'>

                    <p className='text-2xl font-semibold'>Payment information</p>
                    <div className='mt-5'>
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
                    </div>
                    <hr className='text-gray-200 mt-4'></hr>
                    <button type='submit' disabled={isPending} className={`transition-all duration-300 hover:opacity-60 w-full bg-[#E14A5C] text-white py-2 rounded-2xl mt-4 ${isPending ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}>Place Order</button>
                </div>
            </form>
        </div >
    )
}

export default BillingDetails