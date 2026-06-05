export default function CreateCleanup() {
  return (
    <main className="min-h-screen bg-white p-10">
      
      <h1 className="text-3xl font-bold text-green-700 mb-6">
        Host a Cleanup
      </h1>

      <p className="text-gray-700 mb-8">
        Fill out the form below to create and organize a cleanup event.
      </p>

      {/* GOOGLE FORM EMBED */}
      <div className="w-full flex justify-center">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSegt5ikyCE59tPdJZzVZSNxBEtWwes_WsFQSoFrnYM9yMYu2A/viewform?embedded=true"
          width="100%"
          height="900"
          className="border rounded-xl"
        >
          Loading…
        </iframe>
      </div>

    </main>
  );
}