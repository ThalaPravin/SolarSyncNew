import React from "react";
import MiniStatistic from '../components/Ministatistics';

export default function HomePage() {
  return (
    <div className="space-y-4">
      <MiniStatistic
        startContent={<span className="text-lg">📈</span>}
        endContent={<span>View More</span>}
        name="Monthly Sales"
        growth="+5%"
        value="10,500"
        growthColor="text-blue-500"
      />

      <MiniStatistic
        startContent={<span className="text-lg">📉</span>}
        endContent={<span>View More</span>}
        name="Monthly Expenses"
        growth="-3%"
        value="4,200"
        growthColor="text-red-500"
      />
    </div>
  );
}
