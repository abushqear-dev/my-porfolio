import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({ 
  subsets: ["latin"], 
  weight: "400",
  variable: "--font-ibm-mono",
});
const ibmPlexSans = IBM_Plex_Sans({ 
  subsets: ["latin"], 
  weight: "400",
  variable: "--font-ibm-sans",
});

export const metadata: Metadata = {
  title: "Mohammed Abu-Shqear",
  description: "Mohammed Abu-Shqear - Full-Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${ibmPlexSans.className} ${ibmPlexMono.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
