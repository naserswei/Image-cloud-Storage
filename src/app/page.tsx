import Link from "next/link";

export default async function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div>manage your photos in ono place with swei storage</div>
      <Link href="/dashboard"> get started</Link>
    </main>
  );
}
