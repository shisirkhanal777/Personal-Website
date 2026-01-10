import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const nepaliYear = currentYear + 57; // Approximate conversion to Bikram Sambat

  return (
    <footer className="bg-primary-900 text-neutral-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Shisir Khanal</h3>
            <p className="text-neutral-300 leading-relaxed">
              Former Member of Parliament (2079-2082) for Kathmandu-6 and former Minister of Education. Dedicated to building systems that outlast individuals.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/vision" className="hover:text-white transition-colors">
                  Vision
                </Link>
              </li>
              <li>
                <Link href="/media" className="hover:text-white transition-colors">
                  Media
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <p className="text-neutral-300 mb-4">
              Stay updated with our work and initiatives
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-neutral-400">
          <p>© {nepaliYear} (२०८१) Shisir Khanal, All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

