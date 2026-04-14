import React, { useState } from 'react';
import './App.css';
import Design1 from './views/Design1';
import Design2 from './views/Design2';

function App() {
  const [currentDesign, setCurrentDesign] = useState(1);

  const toggleDesign = () => {
    setCurrentDesign(prev => (prev === 1 ? 2 : 1));
  };

  return (
    <div className="app-container">
      {currentDesign === 1 ? (
        <Design1 
          onSwitch={() => setCurrentDesign(2)} 
          onGoToDesign1={() => setCurrentDesign(1)} 
        />
      ) : (
        <Design2 
          onSwitch={() => setCurrentDesign(1)} 
          onGoToDesign1={() => setCurrentDesign(1)} 
        />
      )}
    </div>
  );
}

export default App;
