import Rating from '@mui/material/Rating'
import { CircleUserRound } from 'lucide-react'
import React from 'react'
import { useCreateReviews } from '../hooks/useCreateReviews'
import { useAuthStore } from '@/Store/authStore'
import { useGetReviews } from '../hooks/useGetReviews'
import { ReviewResponse } from '../types/reviews.types'

type Props = {
    productId: number
}

const Reviews = ({ productId }: Props) => {
    const [review, setReview] = React.useState(0)
    const { user } = useAuthStore()
    const [comment, setComment] = React.useState('')
    const { mutate, isPending } = useCreateReviews()
    const { data, isLoading, error } = useGetReviews({ productId })
    if (isLoading) return <div>loading</div>
    if (error) return <div>error</div>
    const reviews = data?.data
    const handleAdd = (productId: number) => {
        mutate({ productId, rating: review, comment }, {
            onSuccess: () => {
                setReview(0)
                setComment('')
                alert('Review added successfully')
            }
        })
    }
    return (
        <div className='space-y-'>
            {/* create review */}
            <div className={` p-4 rounded-2xl ${user.role === 'user' ? '' : 'hidden'}`}>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleAdd(productId)
                }}>
                    <div className='flex flex-col '>
                        <Rating className='' value={review} onChange={(event, newValue) => { setReview(newValue || 0) }} />
                        <textarea minLength={3} value={comment} onChange={(e) => setComment(e.target.value)} required className=' bg-white p-4 outline-none border-2 border-gray-200 border-dashed rounded-2xl  w-full h-32 mt-4' placeholder='Comment' />
                    </div>
                    <div className='text-right'>
                        <button disabled={isPending} type='submit' className={`${isPending ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} hover:opacity-60 px-4 py-2 bg-[#E14A5C] text-white rounded-full mt-4 `}>add review</button>
                    </div>
                </form>
            </div>

            {/* reviews */}
            <div className='mt-10 p-4 bg-gray-100 rounded-2xl'>
                <p className='text-lg font-semibold '>Reviews ( <span className='text-[#E14A5C]'>{reviews?.length}</span> )</p>
                <div className='mt-4  p-4 '>
                    {/* card of review */}
                    {reviews?.map((r: ReviewResponse, i: number) => {
                        return (
                            <div className={`${i !== reviews.length - 1 ? 'border-b-2 border-gray-200' : ''} space-y-4  p-4`}>
                                <div className='flex justify-between'>
                                    <div className='flex items-center gap-x-4'>
                                        <CircleUserRound size={50} />
                                        <div>
                                            <p>{r.user.name}</p>
                                            <Rating name="read-only" value={r.rating} readOnly />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-between'>
                                    <p>"{r.comment}"</p>
                                    <p className='text-gray-400'>{new Date(r.createdAt).toLocaleDateString()}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Reviews