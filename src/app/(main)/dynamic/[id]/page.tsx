"use client"

import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams(); // { id: string }
  const { id } = params;

  return <div>文章 ID: {id}</div>;
}
