import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({ weight: ["300", "400", "700"], subsets: ["latin"] });

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Hodl",
  description: "Coin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bebasNeue.className}>{children}</body>
    </html>
  );
}
