"use client";

import React, { useRef, useState } from "react";
import { MapPinned, Box, ThumbsUp, Phone, Heart, type LucideIcon } from "lucide-react";

type Feature = {
    id: number;
    icon: LucideIcon;
    title: string;
    description: string;
};

const FEATURES: Feature[] = [
    { id: 1, icon: MapPinned, title: "Fast, Free Shipping", description: "On order over $50" },
    { id: 2, icon: Box, title: "Next Day Delivery", description: "Free – spend over $99" },
    { id: 3, icon: ThumbsUp, title: "60-Day Free Returns", description: "All shipping methods" },
    { id: 4, icon: Phone, title: "Expert Customer Service", description: "Choose chat or call us" },
    { id: 5, icon: Heart, title: "Exclusive Brands", description: "More exclusive products" },
];

const FeatureItem = () => {
    const sliderRef = useRef<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
        const el = sliderRef.current;
        if (!el) return;
        setActiveIndex(Math.round(el.scrollLeft / el.clientWidth));
    };

    const goTo = (index: number) => {
        const el = sliderRef.current;
        if (!el) return;
        el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
    };

    return (
        <section className="mt-25 rounded-3xl bg-[#0D0625] py-6 text-white md:rounded-full md:px-20">
            <div
                ref={sliderRef}
                onScroll={handleScroll}
                className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:snap-none md:items-center md:justify-between md:gap-x-4 md:overflow-visible"
            >
                {FEATURES.map(({ id, icon: Icon, title, description }) => (
                    <div
                        key={id}
                        className="flex w-full shrink-0 snap-center items-center justify-center gap-x-3 px-6 md:w-auto md:shrink md:justify-start md:px-0"
                    >
                        <Icon size={40} className="shrink-0 text-[#821ED9]" />
                        <div>
                            <p>{title}</p>
                            <p className="text-gray-400">{description}</p>
                        </div>
                    </div>
                ))}
            </div>


            <div className="mt-4 flex justify-center gap-x-2 md:hidden">
                {FEATURES.map(({ id }, i) => (
                    <button
                        key={id}
                        type="button"
                        aria-label={`Go to slide ${i + 1}`}
                        onClick={() => goTo(i)}
                        className={`h-2 rounded-full transition-all ${i === activeIndex ? "w-6 bg-[#821ED9]" : "w-2 bg-gray-600"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default FeatureItem;
