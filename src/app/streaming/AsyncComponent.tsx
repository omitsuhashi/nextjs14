import { PropsWithoutRef } from "react";
import sleep from "@/utils/sleep";

type Props = {
  ms: number;
};

export default async function AsyncComponent({ ms }: PropsWithoutRef<Props>) {
  await sleep(ms);
  return <div>Async Component</div>;
}
