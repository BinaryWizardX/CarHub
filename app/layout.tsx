import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {Manrope} from "next/font/google"
import "./globals.css";
import { NavBar } from "@/Components";
import Footer from "@/Components/Footer";
import { Suspense } from "react";
import Loading from "./loading";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Home page of Car Hub",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        
        <NavBar />
          <Suspense fallback={<Loading />}>
            {children}

          </Suspense>
        

        <Footer/>

        </body>
    </html>
  );
}
