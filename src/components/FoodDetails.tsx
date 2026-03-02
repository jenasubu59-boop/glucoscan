import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, AlertTriangle, CheckCircle, Brain, Activity, Zap, Info, Plus } from 'lucide-react';

interface FoodDetailsProps {
  food: any;
  onBack: () => void;
}

export default function FoodDetails({ food, onBack }: FoodDetailsProps) {
  return (
    <div className="min-h-screen bg-bg text-white pb-24 font-sans relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-volcano opacity-20 blur-3xl rounded-b-[100px]"></div>
      
      {/* Header */}
      <header className="relative z-10 pt-12 pb-4 px-6 flex items-center gap-4">
        <button onClick={onBack} className="p-2 rounded-full bg-card2 border border-white/10 hover:bg-white/5 transition-colors">
          <ChevronLeft size={20} />
        </button>
        <div>
          <h1 className="text-xl font-display font-black tracking-tight text-white">Scan Result</h1>
          <p className="text-[10px] text-neon-cyan font-bold tracking-widest uppercase mt-1">Intelligence Engine</p>
        </div>
      </header>

      {/* Product Identity */}
      <section className="px-6 relative z-10 mb-8">
        <div className="bg-card2 rounded-3xl p-6 border border-white/10 flex flex-col items-center text-center shadow-[0_0_40px_rgba(255,23,68,0.1)]">
          <div className="w-32 h-32 rounded-2xl bg-white p-2 mb-4 shadow-xl">
            <img src="https://picsum.photos/seed/parle/200/200" alt={food.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
          </div>
          <h2 className="text-2xl font-display font-black text-white mb-1">{food.name}</h2>
          <p className="text-xs text-white/60 font-bold uppercase tracking-wider mb-4">{food.brand} • 100g Serving</p>
          
          <div className="w-full bg-bg rounded-xl p-4 border border-neon-red/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-neon-red glow-red"></div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Metabolic Score</span>
              <span className="text-2xl font-display font-black text-neon-red drop-shadow-[0_0_12px_rgba(255,23,68,0.6)]">{food.score}/100</span>
            </div>
            
            {/* Progress Bar */}
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden mb-2">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${food.score}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-neon-red shadow-[0_0_10px_rgba(255,23,68,0.8)]"
              ></motion.div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-neon-red bg-neon-red/10 px-2 py-1 rounded">Avoid</span>
              <span className="text-[10px] text-white/60">{food.category}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="px-6 grid grid-cols-2 gap-4 mb-8">
        <div className="bg-card2 rounded-2xl p-4 border border-white/5">
          <div className="flex items-center gap-2 mb-2">
            <Activity size={16} className="text-neon-orange" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-white/60">Glycaemic Load</span>
          </div>
          <div className="text-xl font-display font-bold text-white">{food.gl} <span className="text-xs text-neon-orange">Very High</span></div>
        </div>
        
        <div className="bg-card2 rounded-2xl p-4 border border-white/5">
          <div className="flex items-center gap-2 mb-2">
            <Zap size={16} className="text-neon-pink" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-white/60">Insulin Spike</span>
          </div>
          <div className="text-xl font-display font-bold text-neon-pink">SEVERE</div>
        </div>
      </section>

      {/* Mental Health Impact */}
      <section className="px-6 mb-8">
        <h3 className="text-sm font-display font-bold uppercase tracking-widest text-white/80 mb-4 flex items-center gap-2">
          <Brain size={18} className="text-neon-purple" />
          Mental Health Impact
        </h3>
        
        <div className="bg-card2 rounded-2xl p-5 border border-neon-purple/20 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-neon-purple/10 blur-3xl rounded-full"></div>
          
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
            <span className="text-xs font-bold uppercase tracking-wider text-white/80">Brain Impact Score</span>
            <span className="text-lg font-display font-bold text-neon-red">{food.brainImpact}/10</span>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <AlertTriangle size={16} className="text-neon-orange flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white mb-1">Blood Sugar Spike</h4>
                <p className="text-[11px] text-white/60 leading-relaxed">High refined flour (maida) + sugar causes rapid glucose spike. Post-spike crash triggers cortisol release → anxiety, irritability, brain fog within 60-90 mins.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <AlertTriangle size={16} className="text-neon-orange flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white mb-1">Zero Tryptophan</h4>
                <p className="text-[11px] text-white/60 leading-relaxed">No meaningful tryptophan present. Zero contribution to serotonin production in the gut. Opportunity cost for your mental health.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredient Deep Dive */}
      <section className="px-6 mb-8">
        <h3 className="text-sm font-display font-bold uppercase tracking-widest text-white/80 mb-4 flex items-center gap-2">
          <Info size={18} className="text-neon-cyan" />
          Ingredient Deep Dive
        </h3>
        
        <div className="bg-card2 rounded-2xl border border-white/5 overflow-hidden">
          {[
            { name: 'Wheat Flour (Maida)', status: 'alert', reason: 'Refined, high GL, anti-nutrients' },
            { name: 'Sugar (26g)', status: 'alert', reason: 'Dopamine override risk' },
            { name: 'Edible Vegetable Oil', status: 'alert', reason: 'Palm oil — gut barrier disruption' },
            { name: 'Emulsifier INS 322', status: 'alert', reason: 'Soy lecithin — gut mucus impact' },
            { name: 'Leavening Agents', status: 'ok', reason: 'Sodium bicarbonate — generally safe' },
          ].map((ing, i) => (
            <div key={i} className={`p-3 flex items-center justify-between border-b border-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
              <div className="flex-1">
                <h4 className="text-xs font-bold text-white">{ing.name}</h4>
                <p className="text-[10px] text-white/50 mt-0.5">{ing.reason}</p>
              </div>
              <div className="ml-4">
                {ing.status === 'alert' ? (
                  <span className="bg-neon-red/10 text-neon-red text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded border border-neon-red/20">Alert</span>
                ) : (
                  <span className="bg-neon-green/10 text-neon-green text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded border border-neon-green/20">OK</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Alternatives */}
      <section className="px-6 mb-8">
        <h3 className="text-sm font-display font-bold uppercase tracking-widest text-white/80 mb-4 flex items-center gap-2">
          <CheckCircle size={18} className="text-neon-green" />
          Better Alternatives
        </h3>
        
        <div className="space-y-3">
          {[
            { name: 'Handful of Walnuts (30g)', score: 88, reason: 'Omega-3, BDNF↑' },
            { name: 'Apple + Peanut Butter', score: 82, reason: 'Fibre + protein' },
            { name: 'Dark Chocolate 70%+ (20g)', score: 74, reason: 'Flavanols, Mg' },
          ].map((alt, i) => (
            <div key={i} className="bg-card2 rounded-xl p-3 border border-neon-green/20 flex items-center justify-between relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-neon-green glow-green"></div>
              <div className="ml-2 flex-1">
                <h4 className="text-xs font-bold text-white">{alt.name}</h4>
                <p className="text-[10px] text-white/60 mt-0.5">{alt.reason}</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-lg font-display font-bold text-neon-green drop-shadow-[0_0_8px_rgba(57,255,20,0.6)]">{alt.score}</span>
                <span className="text-[8px] font-bold uppercase tracking-widest text-white/40">Score</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-24 left-0 right-0 px-6 z-20">
        <button className="w-full py-4 rounded-2xl bg-gradient-plasma text-white font-display font-bold uppercase tracking-widest shadow-[0_0_30px_rgba(255,0,144,0.4)] flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
          <Plus size={18} />
          Log Anyway
        </button>
      </div>
    </div>
  );
}
