import React from 'react'

export default function UserLayout ({children}){
  return (
<>
  <aside className="hidden md:flex w-64 flex-col bg-white border-r shadow-sm">
          <div className="h-16 flex items-center justify-center border-b text-xl font-semibold">
            My App
          </div>
          <nav className="flex-1 p-4 space-y-2">
            <a href="#" className="block px-4 py-2 rounded hover:bg-gray-100">
              Dashboard
            </a>
            <a href="#" className="block px-4 py-2 rounded hover:bg-gray-100">
              Profile
            </a>
            <a href="#" className="block px-4 py-2 rounded hover:bg-gray-100">
              Settings
            </a>
          </nav>
        </aside>

        {/* Mobile Sidebar Toggle */}
        <div className="md:hidden fixed top-0 left-0 w-full bg-white border-b shadow-md z-20 flex items-center justify-between px-4 h-16">
          <div className="text-xl font-semibold">My App</div>
          <button
            // onClick={() => {
            //   const sidebar = document.getElementById('mobile-sidebar');
            //   sidebar?.classList.toggle('hidden');
            // }}
            className="text-gray-600 hover:text-black"
          >
            ☰
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div
          id="mobile-sidebar"
          className="md:hidden hidden fixed top-16 left-0 w-64 h-full bg-white border-r shadow-md z-30"
        >
          <nav className="p-4 space-y-2">
            <a href="#" className="block px-4 py-2 rounded hover:bg-gray-100">
              Dashboard
            </a>
            <a href="#" className="block px-4 py-2 rounded hover:bg-gray-100">
              Profile
            </a>
            <a href="#" className="block px-4 py-2 rounded hover:bg-gray-100">
              Settings
            </a>
          </nav>
        </div>

        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          {/* Top Navbar */}
          <header className="hidden md:flex h-16 items-center justify-between bg-white px-6 border-b shadow-sm">
            <div className="text-lg font-medium">Welcome</div>
            <div className="flex items-center gap-4">
              <span>User</span>
              <img
                src="https://i.pravatar.cc/40"
                className="h-10 w-10 rounded-full"
                alt="User"
              />
            </div>
          </header>
        </main>
          <div className="p-6">{children}</div>
</>
  )
}

