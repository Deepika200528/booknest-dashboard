export default function DashboardPage() {
    return (
      <div className="space-y-8">
        <h1 className="text-4xl font-bold text-indigo-700">Dashboard</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-indigo-100 shadow-md rounded-xl p-6">
            <h2 className="text-lg font-semibold text-orange-500 mb-1">Total Books</h2>
            <p className="text-3xl font-bold text-indigo-700">120</p>
          </div>
          <div className="bg-white border border-indigo-100 shadow-md rounded-xl p-6">
            <h2 className="text-lg font-semibold text-orange-500 mb-1">Books Read</h2>
            <p className="text-3xl font-bold text-green-600">35</p>
          </div>
          <div className="bg-white border border-indigo-100 shadow-md rounded-xl p-6">
            <h2 className="text-lg font-semibold text-orange-500 mb-1">Currently Reading</h2>
            <p className="text-3xl font-bold text-yellow-500">4</p>
          </div>
        </div>
  
        <div className="bg-white border border-indigo-100 rounded-xl p-6 shadow">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Recent Reads</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>📖 The Psychology of Money</li>
            <li>📖 Atomic Habits</li>
            <li>📖 Deep Work</li>
          </ul>
        </div>
      </div>
    );
  }
  