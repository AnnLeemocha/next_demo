"use client";

import { useSearchParams, useRouter } from "next/navigation";

const tabs = [1, 2, 3, 4, 5];

export default function Tabs() {
    const searchParams = useSearchParams();
    const router = useRouter();

    // 從 URL query 拿 tab，例如 ?tab=3
    const currentTab = Number(searchParams.get("tab")) || tabs[0];

    const handleChangeTab = (tab: number) => {
        const url = new URL(window.location.href);
        url.searchParams.set("tab", tab.toString());
        router.push(url.toString());
    };

    return (
        <header className="flex flex-col items-center gap-4 mb-6">
            <nav className="flex gap-2">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => handleChangeTab(tab)}
                        className={`px-4 py-2 rounded ${tab === currentTab ? "bg-blue-500 text-white" : "bg-gray-200"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </nav>
            <div>當前 tab: {currentTab}</div>
        </header>
    );
}
