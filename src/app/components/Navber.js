"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClass =
    "text-lg font-medium hover:text-black hover:underline hover:decoration-black hover:decoration-2 hover:underline-offset-[2px] transition";

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center space-x-10 py-6">
          <Link href="/" className={linkClass}>
            Home
          </Link>
          <Link href="/tickets" className={linkClass}>
            Tickets
          </Link>

          {/* About Dropdown */}
          <div className="group relative">
            <button className={`${linkClass} flex items-center gap-1`}>
              About <span>▾</span>
            </button>
            <div className="absolute left-0 hidden group-hover:block hover:block bg-white shadow-md mt-2 rounded-md w-72">
              <Link
                href="/about/what-is-wordcamp"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                What is WordCamp?
              </Link>
              <Link
                href="/about/contributor-day"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                What is Contributor Day?
              </Link>
              <Link
                href="/about/code-of-conduct"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Code of Conduct
              </Link>
              <Link
                href="/about/organizers"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Organizers
              </Link>
              <Link
                href="/about/agreement"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Agreement among WordCamp Organizers, Speakers, Sponsors, and Volunteers
              </Link>
            </div>
          </div>

          {/* Access Dropdown */}
          <div className="group relative">
            <button className={`${linkClass} flex items-center gap-1`}>
              Access <span>▾</span>
            </button>
            <div className="absolute left-0 hidden group-hover:block hover:block bg-white shadow-md mt-2 rounded-md">
              <Link
                href="/access/location"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Location
              </Link>
              <Link
                href="/access/transport"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Transport
              </Link>
            </div>
          </div>

          {/* Sponsors Dropdown */}
          <div className="group relative">
            <button className={`${linkClass} flex items-center gap-1`}>
              Sponsors <span>▾</span>
            </button>
            <div className="absolute left-0 hidden group-hover:block hover:block bg-white shadow-md mt-2 rounded-md">
              <Link
                href="/sponsors/gold"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Gold Sponsors
              </Link>
              <Link
                href="/sponsors/silver"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Silver Sponsors
              </Link>
            </div>
          </div>

          <Link href="/contact" className={linkClass}>
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold">
            WordCamp
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-gray-900"
          >
            <svg
              className="h-6 w-6"
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
          <div className="md:hidden pb-4">
            <Link href="/" className="block py-2 hover:bg-gray-100">
              Home
            </Link>
            <Link href="/tickets" className="block py-2 hover:bg-gray-100">
              Tickets
            </Link>
            
            {/* Mobile About Section */}
            <div className="py-2">
              <div className="font-medium">About</div>
              <Link href="/about/what-is-wordcamp" className="block pl-4 py-2 hover:bg-gray-100">
                What is WordCamp?
              </Link>
              <Link href="/about/contributor-day" className="block pl-4 py-2 hover:bg-gray-100">
                What is Contributor Day?
              </Link>
              <Link href="/about/code-of-conduct" className="block pl-4 py-2 hover:bg-gray-100">
                Code of Conduct
              </Link>
              <Link href="/about/organizers" className="block pl-4 py-2 hover:bg-gray-100">
                Organizers
              </Link>
              <Link href="/about/agreement" className="block pl-4 py-2 hover:bg-gray-100">
                Agreement
              </Link>
            </div>

            {/* Mobile Access Section */}
            <div className="py-2">
              <div className="font-medium">Access</div>
              <Link href="/access/location" className="block pl-4 py-2 hover:bg-gray-100">
                Location
              </Link>
              <Link href="/access/transport" className="block pl-4 py-2 hover:bg-gray-100">
                Transport
              </Link>
            </div>

            {/* Mobile Sponsors Section */}
            <div className="py-2">
              <div className="font-medium">Sponsors</div>
              <Link href="/sponsors/gold" className="block pl-4 py-2 hover:bg-gray-100">
                Gold Sponsors
              </Link>
              <Link href="/sponsors/silver" className="block pl-4 py-2 hover:bg-gray-100">
                Silver Sponsors
              </Link>
            </div>

            <Link href="/contact" className="block py-2 hover:bg-gray-100">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
