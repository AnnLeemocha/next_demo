"use client";
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h2>⚠️ 錯誤發生：</h2>
      <pre>{error.message}</pre>
      <button onClick={reset}>重試</button>
    </div>
  );
}