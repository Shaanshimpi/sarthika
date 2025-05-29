import { FaLocationDot } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaEye, FaComment } from 'react-icons/fa';
import { FaThumbsUp } from "react-icons/fa6";
import { SiAdobexd } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { MdOutlineReportProblem } from "react-icons/md";

const Project = ({ className }) => {
  return (
    <div className={`${className} mt-18`}>
      {/* Header */}
      <div className="flex flex-row items-center">
        <div className="w-11 h-11 rounded-full bg-black overflow-hidden">
          <img src="" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col ml-2">
          <div className="font-bold text-base sm:text-lg">PINNACLE | CORPORATE WEBSITE</div>
          <div className="text-sm flex flex-row flex-wrap items-center gap-1">
            <span className="cursor-pointer hover:border-b">Татьяна Туманова</span> &nbsp; • &nbsp; <span className="cursor-pointer hover:border-b" >Follow</span>
          </div>
        </div>
      </div>
      {/* Project Image */}
      <div className="mt-5">
        <img
          src="https://thedigitalprojectmanager.com/wp-content/uploads/2021/07/How-Many-Online-Tools-Does-The-Average-Digital-Project-Require-featured-image-1024x471.png"
          alt=""
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      {/* Main Content */}
      <div className="border border-gray-200 shadow-xs p-4 sm:p-8 flex flex-col lg:flex-row gap-6 mb-20 bg-gray-50">
        {/* Left: Comments */}
        <div className="lg:basis-2/3 w-full h-full border border-gray-200 bg-white p-4 sm:p-8">
          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-3 sm:gap-5 items-start">
              <img
                src="https://a5.behance.net/e14bdda55a4b0c0a254964e678aed7fe10fa01bb/img/profile/no-image-100.png?cb=264615658"
                className="w-10 h-10 sm:w-13 sm:h-13 rounded-full"
                alt=""
              />
              <textarea
                type="text"
                placeholder="What are your thoughts on this project?"
                className="border border-gray-300 rounded-md w-full h-25 p-3 align-top mt-2 resize-y"
              />
            </div>
            <div className="text-right">
              <button className="border border-gray-200 p-2 rounded-full text-xs sm:text-sm">Post a comment</button>
            </div>
          </div>
        </div>
        {/* Right: Owner & Details */}
        <div className="lg:basis-1/3 w-full">
          <div className="bg-white p-4 sm:p-7 border border-gray-200">
            <p className="text-xs text-gray-500">OWNER</p>
            <div className="flex flex-row gap-2 pt-2 items-center">
              <img
                src="https://a5.behance.net/e14bdda55a4b0c0a254964e678aed7fe10fa01bb/img/profile/no-image-100.png?cb=264615658"
                alt=""
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
              />
              <div>
                <p className="font-bold text-md">Татьяна Туманова</p>
                <div className="flex flex-row items-center flex-wrap">
                  <FaLocationDot color="gray" size="15" className="mr-1" />
                  <p className="text-sm text-gray-500">Москва, Russian Federation</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 pt-5">
              <button className="flex items-center gap-2 w-full h-8 text-white font-bold rounded-full bg-blue-500 justify-center">
                <FaPlusCircle color="white" />
                Follow
              </button>
              <button className="flex items-center gap-2 w-full h-8 text-blue-500 font-bold rounded-full bg-blue-50 justify-center">
                <IoIosMail />
                Hire
              </button>
            </div>
          </div>
          {/* Project Details */}
          <div className="bg-white border border-gray-200 p-4 sm:p-6 mt-5 space-y-3">
            <h2 className="text-md font-bold text-gray-800">PINNACLE | CORPORATE WEBSITE</h2>
            <p className="text-gray-600 text-sm">
              Pinnacle is a contemporary architecture studio that specializes in sophisticated, timeless spaces
              that balance form and function. This project demonstrates an approach to spatial harmony,
              quality materials, and a clean, minimalist aesthetic.
            </p>
            <div className="flex items-center justify-start gap-6 text-gray-500 text-sm flex-wrap">
              <div className="flex items-center gap-1">
                <FaThumbsUp className="text-gray-400" />
                <span>161</span>
              </div>
              <div className="flex items-center gap-1">
                <FaEye className="text-gray-400" />
                <span>951</span>
              </div>
              <div className="flex items-center gap-1">
                <FaComment className="text-gray-400" />
                <span>10</span>
              </div>
            </div>
            <p className="text-xs text-gray-400">Published: April 24th 2025</p>
          </div>
          {/* Tools & Creative Fields */}
          <div className="mt-6 space-y-6 border border-gray-200 p-4 sm:p-6 bg-white">
            <div>
              <h3 className="text-xs font-semibold mb-2">Tools</h3>
              <div className="flex flex-col font-bold text-center gap-2">
                <span className="bg-[rgba(0,0,0,0.3)] px-3 py-1 h-12 rounded-md flex flex-row justify-center items-center gap-2 text-sm">
                  <SiAdobexd size="19" />XD
                </span>
                <span className="bg-[rgba(0,0,0,0.3)] px-3 py-1 h-12 rounded-md flex flex-row justify-center items-center gap-2 text-sm">
                  <SiAdobeaftereffects size="19" />After Effects
                </span>
                <span className="bg-[rgba(0,0,0,0.3)] px-3 py-1 h-12 rounded-md flex flex-row justify-center items-center gap-2 text-sm">
                  Stock
                </span>
                <p className="text-left"> Figma, Adobe Photoshop</p>
              </div>
            </div>
            <div>
              <h3 className="text-xs font-semibold mb-2">Creative Fields</h3>
              <div className="flex flex-col font-bold text-center gap-2">
                <span className="bg-[rgba(0,0,0,0.3)] px-3 py-1 h-12 rounded-md flex flex-row justify-center items-center gap-2 text-sm">
                  UI/UX
                </span>
                <span className="bg-[rgba(0,0,0,0.3)] px-3 py-1 h-12 rounded-md flex flex-row justify-center items-center gap-2 text-sm">
                  Web Design
                </span>
                <span className="bg-[rgba(0,0,0,0.3)] px-3 py-1 h-12 rounded-md flex flex-row justify-center items-center gap-2 text-sm">
                  Interaction Design
                </span>
              </div>
            </div>
          </div>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-5 bg-white p-4 sm:p-6 border border-gray-200">
            <span className="border font-bold border-gray-200 px-3 py-1 rounded-full text-sm">Web Design</span>
            <span className="border font-bold border-gray-200 px-3 py-1 rounded-full text-sm">ui/ux</span>
            <span className="border font-bold border-gray-200 px-3 py-1 rounded-full text-sm">Website</span>
            <span className="border font-bold border-gray-200 px-3 py-1 rounded-full text-sm">corporate</span>
            <span className="border font-bold border-gray-200 px-3 py-1 rounded-full text-sm">architecture</span>
          </div>
          {/* Footer */}
          <div className="flex flex-col sm:flex-row justify-between text-xs text-gray-500 mt-5 gap-2">
            <p>©All Rights Reserved</p>
            <p className="flex flex-row justify-center items-center gap-1">
              <MdOutlineReportProblem />
              Report
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;