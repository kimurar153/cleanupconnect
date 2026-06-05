import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="px-8 py-24 text-center bg-green-50">
        <h2 className="text-5xl font-bold mb-6">
          Making Cleanups More Accessible
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-8">
          CleanupConnect helps people find, create, and join road, park, and
          neighborhood cleanups across Central Florida.
        </p>

        <div className="flex justify-center gap-4">

          <a href="/find-cleanup">
            <button className="bg-green-700 text-white px-6 py-3 rounded-xl">
              Find a Cleanup
            </button>
          </a>

          <a href="/create-cleanup">
            <button className="border border-green-700 text-green-700 px-6 py-3 rounded-xl">
              Make a Cleanup
            </button>
          </a>

        </div>
      </section>

      {/* ABOUT */}
      <section className="px-8 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-lg leading-8 text-gray-700">
          CleanupConnect was created by student volunteers from AYLUS Orlando.
        </p>
      </section>

      {/* OUR WORK (UPDATED GREEN SECTION) */}
      <section className="px-8 py-20 bg-green-50">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold mb-10 text-center">
            Our Work
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="border rounded-2xl p-6 bg-white shadow-sm">
              <h3 className="text-xl font-bold text-green-700 mb-3">
                Road Cleanups
              </h3>
              <p className="text-gray-700">
                Volunteers clean roads and community areas.
              </p>
            </div>

            <div className="border rounded-2xl p-6 bg-white shadow-sm">
              <h3 className="text-xl font-bold text-green-700 mb-3">
                Park Cleanups
              </h3>
              <p className="text-gray-700">
                Making parks cleaner and safer.
              </p>
            </div>

            <div className="border rounded-2xl p-6 bg-white shadow-sm">
              <h3 className="text-xl font-bold text-green-700 mb-3">
                Neighborhood Cleanups
              </h3>
              <p className="text-gray-700">
                Community-led cleanup events.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section className="px-8 py-20 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Get Involved</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <a href="/find-cleanup">
            <div className="border rounded-2xl p-6 hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-3">Find Cleanup</h3>
              <p className="text-gray-700 mb-5">
                Search for events near you.
              </p>
              <span className="bg-green-700 text-white px-5 py-2 rounded-lg">
                Find Events
              </span>
            </div>
          </a>

          <a href="/create-cleanup">
            <div className="border rounded-2xl p-6 hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-3">Make Cleanup</h3>
              <p className="text-gray-700 mb-5">
                Create a cleanup event.
              </p>
              <span className="bg-green-700 text-white px-5 py-2 rounded-lg">
                Create Event
              </span>
            </div>
          </a>

          <a href="/signup">
            <div className="border rounded-2xl p-6 hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-3">Sign Up</h3>
              <p className="text-gray-700 mb-5">
                Join volunteers.
              </p>
              <span className="bg-green-700 text-white px-5 py-2 rounded-lg">
                Sign Up
              </span>
            </div>
          </a>

        </div>
      </section>

      {/* CONTACT */}
      <ContactSection />

    </main>
  );
}