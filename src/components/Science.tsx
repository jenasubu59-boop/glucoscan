import React from 'react';
import { BookOpen, Brain, Activity, Zap, Droplets, HeartPulse } from 'lucide-react';

export default function Science() {
  return (
    <div className="min-h-screen bg-bg text-white pb-24 font-sans relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-cyan/10 blur-[100px] rounded-full"></div>

      {/* Header */}
      <header className="relative z-10 pt-12 pb-6 px-6">
        <h1 className="text-3xl font-display font-black tracking-tight text-white">The Science</h1>
        <p className="text-sm text-neon-purple font-bold tracking-widest uppercase mt-1">Nutritional Psychiatry</p>
      </header>

      {/* The Gut-Brain Axis */}
      <section className="px-6 mb-8 relative z-10">
        <div className="bg-card2 rounded-3xl p-6 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/20 blur-3xl rounded-full"></div>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-neon-purple/20 border border-neon-purple/30">
              <Brain size={24} className="text-neon-purple" />
            </div>
            <h2 className="text-lg font-display font-bold text-white">The Gut-Brain Axis</h2>
          </div>
          
          <p className="text-sm text-white/80 leading-relaxed mb-4">
            The gut contains 500 million neurons — it is the body's "second brain". 
            <strong className="text-neon-cyan"> 95% of the body's serotonin is produced in the gut, not the brain.</strong>
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
              <Activity size={16} className="text-neon-green flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white mb-1">Neurotransmitter Protection</h4>
                <p className="text-[11px] text-white/60 leading-relaxed">Chronic inflammation blocks production of serotonin and dopamine. Anti-inflammatory foods restore this pipeline.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
              <Zap size={16} className="text-neon-yellow flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white mb-1">Brain Plasticity (BDNF)</h4>
                <p className="text-[11px] text-white/60 leading-relaxed">Reducing inflammation supports neuroplasticity — key for emotional resilience. Boosted by Curcumin and Omega-3s.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Psychobiotics */}
      <section className="px-6 mb-8 relative z-10">
        <h3 className="text-sm font-display font-bold uppercase tracking-widest text-white/80 mb-4 flex items-center gap-2">
          <Droplets size={18} className="text-neon-cyan" />
          Psychobiotics Guide
        </h3>
        
        <div className="space-y-3">
          {[
            { strain: 'Lactobacillus rhamnosus', benefit: 'Reduces cortisol, GABA↑', source: 'Dahi / Curd', color: 'text-neon-cyan', bg: 'bg-neon-cyan', bgLight: 'bg-neon-cyan/10', border: 'border-neon-cyan/20', glow: 'glow-cyan' },
            { strain: 'Bifidobacterium longum', benefit: 'Lowers anxiety, Cortisol↓', source: 'Kefir, aged dahi', color: 'text-neon-purple', bg: 'bg-neon-purple', bgLight: 'bg-neon-purple/10', border: 'border-neon-purple/20', glow: 'glow-purple' },
            { strain: 'Lactobacillus helveticus', benefit: 'Reduces depression, Mood↑', source: 'Idli / Dosa batter', color: 'text-neon-green', bg: 'bg-neon-green', bgLight: 'bg-neon-green/10', border: 'border-neon-green/20', glow: 'glow-green' },
            { strain: 'Bifidobacterium breve', benefit: 'Improves resilience', source: 'Kanji, pickle, achaar', color: 'text-neon-pink', bg: 'bg-neon-pink', bgLight: 'bg-neon-pink/10', border: 'border-neon-pink/20', glow: 'glow-pink' },
          ].map((item, i) => (
            <div key={i} className={`bg-card2 rounded-xl p-4 border ${item.border} flex items-center justify-between relative overflow-hidden`}>
              <div className={`absolute left-0 top-0 bottom-0 w-1 ${item.bg} ${item.glow}`}></div>
              <div className="ml-2 flex-1">
                <h4 className="text-[11px] font-bold text-white mb-1">{item.strain}</h4>
                <p className="text-[10px] text-white/60">{item.benefit}</p>
              </div>
              <div className="text-right">
                <span className={`text-[10px] font-bold uppercase tracking-wider ${item.color} ${item.bgLight} px-2 py-1 rounded border ${item.border}`}>
                  {item.source}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vagus Nerve Hacks */}
      <section className="px-6 mb-8 relative z-10">
        <h3 className="text-sm font-display font-bold uppercase tracking-widest text-white/80 mb-4 flex items-center gap-2">
          <HeartPulse size={18} className="text-neon-pink" />
          Vagus Nerve Hacks
        </h3>
        
        <div className="bg-card2 rounded-2xl border border-white/5 overflow-hidden">
          {[
            { title: 'Cold Water Face Dip', desc: '30 seconds; instant vagal tone boost' },
            { title: 'Humming / Chanting', desc: 'Throat vibration stimulates vagus nerve' },
            { title: '4-7-8 Breathing', desc: 'Long exhale activates parasympathetic system' },
            { title: 'Post-Meal Walk', desc: 'Reduces cortisol, improves gut motility' },
          ].map((hack, i) => (
            <div key={i} className={`p-4 border-b border-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
              <h4 className="text-xs font-bold text-white mb-1">{hack.title}</h4>
              <p className="text-[11px] text-white/50">{hack.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
