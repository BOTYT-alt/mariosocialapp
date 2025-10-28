import { useState } from 'react';
import { TopHeader } from './components/TopHeader';
import { StoriesCarousel } from './components/StoriesCarousel';
import { PostCard } from './components/PostCard';
import { BottomNavigation } from './components/BottomNavigation';
import { PlatformToggle } from './components/PlatformToggle';

export default function App() {
  const [platform, setPlatform] = useState<'ios' | 'android'>('ios');

  const togglePlatform = () => {
    setPlatform(prev => prev === 'ios' ? 'android' : 'ios');
  };

  const gradientClass = platform === 'ios' 
    ? 'from-[#FF3333]/5 to-[#FF69B4]/5' 
    : 'from-[#2196F3]/5 to-[#87CEEB]/5';

  return (
    <div className={`min-h-screen bg-gradient-to-br ${gradientClass}`}>
      <PlatformToggle platform={platform} onToggle={togglePlatform} />
      
      {/* Mobile container */}
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl">
        <TopHeader platform={platform} />
        <StoriesCarousel platform={platform} />
        
        {/* Feed */}
        <div className="pb-20">
          <PostCard
            type="image"
            username="travel_adventures"
            avatar="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
            timeAgo="2h ago"
            content="Lost in the mountains 🏔️✨ #nature #travel #adventure"
            images={['https://images.unsplash.com/photo-1501785888041-af3ef285b470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzYxNjI5OTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral']}
            likes="2,451"
            comments="89"
            shares="24"
            verified={true}
            platform={platform}
          />

          <PostCard
            type="text"
            username="tech_thoughts"
            avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
            timeAgo="4h ago"
            content="Just finished an amazing project! The feeling when your code finally works is unmatched 🚀💻 What's everyone working on this week?"
            likes="1,234"
            comments="156"
            shares="45"
            verified={false}
            platform={platform}
          />

          <PostCard
            type="multi-image"
            username="foodie_life"
            avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
            timeAgo="5h ago"
            content="Brunch goals achieved! 🍳🥑 Which one would you try first?"
            images={[
              'https://images.unsplash.com/photo-1532980400857-e8d9d275d858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYxNjE0NzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
              'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop'
            ]}
            likes="3,892"
            comments="234"
            shares="67"
            verified={true}
            platform={platform}
          />

          <PostCard
            type="image"
            username="fashion_daily"
            avatar="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop"
            timeAgo="8h ago"
            content="Street style inspiration ✨👗 #OOTD #fashion #style"
            images={['https://images.unsplash.com/photo-1523398002811-999ca8dec234?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBmYXNoaW9ufGVufDF8fHx8MTc2MTU3MTM5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral']}
            likes="5,671"
            comments="412"
            shares="89"
            verified={true}
            platform={platform}
          />

          <PostCard
            type="image"
            username="nature_captures"
            avatar="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
            timeAgo="10h ago"
            content="Golden hour never disappoints 🌅 Swipe to see the full sunset sequence"
            images={['https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBzdW5zZXR8ZW58MXx8fHwxNzYxNTYwMTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral']}
            likes="8,234"
            comments="567"
            shares="123"
            verified={true}
            platform={platform}
          />

          <PostCard
            type="text"
            username="daily_motivation"
            avatar="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop"
            timeAgo="12h ago"
            content="Your only limit is you. 💪✨ Start this week with positive energy and watch everything fall into place. Remember, progress is progress no matter how small!"
            likes="12,456"
            comments="892"
            shares="456"
            verified={true}
            platform={platform}
          />
        </div>

        <BottomNavigation platform={platform} />
      </div>
    </div>
  );
}
