"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function TopBar() {
  // Ref topbar
  const topBar = useRef<HTMLDivElement>(null);
  const pathName = usePathname();

  // Items
  const links = [
    {
      href: "/",
      text: "Home",
    },
    {
      href: "https://api-cipher-vault.jpcortesg.online/api-docs/",
      text: "Documentation",
    },
    {
      href: "/api-key",
      text: "API Key",
    },
    {
      href: "/create",
      text: "Create",
    },
    {
      href: "/decipher",
      text: "Decipher",
    },
  ];

  // Change topbar style on scroll
  useEffect(() => {
    const scrollDown = [
      "bg-gray-950",
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
      className="min-w-[90%] max-w-[90%] flex justify-between mx-auto sticky top-0 my-10 bg-transparent p-4 shadow-gray-950 shadow-lg rounded-lg z-50 transition-all duration-300 ease-in-out"
      ref={topBar}
    >
      <Link href="/">Cipher Vault</Link>

      <div className="flex justify-between gap-4 text-lg">
        {links.map(({ href, text }) => (
          <Link
            key={text}
            href={href}
            className={
              pathName === href
                ? "text-gray-50 hover:text-gray-50 font-bold ease-in-out duration-300 transition-all"
                : "text-gray-300 hover:text-gray-50 ease-in-out duration-300 transition-all"
            }
          >
            {text}
          </Link>
        ))}
      </div>
    </nav>
  );
}
