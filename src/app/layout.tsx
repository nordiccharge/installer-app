import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Installer Tool",
  description: "Installation Tool for Nordic Charge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="dk">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className="flex w-screen min-h-screen h-auto justify-center items-center bg-slate-50 lg:p-4">
        <main className="flex flex-col w-full min-h-screen items-center justify-center h-auto bg-white space-y-8 sm:max-w-[414px] lg:max-h-[736px] rounded-lg shadow-lg p-4 overflow-y-auto overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
