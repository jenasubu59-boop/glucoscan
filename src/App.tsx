import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Scanner from './components/Scanner';
import Science from './components/Science';
import Profile from './components/Profile';
import FoodDetails from './components/FoodDetails';
import { SpeedInsights } from "@vercel/speed-insights/react"

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [scannedFood, setScannedFood] = useState<any>(null);

  const handleScanComplete = (result: any) => {
    setScannedFood(result);
  };

  const handleBackFromDetails = () => {
    setScannedFood(null);
  };

  return (
    <div className="bg-bg min-h-screen text-white font-sans selection:bg-neon-cyan/30">
      {scannedFood ? (
        <FoodDetails food={scannedFood} onBack={handleBackFromDetails} />
      ) : (
        <>
          {activeTab === 'home' && <Home />}
          {activeTab === 'scanner' && <Scanner onScanComplete={handleScanComplete} />}
          {activeTab === 'science' && <Science />}
          {activeTab === 'profile' && <Profile />}
          
          <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
          <SpeedInsights />
        </>
      
      )}
    </div>
  );
}

