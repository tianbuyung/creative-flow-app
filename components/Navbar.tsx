import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";

import { NavLinks } from "@/constants";
import AuthProviders from "./AuthProviders";
import { getCurrentUser } from "@/lib/session";

const Navbar = async () => {
  const session = await getCurrentUser();

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="creative flow logo"
            width={115}
            height={43}
            priority
            className="h-auto w-auto"
          />
        </Link>

        <ul className="xl:flex hidden text-sm gap-7">
          {NavLinks.map((link) => (
            <li key={link.key}>
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flexCenter gap-4">
        {session?.user ? (
          <>
            {session?.user?.image && (
              <Link href={`/profile/${session?.user?.id}`} className="text-sm">
                <Image
                  src={session?.user?.image}
                  width={40}
                  height={40}
                  className="rounded-full"
                  alt={session?.user?.name}
                />
              </Link>
            )}

            <Link href="/create-project">Share Work</Link>

            <button type="button" className="text-sm" onClick={signOut}>
              Sign out
            </button>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
