"use client";

import { useState, Suspense } from "react";
import { notFound } from "next/navigation";

export default function Page() {
  const [loading, setLoading] = useState(false);

  // 模擬 loading 狀態
  async function triggerLoading() {
    setLoading(true);
    await new Promise((res) => setTimeout(res, 2000));
    setLoading(false);
    alert("✅ Loading 結束");
  }

  // 模擬 not-found
  function triggerNotFound() {
    notFound();
  }

  // 模擬 error
  function triggerError() {
    throw new Error("💥 模擬錯誤發生！");
  }

  // 模擬 global error
  async function triggerGlobalError() {
    // 這個錯誤會在伺服器層被 global-error.tsx 捕捉
    await fetch("/api?throw=1");
  }

  // 呼叫 route.ts API
  async function triggerRoute() {
    const res = await fetch("/api");
    const data = await res.json();
    console.log(data);
    alert(`✅ API 回傳：${JSON.stringify(data)}`);
  }

  return (
    <Suspense fallback={<p>⏳ Suspense Loading...</p>}>
      <div className="flex gap-3 m-auto p-5">
        <button
          onClick={triggerLoading}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          ⏳ 觸發 loading.tsx
        </button>

        <button
          onClick={triggerNotFound}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          ❌ 觸發 not-found.tsx
        </button>

        <button
          onClick={triggerError}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          💥 觸發 error.tsx
        </button>

        <button
          onClick={triggerGlobalError}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          🌐 觸發 global-error.tsx
        </button>

        <button
          onClick={triggerRoute}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          📡 呼叫 route.ts API
        </button>

      </div>
    </Suspense>
  );
}
