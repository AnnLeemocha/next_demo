"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Fetch() {
    const [data, setData] = useState({});
    
  // 呼叫 route.ts API
  async function triggerRoute() {
    const res = await fetch("/api");
    const data = await res.json();
    setData(data);
    // console.log(data);
    // alert(`✅ API 回傳：${JSON.stringify(data)}`);
  }
  useEffect(()=>{
    triggerRoute();
  },[])

  return (
    <div>
        <div>GET /api</div>
        <div className="mt-4 mb-6">
            {JSON.stringify(data)}
        </div>
      <div>
        <Link href={"/"} className="mt-2 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer disabled:cursor-not-allowed border border-gray-300 dark:border-gray-500" >
          回首頁
        </Link>
      </div>
    </div>
  );
}