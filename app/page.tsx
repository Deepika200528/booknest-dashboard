// app/page.tsx
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Welcome Section Centered */}
      <section className="flex flex-1 items-center justify-center px-6 bg-gradient-to-br from-yellow-100 via-white to-indigo-100">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-4">
            Welcome to <span className="text-orange-500">BookNest</span> 📚
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Discover, explore, and manage your digital book collection with ease.
            Whether you're a casual reader or a passionate bookworm, BookNest has everything you need.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-3 px-6 py-3 bg-indigo-600 text-white rounded-lg text-base hover:bg-indigo-500 transition"
          >
            Browse Books
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="py-12 bg-white px-8 md:px-20">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">Why BookNest?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-orange-500">Organize Books</h3>
            <p className="mt-2 text-gray-600">Easily manage your collection by title, author, and category.</p>
          </div>
          <div className="p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-orange-500">Track Your Reads</h3>
            <p className="mt-2 text-gray-600">Keep track of what you've read and what's next on your list.</p>
          </div>
          <div className="p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-orange-500">Quick Access</h3>
            <p className="mt-2 text-gray-600">Search and filter books instantly — no clutter, just clarity.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
