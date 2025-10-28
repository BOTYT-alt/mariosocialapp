import { Plus } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Story {
  id: string;
  username: string;
  avatar: string;
  hasStory: boolean;
}

interface StoriesCarouselProps {
  platform: 'ios' | 'android';
}

const stories: Story[] = [
  { id: '1', username: 'Your Story', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop', hasStory: false },
  { id: '2', username: 'alex_photo', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop', hasStory: true },
  { id: '3', username: 'sarah_j', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop', hasStory: true },
  { id: '4', username: 'john_doe', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', hasStory: true },
  { id: '5', username: 'travel_lover', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop', hasStory: true },
  { id: '6', username: 'foodie_gram', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop', hasStory: true },
];

export function StoriesCarousel({ platform }: StoriesCarouselProps) {
  const gradientClass = platform === 'ios' 
    ? 'from-[#FF3333] via-[#FF69B4] to-[#FF69B4]' 
    : 'from-[#2196F3] via-[#64B5F6] to-[#87CEEB]';

  const accentClass = platform === 'ios'
    ? 'bg-gradient-to-r from-[#FF3333] to-[#FF69B4]'
    : 'bg-gradient-to-r from-[#2196F3] to-[#87CEEB]';

  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex gap-4 overflow-x-auto scrollbar-hide max-w-2xl mx-auto">
        {stories.map((story, index) => (
          <div key={story.id} className="flex flex-col items-center gap-1 min-w-fit">
            <div className={`relative ${story.hasStory || index === 0 ? `p-0.5 rounded-full bg-gradient-to-tr ${gradientClass}` : ''}`}>
              <div className="bg-white p-0.5 rounded-full">
                <div className="relative w-16 h-16">
                  <ImageWithFallback
                    src={story.avatar}
                    alt={story.username}
                    className="w-full h-full rounded-full object-cover"
                  />
                  {index === 0 && (
                    <div className={`absolute bottom-0 right-0 ${accentClass} rounded-full p-0.5`}>
                      <Plus className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <span className="text-xs text-gray-700 max-w-[70px] truncate">
              {story.username}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
