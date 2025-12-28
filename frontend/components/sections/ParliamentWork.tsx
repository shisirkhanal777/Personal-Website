export default function ParliamentWork() {
  const achievements = [
    {
      title: "Former Member of Parliament",
      period: "2079-2082",
      constituency: "Kathmandu-6",
      description: "Served as elected representative, working on education, policy, and community development.",
    },
    {
      title: "Former Minister of Education",
      period: "2022",
      constituency: "Science and Technology",
      description: "Tackled chronic textbook shortage in public schools and worked on education policy reforms.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-700">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Parliament & Ministry Work
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="card">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-semibold text-primary-900">
                  {achievement.title}
                </h3>
                <span className="text-sm font-medium text-accent-600 bg-accent-100 px-3 py-1 rounded-full">
                  {achievement.period}
                </span>
              </div>
              <p className="text-neutral-600 font-medium mb-3">
                {achievement.constituency}
              </p>
              <p className="text-neutral-700 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

