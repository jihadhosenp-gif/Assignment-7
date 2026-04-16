import React, { useContext, useState } from "react";
import { FriendContext } from "../context/FriendProvider";
import { FaPhoneAlt, FaVideo, FaRegCommentDots } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";

const Timeline = () => {
  const { storedFriends = [] } = useContext(FriendContext);
  const [filter, setFilter] = useState("all");

  const filteredData = storedFriends.filter(
    (item) => filter === "all" || item.type === filter
  );

  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6 py-6 sm:py-10">
      
      <div className="max-w-3xl mx-auto">
        
        {/* 🔹 Title */}
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 sm:mb-8">
          Timeline
        </h1>

        
        <div className="relative w-full sm:w-64 mb-6 sm:mb-8">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full p-3 pr-10 border border-gray-300 rounded-xl bg-white shadow-sm appearance-none text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="all">Filter timeline</option>
            <option value="text">Message</option>
            <option value="video">Video</option>
            <option value="call">Call</option>
          </select>

          <HiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>

        
        <div className="space-y-4 sm:space-y-5">
          {filteredData?.length > 0 ? (
            filteredData.map((item, index) => (
              <div
                key={item.id || index}
                className="flex items-start sm:items-center gap-3 sm:gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition duration-200"
              >
                
                <div className="text-xl sm:text-2xl mt-1 sm:mt-0">
                  {item.type === "text" && (
                    <FaRegCommentDots className="text-purple-500" />
                  )}
                  {item.type === "video" && (
                    <FaVideo className="text-indigo-500" />
                  )}
                  {item.type === "call" && (
                    <FaPhoneAlt className="text-pink-500" />
                  )}
                </div>

               
                <div>
                  <h2 className="text-gray-800 font-semibold text-sm sm:text-lg">
                    {item.type === "text"
                      ? "Text"
                      : item.type === "video"
                      ? "Video"
                      : "Call"}{" "}
                    with {item.name}
                  </h2>

                  <p className="text-gray-500 text-xs sm:text-sm">
                    {item?.date
                      ? new Date(item.date).toDateString()
                      : "No date"}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center text-sm sm:text-base">
              No data found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;