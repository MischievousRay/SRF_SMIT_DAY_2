import React, { useState } from 'react';
import Card from './components/Card';
import { cardData } from './data/cards';

const App: React.FC = () => {
  const [soundEnabled, setSoundEnabled] = useState(false);

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-gray-400 via-gray-200 to-white">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">Bands That Shaped Me</h1>

      {!soundEnabled && (
        <div className="text-center mb-6">
          <button onClick={() => setSoundEnabled(true)} className="bg-gray-900 text-white px-4 py-2 rounded">
            Enter The Audio Experience
          </button>
        </div>
      )}

      {soundEnabled && (
        <div className="text-center mb-6">
          <button onClick={() => setSoundEnabled(false)} className="bg-gray-900 text-white px-4 py-2 rounded">
          Exit The Audio Experience
          </button>
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-6">
        {cardData.map((card, index) => (
          <Card key={index} {...card} soundEnabled={soundEnabled} />
        ))}
      </div>
    </div>
  );
};

export default App;
