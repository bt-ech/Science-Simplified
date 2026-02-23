import Link from "next/link";
import "./globals.css";
import React from "react";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
      <nav className="relative bg-black flex items-center p-4">
        
        <h3 className="absolute left-1/2 -translate-x-1/2 font-bold text-white">
          <Link href={'/'}>Science Simplified</Link>
        </h3>

        <ul className="ml-auto font-bold text-white flex gap-3 px-6">
          <Link href={'/about'}>About</Link>
        </ul>

      </nav>

      <div className="text-center">
        {children}
      </div>
      </body>
    </html>
  );
}