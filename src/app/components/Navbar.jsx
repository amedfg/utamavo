"use client"

import * as React from "react"
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu"
  
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
  
export default function Navbar(){
    return (
        <nav className="fixed w-full top-0 z-50">
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
                <div className="relative w-[517px]">
                    <Input className="flex items-center w-full h-8 rounded-lg bg-primary px-4 py-1 pl-10" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        className="absolute left-3 top-1/2 transform -translate-y-1/2"
                    >
                        <path
                        d="M15.4079 14.9465L10.7393 10.2817M1.40435 6.39671C1.40465 7.11169 1.54577 7.8196 1.81965 8.48004C2.09353 9.14048 2.49482 9.7405 3.00059 10.2459C3.50636 10.7512 4.10672 11.152 4.76738 11.4253C5.42805 11.6987 6.13608 11.8392 6.85105 11.8389C7.56603 11.8386 8.27394 11.6975 8.93438 11.4236C9.59482 11.1497 10.1948 10.7484 10.7002 10.2427C11.2056 9.7369 11.6063 9.13654 11.8797 8.47588C12.153 7.81521 12.2935 7.10718 12.2932 6.3922C12.2929 5.67723 12.1518 4.96932 11.8779 4.30888C11.6041 3.64844 11.2028 3.04842 10.697 2.54306C10.1912 2.03771 9.59088 1.63692 8.93021 1.36359C8.26955 1.09025 7.56152 0.949719 6.84654 0.950016C6.13157 0.950312 5.42365 1.09143 4.76322 1.36531C4.10278 1.63919 3.50275 2.04048 2.9974 2.54625C2.49205 3.05202 2.09126 3.65238 1.81793 4.31304C1.54459 4.97371 1.40406 5.68174 1.40435 6.39671Z"
                        stroke="#1A1613"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <div className="flex flex-row items-center gap-6">
                    <Button asChild className="px-2.5 py-2 bg-gold rounded-lg text-background text-base hover:bg-background hover:text-primary hover:border-slate-500">
                        <Link href={"#"}>Hubungi Kami</Link>
                    </Button>
                    <Button asChild className="px-2.5 py-2 rounded-lg bg-background border border-neutral-500 text-primary text-base hover:text-background hover:bg-gold">
                        <Link href={"/about"}>Tentang UVO</Link>
                    </Button>
                </div>
            </div>
            <NavigationMenu className="py-3 px-32 max-w-full mx-auto flex flex-row justify-center items-center text-primary">
                <NavigationMenuList className="flex items-center gap-8">
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="flex hover:bg-gold">
                            Virtual Office
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-gold flex justify-center">
                            <ul className="flex flex-col gap-3 p-6 w-[300px]">
                                <ListItem href={"/virtual-office"} title="Virtual Office">
                                </ListItem>
                                <ListItem href={"/pt-virtual-office"} title="PT + Virtual Office">
                                </ListItem>
                                <ListItem href={"/cv-virtual-office"} title="CV + Virtual Office">
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Button className="bg-background text-primary hover:bg-gold hover:text-background">
                            <Link href={"/pendaftaran-haki"} legacyBehavior passHref>
                                Pendaftaran HAKI
                            </Link>
                        </Button>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Button className="bg-background text-primary hover:bg-gold hover:text-background">
                            <Link href={"/konsultan-pajak"} legacyBehavior passHref>
                                Konsultan Pajak
                            </Link>
                        </Button>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
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
  