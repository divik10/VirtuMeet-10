import { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1C1F2E",
};

export const metadata: Metadata = {
  title: {
    default: "VirtuMeet — Video calling and meetings",
    template: "%s | VirtuMeet",
  },
  description:
    "Schedule and join video meetings. Start instant calls, plan upcoming meetings, and watch recordings.",
  keywords: ["video calls", "meetings", "video conferencing", "VirtuMeet"],
  authors: [{ name: "VirtuMeet" }],
  creator: "VirtuMeet",
  icons: {
    icon: "/icons/logo.svg",
    apple: "/icons/logo.svg",
  },
  openGraph: {
    type: "website",
    title: "VirtuMeet — Video calling and meetings",
    description: "Schedule and join video meetings.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "/icons/logo.svg",
          },
          variables: {
            colorText: "#fff",
            colorPrimary: "#0E78F9",
            colorBackground: "#1C1F2E",
            colorInputBackground: "#252A41",
            colorInputText: "#fff",
          },
          elements: {
            headerTitle: "Sign in to VirtuMeet",
            headerSubtitle: "",
          },
        }}
      >
        <body className={`${inter.className} bg-dark-2`}>
          <Toaster />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
