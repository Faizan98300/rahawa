"use client";

export default function ContactForm() {
  async function handleSubmit(e: any) {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });

    if (res.ok) alert("Message sent successfully");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 max-w-md space-y-3">
      <input
        name="email"
        placeholder="Your email"
        required
        className="w-full border p-2"
      />
      <textarea
        name="message"
        placeholder="Your message"
        required
        className="w-full border p-2"
      />
      <button className="px-4 py-2 bg-black text-white">
        Send Message
      </button>
    </form>
  );
}