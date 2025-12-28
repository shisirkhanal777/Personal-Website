"use client";

import { useState } from "react";
import Link from "next/link";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", labelNp: "घर" },
    { href: "/about", label: "About", labelNp: "परिचय" },
    { href: "/vision", label: "Vision", labelNp: "दृष्टिकोण" },
    { href: "/media", label: "Media", labelNp: "सञ्चार" },
    { href: "/contact", label: "Contact", labelNp: "सम्पर्क" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-900/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">SK</span>
            <span className="hidden sm:block text-lg font-semibold text-neutral-100">
              Shisir Khanal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-200 hover:text-white transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-neutral-200 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-neutral-200 hover:text-white transition-colors duration-200 font-medium px-2 py-1"
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-2 pt-2">
                <LanguageToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

