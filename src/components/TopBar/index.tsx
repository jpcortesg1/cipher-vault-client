"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { CiHome } from "react-icons/ci";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuKeyRound } from "react-icons/lu";
import { MdOutlineNoEncryption } from "react-icons/md";
import { RxLockOpen2 } from "react-icons/rx";

export default function TopBar() {
  // Ref topbar
  const topBar = useRef<HTMLDivElement>(null);
  const pathName = usePathname();

  // Items
  const links = [
    {
      href: "/",
      text: "Home",
      icon: <CiHome />,
    },
    {
      href: "https://api-cipher-vault.jpcortesg.online/api-docs/",
      text: "Documentation",
      icon: <IoDocumentTextOutline />,
    },
    {
      href: "/api-key",
      text: "API Key",
      icon: <LuKeyRound />,
    },
    {
      href: "/create",
      text: "Create",
      icon: <MdOutlineNoEncryption />,
    },
    {
      href: "/decipher",
      text: "Decipher",
      icon: <RxLockOpen2 />,
    },
  ];

  // Change topbar style on scroll
  useEffect(() => {
    const scrollDown = [
      "bg-[#6C63FF]",
      // "bg-red-500",
      "min-w-full",
      "max-w-full",
      "mt-0",
      "rounded-none",
    ];
    let lastScroll = 0;
    window.addEventListener("scroll", () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll) {
        topBar.current?.classList.add(...scrollDown);
      } else {
        topBar.current?.classList.remove(...scrollDown);
      }
      lastScroll = currentScroll;
    });
  }, []);

  return (
    <nav
      className="min-w-[90%] max-w-[90%] flex justify-between items-center mx-auto sticky top-0 my-10 p-4 shadow-gray-950 shadow-lg rounded-lg z-50 transition-all duration-300 ease-in-out"
      ref={topBar}
    >
      <Link
        href="/"
        className="flex justify-between items-center text-xl font-extrabold gap-4"
      >
        <Image
          src="/images/logo.png"
          width={50}
          height={50}
          alt="Logo of cipher vault"
        />
        <span>Cipher</span>
      </Link>

      <div className="flex justify-between gap-3 text-lg">
        {links.map(({ href, text, icon }) => (
          <Link
            key={text}
            href={href}
            className={
              (pathName === href
                ? "text-gray-50 hover:text-gray-50 font-bold ease-in-out duration-300 transition-all"
                : "text-gray-300 hover:text-gray-50 ease-in-out duration-300 transition-all") +
              " flex items-center gap-1"
            }
          >
            {icon} {text}
          </Link>
        ))}
      </div>
    </nav>
  );
}
