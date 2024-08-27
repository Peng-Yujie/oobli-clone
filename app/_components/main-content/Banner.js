import Button from "./Button";

export default function Banner() {
  return (
    <section className="w-full bg-[#FDD0BB]">
      <div className="flex flex-col lg:flex-row lg:gap-16 px-24 py-8">
        <h2 className="text-4xl text-blue-950 max-w-[600px]">
          Replacing sugar with Oobli Sweet Proteins is a BIG deal.
        </h2>
        <Button text="See The Impact" />
      </div>
    </section>
  );
}
