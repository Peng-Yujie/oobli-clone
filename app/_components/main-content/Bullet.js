export default function Bullet({
  icon = null,
  text,
  textColor = "text-gray-200",
}) {
  return (
    <div class="text-center">
      <div class="flex justify-center items-center size-12 bg-gray-50 border border-gray-200 rounded-full mx-auto">
        <svg
          class="shrink-0 size-5 text-gray-600"
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
          <rect width="10" height="14" x="3" y="8" rx="2" />
          <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
          <path d="M8 18h.01" />
        </svg>
      </div>
      <div class="mt-3">
        <p class={`mt-1 text-sm font-semibold ${textColor}`}>
          Replaces Up To 90% Of Suger
        </p>
      </div>
    </div>
  );
}
