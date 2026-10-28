"use client"
import { p } from "framer-motion/client"
import { useState } from "react"

const initialProducts = [
    {
        id: 1,
        name: "MacBook Pro",
        price: 2000,
        image: "",
    },
    {
        id: 2,
        name: "Dell Monitor 27",
        price: 300,
        image: "",
    },
]

export const useCart = () => {
    const [items, setItems] = useState(initialProducts)
    const [isOpen, setIsOpen] = useState(false)

    const removeItem = (id: number) => {
        setItems(prev => prev.filter(p => p.id !== id))
    }

    const subtotal = items.reduce((sum, p) => sum + p.price, 0)

    return {
        products: items,
        isOpen,
        setIsOpen,
        removeItem,
        subtotal,
    }
}