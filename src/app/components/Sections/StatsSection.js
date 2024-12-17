'use client';
import React, { useEffect, useRef, useState } from "react";
import Counter from "../CounterPart"; // Import the Counter component

const StatsSection = () => {
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const stats = [
    { value: 8000, label: "Creators on the platform", symbol: "+" },
    { value: 3, label: "Flat platform fee", symbol: "%" },
    { value: 99.9, label: "Uptime guarantee", symbol: "%" },
    { value: 70, label: "Paid out to creators", symbol: "M", prefix: "$" },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-10 px-20 bg-white"
    >
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`bg-gray-50 p-8 flex flex-col items-center text-center ${
              index === 0 ? "rounded-tl-xl rounded-bl-xl" : ""
            } ${index === stats.length - 1 ? "rounded-tr-xl rounded-br-xl" : ""}`}
          >
            <h3 className="text-4xl font-bold text-gray-800">
              {stat.prefix || ""}
              <Counter endValue={stat.value} start={startCounting} />
              {stat.symbol || ""}
            </h3>
            <p className="mt-2 text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
