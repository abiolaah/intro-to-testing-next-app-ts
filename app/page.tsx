import Link from "next/link";

export const metadata = {
  title: "App Router",
};

export default function Page() {
  return (
    <div>
      <h1>App Router</h1>
      <Link href="/about">About</Link>
    </div>
  );
}
