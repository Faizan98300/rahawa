import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-6">
        Professional Printing Services Online
      </h1>

      <h2 className="text-2xl font-semibold mt-6">Business Cards</h2>
      <p>High-quality custom business card printing.</p>

      <h2 className="text-2xl font-semibold mt-6">Labels & Stickers</h2>
      <p>Durable labels and stickers for all needs.</p>

      <h2 className="text-2xl font-semibold mt-6">Custom Printing</h2>
      <p>Packaging, marketing materials, and more.</p>
          <Footer />
    </main>
  );
}