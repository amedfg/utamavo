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
  let buttonLabel = "Virtual Officer";
  let isActive = "hover:text-gold";
  if (pathname === "/virtual-office") {
    buttonLabel = "Virtual Officer";
    isActive = "active text-gold underline";
  } else if (pathname === "/pt-virtual-office") {
    buttonLabel = "PT + Virtual Officer";
    isActive = "active text-gold underline";
  } else if (pathname === "/cv-virtual-office") {
    buttonLabel = "CV + Virtual Officer";
    isActive = "active text-gold underline";
  }

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen); // Toggle mobile menu
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-background">
      <div className="py-3 px-8 lg:px-32 max-w-full mx-auto flex flex-row justify-between items-center">
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
          className="lg:hidden absolute right-6"
          onClick={toggleMenu}
        >
          <div className="block relative">
            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 18L20 18" stroke="#EACF7F" strokeWidth="2" strokeLinecap="round"/>
              <path d="M4 12L20 12" stroke="#EACF7F" strokeWidth="2" strokeLinecap="round"/>
              <path d="M4 6L20 6" stroke="#EACF7F" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </Button>

        {/* Navigation Links */}
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div
                className={`${
                  isMenuOpen ? "block" : "hidden"
                } lg:flex lg:items-center lg:static lg:bg-transparent absolute py-5 bg-gold shadow-lg rounded-lg top-full right-4 max-w-[250px] w-full lg:max-w-full`}
              >
                {/* Virtual Officer Dropdown */}
                <div className="hidden lg:block">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="link" className={`${isActive}`}>
                        {buttonLabel}
                        <ChevronDown />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-gold">
                      <DropdownMenuItem>
                        <Link href={"/virtual-office"}>
                          <Button variant="link" className="text-background">
                            Virtual Office
                          </Button>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={"/pt-virtual-office"}>
                          <Button variant="link" className="text-background">
                            PT + Virtual Office
                          </Button>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={"/cv-virtual-office"}>
                          <Button variant="link" className="text-background">
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
                      className={`text-background lg:text-primary ${
                        pathname === "/virtual-office"
                          ? "active text-background lg:text-gold underline"
                          : ""
                      }`}
                    >
                      Virtual Office
                    </Button>
                  </Link>

                  <Link href="/pt-virtual-office">
                    <Button
                      variant="link"
                      className={`text-background lg:text-primary ${
                        pathname === "/pt-virtual-office"
                          ? "active text-background lg:text-gold underline"
                          : ""
                      }`}
                    >
                      PT + Virtual Office
                    </Button>
                  </Link>

                  <Link href="/cv-virtual-office">
                    <Button
                      variant="link"
                      className={`text-background lg:text-primary ${
                        pathname === "/cv-virtual-office"
                          ? "active text-background lg:text-gold underline"
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
                    className={`text-background lg:text-primary  ${
                      pathname === "/pendaftaran-haki"
                        ? "active text-background lg:text-gold underline"
                        : ""
                    }`}
                  >
                    Pendaftaran HAKI
                  </Button>
                </Link>

                <Link href="/konsultan-pajak">
                  <Button
                    variant="link"
                    className={`text-background lg:text-primary ${
                      pathname === "/konsultan-pajak"
                        ? "active text-background lg:text-gold underline"
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
                      className={`text-background lg:text-primary ${
                        pathname === "/about"
                          ? "active text-background lg:text-gold underline"
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
        <div className="hidden lg:flex lg:flex-row lg:items-center gap-6">
          <Button
            asChild
            className="px-2.5 py-2 bg-gold rounded-lg text-background text-base hover:bg-background hover:text-primary hover:border"
          >
            <Link href="https://wa.me/6281911506190?text=Halo,%20Saya%20ingin%20bertanya%20tentang%20jasa%20Anda?">
              Hubungi Kami
            </Link>
          </Button>
          <Button
            asChild
            className="px-2.5 py-2 rounded-lg bg-background border text-primary text-base hover:text-background hover:bg-gold"
          >
            <Link href="/about">Tentang UVO</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
