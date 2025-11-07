import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Blue Ridge School</h3>
            <p className="mt-3 text-sm text-gray-600">A joyful, rigorous education that prepares students to lead with purpose.</p>
            <div className="mt-4 flex items-center gap-3 text-gray-600 text-sm">
              <MapPin className="h-4 w-4 text-blue-600" /> 123 Campus Dr, Springfield
            </div>
            <div className="mt-2 flex items-center gap-3 text-gray-600 text-sm">
              <Phone className="h-4 w-4 text-blue-600" /> (555) 123-4567
            </div>
            <div className="mt-2 flex items-center gap-3 text-gray-600 text-sm">
              <Mail className="h-4 w-4 text-blue-600" /> admissions@blueridge.edu
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">Explore</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#programs" className="hover:text-blue-600">Programs</a></li>
              <li><a href="#admissions" className="hover:text-blue-600">Admissions</a></li>
              <li><a href="#" className="hover:text-blue-600">Calendar</a></li>
              <li><a href="#" className="hover:text-blue-600">News</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">Resources</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Tuition & Aid</a></li>
              <li><a href="#" className="hover:text-blue-600">Transportation</a></li>
              <li><a href="#" className="hover:text-blue-600">Lunch Menu</a></li>
              <li><a href="#" className="hover:text-blue-600">Parent Portal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">Connect</h4>
            <div className="mt-3 flex items-center gap-3 text-gray-600">
              <a aria-label="Facebook" href="#" className="p-2 rounded-md hover:bg-gray-100">
                <Facebook className="h-5 w-5" />
              </a>
              <a aria-label="Instagram" href="#" className="p-2 rounded-md hover:bg-gray-100">
                <Instagram className="h-5 w-5" />
              </a>
              <a aria-label="LinkedIn" href="#" className="p-2 rounded-md hover:bg-gray-100">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-100 pt-6 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Blue Ridge School. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Non-discrimination policy • Privacy</p>
        </div>
      </div>
    </footer>
  );
}
