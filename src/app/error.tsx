"use client";

import Link from "next/link";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h2>⚠️ 錯誤發生：</h2>
      <pre>{error.message}</pre>
      <button onClick={reset}>重試</button>
      <div>
        <Link href={"/"} className="mt-2 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer disabled:cursor-not-allowed border border-gray-300 dark:border-gray-500" >
          回首頁
        </Link>
      </div>
    </div>
  );
}