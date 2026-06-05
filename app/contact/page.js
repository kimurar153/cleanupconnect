export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-8 py-20">
      <h1 className="text-4xl font-bold text-green-700 mb-6">
        Contact Us
      </h1>

      <p className="text-lg text-gray-700 mb-10">
        Have questions, want to join, or want to partner with CleanupConnect?
        Reach out below.
      </p>

      <div className="max-w-xl space-y-4">
        <input
          className="w-full border p-3 rounded-lg"
          placeholder="Your Name"
        />

        <input
          className="w-full border p-3 rounded-lg"
          placeholder="Your Email"
        />

        <textarea
          className="w-full border p-3 rounded-lg h-40"
          placeholder="Your Message"
        />

        <button className="bg-green-700 text-white px-6 py-3 rounded-xl">
          Send Message
        </button>
      </div>
    </main>
  );
}