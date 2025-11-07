import { FlaskConical, Code2, Palette, Music4 } from "lucide-react";

const programs = [
  {
    icon: FlaskConical,
    title: "STEM Excellence",
    desc: "Hands-on labs, robotics, and advanced math tracks that ignite scientific curiosity.",
  },
  {
    icon: Code2,
    title: "Computer Science",
    desc: "From coding fundamentals to AI projects, students build real-world skills.",
  },
  {
    icon: Palette,
    title: "Visual Arts",
    desc: "Drawing, painting, and digital design with studio showcases each semester.",
  },
  {
    icon: Music4,
    title: "Music & Performing Arts",
    desc: "Choir, orchestra, and theater programs that develop confidence and craft.",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Signature Programs</h2>
          <p className="mt-3 text-gray-600">Balanced academics, arts, and athletics to help students thrive.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <div key={p.title} className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-blue-600/10 text-blue-700 grid place-items-center">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
              <div className="mt-4 text-sm font-medium text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity">Learn more →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
