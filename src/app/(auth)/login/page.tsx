import { auth, signIn, signOut } from "~/server/auth";

async function page() {
  const session = await auth();
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-md bg-white p-6 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold">Login</h1>
        <form
          action={async () => {
            "use server";
            await signIn("discord", { redirectTo: "/dashboard" });
          }}
        >
          {!session ? (
            <div className="flex flex-col items-center">
              <p className="mb-4 text-gray-700">
                Sign in to access your account
              </p>
              <button className="w-full rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
                Login with Discord
              </button>
            </div>
          ) : (
            <div className="text-center">
              <p className="mb-4 text-gray-700">
                Welcome,{" "}
                <span className="font-semibold">{session.user.name}</span>!
              </p>
              <button className="w-full rounded bg-red-600 px-4 py-2 font-bold text-white hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300">
                Logout
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default page;
