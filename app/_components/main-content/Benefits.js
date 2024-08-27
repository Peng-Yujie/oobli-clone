import Image from "next/image";
import cocoa from "@/public/cocoa-dreams-product.png";
import Button from "./Button";

const benefits = [
  "Oobli removes the guilt from having a normal sweet tooth and brings back our celebration of sweets.",
  "We use a little real fruit, organic agave and unrefined coconut sugar to round out our sweetness.",
  "Replacing sugar with Oobli Sweet Proteins is a BIG deal for the planet, and no weirdness of alt sweeteners.",
  "Craft-brewed and craft-baked products means real fruit, high fiber and clean ingredients.",
];

export default function Benefits() {
  return (
    <section
      className="w-full py-[75px] bg-fixed bg-cover bg-no-repeat"
      style={{ backgroundImage: "url(/chocolate-background.jpg)" }}
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-12 justify-center">
        <h2 className="text-center text-5xl font-bold text-white">
          Sweet treats finally get <br />
          the upgrade they
          <br />
          deserve
        </h2>
        <div className="flex flex-col justify-center items-center lg:relative">
          <Image src={cocoa} alt="Cocoa Dreams" />
          <ul className="grid grid-cols-2 gap-8 lg:absolute lg:gap-x-72 lg:gap-y-24">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="text-white lg:font-semibold text:sm lg:text-lg pt-2 border-t border-white max-w-[130px] lg:border-none lg:max-w-[300px]"
              >
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <Button text={"Shop Now"} />
      </div>
    </section>
  );
}
