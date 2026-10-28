"use client"
import { useGetAllReviews } from '@/features/review/hooks/useGetAllReviews'
import React from 'react'
import ReviewsTable from '@/features/review/components/admin/ReviewsTable'
import { ReviewResponse } from '@/features/review/types/reviews.types'
import ReviewDeletingModal from '@/features/review/components/admin/ReviewDeletingModal'

const page = () => {
    const { data, isLoading } = useGetAllReviews()
    const [isDeleteOpen, setIsDeleteOpen] = React.useState(false)
    const [currReview, setCurrReview] = React.useState(null as any)

    if (isLoading) return <p>Loading...</p>

    const Reviews: ReviewResponse[] = data?.data || []
    return (
        <div className=''>
            <ReviewsTable Reviews={Reviews} setIsDeleteOpen={setIsDeleteOpen} setCurrReview={setCurrReview} />
            <ReviewDeletingModal isDeleteOpen={isDeleteOpen} setIsDeleteOpen={setIsDeleteOpen} currReview={currReview} />
        </div>
    )
}

export default page