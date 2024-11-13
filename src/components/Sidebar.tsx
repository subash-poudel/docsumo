export function Sidebar() {
    return (
        <div id="sidebar" className="bg-blue-600 text-white flex-shrink-0 w-64 transition-width duration-300">
        <div className="p-4 text-lg font-semibold">
            <button id="toggleBtn" className="text-white">☰</button>
            <span className="ml-2">Sidebar</span>
        </div>
        <nav className="p-4 space-y-4">
            <a href="#" className="block text-white">Dashboard</a>
            <a href="#" className="block text-white">Settings</a>
            <a href="#" className="block text-white">Profile</a>
            <a href="#" className="block text-white">Help</a>
        </nav>
    </div>
    )
}