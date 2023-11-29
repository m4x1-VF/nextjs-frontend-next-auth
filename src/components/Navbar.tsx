"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link href="/" className="btn btn-primary btn-sm">
          Home
        </Link>
        {session?.user ? (
          <>
            <Link href="/dashboard" className="btn btn-primary btn-sm">
              Dashboard
            </Link>
            <button onClick={() => signOut()} className="btn btn-danger btn-sm">
              Signout
            </button>
          </>
        ) : (
          <>
            <button
              className="btn btn-primary btn-sm"
              onClick={async () => await signIn()}
            >
              Login
            </button>
            <Link href="/register" className="btn btn-primary btn-sm">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
