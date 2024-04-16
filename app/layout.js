import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "6201",
  description: "the official team 6201 site",
};

import { Providers } from "./providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className + " loading"}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
