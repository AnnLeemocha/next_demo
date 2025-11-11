import { notFound } from "next/navigation";
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    notFound();
  return (
    <></>
  );
}
