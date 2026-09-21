"use client";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    const res = await fetch("/api/checkout", { method: "POST" });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      setLoading(false);
      alert("Une erreur est survenue. Réessaie dans un instant.");
    }
  }

  return (
    <main className="min-h-screen flex flex-col">
      <section className="flex-1 flex flex-col justify-center px-6 py-16 max-w-xl mx-auto text-center">
        <h1 className="text-3xl font-bold leading-tight mb-4">
          Chaque mois, ta boutique perd des ventes déjà à moitié faites.
        </h1>
        <p className="text-lg text-ink/70 mb-8">
          70% des paniers sont abandonnés avant paiement. Panier Perdu relance
          automatiquement tes clients par email, et récupère cet argent à ta
          place.
        </p>
        <ul className="text-left mb-10 space-y-3 mx-auto max-w-sm">
          <li>✓ Branché à Shopify ou WooCommerce en 5 minutes</li>
          <li>✓ Deux relances automatiques, écrites pour convertir</li>
          <li>✓ Tu vois en direct le chiffre d'affaires récupéré</li>
        </ul>
        <button
          onClick={handleCheckout}
          disabled={loading}
          className="bg-ember text-white text-lg font-semibold py-4 px-8 rounded-lg disabled:opacity-60"
        >
          {loading ? "Un instant…" : "Récupérer mes paniers perdus — 29€/mois"}
        </button>
        <p className="text-sm text-ink/50 mt-4">
          Sans engagement. Annulable à tout moment.
        </p>
      </section>
    </main>
  );
}