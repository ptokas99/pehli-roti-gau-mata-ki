import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pehli Roti Gau Mata Ki",
  description:
    "Connecting communities with gaushalas through a daily roti collection network.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link href="/" className="brand">
              Pehli Roti Gau Mata Ki
            </Link>

            <div>
              <Link href="/about">About</Link>
              <Link href="/how-it-works">How It Works</Link>
              <Link href="/impact">Impact</Link>
              <Link href="/gaushalas">Gaushalas</Link>
              <Link href="/get-involved">Get Involved</Link>
              <Link href="/donate">Donate</Link>
            </div>
          </nav>
        </header>

        {children}

        <footer>
          <h3>Pehli Roti Gau Mata Ki</h3>
          <p>Registration details | Contact | Social Media</p>
        </footer>
      </body>
    </html>
  );
}