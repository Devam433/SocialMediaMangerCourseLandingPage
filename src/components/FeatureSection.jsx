// Color reference:
// --bakermiller-pink: #F490AC;
// --misty-rose: #F8DBDD;
// --black: #000000;

import React, { useEffect, useRef, useState } from "react";
import {
  Code, Award, BookOpen, Video, CheckCircle,
  ArrowRight, Computer, Medal, ShieldCheck, RefreshCw
} from "lucide-react";

const FeatureSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    acceptTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [highlightIndex, setHighlightIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const highlights = [
    {
      icon: <Medal className="w-6 h-6" />,
      text: "We are no. 1 skill institute in Biswanath Chariali",
      color: "from-pink-400 to-pink-500",
    },
    {
      icon: <Award className="w-6 h-6" />,
      text: "Official training partner of Tally Education (TEPL)",
      color: "from-pink-400 to-pink-500",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      text: "ISO 9001:2015 certified institute",
      color: "from-pink-400 to-pink-500",
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      text: "Full refund of fees if cancelled within 7 days",
      color: "from-pink-400 to-pink-500",
    },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    if (errors[name]) setErrors({ ...errors, [name]: null });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (formData.name.length < 2) tempErrors.name = "Name must be at least 2 characters.";
    if (!/^\d{10}$/.test(formData.phone)) tempErrors.phone = "Please enter a valid 10-digit phone number.";
    if (formData.message.length < 5) tempErrors.message = "Message must be at least 5 characters.";
    if (!formData.acceptTerms) tempErrors.acceptTerms = "You must accept the terms and conditions.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitted(true);
    setFormData({ name: "", phone: "", message: "", acceptTerms: false });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % highlights.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="features" className="py-20 px-4 z-0" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className={`bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-1000 transform 
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left panel */}
            <div className="bg-[#F490AC] text-black p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full transform translate-x-32 -translate-y-32 opacity-20" />
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Ready to Transform Your Career?
                </h3>
                <p className="text-lg opacity-90 mb-8 leading-relaxed">
                  Join hundreds of students who have accelerated their careers with our practical,
                  job-focused tech training programs.
                </p>
                <div className="space-y-4">
                  {["24/7 Expert Support", "Flexible Learning Path", "Job Placement Assistance"].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="text-white" size={20} />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right panel */}
            <div className="bg-white p-12">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
                    <CheckCircle className="text-green-600" size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-black mb-4">Thank You!</h4>
                  <p className="text-gray-600">Your message has been sent successfully.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h4 className="text-2xl font-bold text-black mb-6">Get Started Today</h4>

                  <div className="space-y-2">
                    <label className="block text-black font-medium">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full border ${errors.name ? "border-red-500" : "border-[#F490AC]"} 
                        rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F490AC]`}
                      placeholder="Enter your name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-black font-medium">Phone Number</label>
                    <input
                      type="number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full border ${errors.phone ? "border-red-500" : "border-[#F490AC]"} 
                        rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F490AC]`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-black font-medium">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full border ${errors.message ? "border-red-500" : "border-[#F490AC]"} 
                        rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F490AC] 
                        min-h-[120px] resize-none`}
                      placeholder="Tell us about your goals"
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                      className="mt-1"
                    />
                    <span className="text-gray-600 text-sm">
                      I accept the terms and conditions and privacy policy
                    </span>
                  </div>
                  {errors.acceptTerms && <p className="text-red-500 text-sm">{errors.acceptTerms}</p>}

                  <button
                    className="w-full bg-[#F490AC] text-black py-4 rounded-lg font-semibold
                    transform transition-all duration-200 hover:bg-[#e87a97] hover:scale-[1.02]
                    focus:outline-none focus:ring-2 focus:ring-[#F490AC] focus:ring-offset-2
                    flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <ArrowRight size={20} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
