import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shisir Khanal",
  description: "Shisir Khanal's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-primary-700 text-neutral-100 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
