import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  display: "swap",
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-archivo",
});
export const metadata: Metadata = {
  title: "Modern Digital Labs",

  description:
    "Skilled Freelance Developers: Independent professionals offering tailored web solutions, web development, and app creation with a focus on innovation, efficiency, and client satisfaction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-stone-200 text-stone-900 ${archivo.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
