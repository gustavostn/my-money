import "@/app/ui/global.css";
import { montserrat } from "./ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark:bg-gray-800">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
