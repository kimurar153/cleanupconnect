import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="px-8 py-28 text-center bg-green-50">
        <h2 className="text-5xl font-bold mb-6">
          Making Cleanups More Accessible
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          CleanupConnect helps people find, create, and join road, park, and
          neighborhood cleanups across Central Florida.
        </p>
      </section>

      {/* ABOUT */}
      <section className="px-8 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-lg leading-8 text-gray-700">
          CleanupConnect was created by student volunteers from AYLUS Orlando.
        </p>
      </section>

      {/* OUR WORK */}
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
      <section className="px-8 py-24 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Get Involved</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <a href="/signup">
            <div className="border rounded-2xl p-6 hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-3">Sign Up</h3>
              <p className="text-gray-700 mb-5">
                Join volunteers and track your impact.
              </p>
              <span className="bg-green-700 text-white px-5 py-2 rounded-lg">
                Join Now
              </span>
            </div>
          </a>

          <a href="/impact">
            <div className="border rounded-2xl p-6 hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-3">See Impact</h3>
              <p className="text-gray-700 mb-5">
                View cleanup progress and stats.
              </p>
              <span className="bg-green-700 text-white px-5 py-2 rounded-lg">
                View Stats
              </span>
            </div>
          </a>

          <a href="/team">
            <div className="border rounded-2xl p-6 hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-3">Meet Team</h3>
              <p className="text-gray-700 mb-5">
                Learn about the people behind CleanupConnect.
              </p>
              <span className="bg-green-700 text-white px-5 py-2 rounded-lg">
                View Team
              </span>
            </div>
          </a>

        </div>
      </section>

      {/* CONTACT */}
      <div className="mt-10">
        <ContactSection />
      </div>

    </main>
  );
}