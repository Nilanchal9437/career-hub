"use client";

import NavBar from "@/layout/navbar";
import Footer from "@/layout/footer";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
