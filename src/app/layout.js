import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head"; // Importa Head de next/head

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Exámen médico psicosomatico",
  description: "Ofrecemos evaluaciones psicosomáticas rápidas y profesionales para ayudarte a obtener tu licencia de conducir de manera eficiente.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Examen Médico Personalizado</title>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
