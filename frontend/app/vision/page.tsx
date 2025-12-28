import Navbar from "@/components/layout/Navbar";

export default function Vision() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-700">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Vision
            </h1>
            <p className="text-xl text-neutral-200 max-w-2xl mx-auto">
              Building a Nepal where every citizen has equal access to quality education, opportunities, and a voice in shaping our collective future.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-100">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-2xl font-semibold text-primary-900 mb-4">
                  Education for All
                </h3>
                <p className="text-neutral-700">
                  Ensuring quality education reaches every corner of Nepal, especially in underserved communities. Building systems that make education accessible, relevant, and transformative.
                </p>
              </div>

              <div className="card">
                <h3 className="text-2xl font-semibold text-primary-900 mb-4">
                  Institutional Strength
                </h3>
                <p className="text-neutral-700">
                  Creating lasting institutions that outlive individuals. Building systems of governance, education, and development that serve generations to come.
                </p>
              </div>

              <div className="card">
                <h3 className="text-2xl font-semibold text-primary-900 mb-4">
                  Community Empowerment
                </h3>
                <p className="text-neutral-700">
                  Empowering local communities to lead their own development. Supporting grassroots movements and local solutions to local challenges.
                </p>
              </div>

              <div className="card">
                <h3 className="text-2xl font-semibold text-primary-900 mb-4">
                  Transparent Governance
                </h3>
                <p className="text-neutral-700">
                  Promoting transparency, accountability, and citizen participation in governance. Building trust between people and their representatives.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

