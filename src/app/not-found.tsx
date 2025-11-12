import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <p className="mb-8">❌ 找不到這個頁面 (404)</p>
      <Link
        href={"/"}
        className="mt-2 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer disabled:cursor-not-allowed border border-gray-300 dark:border-gray-500"
      >
        回首頁
      </Link>
    </>
  );
}
