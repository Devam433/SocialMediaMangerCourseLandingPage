import React from 'react';
import Button from './Button.jsx';
import { Calendar, Clock, Users, Star, CheckCircle } from 'lucide-react';


const CourseCard = ({
  title,
  description,
  imageUrl,
  duration,
  startDate,
  studentsCount,
  price,
  className = '',
  isPremium = false,
  category,
}) => {
  // Get gradient based on category
  const getGradient = () => {
    if (category === 'personal development') {
      return 'from-blue-500 to-blue-700';
    } else if (category === 'computer course') {
      return 'from-orange-500 to-purple-600';
    } else if (category === 'software development') {
      return 'from-purple-500 to-pink-600';
    } else {
      return isPremium ? 'from-celestialBlue to-resolutionBlue' : 'from-orange-500 to-red-500';
    }
  };

  // Get category label
  // const getCategoryLabel = () => {
  //   if (category === 'web') {
  //     return 'Web Development';
  //   } else if (category === 'mobile') {
  //     return 'Mobile Development';
  //   } else if (category === 'design') {
  //     return 'UI/UX Design';
  //   } else {
  //     return 'Technology';
  //   }
  // };

  // Get category color
  const getCategoryColor = () => {
    if (category === 'web') {
      return 'bg-blue-100 text-blue-700';
    } else if (category === 'mobile') {
      return 'bg-orange-100 text-orange-700';
    } else if (category === 'design') {
      return 'bg-purple-100 text-purple-700';
    } else {
      return 'bg-gray-100 text-gray-700';
    }
  };



  return (
<div className={`rounded-xl w-[75%] shadow-md transition-shadow duration-300 hover:shadow-xl hover:border-gray-300 ${className}`} >
      {/* Top colored border with gradient */}
      <div className={` rounded-tl-lg rounded-tr-lg h-2 w-full bg-gradient-to-r ${getGradient()}`}></div>

      {/* Content */}
      <div className={`p-6 relative`}>
        {/* Subtle background pattern for visual interest */}
        <div className="absolute -top-10 right-0 w-32 h-32 bg-blue-50 rounded-full opacity-20 blur-xl"></div>
        {/* Title and description */}
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={16} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">(120+ reviews)</span>
        </div>

        {/* Course details */}
        <div className="flex flex-wrap gap-2 mb-5">
          <div className="web-veda-pill bg-blue-50 text-blue-700 flex items-center">
            <Clock size={14} className="mr-1" />
            {duration}
          </div>
          <div className="web-veda-pill bg-green-50 text-green-700 flex items-center">
            <Calendar size={14} className="mr-1" />
            {startDate}
          </div>
          <div className="web-veda-pill bg-purple-50 text-purple-700 flex items-center">
            <Users size={14} className="mr-1" />
            {studentsCount} students
          </div>
        </div>

        {/* Key features */}
        <div className="mb-5 space-y-2">
          <div className="flex items-start">
            <CheckCircle size={16} className="mt-0.5 text-green-500 flex-shrink-0" />
            <span className="ml-2 text-sm text-gray-600">Certificate of completion</span>
          </div>
          <div className="flex items-start">
            <CheckCircle size={16} className="mt-0.5 text-green-500 flex-shrink-0" />
            <span className="ml-2 text-sm text-gray-600">24/7 dedicated support</span>
          </div>
        </div>

        {/* Price and button */}
        <div className="flex items-center justify-between border-t pt-4 mt-4">

          <Button 
            className={`rounded-lg text-sm ${
              isPremium 
                ? 'bg-gradient-to-r from-blue-600 to-blue-700' 
                : 'bg-gradient-to-r from-orange-500 to-red-500'
            }`}
          >
            Explore
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
