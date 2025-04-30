import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "AgroAV",
  description: "Ananas séchés & pommes d’exception",
  icons: {
    icon: "/public/icones/logoAgroAV.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
