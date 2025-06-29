import Link from 'next/link';
import {
  HomeIcon,
  BookOpenIcon,
  UserIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-yellow-50">
      {/* Sidebar */}
      <aside className="w-64 bg-amber-100 text-gray-800 flex flex-col justify-between py-6 px-4 border-r border-amber-200 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-orange-500 mb-10">📚 BookNest</h1>
          <nav className="space-y-4 font-medium">
            <Link href="/" className="flex items-center gap-3 hover:text-orange-600 transition">
              <HomeIcon className="h-5 w-5" />
              Home
            </Link>
            <Link href="/dashboard" className="flex items-center gap-3 hover:text-orange-600 transition">
              <BookOpenIcon className="h-5 w-5" />
              Dashboard
            </Link>
            <Link href="/dashboard/books" className="flex items-center gap-3 hover:text-orange-600 transition">
  <BookOpenIcon className="h-5 w-5" />
  Books
</Link>
<Link href="/dashboard/read" className="flex items-center gap-3 hover:text-orange-600 transition">
  <UserIcon className="h-5 w-5" />
  My Reads
</Link>
<Link href="/dashboard/profile" className="flex items-center gap-3 hover:text-orange-600 transition">
              <UserIcon className="h-5 w-5" />
              Profile
            </Link>

          </nav>
        </div>
        <div>
          <button className="flex items-center gap-2 text-red-500 hover:text-red-700">
            <ArrowLeftOnRectangleIcon className="h-5 w-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
