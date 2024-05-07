"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import React, { useState } from "react";
import { ModeToggle } from "@/components/ModeToggle";
import { Menu } from "lucide-react";

export default function Navbar() {
  const currentPath = usePathname();
  const links = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/faq",
      label: "FAQ",
    },
  ];

  const isCurrentPath = (href: string) => currentPath === href;

  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <nav className="bg-background">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link className="flex items-center gap-2" href="/">
          LOGO
        </Link>
        <ModeToggle />
        <div className="hidden md:flex gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              className={`font-medium ${
                isCurrentPath(link.href)
                  ? "text-primary"
                  : "text-gray-900 hover:text-primary hover:light"
              }`}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button
              className="md:hidden text-gray-500 bg-transparent hover:bg-primary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-gray-20"
              size="icon"
              variant="outline"
            >
              <Menu  className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-background text-primary">
            <div className="grid w-[200px] p-4 gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  className={`text-xl font-medium ${
                    isCurrentPath(link.href) ? "text-primary" : "text-gray-900"
                  } hover:text-primary hover:light`}
                  href={link.href}
                  onClick={() => setSheetOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
