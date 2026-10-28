import React from 'react'

const Card = ({ title, value }: any) => {
    return (
        <div className="bg-white p-4 rounded-xl shadow flex flex-col gap-2">
            <p className="text-gray-500 text-sm">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
        </div>
    )
}

export default Card