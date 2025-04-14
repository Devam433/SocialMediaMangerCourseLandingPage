import React, { useEffect, useState } from 'react';
import Button from './ui/Button.jsx';
import { ArrowRight, Check } from 'lucide-react';
import Circle from './ui/Circle.jsx';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative px-5 pt-28 md:pt-10 md:pb-5 ">
      <div className="container-custom relative">
        <div className="grid sm:grid-cols-2 justify-center w-full">
          <div
            className={`transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 bg-[#F8DBDD] rounded-full text-[#F490AC] text-sm font-medium mb-6 border border-[#F490AC]">
              <span className="animate-pulse mr-2" /> Best In Biswanath Chariali
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-black">
              Become a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F490AC] to-[#F8DBDD]">
                Social Media Manager
              </span>
            </h1>

            <p className="text-lg text-[#e8e8e8] mb-8 leading-relaxed">
            Kickstart your career as a Social Media Manager with expert-led training in content, strategy, and digital growth.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                'Expert Instructors',
                'Practical Training',
                '100% Job Assistance',
                'Globally Recognized Certificate',
              ].map((text, i) => (
                <div key={i} className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#F8DBDD] flex items-center justify-center mt-1">
                    <Check size={12} className="text-[#b44d6a]" />
                  </div>
                  <span className="ml-2 text-[#e8e8e8]">{text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="border-[#F490AC] text-[#F490AC] hover:bg-[#F490AC] hover:text-white hover:border flex gap-2 items-center hover:gap-4 transition-all">
                Enroll <ArrowRight size={20} />
              </Button>
            </div>

            <div className="ml-5 sm:ml-0  flex items-center mt-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 sm:w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt={`User ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-[#ffe1e1]">
                  From over <span className="font-semibold">200+ reviews</span>
                </p>
              </div>
            </div>
          </div>
          <Circle className=' absolute w-full sm:w-[53%] rounded-br-[70px] rounded-bl-[70px] rounded-tl-[0px] sm:rounded-tl-[0px] rounded-tr-[70px] sm:rounded-tr-[240px] sm:rounded-br-[250px] sm:rounded-bl-[120px] h-[570px] sm:h-[608px] sm:ml-[-10px] sm:mt-[-10px] z-[-10]' data-aos="fade-down"
    //  data-aos-easing="linear"
     data-aos-duration="1000"/>
      <div
        className=" sm:ml-[200px]"
        data-aos="fade-left"
      >
        <img
          src="homePageModel.png"
          alt="sociabiz"
          style={{ width: "57rem",height:"38rem"}} //size of bg image inc.
          className='hidden sm:block sm:mt-[-30px]'
        />

        <div
          style={{
            width: "100%",
            height: "400px",
            position: "absolute",
            top: "60px",
            borderRadius: "50%",
            zIndex: "-1",
            background: "rgb(131,58,180)",
            background:
              "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(201,113,205,1) 0%, rgba(237,128,196,1) 10%, rgba(237,128,196,1) 21%, rgba(237,128,196,1) 33%, rgba(251,205,171,1) 100%)",
          }}
          className='hidden sm:block top-[300px] mt-[30px] h-[200px] sm:h-[400px] sm:top-[60px]'
        ></div>
      </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
