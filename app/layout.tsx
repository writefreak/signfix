import type { Metadata } from "next";
import { Archivo, Inter, JetBrains_Mono, Geist } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Best Signage Company in Nigeria | Signfix Industrial Limited",
  description:
    "Signfix Industrial Limited specializes in innovative, high-quality, and affordable signage solutions for customers of all types and industries across Lagos and Nigeria.",
  openGraph: {
    title: "Best Signage Company in Nigeria | Signfix Industrial Limited",
    description:
      "Signfix Industrial Limited specializes in innovative, high-quality, and affordable signage solutions for customers of all types and industries across Lagos and Nigeria.",
    url: "https://signfix.ng/",
    siteName: "Signfix Industrial Limited | Signage Company in Lagos, Nigeria",
    images: [
      {
        url: "https://signfix.ng/wp-content/uploads/2017/11/SignFix-Social-Icon-3.jpg",
        width: 1012,
        height: 1012,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Signage Company in Nigeria | Signfix Industrial Limited",
    description:
      "Signfix Industrial Limited specializes in innovative, high-quality, and affordable signage solutions for customers of all types and industries across Lagos and Nigeria.",
    images: [
      "https://signfix.ng/wp-content/uploads/2017/11/SignFix-Social-Icon-3.jpg",
    ],
  },
  alternates: {
    canonical: "https://signfix.ng/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        archivo.variable,
        inter.variable,
        jetbrainsMono.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
