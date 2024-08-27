import Image from "next/image";
import image5 from "@/public/image5.png";
import image6 from "@/public/image6.png";
import image7 from "@/public/image7.png";

export default function Feedback() {
  return (
    <section className="w-full bg-[#ffefec] py-24 px-12">
      <div className="text-center mx-auto max-w-screen-lg">
        <h1 className="block font-medium text-blue-950 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Celebrated by real people
        </h1>

        <div
          data-hs-carousel='{
    "loadingClasses": "opacity-0"
  }'
          className="relative"
        >
          <div className="hs-carousel relative overflow-hidden max-w-4xl min-h-80 mx-auto bg-white rounded-lg">
            <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
              <div className="hs-carousel-slide">
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center h-full bg-gray-200">
                  <div className="text-center p-6 bg-purple-900 flex flex-col items-center justify-center">
                    <div className="hidden shrink-0 md:flex justify-center gap-x-1 mt-3">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className="size-8 text-orange-400"
                          width="51"
                          height="51"
                          viewBox="0 0 51 51"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                            fill="currentColor"
                          />
                        </svg>
                      ))}
                    </div>
                    <div className="mt-2 sm:mt-6">
                      <p className="text-white text-xl">
                        Oobli Sweet Iced Teas are revolutionary in the tea world
                        as they are the only drink on the market to be made with
                        sweet proteins and without zero-calorie sweeteners.
                      </p>
                    </div>
                    <div className="mt-4 text-white text-xl">
                      — Lauren Manaker, Eat This, Not That!
                    </div>
                  </div>
                  <Image src={image5} alt="Image 5" />
                </div>
              </div>
              <div className="hs-carousel-slide">
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center h-full bg-gray-200">
                  <div className="text-center p-6 bg-purple-900 flex flex-col items-center justify-center">
                    <div className="hidden shrink-0 md:flex justify-center gap-x-1 mt-3">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className="size-8 text-orange-400"
                          width="51"
                          height="51"
                          viewBox="0 0 51 51"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                            fill="currentColor"
                          />
                        </svg>
                      ))}
                    </div>
                    <div className="mt-2 sm:mt-6">
                      <p className="text-white text-xl">
                        I can’t believe it’s low- sugar chocolate!! I normally
                        don’t review things but omg this chocolate is so good.
                        The milk chocolate is my favorite!
                      </p>
                    </div>
                    <div className="mt-4 text-white text-xl">— Kayla G.</div>
                  </div>
                  <Image src={image6} alt="Image 6" />
                </div>
              </div>
              <div className="hs-carousel-slide">
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center h-full bg-gray-200">
                  <div className="text-center p-6 bg-purple-900 flex flex-col items-center justify-center">
                    <div className="hidden shrink-0 md:flex justify-center gap-x-1 mt-3">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className="size-8 text-orange-400"
                          width="51"
                          height="51"
                          viewBox="0 0 51 51"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                            fill="currentColor"
                          />
                        </svg>
                      ))}
                    </div>
                    <div className="mt-2 sm:mt-6">
                      <p className="text-white text-xl">
                        Sweet proteins bind and activate the same taste
                        receptors on your tongue that sugar does, but they
                        aren’t sugar…
                      </p>
                    </div>
                    <div className="mt-4 text-white text-xl">
                      — Toby Amidor, Food Network
                    </div>
                  </div>
                  <Image src={image7} alt="Image 7" />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden absolute inset-y-0 -start-10 md:flex justify-center items-center">
            <button
              type="button"
              className="w-[46px] h-[46px] inline-flex justify-center items-center rounded-full hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none text-gray-800 bg-blue-300 hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
            >
              <span className="text-2xl" aria-hidden="true">
                <svg
                  className="shrink-0 size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
              </span>
              <span className="sr-only">Previous</span>
            </button>
          </div>
          <div className="hidden absolute inset-y-0 -end-10 md:flex justify-center items-center">
            <button
              type="button"
              className="w-[46px] h-[46px] inline-flex justify-center items-center rounded-full hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none text-gray-800 bg-blue-300 hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
            >
              <span className="sr-only">Next</span>
              <span className="text-2xl" aria-hidden="true">
                <svg
                  className="shrink-0 size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </button>
          </div>
          <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
            <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
            <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
            <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
