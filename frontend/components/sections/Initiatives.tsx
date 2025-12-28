import Link from "next/link";

export default function Initiatives() {
  const initiatives = [
    {
      title: "Teach For Nepal",
      description: "Co-founded organization placing hundreds of talented educators in underserved classrooms across Nepal.",
      link: "/about",
    },
    {
      title: "Post-Disaster Reconstruction",
      description: "Led reconstruction efforts in Sri Lanka and Haiti, managing relief for tsunami and earthquake survivors.",
      link: "/about",
    },
    {
      title: "COVID-19 Education Response",
      description: 'Piloted "टोल-टोलमा सिकाई" program in Tulsipur, which later informed national education policy.',
      link: "/about",
    },
    {
      title: "PickNDrop",
      description: "Co-founded logistics company providing employment opportunities and delivery solutions across Nepal.",
      link: "/about",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-12 text-center">
          Our Initiatives
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {initiatives.map((initiative, index) => (
            <div key={index} className="card">
              <h3 className="text-2xl font-semibold text-primary-900 mb-4">
                {initiative.title}
              </h3>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                {initiative.description}
              </p>
              <Link
                href={initiative.link}
                className="text-accent-600 hover:text-accent-700 font-medium inline-flex items-center"
              >
                Learn more
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

