import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Bookman - A simple library management system",
  description:
    "A demo project built to test out full-stack web app development with Spring Boot and Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-800">
        {children}
      </body>
    </html>
  );
}
