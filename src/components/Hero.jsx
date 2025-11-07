import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-70 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-80 w-[120rem] rounded-full bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-200">
              <Star className="h-3 w-3" /> Award-winning education
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Inspiring minds. Shaping the future.
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              A vibrant community where every student is encouraged to explore, create, and excel.
              From STEM to the arts, we nurture curiosity and character.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#admissions" className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-white font-semibold shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Start Your Application
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#programs" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-blue-700 font-semibold shadow ring-1 ring-inset ring-blue-200 hover:bg-blue-50">
                Explore Programs
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-4">
              <div>
                <dt className="text-3xl font-bold text-gray-900">98%</dt>
                <dd className="text-sm text-gray-600">College Acceptance</dd>
              </div>
              <div>
                <dt className="text-3xl font-bold text-gray-900">30+</dt>
                <dd className="text-sm text-gray-600">Clubs & Activities</dd>
              </div>
              <div>
                <dt className="text-3xl font-bold text-gray-900">12:1</dt>
                <dd className="text-sm text-gray-600">Student-Teacher Ratio</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-xl border border-gray-100 bg-white shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2069&auto=format&fit=crop"
                alt="Students collaborating in a modern classroom"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
