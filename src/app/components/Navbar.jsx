"use client"

import * as React from "react"
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"
import { usePathname } from 'next/navigation'

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

import { Button } from "@/components/ui/button";
  
export default function Navbar(){
    let buttonLabel = "Virtual Officer";
    let isActive = "";

    const pathname = usePathname();
    // Determine the button label and path based on the pathname
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

    // Determine the active class for dropdown items
    const isActive2Virtual = pathname === "/virtual-office" ? "underline" : "";
    const isActive2PT = pathname === "/pt-virtual-office" ? "underline" : "";
    const isActive2CV = pathname === "/cv-virtual-office" ? "underline" : "";

    return (
        <nav className="fixed w-full top-0 z-50 bg-background">
            <div className="py-3 px-32 max-w-full mx-auto flex flex-row justify-between items-center">
                <div>
                    <Link href="/">
                        <Image 
                        src="/img/logo-navbar.png"
                        width={145}
                        height={55}
                        alt="logo-navbar"
                        priority={true} // Keep priority if needed
                        style={{ width: '145px', height: '55px' }} // Use style for dimensions
                        />
                    </Link>
                </div>
                <NavigationMenu className="py-3 px-32 max-w-full mx-auto flex flex-row justify-center items-center text-primary">
                    <NavigationMenuList className="flex items-center gap-8">
                        <NavigationMenuItem>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="link" className={`${isActive}`}>{buttonLabel}<ChevronDown/></Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="bg-gold">
                                    <DropdownMenuItem variant="link">
                                        <Button variant="link" className={`text-background ${isActive2Virtual}`}>
                                            <Link href={"/virtual-office"} legacyBehavior passHref>
                                                Virtual Office
                                            </Link>
                                        </Button>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Button variant="link" className={`text-background ${isActive2PT}`}>
                                            <Link href={"/pt-virtual-office"} legacyBehavior passHref>
                                                PT + Virtual Office
                                            </Link>
                                        </Button>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Button variant="link" className={`text-background ${isActive2CV}`}>
                                            <Link href={"/cv-virtual-office"} legacyBehavior passHref>
                                                CV + Virtual Office
                                            </Link>
                                        </Button>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Button variant="link" className={`bg-background text-primary hover:text-gold [&.active]:text-gold [&.active]:underline ${pathname === "/pendaftaran-haki" ? "active" : ""}`}>
                                <Link href={"/pendaftaran-haki"} legacyBehavior passHref>
                                    Pendaftaran HAKI
                                </Link>
                            </Button>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Button variant="link" className={`bg-background text-primary hover:text-gold [&.active]:text-gold [&.active]:underline ${pathname === "/konsultan-pajak" ? "active" : ""}`}>
                                <Link href={"/konsultan-pajak"} legacyBehavior passHref>
                                    Konsultan Pajak
                                </Link>
                            </Button>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="flex flex-row items-center gap-6">
                    <Button asChild className="px-2.5 py-2 bg-gold rounded-lg text-background text-base hover:bg-background hover:text-primary hover:border-slate-500">
                        <Link href={"#"}>Hubungi Kami</Link>
                    </Button>
                    <Button asChild className="px-2.5 py-2 rounded-lg bg-background border border-neutral-500 text-primary text-base hover:text-background hover:bg-gold">
                        <Link href={"/about"}>Tentang UVO</Link>
                    </Button>
                </div>
            </div>
            
        </nav>
    );
}

const ListItem = React.forwardRef(
    ({ className, title, children, ...props }, ref) => {
      return (
        <li className="w-full"> {/* Ensure li takes full width */}
          <NavigationMenuLink asChild>
            <a
              ref={ref}
              className={cn(
                "block w-full select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                className
              )}
              {...props}
            >
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            </a>
          </NavigationMenuLink>
        </li>
      );
    }
  );
  
  ListItem.displayName = "ListItem";
  