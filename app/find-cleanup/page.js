export default function FindCleanup() {
  return (
    <main className="min-h-screen bg-white p-10">

      <h1 className="text-3xl font-bold text-green-700 mb-8">
        Find Cleanup Events
      </h1>

      <div className="space-y-6">

        <div className="border rounded-xl p-6 bg-green-50">
          <h2 className="text-xl font-bold">State Road 419 Cleanup</h2>
          <p className="text-gray-700">
            📍 711 Lockwood Blvd, Oviedo, FL 32765
          </p>
        </div>

        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-bold">Jamestown Park Cleanup</h2>
          <p className="text-gray-700">
            📍 2135 South St, Oviedo, FL 32765
          </p>
        </div>

        <div className="border rounded-xl p-6 bg-green-50">
          <h2 className="text-xl font-bold">Round Lake Park Cleanup</h2>
          <p className="text-gray-700">
            📍 891 E Broadway St, Oviedo, FL 32765
          </p>
        </div>

        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-bold">Sweetwater Park Cleanup</h2>
          <p className="text-gray-700">
            📍 201 E Magnolia St, Oviedo, FL 32765
          </p>
        </div>

      </div>

    </main>
  );
}