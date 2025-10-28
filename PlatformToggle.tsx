interface PlatformToggleProps {
  platform: 'ios' | 'android';
  onToggle: () => void;
}

export function PlatformToggle({ platform, onToggle }: PlatformToggleProps) {
  return (
    <div className="fixed top-4 right-4 z-50 bg-white rounded-full shadow-lg p-1 flex gap-1">
      <button
        onClick={onToggle}
        className={`px-4 py-2 rounded-full transition-all ${
          platform === 'ios'
            ? 'bg-gradient-to-r from-[#FF3333] to-[#FF69B4] text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        iOS
      </button>
      <button
        onClick={onToggle}
        className={`px-4 py-2 rounded-full transition-all ${
          platform === 'android'
            ? 'bg-gradient-to-r from-[#2196F3] to-[#87CEEB] text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        Android
      </button>
    </div>
  );
}
