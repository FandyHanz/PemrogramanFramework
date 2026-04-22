import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { Roboto } from "next/font/google";

// 2. Load Navbar secara dinamis di sini
const Navbar = dynamic(() => import("../navbar"), {
  ssr: false,
  loading: () => <div style={{ height: '70px' }}>Loading Navigation...</div>
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const disableNavbar = ['/auth/login', '/auth/register', '/404'];

export default function AppShell({ children }: { children: React.ReactNode }) {
  const { pathname } = useRouter();

  return (
    <main className={roboto.className}>

      {!disableNavbar.includes(pathname) && <Navbar />}

      {children}

      <footer style={{ textAlign: 'center', padding: '20px' }}>
      </footer>
    </main>
  );
};