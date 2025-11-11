import { notFound } from "next/navigation";

export function NotFoundBtn() {
  async function handleNotFound() {
    "use server";
    notFound();
  }

  return (
    <form action={handleNotFound}>
      <button
        type="submit"
        className="mt-4 px-4 py-2 rounded"
      >
        ❌ 觸發 not-found.tsx
      </button>
    </form>
  );
}
