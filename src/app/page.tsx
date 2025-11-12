import { notFound } from "next/navigation";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex gap-3 m-auto p-5">
      <Link
        href="/404"
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
      >
        ❌ 觸發 not-found.tsx
      </Link>

      <Link
        href="/500"
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
      >
        💥 觸發 error.tsx
      </Link>

      <Link
        href="/fetch"
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
      >
        📡 呼叫 route.ts API
      </Link>

      <Link
        href="/todolist"
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
      >
        📝 前往 todo list
      </Link>
    </div>
  );
}
