import React from 'react';
import { User, FileText, Settings, Award, Activity, Brain, Shield } from 'lucide-react';

export default function Profile() {
  return (
    <div className="min-h-screen bg-bg text-white pb-24 font-sans relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-cosmic opacity-20 blur-3xl rounded-b-[100px]"></div>

      {/* Header */}
      <header className="relative z-10 pt-12 pb-6 px-6 flex justify-between items-center">
        <h1 className="text-3xl font-display font-black tracking-tight text-white">Profile</h1>
        <button className="p-2 rounded-full bg-card2 border border-white/10 hover:bg-white/5 transition-colors">
          <Settings size={20} className="text-white/60" />
        </button>
      </header>

      {/* Avatar & Info */}
      <section className="px-6 mb-8 relative z-10 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-gradient-plasma p-[3px] mb-4 animate-pulse-glow shadow-[0_0_40px_rgba(191,0,255,0.4)]">
          <div className="w-full h-full bg-bg rounded-full flex items-center justify-center overflow-hidden">
            <img src="https://picsum.photos/seed/avatar/200/200" alt="Avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
        <h2 className="text-2xl font-display font-black text-white mb-1">Aarav Sharma</h2>
        <p className="text-xs text-neon-cyan font-bold uppercase tracking-widest">Metabolic Pro</p>
      </section>

      {/* Badges */}
      <section className="px-6 mb-8 relative z-10">
        <h3 className="text-sm font-display font-bold uppercase tracking-widest text-white/80 mb-4 flex items-center gap-2">
          <Award size={18} className="text-neon-yellow" />
          Achievements
        </h3>
        
        <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
          {[
            { title: 'Gut Guru', icon: Brain, color: 'text-neon-purple', bg: 'bg-neon-purple/10', border: 'border-neon-purple/30', shadow: 'shadow-[0_0_15px_rgba(191,0,255,0.1)]' },
            { title: '14-Day Streak', icon: Activity, color: 'text-neon-pink', bg: 'bg-neon-pink/10', border: 'border-neon-pink/30', shadow: 'shadow-[0_0_15px_rgba(255,0,144,0.1)]' },
            { title: 'Serotonin Pro', icon: Shield, color: 'text-neon-green', bg: 'bg-neon-green/10', border: 'border-neon-green/30', shadow: 'shadow-[0_0_15px_rgba(57,255,20,0.1)]' },
          ].map((badge, i) => (
            <div key={i} className={`flex flex-col items-center justify-center min-w-[100px] h-28 rounded-2xl bg-card2 border ${badge.border} ${badge.shadow}`}>
              <div className={`p-3 rounded-full ${badge.bg} mb-2`}>
                <badge.icon size={24} className={badge.color} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 text-center">{badge.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 mb-8 relative z-10 grid grid-cols-2 gap-4">
        <div className="bg-card2 rounded-2xl p-4 border border-white/5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-white/60 block mb-1">Avg Score</span>
          <div className="text-2xl font-display font-bold text-neon-cyan">84/100</div>
        </div>
        <div className="bg-card2 rounded-2xl p-4 border border-white/5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-white/60 block mb-1">Meals Logged</span>
          <div className="text-2xl font-display font-bold text-neon-green">142</div>
        </div>
      </section>

      {/* Doctor Export */}
      <section className="px-6 mb-8 relative z-10">
        <div className="bg-gradient-plasma rounded-2xl p-[1px]">
          <div className="bg-card2 rounded-2xl p-5 h-full w-full flex items-center justify-between">
            <div>
              <h3 className="text-sm font-display font-bold uppercase tracking-widest text-white mb-1 flex items-center gap-2">
                <FileText size={16} className="text-neon-pink" />
                Doctor Report
              </h3>
              <p className="text-[10px] text-white/60 leading-relaxed max-w-[200px]">Export your 30-day food, mood, and stress data for your psychiatrist.</p>
            </div>
            <button className="px-4 py-2 rounded-xl bg-neon-pink text-white text-[10px] font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(255,0,144,0.6)] hover:scale-105 transition-transform">
              Export PDF
            </button>
          </div>
        </div>
      </section>

      {/* Settings List */}
      <section className="px-6 relative z-10">
        <div className="bg-card2 rounded-2xl border border-white/5 overflow-hidden">
          {[
            { label: 'Meal Reminders', value: '3x Daily' },
            { label: 'Diet Preference', value: 'Vegetarian' },
            { label: 'Health Conditions', value: 'Anxiety, IBS' },
            { label: 'Connected Wearable', value: 'Apple Watch' },
            { label: 'Language', value: 'English' },
          ].map((setting, i) => (
            <div key={i} className={`p-4 flex items-center justify-between border-b border-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
              <span className="text-xs font-bold text-white/80">{setting.label}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">{setting.value}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
