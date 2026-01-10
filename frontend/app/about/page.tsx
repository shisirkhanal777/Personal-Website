import Navbar from "@/components/layout/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-700">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 text-center">
              About Shisir Khanal
            </h1>
            
            <div className="bg-white/20 backdrop-blur border border-white/30 rounded-xl p-6 mb-8">
              <p className="text-lg text-white mb-4">
                Shisir Khanal is a former Member of Parliament (2079-2082) for Kathmandu-6 and former Minister of Education. He co-founded Teach For Nepal, which has placed hundreds of fellows in the country's most underserved classrooms. His path to politics ran through the Sarvodaya Shramdan movement, where he led reconstruction efforts in Sri Lanka and Haiti before returning home to build. He studied public policy at the University of Wisconsin-Madison.
              </p>
              
              <p className="text-lg text-white">
                शिशिर खनाल काठमाडौं-६ का पूर्व सांसद (२०७९-२०८२) र पूर्व शिक्षा मन्त्री पनि हुन्। उनी टिच फर नेपालका सह-संस्थापक हुन्—जसले देशका सबैभन्दा पछाडि परेका विद्यालयहरूमा सयौं प्रतिभाशाली शिक्षक पुर्‍याइसकेको छ। राजनीतिमा आउनुअघि उनले सर्वोदय श्रमदान आन्दोलनमार्फत श्रीलंका र हाइटीमा विपद्पछिको पुनर्निर्माणको नेतृत्व गरे—अनि त्यही अनुभव बोकेर नेपाल फर्किए, केही ठोस बनाउने संकल्पका साथ। उनले अमेरिकाको विस्कन्सिन-म्याडिसन विश्वविद्यालयबाट सार्वजनिक नीतिमा स्नातकोत्तर गरेका हुन्।
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary-900 mb-8">Full Biography</h2>
            
            <div className="space-y-6 text-neutral-700">
              <p>
                Shisir Khanal grew up on the move—Tanahun, Mustang, Chitwan, Kathmandu—following his father's civil service postings across Nepal. That childhood taught him two things: the country's diversity is its strength, and opportunity is distributed unequally.
              </p>
              
              <p>
                After studying political economy and diplomacy at the University of Bridgeport and public policy at the University of Wisconsin-Madison, he could have stayed abroad. Instead, he joined the Sarvodaya Shramdan movement—a Gandhian community development network—and spent years in Sri Lanka and Haiti leading post-disaster reconstruction. Managing relief for tsunami and earthquake survivors, he learned that compassion without systems is temporary. He returned to Nepal determined to build institutions, not just run programs.
              </p>
              
              <p>
                In 2012, alongside a group of fellow believers, he co-founded Teach For Nepal. Starting with 33 fellows in 16 schools, TFN has since placed hundreds of talented graduates in the country's most underserved classrooms. He also co-founded PickNDrop, a logistics company that now employs over 50 people.
              </p>
              
              <p>
                When the 2015 earthquake struck, he didn't wait—he led relief coordination in affected communities. When COVID-19 closed schools, he piloted the "टोल-टोलमा सिकाई" program in Tulsipur, which later informed national education policy.
              </p>
              
              <p>
                In 2022, he was elected to Parliament from Kathmandu-6 and briefly served as Minister of Education, Science and Technology, where he tackled the chronic textbook shortage in public schools. Politics, for him, is an extension of the same work: building systems that outlast individuals.
              </p>
              
              <p className="font-semibold">
                He holds an MA in Public Policy from UW-Madison.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

