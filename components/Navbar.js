import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b">
      
      {/* Logo (goes to home page) */}
      <Link href="/" className="text-2xl font-bold text-green-700">
        CleanupConnect
      </Link>

      {/* Navigation links */}
      <div className="flex gap-6 text-sm">
        <Link href="/about" className="hover:text-green-700">
          About
        </Link>

        <Link href="/work" className="hover:text-green-700">
          Work
        </Link>

        <Link href="/impact" className="hover:text-green-700">
          Impact
        </Link>

        <Link href="/team" className="hover:text-green-700">
          Team
        </Link>
      </div>
    </nav>
  );
}