import FeatureCard from "@/components/FeatureCard";
import React from "react";
import { features } from "@/constants/features";

const page = () => {
  return (
    <>
      <div className="flex justify-center pt-10 gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Discover our <span className="text-coral-red"> Powerful </span>{" "}
          Features
        </h2>
      </div>
      <div className="mt-10 ml-8 py-10 grid grid-cols-3 gap-14">
        {features.map((feature) => (
          <FeatureCard
            key={feature.label}
            imgURL={feature.imgURL}
            label={feature.label}
            subtext={feature.subtext}
          />
        ))}
      </div>
    </>
  );
};

export default page;
