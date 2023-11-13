import AsyncComponent from "@/app/streaming/AsyncComponent";
import React, { Suspense } from "react";

export default function StreamingItemsPage() {
  return (
    <div>
      <h1>Streaming Items</h1>
      <ul>
        {new Array(5).fill(0).map((_, i) => (
          <Suspense key={i} fallback={<div>Loading...</div>}>
            <li>
              <AsyncComponent ms={1000 * (i + 1)} />
            </li>
          </Suspense>
        ))}
      </ul>
    </div>
  );
}
