import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Volia Control",
  description: "Sistema local de control comercial, documental, inventario, cirugías y cobros de Volia S.A.S.",
  applicationName: "Volia Control",
  manifest: "/manifest.webmanifest",
  themeColor: "#102d29",
  appleWebApp: { capable: true, title: "Volia Control", statusBarStyle: "black-translucent" },
  other: { "codex-preview": "development" },
  icons: { icon: "/app-icon.svg", shortcut: "/app-icon.svg", apple: "/app-icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
