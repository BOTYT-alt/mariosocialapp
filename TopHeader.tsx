import { Bell, MessageCircle, Search } from 'lucide-react';

interface TopHeaderProps {
  platform: 'ios' | 'android';
}

export function TopHeader({ platform }: TopHeaderProps) {
  const gradientClass = platform === 'ios' 
    ? 'from-[#FF3333] to-[#FF69B4]' 
    : 'from-[#2196F3] to-[#87CEEB]';

  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between max-w-2xl mx-auto">
        <div className="flex items-center gap-2">
          <div className={`bg-gradient-to-r ${gradientClass} p-2 rounded-lg shadow-md`}>
            <span className="text-white">MS</span>
          </div>
          <span className="text-gray-900">Mario Social</span>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="relative hover:scale-110 transition-transform">
            <Search className="w-6 h-6 text-gray-700" />
          </button>
          <button className="relative hover:scale-110 transition-transform">
            <Bell className="w-6 h-6 text-gray-700" />
            <span className={`absolute -top-1 -right-1 bg-gradient-to-r ${gradientClass} text-white text-xs rounded-full w-4 h-4 flex items-center justify-center`}>
              3
            </span>
          </button>
          <button className="relative hover:scale-110 transition-transform">
            <MessageCircle className="w-6 h-6 text-gray-700" />
            <span className={`absolute -top-1 -right-1 bg-gradient-to-r ${gradientClass} text-white text-xs rounded-full w-4 h-4 flex items-center justify-center`}>
              5
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
