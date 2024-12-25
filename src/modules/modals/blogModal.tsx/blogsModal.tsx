import { motion } from "framer-motion";
import { X, User, Calendar } from "lucide-react";
import React from "react";
import { BlogPost } from "../../blogs/interface/blogInteface";

interface BlogPostModalProps {
  post: BlogPost;
  onClose: () => void;
}

export default function BlogPostModal({ post, onClose }: BlogPostModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-[#1E293B] rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        <div className="relative h-48 max-[425px]:h-64 md:h-auto">
          <img src={post.imageUrl} alt={post.title} />
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white bg-black bg-opacity-50 rounded-full p-1 sm:p-2 hover:bg-opacity-75 transition-all duration-200"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-4 sm:p-6 md:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
            {post.title}
          </h2>
          <div className="flex flex-wrap items-center text-gray-400 mb-6 text-sm sm:text-base">
            <div className="flex items-center mr-4 mb-2 sm:mb-0">
              <User className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center mr-4 mb-2 sm:mb-0">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              {/* <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span>{post.readTime}</span> */}
            </div>
          </div>
          <div className="prose prose-invert prose-sm sm:prose-base max-w-none">
            {post.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-300">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs sm:text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
