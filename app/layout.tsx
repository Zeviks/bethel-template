"use client";

import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import NavigationBar from "@/components/NavigationBar/index";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { ThemeProvider } from "@material-tailwind/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <ThemeProvider>
          <NavigationBar />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
        <script src="../path/to/flowbite/dist/flowbite.min.js" async />
      </body>
    </html>
  );
}
