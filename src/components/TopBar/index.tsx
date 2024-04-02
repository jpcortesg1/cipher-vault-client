"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CiHome } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuKeyRound } from "react-icons/lu";
import { MdOutlineNoEncryption } from "react-icons/md";
import { RxHamburgerMenu, RxLockOpen2 } from "react-icons/rx";

export default function TopBar() {
  // Ref topbar
  const topBar = useRef<HTMLDivElement>(null);
  const itemsSm = useRef<HTMLDivElement>(null);
  const pathName = usePathname();

  // States
  const [isOpen, setIsOpen] = useState(false);

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

  // Open and close menu
  const handleMenu = () => {
    if (!itemsSm.current) return;

    // Values
    const possibleHeight = itemsSm.current.scrollHeight;
    const currentHeightNumber = parseFloat(itemsSm.current.style.height);

    // Close items
    if (currentHeightNumber > 0) {
      itemsSm.current.style.height = "0px";
      setIsOpen(() => false);
      return;
    }

    // Open items
    itemsSm.current.style.height = possibleHeight + "px";
    setIsOpen(() => true);
  };

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
      className="min-w-[90%] flex-wrap max-w-[90%] flex justify-between items-center mx-auto sticky top-0 my-10 p-4 shadow-gray-950 shadow-lg rounded-lg z-50 transition-all duration-300 ease-in-out md:flex-nowrap"
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

      <div className="justify-between gap-3 text-lg hidden md:flex">
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

      <button
        className="text-2xl items-center justify-center flex md:hidden"
        onClick={handleMenu}
      >
        {isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
      </button>

      <div
        ref={itemsSm}
        className="justify-between gap-3 text-lg flex flex-col w-full items-center h-0 overflow-hidden ease-in-out duration-300 transition-all md:hidden"
      >
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
