import type { Metadata } from "next";
import Layout from "@/layout";
import Providers from "@/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Edu.",
  description:
    "SmartEdu m’a aidé à trouver à la fois un bootcamp de programmation et un emploi dans le secteur technologique en quelques mois. Les conseils en orientation professionnelle ont été inestimables.",
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
