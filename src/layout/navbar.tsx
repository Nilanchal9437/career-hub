import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4 relative">
        <Link href="/" className="flex items-center gap-2">
          {/* Placeholder for logo icon */}
          <Image height={30} width={30} src="/logo.png" alt="icon" />
          <span className="font-bold text-lg md:text-xl text-gray-800">
            CareerHub
          </span>
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-green-600 transition">
            Home
          </Link>
          <Link href="/job" className="hover:text-green-600 transition">
            Job
          </Link>
          <Link href="/course" className="hover:text-green-600 transition">
            Course
          </Link>
          <Link href="/career" className="hover:text-green-600 transition">
            Career
          </Link>
        </nav>
        <div className="hidden md:flex gap-2 items-center">
          <Link
            href="/career-guidance"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-md text-sm transition"
          >
            Career Guidance
          </Link>
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-label="Open menu"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          <span className="sr-only">Open menu</span>
          {/* Hamburger icon */}
          <svg
            className="h-6 w-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg flex flex-col items-center py-4 gap-2 md:hidden animate-fade-in z-20">
            <Link
              href="/"
              className="w-full text-center py-2 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/job"
              className="w-full text-center py-2 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Job
            </Link>
            <Link
              href="/course"
              className="w-full text-center py-2 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Course
            </Link>
            <Link
              href="/career"
              className="w-full text-center py-2 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Career
            </Link>
            <div className="flex flex-col gap-2 w-full px-4 mt-2"> 
              <Link
                href="/career-guidance"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-md text-sm transition w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Career Guidance
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default NavBar;
