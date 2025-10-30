"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const linkClass =
        "text-lg font-medium hover:text-cyan-500 hover:underline hover:decoration-white hover:decoration-2 hover:underline-offset-[2px] transition";

    return (
        <nav className="w-full bg-black/90 border-b border-cyan-500/50 shadow-sm sticky top-0 z-50">
            <div className="text-white container mx-auto px-4">
                {/* Desktop Menu */}
                <div className="hidden md:flex justify-center space-x-10 py-6">
                    <Link href="/" className={linkClass}>
                        Home
                    </Link>
                    <Link href="/tickets" className={linkClass}>
                        Tickets
                    </Link>

                    {/* About Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-1">
                            <span
                                className={`${linkClass} hover:underline hover:decoration-white hover:decoration-2 hover:underline-offset-[2px]`}
                            >
                                About
                            </span>
                            <span className="transition-transform duration-200 group-hover:rotate-0">
                                <Image
                                    src="/icon-small.png"
                                    alt="Dropdown Icon"
                                    width={16}
                                    height={16}
                                    className="transition-transform duration-200 group-hover:rotate-180 invert"
                                />
                            </span>
                        </button>

                        {/* Dropdown */}
                        <div className="absolute left-0 top-full mt-0 w-72 bg-black/80 border border-cyan-500/50 shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                            <Link
                                href="/about/Wordcamp"
                                className="block px-4 py-2 hover:bg-gray-900/30 hover:text-cyan-500 hover:underline hover:decoration-white hover:decoration-2 hover:underline-offset-4"
                            >
                                What is WordCamp?
                            </Link>
                            <Link
                                href="/about/Contributor"
                                className="block px-4 py-2 hover:bg-gray-900/30 hover:text-cyan-500 hover:underline hover:decoration-white hover:decoration-2 hover:underline-offset-4"
                            >
                                What is Contributor Day?
                            </Link>
                            <Link
                                href="/about/Conduct"
                                className="block px-4 py-2 hover:bg-gray-900/30 hover:text-cyan-500 hover:underline hover:decoration-white hover:decoration-2 hover:underline-offset-4"
                            >
                                Code of Conduct
                            </Link>
                            <Link
                                href="/about/Organizers"
                                className="block px-4 py-2 hover:bg-gray-900/30 hover:text-cyan-500 hover:underline hover:decoration-white hover:decoration-2 hover:underline-offset-4"
                            >
                                Organizers
                            </Link>
                            <Link
                                href="/about/Agreement"
                                className="block px-4 py-2 hover:bg-gray-900/30 hover:text-cyan-500 hover:underline hover:decoration-white hover:decoration-2 hover:underline-offset-4"
                            >
                                Agreement among WordCamp Organizers, Speakers, Sponsors, and Volunteers
                            </Link>
                        </div>
                    </div>

                    {/* Access Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-1">
                            <span
                                className={`${linkClass} hover:underline hover:decoration-white hover:decoration-2 hover:underline-offset-[2px]`}
                            >
                                Access
                            </span>
                            <span className="transition-transform duration-200 group-hover:rotate-0">
                                <Image
                                    src="/icon-small.png"   // ไฟล์รูปที่คุณมี เช่น SVG/PNG
                                    alt="Dropdown Icon"
                                    width={16}
                                    height={16}
                                    className="transition-transform duration-200 group-hover:rotate-180 invert"
                                />
                            </span>
                        </button>
                        <div className="absolute left-0 top-full mt-0 w-72 bg-black/80 border border-cyan-500/50 shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                            <Link
                                href="/access/Location"
                                className="block px-4 py-2 hover:bg-gray-900/30 hover:text-cyan-500 hover:underline hover:decoration-white hover:decoration-2 hover:underline-offset-4"
                            >
                                Location
                            </Link>
                        </div>
                    </div>

                    {/* Sponsors Dropdown */}
                    <div className="group relative">
                        <button className="flex items-center gap-1">
                            <Link
                                href="/sponsors"
                                className={`${linkClass} hover:underline hover:decoration-white hover:decoration-2 hover:underline-offset-[2px]`}
                            >
                                Sponsors
                            </Link>
                            <span className="transition-transform duration-200 group-hover:rotate-0">
                                <Image
                                    src="/icon-small.png"   // ไฟล์รูปที่คุณมี เช่น SVG/PNG
                                    alt="Dropdown Icon"
                                    width={16}
                                    height={16}
                                    className="transition-transform duration-200 group-hover:rotate-180 invert"
                                />
                            </span>
                        </button>
                        <div className="absolute left-0 top-full mt-0 w-72 bg-black/80 border border-cyan-500/50 shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                            <Link
                                href="/sponsors/Individual"
                                className="block px-4 py-2 hover:bg-gray-900/30 hover:text-cyan-500 hover:underline hover:decoration-white hover:decoration-2 hover:underline-offset-4"
                            >
                                Individual Sponsors
                            </Link>
                        </div>
                    </div>

                    <Link href="/contact" className={linkClass}>
                        Contact
                    </Link>
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
                            <Link href="/about/Wordcamp" className="block pl-4 py-2 hover:bg-gray-100">
                                What is WordCamp?
                            </Link>
                            <Link href="/about/Contributor" className="block pl-4 py-2 hover:bg-gray-100">
                                What is Contributor Day?
                            </Link>
                            <Link href="/about/Conduct" className="block pl-4 py-2 hover:bg-gray-100">
                                Code of Conduct
                            </Link>
                            <Link href="/about/Organizers" className="block pl-4 py-2 hover:bg-gray-100">
                                Organizers
                            </Link>
                            <Link href="/about/Agreement" className="block pl-4 py-2 hover:bg-gray-100">
                                Agreement
                            </Link>
                        </div>

                        {/* Mobile Access Section */}
                        <div className="py-2">
                            <div className="font-medium">Access</div>
                            <Link href="/access/Location" className="block pl-4 py-2 hover:bg-gray-100">
                                Location
                            </Link>
                        </div>

                        {/* Mobile Sponsors Section */}
                        <div className="py-2">
                            <div className="font-medium">Sponsors</div>
                            <Link href="/sponsors/Individual" className="block pl-4 py-2 hover:bg-gray-100">
                                Individual Sponsors
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
