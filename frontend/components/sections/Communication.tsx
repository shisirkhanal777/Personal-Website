export default function Communication() {
  const socialLinks = [
    { name: "Facebook", icon: "📘", href: "#" },
    { name: "Twitter", icon: "🐦", href: "#" },
    { name: "Instagram", icon: "📷", href: "#" },
    { name: "YouTube", icon: "▶️", href: "#" },
    { name: "TikTok", icon: "🎵", href: "#" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4 text-center">
          Communication & Social Media
        </h2>
        <p className="text-center text-neutral-600 mb-12 max-w-2xl mx-auto">
          Stay connected and follow our work across various platforms
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-neutral-200"
            >
              <span className="text-2xl">{social.icon}</span>
              <span className="font-medium text-neutral-700">{social.name}</span>
            </a>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="text-xl font-semibold text-primary-900 mb-3">
              Notable Mentions
            </h3>
            <p className="text-neutral-600 text-sm">
              Media coverage and notable mentions will appear here
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold text-primary-900 mb-3">
              Interviews
            </h3>
            <p className="text-neutral-600 text-sm">
              Recent interviews and conversations
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold text-primary-900 mb-3">
              Articles
            </h3>
            <p className="text-neutral-600 text-sm">
              Published articles and opinion pieces
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

