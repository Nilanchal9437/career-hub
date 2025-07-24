"use client";

import { LoaderProvider } from "@/context/LoaderContext";

function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LoaderProvider>{children}</LoaderProvider>;
}

export default Providers;
