import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Woovi Front-end Challenge by Saraivx",
  description: "by Saraivx.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
