import Link from "next/link";



export default function Team() {

  return (

    <main className="p-10 max-w-5xl mx-auto">



      <h1 className="text-3xl font-bold text-green-700 mb-8">

        Team & Forms

      </h1>



      <div className="grid md:grid-cols-3 gap-6">



        {/* SIGN UP */}

        <div className="border rounded-2xl p-6 shadow-sm">

          <h2 className="text-xl font-bold text-green-700 mb-2">

            Sign Up

          </h2>

          <p className="text-gray-700 mb-4">

            Join CleanupConnect as a volunteer and help with cleanups in your area.

          </p>



          <Link href="/signup">

            <span className="bg-green-700 text-white px-4 py-2 rounded-lg inline-block">

              Open Form

            </span>

          </Link>

        </div>



        {/* RECOMMEND LOCATION */}

        <div className="border rounded-2xl p-6 shadow-sm">

          <h2 className="text-xl font-bold text-green-700 mb-2">

            Recommend Location

          </h2>

          <p className="text-gray-700 mb-4">

            Suggest new areas that need cleanup attention in your community.

          </p>



          <Link href="/recommend-location">

            <span className="bg-green-700 text-white px-4 py-2 rounded-lg inline-block">

              Open Form

            </span>

          </Link>

        </div>



        {/* HOST CLEANUP */}

        <div className="border rounded-2xl p-6 shadow-sm">

          <h2 className="text-xl font-bold text-green-700 mb-2">

            Host a Cleanup

          </h2>

          <p className="text-gray-700 mb-4">

            Create and organize your own cleanup event for your neighborhood or park.

          </p>



          <Link href="/create-cleanup">

            <span className="bg-green-700 text-white px-4 py-2 rounded-lg inline-block">

              Open Form

            </span>

          </Link>

        </div>



      </div>



    </main>

  );

}