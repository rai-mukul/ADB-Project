import React, { useState } from "react";
import AvailableServices from "./AvailableServices";
import AnyQuestions from "./AnyQuestions";
import BannerSection from "./BannerSection";
import OurFeatures from "./OurFeatures";
import HowWeWorks from "./HowWeWorks";
import OfferBox from "./OfferBox";

export default function Index() {
  return (
    <div>
      <BannerSection />
      <OurFeatures />
      <AvailableServices />
      <HowWeWorks />
      <OfferBox />
      <AnyQuestions />
    </div>
  );
}
