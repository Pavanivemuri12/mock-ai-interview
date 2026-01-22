import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          cardBox: "w-full max-w-[520px]", // ✅ FIX
          card: "shadow-none border-none",
          headerTitle: "text-2xl",
          headerSubtitle: "text-base",
          formFieldInput: "py-3 text-base",
          formButtonPrimary: "py-3 text-base",
        },
      }}
    >
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
