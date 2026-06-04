export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <nav className="flex items-center justify-between px-8 py-5 border-b">
        <h1 className="text-2xl font-bold text-green-700">CleanupConnect</h1>

        <div className="hidden md:flex gap-6 text-sm">
          <a href="#about" className="hover:text-green-700">About</a>
          <a href="#work" className="hover:text-green-700">Our Work</a>
          <a href="#impact" className="hover:text-green-700">Impact</a>
          <a href="#team" className="hover:text-green-700">Team</a>
        </div>
      </nav>

      <section className="px-8 py-24 text-center bg-green-50">
        <h2 className="text-5xl font-bold mb-6">
          Making Cleanups More Accessible
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-8">
          CleanupConnect helps people find, create, and join road, park, and
          neighborhood cleanups across Central Florida.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-green-700 text-white px-6 py-3 rounded-xl">
            Find a Cleanup
          </button>
          <button className="border border-green-700 text-green-700 px-6 py-3 rounded-xl">
            Make a Cleanup
          </button>
        </div>
      </section>

      <section id="about" className="px-8 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-lg leading-8 text-gray-700">
          CleanupConnect was created by student volunteers from AYLUS Orlando.
          After organizing road, park, and community cleanups, we noticed that
          many people want to help but do not know where cleanups are happening
          or how to get involved.
        </p>
      </section>

      <section className="px-8 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">AYLUS Background</h2>
          <p className="text-lg leading-8 text-gray-700">
            AYLUS, the Alliance of Youth Leaders in the United States, is a
            youth-led volunteer organization. Our Orlando branch works on
            environmental sustainability, literacy, and community service
            projects throughout Central Florida.
          </p>
        </div>
      </section>

      <section className="px-8 py-20 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-2xl font-semibold text-green-700">
          To make community cleanups easier to find, organize, and join.
        </p>
      </section>

      <section id="work" className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Our Work</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <InfoCard
            title="Road Cleanups"
            text="Volunteers remove litter from local roads and adopted community areas."
          />
          <InfoCard
            title="Park Cleanups"
            text="We help make parks safer, cleaner, and more welcoming for families."
          />
          <InfoCard
            title="Neighborhood Cleanups"
            text="Residents can report littered areas and help organize local cleanups."
          />
        </div>
      </section>

      <section className="px-8 py-20 bg-green-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Cleanliness in Central Florida
          </h2>
          <p className="text-lg leading-8 text-gray-700">
            Central Florida has many roads, parks, and neighborhoods that need
            consistent cleanup support. By making cleanup events easier to find,
            more students and families can participate in improving their local
            communities.
          </p>
        </div>
      </section>

      <section className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Get Involved</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <ActionCard
            title="Find Cleanup"
            text="Search for upcoming cleanups near you."
            button="Find Events"
          />
          <ActionCard
            title="Make Cleanup"
            text="Create a cleanup for a road, park, or neighborhood."
            button="Create Event"
          />
          <ActionCard
            title="Sign Up Account"
            text="Join as a volunteer and track your impact."
            button="Sign Up"
          />
        </div>
      </section>

      <section className="px-8 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Cleanup Map</h2>
          <div className="h-96 rounded-2xl border bg-white flex items-center justify-center text-gray-500">
            Interactive map will go here later
          </div>
        </div>
      </section>

      <section id="impact" className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Impact / Stats</h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          <Stat number="40+" label="Projects" />
          <Stat number="60+" label="Volunteers" />
          <Stat number="17" label="Cleanups" />
          <Stat number="4" label="Areas Adopted" />
        </div>
      </section>

      <section id="team" className="px-8 py-20 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Meet the Team</h2>
        <p className="max-w-2xl mx-auto text-gray-300">
          Built by student volunteers who want to make environmental service
          easier, more organized, and more accessible.
        </p>
      </section>
    </main>
  );
}

function InfoCard({ title, text }) {
  return (
    <div className="border rounded-2xl p-6 shadow-sm">
      <h3 className="text-xl font-bold text-green-700 mb-3">{title}</h3>
      <p className="text-gray-700">{text}</p>
    </div>
  );
}

function ActionCard({ title, text, button }) {
  return (
    <div className="border rounded-2xl p-6 shadow-sm">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-700 mb-5">{text}</p>
      <button className="bg-green-700 text-white px-5 py-2 rounded-lg">
        {button}
      </button>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div className="bg-green-50 p-6 rounded-2xl">
      <h3 className="text-4xl font-bold text-green-700">{number}</h3>
      <p className="text-gray-700 mt-2">{label}</p>
    </div>
  );
}


