import React from 'react';
import { Home, ScanLine, BookOpen, User } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'scanner', icon: ScanLine, label: 'Scan' },
    { id: 'science', icon: BookOpen, label: 'Science' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-bg2/90 backdrop-blur-lg border-t border-white/10 pb-safe z-50">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto px-4">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center w-16 h-full transition-all duration-300 ${
                isActive ? 'text-neon-cyan' : 'text-white/40'
              }`}
            >
              <div className={`relative p-2 rounded-full ${isActive ? 'bg-neon-cyan/10 glow-cyan' : ''}`}>
                <Icon size={24} className={isActive ? 'text-neon-cyan' : ''} />
              </div>
              <span className={`text-[10px] mt-1 font-bold tracking-wider uppercase ${isActive ? 'text-neon-cyan' : ''}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
