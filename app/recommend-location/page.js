export default function RecommendLocation() {
  return (
    <main className="min-h-screen bg-white p-10">
      <h1 className="text-3xl font-bold text-green-700 mb-6">
        Recommend New Location
      </h1>

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSc_om3dap-yUWdEfP_DWZPEbKdJUQ8yLnjHSDuSOsGrl5o5EA/viewform?embedded=true"
        width="100%"
        height="900"
        className="border rounded-xl"
      />
    </main>
  );
}