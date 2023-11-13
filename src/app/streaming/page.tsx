import AsyncComponent from "@/app/streaming/AsyncComponent";

export default function StreamingPage() {
  return (
    <div>
      <h1>Streaming</h1>
      <AsyncComponent ms={1000} />
    </div>
  );
}
