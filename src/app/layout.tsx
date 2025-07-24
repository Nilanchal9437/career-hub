import type { Metadata } from "next";
import Layout from "@/layout";
import Providers from "@/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Career Hub",
  description:
    "CareerHub helped me find both a programming bootcamp and a job in the tech industry within months. The career guidance was invaluable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
