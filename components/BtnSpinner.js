export default function BtnSpinner({ title }) {
  return (
    <button
      type="button"
      class="border-transparent text-white inline-flex items-center rounded-md border bg-gray-600 px-4 py-2 text-base font-medium leading-6 transition duration-150 ease-in-out hover:bg-gray-500 focus:border-gray-700 active:bg-gray-700 dark:bg-gray-50"
    >
      <svg
        class="text-white -ml-1 mr-3 h-5 w-5 animate-spin"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      {title}
    </button>
  )
}
