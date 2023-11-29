"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import type {} from "ldrs";

export default function ButtonAuth() {
  const { data: session, status } = useSession();
  console.log({ session, status });

  if (status === "loading") {
    return <l-ring-2></l-ring-2>;
  }

  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()} className="btn btn-danger">
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()} className="btn btn-primary">
        Sign in
      </button>
    </>
  );
}
