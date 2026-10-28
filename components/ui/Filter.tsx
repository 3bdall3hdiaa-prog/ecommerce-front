"use client"
import React from 'react'
import Slider from '@mui/material/Slider';
import { useState } from 'react';
function valuetext(value: number) {
    return `${value}°C`;
}
const Filter = ({ value, setValue, setSort, sort }: { sort: string, setSort: React.Dispatch<React.SetStateAction<string>>, value: number[], setValue: React.Dispatch<React.SetStateAction<number[]>> }) => {
    const handleChange = (event: Event, newValue: number[]) => {
        setValue(newValue);
    };

    const dataforcolors = [
        { id: 1, name: "black" },
        { id: 2, name: "amber" },
        { id: 3, name: "blue" },
        { id: 4, name: "red" },
    ]
    return (
        <div className='rounded-2xl h-screen  flex flex-col gap-y-8 w-1/4 bg-white px-4 py-6 '>
            <p>Filter by price</p>
            <div className=' '>
                <Slider sx={{ color: "red" }}
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    min={0}
                    max={10000}
                    getAriaValueText={valuetext}
                />
                <p>Price: ${value[0]} - ${value[1]}</p>

            </div>

            <hr className='text-gray-200'></hr>

            <div className="space-y-4">
                <p>Sorting:</p>

                <div className="flex flex-col gap-2">
                    {/* Sort By Latest */}
                    <div className="flex items-center gap-x-2">
                        <input
                            className="w-4 h-4"
                            type="radio"
                            id="latest"
                            name="sorting"
                            value="latest"
                            checked={sort === "latest"}
                            onChange={(e) => setSort(e.target.value)}
                        />
                        <label htmlFor="latest" className="text-lg">
                            Sort By Latest
                        </label>
                    </div>

                    {/* Price: Low to High */}
                    <div className="flex items-center gap-x-2">
                        <input
                            className="w-4 h-4"
                            type="radio"
                            id="low"
                            name="sorting"
                            value="price-asc"
                            checked={sort === "price-asc"}
                            onChange={(e) => setSort(e.target.value)}
                        />
                        <label htmlFor="low" className="text-lg">
                            Sort By Price: Low to High
                        </label>
                    </div>

                    {/* Price: High to Low */}
                    <div className="flex items-center gap-x-2">
                        <input
                            className="w-4 h-4"
                            type="radio"
                            id="high"
                            name="sorting"
                            value="price-desc"
                            checked={sort === "price-desc"}
                            onChange={(e) => setSort(e.target.value)}
                        />
                        <label htmlFor="high" className="text-lg">
                            Sort By Price: High to Low
                        </label>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Filter