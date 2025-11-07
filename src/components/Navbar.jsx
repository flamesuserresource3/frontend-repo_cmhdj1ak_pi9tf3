import { GraduationCap, Phone, MapPin } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-blue-600 text-white grid place-items-center shadow-sm">
              <GraduationCap className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-gray-900">Blue Ridge School</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#programs" className="hover:text-blue-600 transition-colors">Programs</a>
            <a href="#faculty" className="hover:text-blue-600 transition-colors">Faculty</a>
            <a href="#admissions" className="hover:text-blue-600 transition-colors">Admissions</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-sm text-gray-600">
              <Phone className="h-4 w-4 text-blue-600" />
              <span>(555) 123-4567</span>
            </div>
            <a
              href="#admissions"
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Apply Now
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            aria-label="Open menu"
            onClick={() => {
              const m = document.getElementById("mobile-menu");
              if (m) m.classList.toggle("hidden");
            }}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>

        <div id="mobile-menu" className="md:hidden hidden pb-4">
          <div className="grid gap-2">
            <a href="#programs" className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Programs</a>
            <a href="#faculty" className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Faculty</a>
            <a href="#admissions" className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Admissions</a>
            <a href="#contact" className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Contact</a>
            <a href="#admissions" className="mt-2 inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">Apply Now</a>
            <div className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600">
              <MapPin className="h-4 w-4 text-blue-600" />
              123 Campus Dr, Springfield
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
