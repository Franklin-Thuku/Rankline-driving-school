import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rankline Driving School | Learn to Drive in Juja",
  description:
    "Rankline Driving School is preparing to open in Juja, Kiambu County. Register your interest for Class B private car driving lessons.",
  keywords: [
    "driving school Juja",
    "Class B driving lessons",
    "driving school Kiambu",
    "Rankline Driving School"
  ],
  openGraph: {
    title: "Rankline Driving School",
    description: "Build confidence behind the wheel. Class B driving lessons in Juja.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
