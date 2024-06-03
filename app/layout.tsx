import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import UserContextProvider from "@/context/user-context";
import UserPostsContextProvider from "@/context/user-posts-context";

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
      <UserContextProvider>
        <body className={inter.className}>
          <Header />
          <UserPostsContextProvider>
            <div className="container pt-28 pb-20 min-h-screen">{children}</div>
          </UserPostsContextProvider>
          <Footer />
        </body>
      </UserContextProvider>
    </html>
  );
}
