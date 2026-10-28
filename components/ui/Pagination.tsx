import React from 'react'

const Pagination = ({ pages, handlepaginatyion }: any) => {
    return (
        <div className='w-full flex justify-center mt-10'>
            <div className='flex gap-x-2'>
                {pages > 1 && Array.from({ length: pages }).map((page: any, index: number) => (
                    <button onClick={() => handlepaginatyion(index + 1)} key={index} className='text-white bg-red-400 font-semibold rounded-full px-3 py-1 text-sm  hover:bg-red-500 cursor-pointer' >{index + 1}</button>
                ))}
            </div>
        </div>
    )
}

export default Pagination