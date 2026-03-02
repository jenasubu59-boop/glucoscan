import React from 'react';
import { motion } from 'motion/react';
import { Activity, Droplets, Flame, Zap, Brain, Smile, Frown, Meh, Coffee, BatteryCharging } from 'lucide-react';

export default function Home() {
  const gutBrainScore = 82;

  return (
    <div className="min-h-screen bg-bg text-white pb-24 font-sans">
      {/* Header */}
      <header className="pt-12 pb-6 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-plasma opacity-20 blur-3xl"></div>
        <div className="relative z-10 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-display font-black tracking-tight text-white">GlucoScan</h1>
            <p className="text-sm text-neon-cyan font-bold tracking-widest uppercase mt-1">Metabolic AI</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-gradient-cosmic p-[2px] animate-pulse-glow">
            <div className="w-full h-full bg-bg rounded-full flex items-center justify-center">
              <Brain className="text-neon-purple" size={24} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Score Ring */}
      <section className="px-6 py-8 flex flex-col items-center">
        <div className="relative w-64 h-64 flex items-center justify-center">
          {/* Outer Ring */}
          <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
            <motion.circle
              cx="50" cy="50" r="45" fill="none"
              stroke="url(#gradient-green)" strokeWidth="8"
              strokeDasharray="283" strokeDashoffset={283 - (283 * gutBrainScore) / 100}
              strokeLinecap="round"
              initial={{ strokeDashoffset: 283 }}
              animate={{ strokeDashoffset: 283 - (283 * gutBrainScore) / 100 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="drop-shadow-[0_0_12px_rgba(57,255,20,0.6)]"
            />
            <defs>
              <linearGradient id="gradient-green" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#39ff14" />
                <stop offset="100%" stopColor="#ccff00" />
              </linearGradient>
            </defs>
          </svg>
          
          <div className="text-center z-10 flex flex-col items-center">
            <span className="text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-electric drop-shadow-[0_0_20px_rgba(57,255,20,0.4)]">
              {gutBrainScore}
            </span>
            <span className="text-xs font-bold tracking-widest uppercase text-white/60 mt-2">Gut-Brain Score</span>
          </div>
        </div>
      </section>

      {/* Quick Stats Grid */}
      <section className="px-6 grid grid-cols-2 gap-4 mb-8">
        <div className="bg-card2 rounded-2xl p-4 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-neon-pink/20 blur-xl rounded-full"></div>
          <div className="flex items-center gap-2 mb-2">
            <Flame size={16} className="text-neon-pink" />
            <span className="text-xs font-bold uppercase tracking-wider text-white/60">Calories</span>
          </div>
          <div className="text-2xl font-display font-bold text-white">1,840</div>
          <div className="text-[10px] text-neon-pink mt-1">Target: 2,200</div>
        </div>
        
        <div className="bg-card2 rounded-2xl p-4 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-neon-cyan/20 blur-xl rounded-full"></div>
          <div className="flex items-center gap-2 mb-2">
            <Droplets size={16} className="text-neon-cyan" />
            <span className="text-xs font-bold uppercase tracking-wider text-white/60">Hydration</span>
          </div>
          <div className="text-2xl font-display font-bold text-white">1.2L</div>
          <div className="text-[10px] text-neon-cyan mt-1">Target: 2.5L</div>
        </div>
        
        <div className="bg-card2 rounded-2xl p-4 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-neon-purple/20 blur-xl rounded-full"></div>
          <div className="flex items-center gap-2 mb-2">
            <Activity size={16} className="text-neon-purple" />
            <span className="text-xs font-bold uppercase tracking-wider text-white/60">Stress</span>
          </div>
          <div className="text-2xl font-display font-bold text-white">Low</div>
          <div className="text-[10px] text-neon-purple mt-1">Cortisol Stable</div>
        </div>
        
        <div className="bg-card2 rounded-2xl p-4 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-neon-yellow/20 blur-xl rounded-full"></div>
          <div className="flex items-center gap-2 mb-2">
            <Zap size={16} className="text-neon-yellow" />
            <span className="text-xs font-bold uppercase tracking-wider text-white/60">Streak</span>
          </div>
          <div className="text-2xl font-display font-bold text-white">14 Days</div>
          <div className="text-[10px] text-neon-yellow mt-1">Gut Guru Badge</div>
        </div>
      </section>

      {/* Daily Mood Check-in */}
      <section className="px-6 mb-8">
        <h3 className="text-sm font-display font-bold uppercase tracking-widest text-white/80 mb-4">How are you feeling?</h3>
        <div className="flex gap-3 overflow-x-auto pb-4 hide-scrollbar">
          {[
            { icon: Smile, label: 'Happy', color: 'text-neon-green', bg: 'bg-neon-green/10', border: 'border-neon-green/30' },
            { icon: BatteryCharging, label: 'Energised', color: 'text-neon-cyan', bg: 'bg-neon-cyan/10', border: 'border-neon-cyan/30' },
            { icon: Meh, label: 'Calm', color: 'text-neon-purple', bg: 'bg-neon-purple/10', border: 'border-neon-purple/30' },
            { icon: Coffee, label: 'Tired', color: 'text-neon-orange', bg: 'bg-neon-orange/10', border: 'border-neon-orange/30' },
            { icon: Frown, label: 'Anxious', color: 'text-neon-red', bg: 'bg-neon-red/10', border: 'border-neon-red/30' },
          ].map((mood, i) => (
            <button key={i} className={`flex flex-col items-center justify-center min-w-[80px] h-24 rounded-2xl border ${mood.border} ${mood.bg} transition-transform active:scale-95`}>
              <mood.icon size={28} className={`${mood.color} mb-2`} />
              <span className="text-[11px] font-bold tracking-wide">{mood.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Today's Food Log */}
      <section className="px-6">
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-sm font-display font-bold uppercase tracking-widest text-white/80">Today's Log</h3>
          <button className="text-xs text-neon-cyan font-bold uppercase tracking-wider">View All</button>
        </div>
        
        <div className="space-y-4">
          {/* Meal Item 1 */}
          <div className="bg-card rounded-2xl p-4 border border-white/5 flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden flex-shrink-0">
              <img src="https://picsum.photos/seed/idli/200/200" alt="Idli" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-bold text-white">Idli & Sambar</h4>
                <span className="text-neon-green font-display font-bold">+5 Mood</span>
              </div>
              <p className="text-[11px] text-white/60 mb-2">Breakfast • 320 kcal</p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 rounded-md bg-neon-cyan/10 text-neon-cyan text-[9px] font-bold uppercase tracking-wider border border-neon-cyan/20">Probiotics</span>
                <span className="px-2 py-1 rounded-md bg-neon-purple/10 text-neon-purple text-[9px] font-bold uppercase tracking-wider border border-neon-purple/20">B12 Rich</span>
              </div>
            </div>
          </div>

          {/* Meal Item 2 */}
          <div className="bg-card rounded-2xl p-4 border border-white/5 flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden flex-shrink-0">
              <img src="https://picsum.photos/seed/juice/200/200" alt="Packaged Juice" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-bold text-white">Packaged Juice</h4>
                <span className="text-neon-red font-display font-bold">-5 Mood</span>
              </div>
              <p className="text-[11px] text-white/60 mb-2">Snack • 180 kcal</p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 rounded-md bg-neon-red/10 text-neon-red text-[9px] font-bold uppercase tracking-wider border border-neon-red/20">Sugar Spike</span>
                <span className="px-2 py-1 rounded-md bg-neon-orange/10 text-neon-orange text-[9px] font-bold uppercase tracking-wider border border-neon-orange/20">Anxiety ↑</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
