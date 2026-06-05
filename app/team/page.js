import Link from "next/link";

export default function Team() {
  return (
    <main className="p-10 max-w-5xl mx-auto">

      {/* HEADER */}
      <h1 className="text-3xl font-bold text-green-700 mb-3">
        Meet Our Team
      </h1>

      <p className="text-gray-700 mb-10">
        The students behind CleanupConnect working to improve environmental cleanliness in our community.
      </p>

      {/* TEAM CARDS */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* NATHAN */}
        <div className="border rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-green-700">
            Nathan Lu
          </h2>

          <p className="text-gray-700 mt-3">
            📧 nathanzeyu@gmail.com
          </p>

          <p className="text-gray-700">
            📞 689-297-8713
          </p>
        </div>

        {/* RYO */}
        <div className="border rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-green-700">
            Ryo Kimura
          </h2>

          <p className="text-gray-700 mt-3">
            📧 rkimura6817@gmail.com
          </p>

          <p className="text-gray-700">
            📞 407-242-5504
          </p>
        </div>

      </div>

      {/* OPTIONAL NAV LINKS */}
      <div className="mt-12 text-center">
        <Link href="/signup" className="text-green-700 underline">
          Join the team →
        </Link>
      </div>

    </main>
  );
}