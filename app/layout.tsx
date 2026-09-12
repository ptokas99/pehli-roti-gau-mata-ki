import "./globals.css";
import Header from "./components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pehli Roti Gau Matta Ki",
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
        <Header />

        {children}

        <footer>
          <h3>Pehli Roti Gau Matta Ki</h3>
          <p>Registration details | Contact | Social Media</p>
        </footer>
      </body>
    </html>
  );
}