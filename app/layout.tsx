import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";



const localFontStyle = localFont({
    src: "../fonts/bahnschrift-1.ttf",
    variable: "--font-bahnschrift",
    display: "swap",
})

export const metadata: Metadata = {
  title: "Blockchain Masters Academy",
  description: "Blockchain for Everyone",
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
    shortcut: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${localFontStyle.variable} antialiased`}
         style={{ fontFamily: 'Bahnschrift, sans-serif' }}
      >
           {/* Header */}
        <div className="relative z-10">
        <Header/>
        </div>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
