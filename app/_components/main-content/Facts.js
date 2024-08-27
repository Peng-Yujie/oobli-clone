import Image from "next/image";
import ProductFact from "@/public/product-facts-image.png";
import ProductFactBottom from "@/public/product-facts-bottom-image-desktop.png";
import Button from "./Button";

export default function Facts() {
  return (
    <section class="w-full bg-[#ffefec] py-[75px] px-[3rem] flex flex-col gap-28">
      <div className="grid grid-flow-row lg:grid-flow-col items-center">
        <Image src={ProductFact} alt="Product facts" />
        <div className="flex flex-row gap-6 mx-[115px] max-w-md items-center">
          <div className="w-[56px] h-[61px]">
            <svg
              width="56"
              height="61"
              viewBox="0 0 56 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.6958 39.2031C44.2296 37.9029 49.3408 41.5632 50.0286 45.0398C51.1969 50.9377 44.6819 59.582 27.8267 56.6377C13.0913 54.0609 6.27951 45.6522 4.77206 36.6263C2.11046 20.6803 14.8343 8.14488 22.3763 11.8711C31.812 16.5301 20.6097 31.3408 20.6097 31.3408L21.2787 31.8637C21.2787 31.8637 34.483 13.3739 47.2351 16.6902C60.4913 20.1385 51.3476 35.2272 37.4932 38.4871L37.6958 39.2078V39.2031Z"
                fill="#FF9685"
              ></path>
              <path
                d="M33.9503 0H31.675C31.675 3.13739 29.1218 5.69063 25.9844 5.69063V7.96594C29.1218 7.96594 31.675 10.5192 31.675 13.6566H33.9503C33.9503 10.5192 36.5036 7.96594 39.641 7.96594V5.69063C36.5036 5.69063 33.9503 3.13739 33.9503 0ZM32.815 9.57703C32.1367 8.45115 31.1945 7.50429 30.0686 6.83064C31.1945 6.15229 32.1414 5.21013 32.815 4.08425C33.4934 5.21013 34.4355 6.157 35.5614 6.83064C34.4355 7.509 33.4887 8.45115 32.815 9.57703Z"
                fill="#040454"
              ></path>
              <path
                d="M12.8981 37.4834H10.6228C10.6228 43.3389 5.85551 48.1062 0 48.1062V50.3815C5.85551 50.3815 10.6228 55.1441 10.6228 61.0044H12.8981C12.8981 55.1489 17.6655 50.3815 23.521 50.3815V48.1062C17.6655 48.1062 12.8981 43.3389 12.8981 37.4834ZM11.7628 55.7189C10.4674 52.85 8.15437 50.537 5.29022 49.2462C8.15909 47.9508 10.4721 45.6378 11.7628 42.7689C13.0583 45.6378 15.3713 47.9508 18.2355 49.2462C15.3666 50.5417 13.0536 52.85 11.7628 55.7189Z"
                fill="#040454"
              ></path>
              <path
                d="M53.9611 39.1516C54.9341 39.1516 55.7229 38.3628 55.7229 37.3898C55.7229 36.4167 54.9341 35.6279 53.9611 35.6279C52.988 35.6279 52.1992 36.4167 52.1992 37.3898C52.1992 38.3628 52.988 39.1516 53.9611 39.1516Z"
                fill="#040454"
              ></path>
            </svg>
          </div>
          <p className="text-blue-950 text-lg font-semibold border-l-2 border-blue-950 pl-6">
            Believe it or not, Oobli Sweet Proteins have the molecular structure
            of a protein, not a carbohydrate. That means they don't raise blood
            sugar, insulin or even reach the gut microbiome.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8 mx-auto max-w-[700px] items-center justify-center text-center text-blue-950">
        <p className="text-lg font-semibold">
          Introducing Oobli Sweet Proteins
        </p>
        <h4 className="text-5xl">
          The world's first and only protein-based sweetener that's better for
          our bodies and the planet, that tastes like sugar without the
          downsides.
        </h4>
        <Button text="Learn More" />
      </div>

      <div className="grid grid-flow-row lg:grid-flow-col items-center">
        <Image
          src={ProductFactBottom}
          alt="Product facts bottom"
          className="order-first lg:order-last"
        />
        <div className="flex flex-row gap-6 mx-[115px] max-w-md items-center">
          <div className="w-[62px] h-[54px]">
            <svg
              width="62"
              height="54"
              viewBox="0 0 62 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.73012 0.500488H5.52217C5.52217 3.54499 3.04451 6.02265 0 6.02265V8.23061C3.04451 8.23061 5.52217 10.7083 5.52217 13.7528H7.73012C7.73012 10.7083 10.2078 8.23061 13.2523 8.23061V6.02265C10.2078 6.02265 7.73012 3.54499 7.73012 0.500488ZM6.62843 9.794C5.97016 8.70146 5.05589 7.78262 3.96334 7.12892C5.05589 6.47064 5.97473 5.55638 6.62843 4.46383C7.2867 5.55638 8.20097 6.47522 9.29352 7.12892C8.20097 7.78719 7.28213 8.70146 6.62843 9.794Z"
                fill="#040454"
              ></path>
              <path
                d="M60.1999 31.7402C61.1441 31.7402 61.9096 30.9747 61.9096 30.0305C61.9096 29.0862 61.1441 28.3208 60.1999 28.3208C59.2557 28.3208 58.4902 29.0862 58.4902 30.0305C58.4902 30.9747 59.2557 31.7402 60.1999 31.7402Z"
                fill="#040454"
              ></path>
              <path
                d="M29.6497 10.3873C30.5183 10.3873 31.4051 10.4376 32.2874 10.5382C37.9878 11.1782 43.126 13.7473 46.7511 17.7792C50.4264 21.8659 52.1224 27.0681 51.5235 32.4303C50.3578 42.8346 40.7032 51.3007 30.0063 51.3007C29.252 51.3007 28.4886 51.2596 27.7389 51.1727C22.2853 50.5602 17.4123 47.7717 14.0295 43.3101C10.6604 38.8759 9.15186 33.3491 9.77813 27.7538C10.921 17.5277 19.0945 10.3873 29.6497 10.3828M29.6497 8.1748C18.2762 8.1748 8.8913 15.8455 7.58389 27.5024C6.17135 40.1375 14.8615 51.9407 27.492 53.3578C28.3332 53.4538 29.1697 53.4995 30.0063 53.4995C41.6997 53.4995 52.3966 44.462 53.7178 32.6726C55.1303 20.0374 45.1694 9.75649 32.5342 8.33937C31.5605 8.22966 30.6005 8.1748 29.6497 8.1748Z"
                fill="#040454"
              ></path>
              <path
                d="M36.257 9.03422C35.0456 8.71879 33.8022 8.48108 32.5313 8.33937C31.5576 8.22966 30.5977 8.1748 29.6468 8.1748C20.7327 8.1748 13.0392 12.8878 9.50098 20.5403C11.3067 23.1413 14.2094 26.5287 17.8574 28.0692C18.7671 28.4532 19.6996 27.5618 19.3385 26.643C18.6756 24.9607 18.1408 22.7116 19.3476 21.5505C19.3476 21.5505 32.2708 23.2739 36.2524 9.02964L36.257 9.03422Z"
                fill="#FF9685"
              ></path>
              <path
                d="M37.1251 35.8962C36.476 37.9945 29.5001 45.3269 26.8351 48.0742C26.1036 48.8285 24.8328 48.6959 24.3117 47.7817C22.8169 45.1623 24.6774 40.5178 24.6774 40.5178C19.5438 38.927 18.3598 35.7134 19.5529 31.8597C20.746 28.0061 23.402 25.5284 28.5402 27.1193C33.6738 28.7101 38.3182 32.0426 37.1251 35.8962Z"
                fill="#FF9685"
              ></path>
              <path
                d="M51.4795 20.715C46.7711 21.3184 44.2568 25.6886 44.2568 29.9445C44.2568 34.5296 47.1642 36.2073 52.5995 36.2073C52.7412 36.2073 52.8784 36.2073 53.0201 36.1981C53.3446 35.0553 53.5823 33.8759 53.7195 32.669C54.2086 28.3126 53.3401 24.2395 51.4841 20.7104L51.4795 20.715Z"
                fill="#FF9685"
              ></path>
            </svg>
          </div>
          <p className="text-blue-950 text-lg font-semibold border-l-2 border-blue-950 pl-6">
            Because we use fermentation (like beer, wine or kombucha) to make
            our plant-based, nature-identical sweet proteins, we save massive
            amounts of land, water and carbon.
          </p>
        </div>
      </div>
    </section>
  );
}
