import React from "react";

export default function MiniStatistic(props) {
  const { startContent, endContent, name, growth, value, growthColor } = props;

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-center">
        {startContent}
        <div className={`ml-${startContent ? "4" : "0"}`}>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {name}
          </p>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white">
            {value}
          </p>
          {growth && (
            <div className="flex items-center">
              <p className={`text-xs font-bold ${growthColor} mr-2`}>
                {growth}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 font-normal">
                since last month
              </p>
            </div>
          )}
        </div>
        <div className="ml-auto">
          {endContent}
        </div>
      </div>
    </div>
  );
}
