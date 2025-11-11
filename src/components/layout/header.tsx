"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import styles from "./header.module.css";

const routers = [
  { name: "JSX", page: "/syntax" },
  { name: "Hook", page: "/hook" },
  { name: "Tailwind", page: "/tailwind" },
  { name: "TodoList", page: "/todolist" },
  { name: "Dynamic Router", page: "/dynamic" },
  { name: "Tabs", page: "/tab" },
];

export function Header({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname(); // 取得當前路徑，例如 "/jsx"

  // 切換路徑
  const handleChangeTab = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <header>
        <div className="header flex gap-2 mt-6 mb-4 justify-center items-center">
          <ThemeToggle />
          <Link href={"/"} className="px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer disabled:cursor-not-allowed border border-gray-300 dark:border-gray-500" >
            回首頁
          </Link>
        </div>
        <nav className={`flex gap-2 my-4 justify-center items-center w-full font-bold rounded-[10px] p-4 ${styles.nav}`}>
          {routers.map(item => (
            <button
              key={item.name}
              onClick={() => handleChangeTab(item.page)}
              className={`px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer disabled:cursor-not-allowed border border-gray-300 dark:border-gray-500 ${item.page === pathname ? "bg-blue-500 hover:text-black text-white" : ""}`}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </header>
      <main className="card mx-auto">
        {children}
      </main>
    </>
  );
}
