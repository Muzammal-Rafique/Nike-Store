import FeatureCard from "@/components/FeatureCard";
import React from "react";
import { features } from "@/constants/features";

const page = () => {
  return (
    <div className="mt-16 ml-8 grid grid-cols-3 gap-14">
      {features.map((feature) => (
        <FeatureCard
          key={feature.label}
          imgURL={feature.imgURL}
          label={feature.label}
          subtext={feature.subtext}
        />
      ))}
    </div>
  );
};

export default page;
