"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Heart, Phone } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { companyInfo } from "@/data/company";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="container-custom mx-auto flex h-18 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-700 to-cyan-600 shadow-lg shadow-blue-700/20 group-hover:shadow-blue-700/30 transition-shadow">
            <Heart className="h-5 w-5 text-white fill-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-slate-900 leading-none">
              SMP <span className="text-blue-700">Surgitech</span>
            </span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-slate-500 leading-none mt-0.5">
              Advancing Lives
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                pathname === link.href
                  ? "text-blue-700 bg-blue-50"
                  : "text-slate-600 hover:text-blue-700 hover:bg-slate-50"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${companyInfo.contact.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors"
          >
            <Phone className="h-4 w-4" />
            {companyInfo.contact.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-lg bg-gradient-to-r from-blue-700 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-700/25 hover:shadow-blue-700/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-6 shadow-2xl">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                  pathname === link.href
                    ? "text-blue-700 bg-blue-50"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a
                href={`tel:${companyInfo.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 px-4 text-sm font-medium text-slate-700"
              >
                <Phone className="h-4 w-4 text-blue-700" />
                {companyInfo.contact.phone}
              </a>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mx-4 rounded-xl bg-blue-700 px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Get In Touch
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}