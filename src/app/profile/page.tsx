import Image from "next/image";
import { redirect } from "next/navigation";
import { auth } from "~/server/auth";

async function page() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  if (session.user.isBlocked) {
    return <div className="text-red-600">you are blocked</div>;
  }
  return (
    <>
      <Image
        src={session.user?.image || ""}
        alt={session.user?.name || ""}
        width={100}
        height={100}
      />
      <p>{session.user?.role}</p>
    </>
  );
}

export default page;
