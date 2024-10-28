"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = React.useState(false); // State for hamburger toggle
  const pathname = usePathname();

  // Logic to set button label and active state
  let buttonLabel = "Virtual Office";
  let isActive = "hover:text-gold";
  if (pathname === "/virtual-office") {
    buttonLabel = "Virtual Office";
    isActive = "active text-gold underline";
  } else if (pathname === "/pt-virtual-office") {
    buttonLabel = "PT + Virtual Office";
    isActive = "active text-gold underline";
  } else if (pathname === "/cv-virtual-office") {
    buttonLabel = "CV + Virtual Office";
    isActive = "active text-gold underline";
  }

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen); // Toggle mobile menu
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-background">
      <div className="mx-auto flex max-w-full flex-row items-center justify-between px-8 py-3 lg:px-32">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src="/img/logo-navbar.png"
              width={145}
              height={55}
              alt="logo-navbar"
              priority={true}
              style={{ width: "145px", height: "55px" }}
            />
          </Link>
        </div>

        {/* Hamburger button for mobile */}
        <Button
          variant="link"
          className="absolute right-6 lg:hidden"
          onClick={toggleMenu}
        >
          <div className="relative block">
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 18L20 18"
                stroke="#EACF7F"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 12L20 12"
                stroke="#EACF7F"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 6L20 6"
                stroke="#EACF7F"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </Button>

        {/* Navigation Links */}
        <div>
          <DropdownMenu className="bg-transparent shadow-none">
            <DropdownMenuTrigger asChild>
              <div
                className={`${
                  isMenuOpen ? "block" : "hidden"
                } absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-gold py-5 lg:static lg:flex lg:max-w-full lg:items-center lg:bg-transparent`}
              >
                {/* Virtual Office Dropdown */}
                <div className="hidden lg:block">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="border-none" asChild>
                      <Button variant="link" className={`${isActive}`}>
                        {buttonLabel}
                        <ChevronDown />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-gold">
                      <DropdownMenuItem>
                        <Link href={"/virtual-office"}>
                          <Button variant="link" className="text-white">
                            Virtual Office
                          </Button>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={"/pt-virtual-office"}>
                          <Button variant="link" className="text-white">
                            PT + Virtual Office
                          </Button>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={"/cv-virtual-office"}>
                          <Button variant="link" className="text-white">
                            CV + Virtual Office
                          </Button>
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {/* Other Navigation Links */}
                <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
                  <Link href="/virtual-office">
                    <Button
                      variant="link"
                      className={`text-white ${
                        pathname === "/virtual-office"
                          ? "active text-white underline"
                          : ""
                      }`}
                    >
                      Virtual Office
                    </Button>
                  </Link>

                  <Link href="/pt-virtual-office">
                    <Button
                      variant="link"
                      className={`text-white ${
                        pathname === "/pt-virtual-office"
                          ? "active text-white underline"
                          : ""
                      }`}
                    >
                      PT + Virtual Office
                    </Button>
                  </Link>

                  <Link href="/cv-virtual-office">
                    <Button
                      variant="link"
                      className={`text-white ${
                        pathname === "/cv-virtual-office"
                          ? "active text-white underline"
                          : ""
                      }`}
                    >
                      CV + Virtual Office
                    </Button>
                  </Link>
                </div>
                <Link href="/pendaftaran-haki">
                  <Button
                    variant="link"
                    className={`text-white lg:text-primary hover:lg:text-gold ${
                      pathname === "/pendaftaran-haki"
                        ? "active text-white underline lg:text-gold"
                        : ""
                    }`}
                  >
                    Pendaftaran HAKI
                  </Button>
                </Link>

                <Link href="/konsultan-pajak">
                  <Button
                    variant="link"
                    className={`text-white lg:text-primary hover:lg:text-gold ${
                      pathname === "/konsultan-pajak"
                        ? "active text-white underline lg:text-gold"
                        : ""
                    }`}
                  >
                    Konsultan Pajak
                  </Button>
                </Link>
                <div className="block lg:hidden">
                  <Link href="/about">
                    <Button
                      variant="link"
                      className={`text-white ${
                        pathname === "/about"
                          ? "active text-white underline"
                          : ""
                      }`}
                    >
                      Tentang UVO
                    </Button>
                  </Link>
                </div>
              </div>
            </DropdownMenuTrigger>
          </DropdownMenu>
        </div>

        {/* Right-side buttons */}
        <div className="hidden gap-6 lg:flex lg:flex-row lg:items-center">
          <Button
            asChild
            className="hover:border-button rounded-lg bg-gold px-2.5 py-2 text-base text-background hover:border-2 hover:bg-background hover:text-primary"
          >
            <Link href="https://wa.me/6281911506190?text=Halo,%20Saya%20ingin%20bertanya%20tentang%20jasa%20Anda?">
              Hubungi Kami
            </Link>
          </Button>
          <Button
            asChild
            className="border-button rounded-lg bg-background px-2.5 py-2 text-base text-primary hover:border-none hover:bg-gold hover:text-background"
          >
            <Link href="/about">Tentang UVO</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
