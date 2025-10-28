import { Heart, MessageCircle, Share2, Send, Bookmark, MoreHorizontal, Repeat2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PostCardProps {
  type: 'image' | 'text' | 'multi-image';
  username: string;
  avatar: string;
  timeAgo: string;
  content?: string;
  images?: string[];
  likes: string;
  comments: string;
  shares: string;
  verified?: boolean;
  platform: 'ios' | 'android';
}

export function PostCard({
  type,
  username,
  avatar,
  timeAgo,
  content,
  images,
  likes,
  comments,
  shares,
  verified = false,
  platform
}: PostCardProps) {
  const gradientClass = platform === 'ios' 
    ? 'from-[#FF3333] to-[#FF69B4]' 
    : 'from-[#2196F3] to-[#87CEEB]';

  const accentColor = platform === 'ios' ? '#FF3333' : '#2196F3';

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className={`p-0.5 rounded-full bg-gradient-to-tr ${gradientClass}`}>
              <ImageWithFallback
                src={avatar}
                alt={username}
                className="w-10 h-10 rounded-full object-cover border-2 border-white"
              />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-gray-900">{username}</span>
                {verified && (
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${gradientClass} flex items-center justify-center`}>
                    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
              <span className="text-xs text-gray-500">{timeAgo}</span>
            </div>
          </div>
          <button className="hover:bg-gray-100 p-2 rounded-full transition-colors">
            <MoreHorizontal className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        {content && (
          <div className="px-4 pb-2">
            <p className="text-gray-900">{content}</p>
          </div>
        )}

        {/* Images */}
        {images && images.length > 0 && (
          <div className={`${images.length > 1 ? 'grid grid-cols-2 gap-0.5' : ''}`}>
            {images.map((image, index) => (
              <ImageWithFallback
                key={index}
                src={image}
                alt={`Post image ${index + 1}`}
                className="w-full object-cover"
                style={{ maxHeight: images.length > 1 ? '250px' : '500px' }}
              />
            ))}
          </div>
        )}

        {/* Stats */}
        <div className="px-4 py-2 flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1">
              <div className={`w-5 h-5 bg-gradient-to-r ${gradientClass} rounded-full flex items-center justify-center border-2 border-white shadow-sm`}>
                <Heart className="w-3 h-3 text-white fill-white" />
              </div>
              <div className={`w-5 h-5 bg-gradient-to-r ${gradientClass} opacity-80 rounded-full flex items-center justify-center border-2 border-white shadow-sm`}>
                <span className="text-xs text-white">👍</span>
              </div>
            </div>
            <span>{likes}</span>
          </div>
          <div className="flex items-center gap-3">
            <span>{comments} comments</span>
            <span>{shares} shares</span>
          </div>
        </div>

        {/* Actions */}
        <div className="px-4 py-2 border-t border-gray-200">
          <div className="flex items-center justify-around">
            <button className={`flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:${gradientClass} hover:bg-opacity-10 transition-all group`}>
              <Heart className="w-5 h-5 text-gray-600 group-hover:text-current" style={{ color: 'inherit' }} />
              <span className="text-gray-700 group-hover:text-current">Like</span>
            </button>
            <button className={`flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:${gradientClass} hover:bg-opacity-10 transition-all group`}>
              <MessageCircle className="w-5 h-5 text-gray-600 group-hover:text-current" />
              <span className="text-gray-700 group-hover:text-current">Comment</span>
            </button>
            <button className={`flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:${gradientClass} hover:bg-opacity-10 transition-all group`}>
              <Repeat2 className="w-5 h-5 text-gray-600 group-hover:text-current" />
              <span className="text-gray-700 group-hover:text-current">Repost</span>
            </button>
            <button className={`flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:${gradientClass} hover:bg-opacity-10 transition-all group`}>
              <Share2 className="w-5 h-5 text-gray-600 group-hover:text-current" />
              <span className="text-gray-700 group-hover:text-current">Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
