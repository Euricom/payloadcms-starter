"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import React, { useState } from "react";
import { ModeToggle } from "@/components/ModeToggle";
import { Menu, Mountain } from "lucide-react";

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
    <header className="bg-gray-900 text-gray-400 py-4 md:py-6">
    <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Mountain className="h-6 w-6 text-gray-400" />
        <span className="text-gray-300 font-semibold text-lg">University SaaS</span>
      </div>
      <nav className="hidden md:flex items-center gap-6">
      {links.map((link) => (
        <Link className="hover:text-gray-300 transition-colors" key={link.href} href={link.href}>
        {link.label}
      </Link>
      ))}
      </nav>
      <ModeToggle buttonClassName="bg-gray-900 hover:bg-gray-900 text-gray-50 hidden md:flex" />
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <Button className="md:hidden" size="icon" variant="ghost">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="flex flex-col justify-between h-full">
          <div className="grid gap-6 p-6">
          {links.map((link) => (
          <Link className="hover:text-gray-300 transition-colors" key={link.href} href={link.href}  onClick={() => setSheetOpen(false)}>
            {link.label}
          </Link>
          ))}
          </div>
          <ModeToggle buttonClassName="self-end bg-gray-50 text-gray-900 hover:bg-gray-50/90 dark:bg-gray-900 dark:hover:bg-gray-900 dark:text-gray-50" />
          </div>

        </SheetContent>
      </Sheet>
    </div>
  </header>
  );
}
