import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: {
    template: '%s | ShipmentX',
    default: 'Carrier Portal | ShipmentX',
  },
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`antialiased ${openSans.className}`} data-theme="mytheme">
      <body
      >
        {children}
      </body>
    </html>
  );
}
