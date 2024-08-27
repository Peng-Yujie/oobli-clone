import Link from "next/link";

export default function Announcement() {
  return (
    <div className="group sticky top-0 z-[9999] w-full bg-purple-300 hover:bg-purple-400 focus:outline-none focus:bg-purple-200 p-4 text-center transition duration-300 max-h-[2rem] flex items-center justify-center">
      <Link href="#">
        <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
          <h4 className="me-2 inline-block text-sm md:text-[1.6rem] text-gray-800 h5">
            Free shipping on all orders over $20
          </h4>
          <span className="group-hover:underline group-focus:underline decoration-2 inline-flex justify-center items-center gap-x-2 font-semibold text-blue-600 text-sm">
            <svg
              className="shrink-0 size-4"
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
              <path d="m9 18 6-6-6-6" />
            </svg>
          </span>
        </div>
      </Link>
    </div>
  );
}
