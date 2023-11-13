import {Suspense} from "react";

function Loading() {
  return <div>Loading...</div>;
}

export default function StreamingLayout({
                                          children,
                                        }: {
  children: React.ReactNode;
}) {
  return (
      <div className="flex h-screen bg-green-300">
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="flex justify-between items-center p-4">
            <div className="flex">Left</div>
            <div className="flex">Right</div>
          </header>
          <div className="flex h-full">
            <nav className="flex w-72 h-full bg-pink-500">
              <div className="w-full flex mx-auto px-6 py-8">
                <div
                    className="w-full h-full flex items-center justify-center text-gray-900 text-xl border-4 border-gray-900 border-dashed">Sidebar
                </div>
              </div>
            </nav>
            <main className="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14">
              <div className="flex w-full mx-auto px-6 py-8">
                <div className="flex flex-col w-full h-full text-gray-900 text-xl border-4 border-gray-900 border-dashed">
                  <Suspense fallback={<Loading/>}>{children}</Suspense>
                </div>
              </div>
            </main>
            <nav className="flex w-72 h-full bg-yellow-400">
              <div className="w-full flex mx-auto px-6 py-8">
                <div
                    className="w-full h-full flex items-center justify-center text-gray-900 text-xl border-4 border-gray-900 border-dashed">Rightbar
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
  );
}
