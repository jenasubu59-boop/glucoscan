import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Camera, Package, ShoppingCart, Zap, AlertTriangle, CheckCircle, X } from 'lucide-react';

interface ScannerProps {
  onScanComplete: (result: any) => void;
}

export default function Scanner({ onScanComplete }: ScannerProps) {
  const [mode, setMode] = useState<'meal' | 'barcode'>('barcode');
  const [isScanning, setIsScanning] = useState(true);
  const [supermarketMode, setSupermarketMode] = useState(false);

  // Simulate a scan after 3 seconds
  useEffect(() => {
    if (isScanning && !supermarketMode) {
      const timer = setTimeout(() => {
        setIsScanning(false);
        onScanComplete({
          id: '8901719110023',
          name: 'Parle-G Original',
          brand: 'Parle Products',
          score: 18,
          category: 'Ultra-Processed Food (UPF Level 4)',
          gl: 72,
          calories: 451,
          sugar: 26,
          protein: 6.7,
          fiber: 1.2,
          brainImpact: -7,
          gutImpact: -6
        });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isScanning, supermarketMode, onScanComplete]);

  return (
    <div className="min-h-screen bg-bg text-white font-sans relative overflow-hidden">
      {/* Camera Background Simulation */}
      <div className="absolute inset-0 z-0">
        <img src="https://picsum.photos/seed/supermarket/1080/1920" alt="Camera Feed" className="w-full h-full object-cover opacity-30" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-bg/60 backdrop-blur-sm"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 pt-12 pb-4 px-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-display font-black tracking-tight text-white">SmartScan</h1>
          <p className="text-[10px] text-neon-cyan font-bold tracking-widest uppercase mt-1">Intelligence Engine</p>
        </div>
        <button 
          onClick={() => setSupermarketMode(!supermarketMode)}
          className={`px-3 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
            supermarketMode 
              ? 'bg-neon-green/20 border-neon-green text-neon-green glow-green' 
              : 'bg-card2/80 border-white/10 text-white/60'
          }`}
        >
          <ShoppingCart size={14} />
          Supermarket Mode
        </button>
      </header>

      {/* Mode Selector */}
      <div className="relative z-10 flex justify-center mt-4 mb-8">
        <div className="bg-card2/80 backdrop-blur-md p-1 rounded-full flex border border-white/10">
          <button 
            onClick={() => setMode('meal')}
            className={`px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
              mode === 'meal' ? 'bg-neon-cyan/20 text-neon-cyan glow-cyan' : 'text-white/60'
            }`}
          >
            <Camera size={14} />
            Scan Meal
          </button>
          <button 
            onClick={() => setMode('barcode')}
            className={`px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
              mode === 'barcode' ? 'bg-neon-pink/20 text-neon-pink glow-pink' : 'text-white/60'
            }`}
          >
            <Package size={14} />
            Scan Barcode
          </button>
        </div>
      </div>

      {/* Viewfinder */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-12 px-6">
        <div className="relative w-full max-w-sm aspect-square">
          {/* Corner Brackets */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-neon-cyan rounded-tl-xl drop-shadow-[0_0_12px_rgba(0,255,234,0.6)]"></div>
          <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-neon-cyan rounded-tr-xl drop-shadow-[0_0_12px_rgba(0,255,234,0.6)]"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-neon-cyan rounded-bl-xl drop-shadow-[0_0_12px_rgba(0,255,234,0.6)]"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-neon-cyan rounded-br-xl drop-shadow-[0_0_12px_rgba(0,255,234,0.6)]"></div>
          
          {/* Scan Area */}
          <div className="absolute inset-4 border border-white/10 rounded-lg overflow-hidden bg-black/20 backdrop-blur-sm flex items-center justify-center">
            {isScanning ? (
              <>
                <div className="w-3/4 h-32 border-2 border-dashed border-white/20 rounded-md flex items-center justify-center relative">
                  <Package size={48} className="text-white/20" />
                  {/* Animated Scan Line */}
                  <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neon-green to-transparent animate-scan-line drop-shadow-[0_0_8px_rgba(57,255,20,0.8)]"></div>
                </div>
                <div className="absolute bottom-4 text-[10px] font-bold uppercase tracking-widest text-neon-cyan animate-pulse">
                  Align Barcode in Frame
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center text-neon-green">
                <CheckCircle size={48} className="mb-2" />
                <span className="text-[12px] font-bold uppercase tracking-widest">Decoded</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Supermarket Mode Overlay */}
      {supermarketMode && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute bottom-24 left-4 right-4 bg-card2/90 backdrop-blur-xl border border-neon-green/30 rounded-2xl p-4 z-20 shadow-[0_0_30px_rgba(57,255,20,0.1)]"
        >
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-neon-green flex items-center gap-2">
              <ShoppingCart size={14} />
              Basket Health: 62/100
            </h3>
            <span className="text-[10px] text-white/60">3 Items</span>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center bg-bg/50 p-2 rounded-lg border border-white/5">
              <span className="text-xs text-white">Epigamia Greek Yogurt</span>
              <span className="text-[10px] font-bold text-neon-green bg-neon-green/10 px-2 py-1 rounded">88/100</span>
            </div>
            <div className="flex justify-between items-center bg-bg/50 p-2 rounded-lg border border-neon-red/20">
              <span className="text-xs text-white">Lays Classic Chips</span>
              <span className="text-[10px] font-bold text-neon-red bg-neon-red/10 px-2 py-1 rounded">20/100</span>
            </div>
            <div className="flex justify-between items-center bg-bg/50 p-2 rounded-lg border border-white/5">
              <span className="text-xs text-white">Saffola Oats</span>
              <span className="text-[10px] font-bold text-neon-green bg-neon-green/10 px-2 py-1 rounded">80/100</span>
            </div>
          </div>
          
          <div className="mt-3 pt-3 border-t border-white/10 flex items-start gap-2">
            <AlertTriangle size={14} className="text-neon-orange flex-shrink-0 mt-0.5" />
            <p className="text-[10px] text-white/80 leading-relaxed">
              <strong className="text-neon-orange">Swap Suggestion:</strong> Swap Lays Chips for Farmley Makhana to improve basket score by +15 points.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
