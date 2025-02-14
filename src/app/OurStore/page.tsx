import HeroSection from "@/components/OurStore/HeroSection";
import TodaysSection from "@/components/OurStore/TodaysSection";
import CategorySection from "@/components/OurStore/CategorySection";
import React from "react";
import SellingProducts from "@/components/OurStore/SellingProducts";
import JblAd from "@/components/OurStore/JblAd";
import ExploreSection from "@/components/OurStore/ExploreSection";

const OurStore = () => {
  return (
    <main className="flex flex-col min-h-screen bg-white px-[30px] xl:px-[60px]  ">
      <HeroSection />
      <TodaysSection />
      <CategorySection />
      <SellingProducts />
      <JblAd />
      <ExploreSection />
    </main>
  );
};

export default OurStore;
