import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-amber-100">
      <div className="mb-10 px-4">
        <h1 className="text-2xl font-bold text-orange-600">📚 BookNest</h1>
      </div>
      <NavLinks />
      <div className="mt-auto flex items-center gap-2 px-4 text-sm text-red-600">
        <PowerIcon className="h-5 w-5" />
        <button>Sign out</button>
      </div>
    </div>
  );
}
