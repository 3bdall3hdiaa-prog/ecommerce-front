import React from 'react'
import { Trash } from 'lucide-react'
import { ReviewResponse } from '../../types/reviews.types'
import ReviewRow from './ReviewRow'

const ReviewsTable = ({ Reviews, setIsDeleteOpen, setCurrReview }: { Reviews: ReviewResponse[], setIsDeleteOpen: any, setCurrReview: any }) => {
    return (
        <>
            <div className='p-6'>
                <div className='text-start'>
                    <p className='text-xl font-semibold'>Manage Reviews</p>
                </div>
                <div className='overflow-x-auto mt-5'>

                    <table className='w-full table-fixed'>
                        <thead>
                            <tr className='border-b border-gray-300 text-center uppercase'>
                                <th className='w-30'>ID</th>
                                <th className='w-30'>Comment</th>
                                <th className='w-30'>User</th>
                                <th className='w-30'>Product</th>
                                <th className='w-30'>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {Reviews.length === 0 ?
                                <tr>
                                    <td colSpan={5} className='text-center py-4'>No Reviews found</td>
                                </tr>
                                :
                                Reviews.map((review: any) => (
                                    <ReviewRow key={review.id} review={review} setIsDeleteOpen={setIsDeleteOpen} setCurrReview={setCurrReview} />
                                ))
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    )
}

export default ReviewsTable