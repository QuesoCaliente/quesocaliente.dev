import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { DrawerHeader } from "@/components/drawerHeader";
import Footer from "@/components/footer";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "QuesoCaliente.dev",
  description:
    "¡Bienvenido a mi mundo tecnológico! Soy Quesocaliente, un apasionado desarrollador de software con un amor inquebrantable por crear soluciones innovadoras. Mi portafolio es un viaje a través de proyectos que he llevado a cabo, destacando mi dedicación para ofrecer código limpio, eficiente y elegante.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <div className="flex bg-transparent"></div>
        <DrawerHeader />
        <main className="min-w-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
