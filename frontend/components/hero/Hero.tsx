import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      {/* Background gradient overlay */}
      <div className="absolute inset-0  from-primary-800 via-primary-700 to-primary-900 opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Shisir Khanal
        </h1>
        
        <p className="text-xl md:text-2xl text-neutral-200 mb-4 font-light">
          Dedicated Public Servant
        </p>
        
        <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Working tirelessly for the betterment of our community and nation.
          Committed to transparency, progress, and serving the people.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/about" className="btn btn-primary">
            Learn More
          </Link>
          <Link href="/contact" className="btn btn-outline">
            Get In Touch
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-white/60"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

