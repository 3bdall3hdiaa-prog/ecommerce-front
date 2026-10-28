import React from 'react'
import Link from 'next/link';
import { motion } from "framer-motion";

const BannerSection = () => {
    const banners = [
        {
            id: 1,
            img: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/12/banner-l-watch.jpg",
            title: "Next level adventure",
            desc: "A magical new way to use your watch without touching the screen. The brightest Apple display ever.",
            textColor: "text-black"
        },
        {
            id: 2,
            img: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/12/banner-l-furniture.jpg",
            title: "Hearth loft series",
            desc: "The expansive proportions of the seating’s surface, combined with the soft, curved arms create the ideal gwen for relaxation",
            textColor: "text-white"
        },
        {
            id: 3,
            img: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/12/banner-l-hair-dryer-w.jpg",
            title: "Hair dryer blue blush",
            desc: "Finished in Blue Blush, cushioned with soft fabric and with a removable lid that is also a non-slip mat for your hair dryer.",
            textColor: "text-black"
        }
    ];
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >

            <div className="flex mt-25  gap-x-4">
                {banners.map((item) => (
                    <div key={item.id} className="relative flex-1 rounded-2xl overflow-hidden group">

                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />

                        <div className="absolute bottom-5 px-5 flex flex-col gap-y-4 items-center text-center">

                            <p className={`text-2xl font-bold ${item.textColor}`}>
                                {item.title}
                            </p>

                            <p className="text-gray-500">
                                {item.desc}
                            </p>

                            <Link
                                href="/shop"
                                className="bg-[#E14A5C] px-4 py-3 rounded-full text-white text-sm hover:opacity-60 transition duration-300"
                            >
                                Shop Now
                            </Link>

                        </div>
                    </div>
                ))}
            </div>

        </motion.div>
    )
}

export default BannerSection