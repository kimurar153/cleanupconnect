import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="px-8 py-20 bg-green-50 text-center">
      <h2 className="text-3xl font-bold mb-4">Need Help?</h2>

      <p className="text-gray-700 mb-6">
        Contact us anytime for questions or support.
      </p>

      <Link href="/contact">
        <button className="bg-green-700 text-white px-6 py-3 rounded-xl">
          Contact Us
        </button>
      </Link>
    </section>
  );
}