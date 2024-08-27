import Link from "next/link";

export default function Button({ text, href = "/#" }) {
  return (
    <button>
      <Link
        className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-300 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-blue-950 text-lg font-medium rounded-full focus:outline-none focus:shadow-blue-700/50 py-3 px-6 transition duration-300"
        href={href}
      >
        {text}
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
      </Link>
    </button>
  );
}
