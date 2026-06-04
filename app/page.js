import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* NAVBAR (FIXED - REAL PAGES) */}
      <nav className="flex items-center justify-between px-8 py-5 border-b">
        <h1 className="text-2xl font-bold text-green-700">
          CleanupConnect
        </h1>

        <div className="hidden md:flex gap-6 text-sm">
          <Link href="/about">About</Link>
          <Link href="/work">Our Work</Link>
          <Link href="/impact">Impact</Link>
          <Link href="/team">Team</Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="px-8 py-24 text-center bg-green-50">
        <h2 className="text-5xl font-bold mb-6">
          Making Cleanups More Accessible
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-8">
          CleanupConnect helps people find, create, and join road, park, and
          neighborhood cleanups across Central Florida.
        </p>

        {/* FIXED BUTTONS (REAL NAVIGATION) */}
        <div className="flex justify-center gap-4">

          <Link href="/find-cleanup">
            <button className="bg-green-700 text-white px-6 py-3 rounded-xl">
              Find a Cleanup
            </button>
          </Link>

          <Link href="/create-cleanup">
            <button className="border border-green-700 text-green-700 px-6 py-3 rounded-xl">
              Make a Cleanup
            </button>
          </Link>

        </div>
      </section>

      {/* ABOUT */}
      <section className="px-8 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-lg leading-8 text-gray-700">
          CleanupConnect was created by student volunteers from AYLUS Orlando.
        </p>
      </section>

      {/* WORK */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Our Work</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border rounded-2xl p-6">
            <h3 className="text-xl font-bold text-green-700 mb-3">
              Road Cleanups
            </h3>
            <p className="text-gray-700">
              Volunteers clean roads and community areas.
            </p>
          </div>

          <div className="border rounded-2xl p-6">
            <h3 className="text-xl font-bold text-green-700 mb-3">
              Park Cleanups
            </h3>
            <p className="text-gray-700">
              Making parks safer and cleaner.
            </p>
          </div>

          <div className="border rounded-2xl p-6">
            <h3 className="text-xl font-bold text-green-700 mb-3">
              Neighborhood Cleanups
            </h3>
            <p className="text-gray-700">
              Residents organize local cleanup events.
            </p>
          </div>

        </div>
      </section>

      {/* GET INVOLVED */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Get Involved</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <Link href="/find-cleanup">
            <div className="border rounded-2xl p-6 cursor-pointer hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-3">Find Cleanup</h3>
              <p className="text-gray-700 mb-5">
                Search for upcoming cleanups near you.
              </p>
              <span className="bg-green-700 text-white px-5 py-2 rounded-lg">
                Find Events
              </span>
            </div>
          </Link>

          <Link href="/create-cleanup">
            <div className="border rounded-2xl p-6 cursor-pointer hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-3">Make Cleanup</h3>
              <p className="text-gray-700 mb-5">
                Create a cleanup event in your area.
              </p>
              <span className="bg-green-700 text-white px-5 py-2 rounded-lg">
                Create Event
              </span>
            </div>
          </Link>

          <Link href="/signup">
            <div className="border rounded-2xl p-6 cursor-pointer hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-3">Sign Up</h3>
              <p className="text-gray-700 mb-5">
                Join as a volunteer and track impact.
              </p>
              <span className="bg-green-700 text-white px-5 py-2 rounded-lg">
                Sign Up
              </span>
            </div>
          </Link>

        </div>
      </section>

      {/* IMPACT */}
      <section className="px-8 py-20 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Impact</h2>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-green-50 p-6 rounded-2xl">
            <h3 className="text-4xl font-bold text-green-700">40+</h3>
            <p className="text-gray-700 mt-2">Projects</p>
          </div>

          <div className="bg-green-50 p-6 rounded-2xl">
            <h3 className="text-4xl font-bold text-green-700">60+</h3>
            <p className="text-gray-700 mt-2">Volunteers</p>
          </div>

          <div className="bg-green-50 p-6 rounded-2xl">
            <h3 className="text-4xl font-bold text-green-700">17</h3>
            <p className="text-gray-700 mt-2">Cleanups</p>
          </div>

          <div className="bg-green-50 p-6 rounded-2xl">
            <h3 className="text-4xl font-bold text-green-700">4</h3>
            <p className="text-gray-700 mt-2">Areas Adopted</p>
          </div>
        </div>
      </section>

    </main>
  );
}