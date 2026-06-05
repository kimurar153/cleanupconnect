export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-4 py-10">
      
      <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
        Contact Us
      </h1>

      <p className="text-center text-gray-700 mb-10">
        Fill out the form below and we’ll get back to you soon.
      </p>

      <div className="max-w-3xl mx-auto">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfE6UItBDnlGVWKWoV8NlSbfBqwp37mjjyTUXbn2kiV0MJGqw/viewform?embedded=true"
          width="100%"
          height="900"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          className="rounded-xl border"
        >
          Loading…
        </iframe>
      </div>

    </main>
  );
}