
// import React, { useEffect, useState } from 'react';
// import CourseCard from './ui/CoueseCard.jsx';
// import Button from './ui/Button.jsx';
// import { ArrowRight } from 'lucide-react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { href } from 'react-router-dom';
// import CourseCarousel from './CourseCarousel.jsx';

// const CourseSection = () => {
//   const [activeTab, setActiveTab] = useState('all');
//   const [visibleCourses, setVisibleCourses] = useState(6);

//   const courses = [
//     {
//       id: 1,
//       title: "Tally Plus GST",
//       description: "Master accounting software Tally with a focus on GST calculations and compliance.",
//       imageUrl: "https://placehold.co/600x400/1598F2/FFFFFF?text=Tally+GST",
//       category: "finance",
//       duration: "10 weeks",
//       startDate: "April 10, 2024",
//       studentsCount: 150,
//       price: "$599",
//       isPremium: false,
//       hyperLink: '',
//     },
//     {
//       id: 2,
//       title: "Industrial Accountant",
//       description: "Gain expertise in corporate accounting, taxation, and financial management.",
//       imageUrl: "https://placehold.co/600x400/FEB727/FFFFFF?text=Industrial+Accountant",
//       category: "finance",
//       duration: "10 weeks",
//       startDate: "April 15, 2024",
//       studentsCount: 100,
//       price: "$799",
//       isPremium: false,
//       hyperLink: '',
//     },
//     {
//       id: 3,
//       title: "PGDCA, DCA",
//       description: "Post Graduate and Diploma courses in Computer Applications for career growth.",
//       imageUrl: "https://placehold.co/600x400/56A6E1/FFFFFF?text=PGDCA+DCA",
//       category: "compueter course",
//       duration: "12 weeks",
//       startDate: "April 20, 2024",
//       studentsCount: 150,
//       price: "$899",
//       isPremium: false,
//       hyperLink: '',
//     },
//     {
//       id: 7,
//       title: "Website Development and Hosting",
//       description: "Build and deploy responsive websites with hosting and domain management skills.",
//       imageUrl: "https://placehold.co/600x400/FEB727/FFFFFF?text=Website+Hosting",
//       category: "software development",
//       duration: "8 weeks",
//       startDate: "May 10, 2024",
//       studentsCount: 110,
//       price: "$749",
//       isPremium: false,
//       hyperLink: '',
//     },
//     {
//       id: 5,
//       title: "Web Application Development",
//       description: "Learn full-stack web application development using modern frameworks and tools.",
//       imageUrl: "https://placehold.co/600x400/13247E/FFFFFF?text=Web+App+Dev",
//       category: "software development",
//       duration: "10 weeks",
//       startDate: "May 1, 2024",
//       studentsCount: 110,
//       price: "$899",
//       isPremium: false,
//       hyperLink: 'https://web-app-development-course.vercel.app/',
//     },
//     {
//       id: 6,
//       title: "Mobile Application Development",
//       description: "Master mobile app development for Android and iOS using cutting-edge technologies.",
//       imageUrl: "https://placehold.co/600x400/1598F2/FFFFFF?text=Mobile+App+Dev",
//       category: "software development",
//       duration: "9 weeks",
//       startDate: "May 5, 2024",
//       studentsCount: 100,
//       price: "$799",
//       isPremium: false, hyperLink: '',
//     },
//     {
//       id: 4,
//       title: "Personality Development and Communication Skills",
//       description: "Improve your soft skills, public speaking, and personal confidence for career success.",
//       imageUrl: "https://placehold.co/600x400/B04903/FFFFFF?text=Personality+Dev",
//       category: "personal development",
//       duration: "6 weeks",
//       startDate: "April 25, 2024",
//       studentsCount: 145,
//       price: "$499",
//       isPremium: false,
//       hyperLink: '',
//     },
//   ];


//   const filteredCourses = activeTab === 'all'
//     ? courses
//     : courses.filter(course => course.category === activeTab);

//   const showMoreCourses = () => {
//     setVisibleCourses(prev => Math.min(prev + 3, filteredCourses.length));
//   };

//   // Reset visible courses when changing tabs
//   useEffect(() => {
//     setVisibleCourses(6);
//   }, [activeTab]);

//   useEffect(() => {
//     AOS.init();
//   }, [])

//   return (
//     <section id="courses" className="mt-28 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto w-full">
//         <div className="text-center mb-12">
//           <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-5">
//             Featured Courses
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//             Discover Our Courses
//             {/* <span className="text-gradient-blue">Premium Courses</span> */}
//           </h2>
//           <div className=" mx-auto"></div>
//           <p className="text-gray-600 max-w-3xl mx-auto mt-6 px-4 sm:px-6">
//             Industry-relevant courses designed by experts to help you master the skills employers are looking for.
//             Start your journey today and transform your career.
//           </p>

//           <div className="flex justify-center mt-5 mb-7 overflow-x-auto">
//             <div className="inline-flex p-1 bg-white rounded-lg shadow-sm gap-3">
//               <button
//                 className={`border border-black border-opacity-85 py-1 px-4 md:px-4 md:py-1.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'all' ? 'bg-blue-600 text-white shadow-md border-none' : 'text-gray-600 hover:bg-gray-50'
//                   }`}
//                 onClick={() => setActiveTab('all')}
//               >
//                 All
//               </button>
//               <button
//                 className={` border border-black border-opacity-85 py-1 px-4 md:px-4 md:py-1.5  rounded-lg text-sm font-medium transition-all ${activeTab === 'compueter course' ? 'bg-blue-600 text-white shadow-md border-none' : 'text-gray-600 hover:bg-gray-50'
//                   }`}
//                 onClick={() => setActiveTab('compueter course')}
//               >
//                 Computer
//               </button>
//               <button
//                 className={`border border-black border-opacity-85 py-1 px-4 md:px-4 md:py-1.5  rounded-lg text-sm font-medium transition-all ${activeTab === 'software development' ? 'bg-blue-600 text-white shadow-md border-none' : 'text-gray-600 hover:bg-gray-50'
//                   }`}
//                 onClick={() => setActiveTab('software development')}
//               >
//                 Software Development
//               </button>
//             </div>
//           </div>

//         </div>
        
//         <CourseCarousel filteredCourses={filteredCourses}/>
//       </div>
//     </section>
//   );
// };

// export default CourseSection;