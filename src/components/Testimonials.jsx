import { useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rohit Das",
    role: "Social Media Executive at Creative Minds",
    image: "https://i.pravatar.cc/100?img=11",
    content: "The course gave me the confidence to manage brand accounts professionally. I landed my first client in a month!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Freelance Social Media Manager",
    image: "https://i.pravatar.cc/100?img=12",
    content: "Super practical and beginner-friendly. I now handle 3 small business accounts on retainer!",
    rating: 5,
  },
  {
    name: "Arjun Kalita",
    role: "Content Strategist at Buzzly",
    image: "https://i.pravatar.cc/100?img=13",
    content: "The real-world projects helped me build a portfolio that stands out. This course is legit.",
    rating: 4,
  },
  {
    name: "Sonia Paul",
    role: "Instagram Growth Coach",
    image: "https://i.pravatar.cc/100?img=14",
    content: "Loved the mix of strategy, content, and tools. It gave me a solid foundation to grow my brand.",
    rating: 5,
  },
  {
    name: "Aman Roy",
    role: "Digital Marketing Intern at DigiWave",
    image: "https://i.pravatar.cc/100?img=15",
    content: "Great mix of theory and practice. Helped me understand audience engagement and analytics deeply.",
    rating: 4,
  },
  {
    name: "Neha Deka",
    role: "Social Media Trainee",
    image: "https://i.pravatar.cc/100?img=16",
    content: "I had zero experience before this, but now I manage my college’s social handles. Totally worth it!",
    rating: 5,
  },
];

const chunkTestimonials = (arr, size) =>
  arr.reduce((acc, _, i) => (i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc), []);

export default function TestimonialsSection() {
  const chunks = chunkTestimonials(testimonials, 3);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % chunks.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + chunks.length) % chunks.length);
  };

  return (
    <section id="testimonials" className="py-20 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center px-4 py-2 bg-[#F8DBDD] text-[#F490AC] rounded-full text-sm font-medium">
            <Star className="mr-2 h-4 w-4" />
            Student Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-black">
            Hear From Our <span className="text-[#F490AC]">Graduates</span>
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Our students come from diverse backgrounds but share a common goal: to become professional accountants.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex overflow-hidden transition-transform duration-500">
            {chunks.map((group, index) => (
              <div
                key={index}
                className={`w-full flex-shrink-0 flex transition-opacity duration-500 ${
                  index === currentIndex ? "flex" : "hidden"
                }`}
              >
                {group.map((testimonial, i) => (
                  <div key={i} className="w-full md:w-1/2 lg:w-1/3 px-4">
                    <div className="h-full bg-white p-8 rounded-xl shadow-md border border-[#F8DBDD] flex flex-col">
                      <div className="mb-6 text-[#F490AC]">
                        <Quote className="h-10 w-10 opacity-20" />
                      </div>
                      <p className="flex-grow text-black/80 italic mb-6">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full mr-4 object-cover"
                          loading="lazy"
                        />
                        <div className="hidden sm:block">
                          <div className="font-medium text-black">{testimonial.name}</div>
                          <div className="text-sm text-black/60">{testimonial.role}</div>
                          <div className="flex mt-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-[#F490AC] text-[#F490AC]" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevSlide}
              className="bg-white border border-[#F8DBDD] p-2 rounded-full shadow hover:bg-[#F8DBDD] transition"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="bg-white border border-[#F8DBDD] p-2 rounded-full shadow hover:bg-[#F8DBDD] transition"
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#F8DBDD] text-center">
            <div className="text-4xl font-bold text-[#F490AC] mb-2">100%</div>
            <p className="text-black/70">Job Placement Rate</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#F8DBDD] text-center">
            <div className="text-4xl font-bold text-[#F490AC] mb-2">200+</div>
            <p className="text-black/70">Graduates</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#F8DBDD] text-center">
            <div className="text-4xl font-bold text-[#F490AC] mb-2">20k+</div>
            <p className="text-black/70">Average Starting Salary</p>
          </div>
        </div>
      </div>
    </section>
  );
}
