"use client"
import CategoriesSection from "@/features/category/components/CategoriesSection";
import BannerSection from "@/components/home/BannerSection";
import ReccProducts from "@/components/home/RecommendedProducts";
import HeroSection from "@/components/home/HeroSection";
import FeatureItem from "@/components/home/FeatureItem";
import FeatureProducts from "@/components/home/FeatureProducts";
import AboutSection from "@/components/home/AboutSection";
import { useGetSubSubCategories } from "@/features/subsubcategory/hooks/useGetSubSubCategories";
import { SubsubcategoryResponse } from "@/features/subsubcategory/types/subsubcategory";

export default function Home() {
  const { data, isLoading }: any = useGetSubSubCategories()
  if (isLoading) {
    return <p className="text-center text-gray-400">Loading...</p>
  }
  const mySubSubCategories: SubsubcategoryResponse[] = data.data

  return (
    <div className=" bg-gray-100 px-4 py-8">
      <HeroSection mySubSubCategories={mySubSubCategories} isLoading={isLoading} />
      <FeatureItem />
      <FeatureProducts />
      <CategoriesSection mySubSubCategories={mySubSubCategories} isLoading={isLoading} />
      <BannerSection />
      <ReccProducts />
      <AboutSection />
    </div >
  );
} 
