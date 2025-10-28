import { Home, Search, PlusSquare, PlaySquare, User } from 'lucide-react';

interface BottomNavigationProps {
  platform: 'ios' | 'android';
}

export function BottomNavigation({ platform }: BottomNavigationProps) {
  const gradientClass = platform === 'ios' 
    ? 'from-[#FF3333] to-[#FF69B4]' 
    : 'from-[#2196F3] to-[#87CEEB]';

  const textGradient = platform === 'ios'
    ? 'bg-gradient-to-r from-[#FF3333] to-[#FF69B4] bg-clip-text text-transparent'
    : 'bg-gradient-to-r from-[#2196F3] to-[#87CEEB] bg-clip-text text-transparent';

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 shadow-lg">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-around px-4 py-2">
          <button className="flex flex-col items-center gap-1 p-2 group">
            <div className={`p-1 rounded-lg bg-gradient-to-r ${gradientClass} bg-opacity-10`}>
              <Home className={`w-6 h-6 ${platform === 'ios' ? 'text-[#FF3333]' : 'text-[#2196F3]'}`} />
            </div>
            <span className={`text-xs ${textGradient}`}>Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 group hover:scale-105 transition-transform">
            <div className="p-1 rounded-lg group-hover:bg-gray-100">
              <Search className="w-6 h-6 text-gray-600 group-hover:text-gray-900" />
            </div>
            <span className="text-xs text-gray-600 group-hover:text-gray-900">Search</span>
          </button>
          <button className={`flex flex-col items-center gap-1 p-2 -mt-4 rounded-full bg-gradient-to-r ${gradientClass} shadow-lg hover:scale-105 transition-transform`}>
            <PlusSquare className="w-7 h-7 text-white" />
          </button>
          <button className="flex flex-col items-center gap-1 p-2 group hover:scale-105 transition-transform">
            <div className="p-1 rounded-lg group-hover:bg-gray-100">
              <PlaySquare className="w-6 h-6 text-gray-600 group-hover:text-gray-900" />
            </div>
            <span className="text-xs text-gray-600 group-hover:text-gray-900">Reels</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 group hover:scale-105 transition-transform">
            <div className="p-1 rounded-lg group-hover:bg-gray-100">
              <User className="w-6 h-6 text-gray-600 group-hover:text-gray-900" />
            </div>
            <span className="text-xs text-gray-600 group-hover:text-gray-900">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
