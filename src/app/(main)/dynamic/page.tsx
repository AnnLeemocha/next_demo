import Link from "next/link";

export default function Page() {

  return (
    <div className="flex gap-3 m-auto p-5">
      {
        [1, 2, 3, 4, 5].map(item => (
          <Link key={item} href={`/dynamic/${item}`} className="px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer border border-gray-300 dark:border-gray-500">
            ID: {item}
          </Link>
        ))
      }
    </div>
  )
}
