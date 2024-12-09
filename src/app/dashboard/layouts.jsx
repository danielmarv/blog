import React from "react";
import { SideNav } from "@/components/side-nav";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import AuthProvider from "@/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard - Bugema University",
  description: "Manage your content and settings in the dashboard.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        <main className="container mx-auto pt-12 min-h-screen">
          <div className="flex flex-col md:flex-row gap-8">
            <SideNav />
            <div className="w-full">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
