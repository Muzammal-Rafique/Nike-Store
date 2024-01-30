import Image from "next/image";
import React from "react";

const Stat = () => {
  return (
    <div className="flex items-center justify-center bg-[#e79d3b] p-8">
      <div className="stats shadow">
        <div className="stat w-80 h-44">
          <div className="stat-figure text-primary">
            <Image
              src="/icons/brand.png"
              alt="brand-icon"
              width={100}
              height={100}
            />
          </div>
          <div className="flex flex-col justify-center pt-10 pl-5">
            <div className="stat-value text-cyan-300 text-[60px]">1K+</div>
            <div className="stat-desc text-coral-red text-3xl font-bold pt-3">
              BRANDS
            </div>
          </div>
        </div>

        <div className="stat w-80 h-44">
          <div className="stat-figure text-secondary">
            <Image
              src="/icons/store.png"
              alt="store-icon"
              width={90}
              height={90}
            />
          </div>
          <div className="flex flex-col justify-center pt-10 pl-5">
            <div className="stat-value text-cyan-300 text-[40px]">500+</div>
            <div className="stat-desc text-coral-red text-3xl font-bold pt-3">
              SHOPS
            </div>
          </div>
        </div>
        <div className="stat w-80 h-44">
          <div className="stat-figure text-secondary">
            <Image
              src="/icons/customer.png"
              alt="customer"
              width={100}
              height={100}
            />
          </div>
          <div className="flex flex-col justify-center pt-10 pl-5">
            <div className="stat-value text-cyan-300 text-[40px]">250k+</div>
            <div className="stat-desc text-coral-red text-xl font-bold pt-3">
              CUSTOMERS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
