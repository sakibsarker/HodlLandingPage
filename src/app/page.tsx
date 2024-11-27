"use client";
import BottomBox from "@/components/BottomBox";
import Box from "@/components/Box";
import Boxtwo from "@/components/Boxtwo";

import HeroSection from "@/components/HeroSection";
import ImageBox from "@/components/ImageBox";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSection />
      {/* <Box /> */}
      <Boxtwo />
      <ImageBox />
      <BottomBox />
    </>
  );
};

export default page;
