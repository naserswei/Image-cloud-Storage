import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { auth } from "~/server/auth";

async function page() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }
  return (
    <div>
      {" "}
      welcome {session.user?.name} with email {session.user?.email} with id{" "}
      {session.user?.id}
      <Link href="/profile">Profile</Link>
    </div>
  );
}

export default page;
