// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import CourseCard from "./ui/CoueseCard";

// const CourseCarousel = ({ filteredCourses, visibleCourses }) => {
//   return (
//     <div className="w-full flex justify-center ">
//       <Swiper
//         modules={[Navigation]}
//         spaceBetween={20}
//         slidesPerView={1} // Default: Show 1 card at a time
//         breakpoints={{
//           640: { slidesPerView: 1 }, // Small screens: 1 card
//           768: { slidesPerView: 2 }, // Medium screens: 2 cards
//           1024: { slidesPerView: 3 }, // Large screens: 3 cards
//         }}
//         navigation
//         className="w-full max-w-6xl mb-10"
//       >
//         {filteredCourses.map((course) => (
//           <SwiperSlide key={course.id} className="flex justify-center items-center mb-10">
//           <div className="w-full flex justify-center">
//             <CourseCard
//               title={course.title}
//               description={course.description}
//               imageUrl={course.imageUrl}
//               duration={course.duration}
//               studentsCount={course.studentsCount}
//               price={course.price}
//               isPremium={course.isPremium}
//               category={course.category}
//             />
//           </div>
//         </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default CourseCarousel;
