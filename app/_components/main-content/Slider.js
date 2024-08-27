"use client";

import { useState } from "react";
import Button from "./Button";

const tabs = [
  {
    title: "Chocolate",
    products: [
      "Dark Chocolate",
      "Milk Chocolate",
      "White Chocolate",
      "Chocolate Truffles",
    ],
  },
  {
    title: "Tea",
    products: ["Green Tea", "Black Tea", "Herbal Tea", "Chai Tea"],
  },
  {
    title: "Lemonade",
    products: [
      "Classic Lemonade",
      "Strawberry Lemonade",
      "Mint Lemonade",
      "Pink Lemonade",
    ],
  },
];

export default function Slider() {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="w-full bg-[#040454] pt-[75px] px-[3rem]">
      <div>
        <nav
          className="-mb-0.5 flex justify-center gap-x-6"
          aria-label="Tabs"
          role="tablist"
          aria-orientation="horizontal"
        >
          {tabs.map((tab, index) => (
            <button
              key={index}
              type="button"
              className={`text-3xl hs-tab-active:font-semibold hs-tab-active:border-gray-200 hs-tab-active:text-gray-200 py-2 px-1 inline-flex items-center gap-x-2 border-b-4 border-transparent whitespace-nowrap text-gray-500 hover:text-gray-200 focus:outline-none focus:text-gray-200 disabled:opacity-50 disabled:pointer-events-none ${
                activeTab === index ? "active" : ""
              }`}
              id={`horizontal-alignment-item-${index + 1}`}
              aria-selected={activeTab === index}
              data-hs-tab={`#horizontal-alignment-${index + 1}`}
              aria-controls={`horizontal-alignment-${index + 1}`}
              onClick={() => handleTabClick(index)}
              role="tab"
            >
              {tab.title}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-3">
        {tabs.map((tab, index) => (
          <div
            key={index}
            id={`horizontal-alignment-${index + 1}`}
            className={index === activeTab ? "" : "hidden"}
            role="tabpanel"
            aria-labelledby={`horizontal-alignment-item-${index + 1}`}
          >
            <ul className="flex flex-row gap-8">
              {tab.products.map((product, i) => (
                <li key={i} className="font-semibold text-gray-200">
                  {product}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 mb-8">
        <Button text={"Shop All"} />
      </div>
    </section>
  );
}
