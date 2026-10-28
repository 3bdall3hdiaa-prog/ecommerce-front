import React from 'react'
import { ReviewResponse } from '../../types/reviews.types'
import { Trash } from 'lucide-react'

const ReviewRow = ({ review, setIsDeleteOpen, setCurrReview }: { review: ReviewResponse, setIsDeleteOpen: any, setCurrReview: any }) => {
    return (
        <tr key={review.id} className='border-b border-gray-300'>
            <td className='text-center py-4'>{review.id}</td>
            <td className='text-center'>"{review.comment}"</td>
            <td className='text-center'>{review.user.name}</td>
            <td className='text-center'>{review.product.name}</td>
            <td >
                <div className='flex items-center justify-center gap-x-4'>
                    <Trash onClick={() => { setIsDeleteOpen(true); setCurrReview(review) }} className='text-red-300 hover:text-red-500 cursor-pointer' />
                </div>
            </td>
        </tr>)
}

export default ReviewRow