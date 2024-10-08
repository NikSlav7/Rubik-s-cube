import type { Metadata, Viewport } from "next";
import { Inter, Lato, Nunito, Poppins, Roboto, Raleway, Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Suspense } from "react";

const lato = Open_Sans({ subsets: ['latin', 'cyrillic'], weight: ['300','400','700','800']});

export const metadata: Metadata = {
  title: "Nikita Cube",
  description: "Private Rubik's cube lessons with a real professional",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className={cn(lato.className, 'w-[100vw]')}><Suspense>{children}</Suspense></body>
    </html>
  );
}
