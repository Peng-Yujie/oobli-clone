import Bullet from "./Bullet";
import Button from "./Button";

const bullets = [
  {
    text: "Replaces Up To 90% Of Suger",
  },
  {
    text: "Rehabilitates Sweet Treats",
  },
  {
    text: "Helps Stabilize Blood Sugar",
  },
];

export default function Feature() {
  return (
    <section className="w-full bg-[#ffefec] py-[75px] px-[3rem]">
      <div className="grid lg:grid-cols-[1fr,2fr] gap-12">
        <div className="flex flex-col gap-4 items-start">
          <h1 className="text-4xl">
            Move over sugar, meet Oobli Sweet proteins
          </h1>
          <p>
            Our overreliance on sugar has created a global health and climate
            crisis. We need a better solution. Meet Oobli Sweet Proteins, a
            groundbreaking better-for-you sweetener that's different than
            everything else.
          </p>
          <Button text="See the Science" />
        </div>
        <div class="grid grid-cols-3 items-center gap-12 mx-auto max-w-2xl">
          {bullets.map((bullet, index) => (
            <Bullet key={index} text={bullet.text} textColor="text-blue-950" />
          ))}
        </div>
      </div>
    </section>
  );
}
