import { Suspense } from "react";

function Loading() {
  return <div>Loading...</div>;
}

export default function StreamingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={"grid grid-rows-3 grid-cols-3 gap-4"}>
      {/* header */}
      <div className={"row-span-1 col-span-3"}>
        <p>here is header</p>
      </div>
      {/* side */}
      <div className={"row-span-2 col-span-1"}>
        <p>here is side content</p>
      </div>
      {/* main */}
      <div className={"row-span-2 col-span-2"}>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </div>
    </div>
  );
}
