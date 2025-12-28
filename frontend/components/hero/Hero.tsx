import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 opacity-90" />
      
      {/* Content Container - Side by Side Layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Shisir Khanal
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-200 mb-4 font-light">
              Dedicated Public Servant
            </p>
            
            <div className="mb-8 max-w-2xl mx-auto lg:mx-0">
              <p className="text-2xl md:text-3xl font-semibold text-white mb-4 leading-relaxed">
                &ldquo;Those who believe in themselves create history&rdquo;
              </p>
              <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
                We cannot afford to be content with the status quo. We must start the conversation, take steps toward change, and build systems that outlast individuals.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/about" className="btn btn-primary">
                Learn More
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center lg:justify-end relative z-20">
            <div className="relative w-full max-w-xl lg:max-w-3xl xl:max-w-4xl">
              <Image 
                src="/mic_holding-hero.png" 
                alt="Shisir Khanal" 
                width={900}
                height={1200}
                className="w-full h-auto object-contain"
                priority
                style={{ background: 'transparent' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

