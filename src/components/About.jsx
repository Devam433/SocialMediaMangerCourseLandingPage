import React from 'react';

function About() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Soft background (instead of Blob) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="bg-[#F8DBDD] w-[150%] h-[150%] rounded-full absolute top-[-30%] left-[-30%] blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-[#F490AC] mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Why Choose Our <span className="text-[#F490AC]">Social Media Manager</span> Course?
          </h2>
          <div className="w-16 h-1 bg-[#F490AC] mx-auto mt-6"></div>

          <div className="max-w-3xl mx-auto mt-6">
            <p className="text-lg mb-6 leading-relaxed text-black">
              In today's digital world, businesses are constantly looking for skilled social media managers
              to help them stand out and drive engagement. Our comprehensive course will teach you everything
              you need to know to excel in this high-demand field.
            </p>
            <p className="text-lg mb-10 leading-relaxed text-black">
              You'll learn content strategy, analytics, community management, paid advertising, and much more
              from industry experts who have worked with top brands.
            </p>
          </div>
        </div>

        {/* Feature Cards Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Card 1 */}
          <div className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-none rounded-xl bg-gradient-to-br from-[#F8DBDD] to-[#F490AC] p-1">
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#F8DBDD] flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                $
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">Monetize Your Creativity</h3>
              <div className="w-12 h-0.5 bg-[#cc3b66] mx-auto my-3"></div>
              <p className="text-[#cc3b66] font-bold mt-2">GET PAID TO POST!</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-none rounded-xl bg-gradient-to-br from-[#F8DBDD] to-[#F490AC] p-1">
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#F8DBDD] flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                ↗️
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">Turn Likes Into Business</h3>
              <div className="w-12 h-0.5 bg-[#cc3b66] mx-auto my-3"></div>
              <p className="text-[#cc3b66] font-bold mt-2">DRIVE SALES WITH YOUR CREATIVITY!</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-none rounded-xl bg-gradient-to-br from-[#F8DBDD] to-[#F490AC] p-1">
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#F8DBDD] flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                🔊
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">Be The Voice Of Brands</h3>
              <div className="w-12 h-0.5 bg-[#cc3b66] mx-auto my-3"></div>
              <p className="text-[#cc3b66] font-bold mt-2">SHAPE THEIR ONLINE PRESENCE!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
