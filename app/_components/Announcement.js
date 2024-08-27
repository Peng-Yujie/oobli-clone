import Link from "next/link";

export default function Announcement() {
  return (
    <div class="group sticky top-0 z-[9999] block w-full bg-purple-300 hover:bg-purple-400 focus:outline-none focus:bg-purple-200 p-4 text-center transition duration-300 dark:bg-white/10 dark:hover:bg-white/10 dark:focus:bg-white/10 max-h-[3.5rem]">
      <Link href="#">
        <div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
          <h4 class="me-2 inline-block text-[1.6rem] text-gray-800 dark:text-neutral-200 h5">
            Free shipping on all orders over $20
          </h4>
          <span class="group-hover:underline group-focus:underline decoration-2 inline-flex justify-center items-center gap-x-2 font-semibold text-blue-600 text-sm dark:text-blue-500">
            <svg
              class="shrink-0 size-4"
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
