import Navbar from "@/components/layout/Navbar";

export default function Media() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-700">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Media
            </h1>
            <p className="text-xl text-neutral-200 max-w-2xl mx-auto">
              Speeches, interviews, articles, and media coverage
            </p>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-100">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Placeholder media cards - will be populated from API */}
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="card">
                  <div className="aspect-video bg-primary-200 rounded-lg mb-4"></div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-2">
                    Media Item {item}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4">
                    Description of media content will appear here...
                  </p>
                  <span className="text-xs text-neutral-500">Date: Coming soon</span>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-neutral-600">
                Media content will be loaded from the Django backend API
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

