import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/Header";

export const metadata: Metadata = {
  title: {
    default: "Pehli Roti Gau Matta Ki",
    template: "%s | Pehli Roti Gau Matta Ki",
  },

  description:
    "Connecting households with gaushalas through the daily tradition of the first roti.",

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
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

      </body>
    </html>
  );
}