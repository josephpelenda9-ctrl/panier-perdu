import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Panier Perdu — Récupère l'argent que tu perds chaque mois",
  description:
    "Relance automatiquement les paniers abandonnés de ta boutique Shopify ou WooCommerce. 29€/mois, sans engagement.",
  openGraph: {
    title: "Panier Perdu",
    description:
      "Récupère l'argent que tu perds chaque mois avec les paniers abandonnés.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}