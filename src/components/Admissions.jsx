import { ClipboardList, Users, CalendarDays } from "lucide-react";

export default function Admissions() {
  return (
    <section id="admissions" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Admissions</h2>
            <p className="mt-3 text-gray-600">
              We look for curious, kind, and motivated learners. Our process is supportive and holistic.
            </p>
            <a href="#contact" className="mt-6 inline-flex items-center rounded-md bg-blue-600 px-5 py-3 text-white font-semibold shadow hover:bg-blue-700">
              Request Information
            </a>
          </div>

          <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-blue-600/10 text-blue-700 grid place-items-center">
                <ClipboardList className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold text-gray-900">Apply Online</h3>
              <p className="mt-1 text-sm text-gray-600">Complete the application form and submit transcripts and recommendations.</p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-blue-600/10 text-blue-700 grid place-items-center">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold text-gray-900">Visit Campus</h3>
              <p className="mt-1 text-sm text-gray-600">Tour facilities, sit in on classes, and meet our student ambassadors.</p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-blue-600/10 text-blue-700 grid place-items-center">
                <CalendarDays className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold text-gray-900">Key Dates</h3>
              <p className="mt-1 text-sm text-gray-600">Applications open Sept 1. Priority deadline Dec 15. Decisions by Mar 1.</p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900">Financial Aid</h3>
              <p className="mt-1 text-sm text-gray-600">We are committed to access. Need-based aid and scholarships available.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
