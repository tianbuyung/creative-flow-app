import Link from "next/link";
import Image from "next/image";

import { NavLinks } from "@/constants";
import AuthProviders from "./AuthProviders";

const Navbar = () => {
  const session = {};

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
            <li>
              <Link href={link.href} key={link.key}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flexCenter gap-4">
        {session ? (
          <>
            User Photo
            <Link href="/create-project">Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
