import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

const mokotoVF = localFont({
  src: "./fonts/mokoto.woff",
  variable: "--font-mokoto",
  weight: "100 900",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apertre2.0",
  description: "",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${mokotoVF.variable} ${poppins.className} antialiased`}>
          <Navbar />
          {children}
          <Footer />
          <Toaster position="bottom-right" />
        </body>
      </html>
    </ClerkProvider>
  );
}
