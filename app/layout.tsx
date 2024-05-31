import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import AuthProvider from "@/context/auth-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Viloyat taxi",
  description: "Viloyatlar aro taxi hizmati.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          <div className="container pt-28 pb-20 min-h-screen">
            {children}
          </div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
