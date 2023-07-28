import React, { ForwardedRef } from 'react';
import Link from 'next/link';

export const NavBar: React.FC = () => {
  return (
    <nav className="sm:fixed sm:z-10 top-0 w-full text-center flex flex-col sm:flex-row gap-2 justify-center p-2 bg-white border-b">
      <Link href="/" passHref className="text-2xl cursor-pointer">Home</Link>
      <Link href="/catalog" className="text-2xl cursor-pointer">Catalog</Link>
      <Link href="/contacts" replace={true} className="text-2xl cursor-pointer">Contacts</Link>
    </nav>
  )
};
