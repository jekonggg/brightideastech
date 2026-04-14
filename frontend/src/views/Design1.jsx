import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import CircleExpander from '../components/CircleExpander';
import Accordion from '../components/Accordion';
import CustomDropdown from '../components/CustomDropdown';
import { ArrowRight, Send } from 'lucide-react';

const Design1 = ({ onSwitch, onGoToDesign1 }) => {
  const [selectedCircle, setSelectedCircle] = useState(1);
  const [selected, setSelected] = useState('');

  const contentMap = {
    1: { heading: 'Header content #1', body: 'This content is linked to the first circle selection. Generic but functional description text.' },
    2: { heading: 'Header content #2', body: 'The second circle has been selected. Demonstrating state-based dynamic updates for the hero area.' },
    3: { heading: 'Header content #3', body: 'Final tier positioning for the third shape. This confirms controlled component state across the board.' }
  };

  const dropdownOptions = [
    { label: 'Sample Item #1', value: '1' },
    { label: 'Sample Item #2', value: '2' },
    { label: 'Sample Item #3', value: '3' },
  ];

  return (
    <div className="design-1">
      <Navbar onSwitch={onSwitch} onGoToDesign1={onGoToDesign1} />
      <main>
        {/* Section 1: Hero */}
        <section className="design-section" style={{ backgroundColor: 'white' }}>
          <div className="content-container">
            <div className="hero-section" style={{ padding: 0 }}>
              <div className="hero-left">
                <h1 style={{ fontWeight: 700, color: 'var(--dark-blue)', textAlign: 'left' }}>Welcome</h1>
                <h1 style={{ fontWeight: 400, color: 'var(--dark-blue)', textAlign: 'left' }}>This is the test</h1>
                
                <div className="hero-content">
                  <h1 style={{ fontWeight: 400, color: 'var(--dark-blue)', textAlign: 'left' }}>{contentMap[selectedCircle].heading}</h1>
                  <p className="regular-text">
                    {contentMap[selectedCircle].body}
                  </p>
                </div>
              </div>
              
              <CircleExpander 
                selectedId={selectedCircle} 
                onSelect={setSelectedCircle} 
              /> 
            </div>
          </div>
        </section>

        {/* Section 2: Accordions (2x3 Grid) - Light Blue BG */}
        <section className="design-section" style={{ backgroundColor: 'var(--light-blue-bg)' }}>
          <div className="content-container">
            <Accordion />
          </div>
        </section>
        
        {/* Section 3: Contact Form & Image */}
        <section className="design-section">
          <div className="content-container">
            <div className="section-3-container">
              <div className="section-3-image">
                <img 
                  src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=400&q=80" 
                  alt="Feature" 
                />
              </div>
              <div className="section-3-form">
                <h1 style={{ color: 'var(--dark-blue)', fontWeight: 700, marginBottom: '2px', textAlign: 'center' }}>Section 3 Design 1</h1>
                <p className="regular-text" style={{ marginTop: '0px', color: 'var(--text-dark)', textAlign: 'center', width: '100%' }}>
                  This is the one line text below Section 3.
                </p>
                <input type="text" className="input-v1" placeholder="Full Name" />
                <input type="email" className="input-v1" placeholder="Email" />
                <textarea className="textarea-v1" placeholder="Message here"></textarea>
                
                <div className="form-field-short" style={{ width: '100%' }}>
                  <CustomDropdown 
                    options={dropdownOptions} 
                    placeholder="Select here" 
                    value={selected}
                    onChange={setSelected}
                  />
                </div>

                <button className="btn-v1 form-button-short">
                  <Send size={18} />
                  Submit
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Card Grid Section - Dark Blue BG */}
        <section className="design-section" style={{ backgroundColor: 'var(--dark-blue)', textAlign: 'left' }}>
          <div className="content-container">
            <h1 style={{ color: 'white', textAlign: 'left' }}>Section 4 Design 1</h1>
            
            <div className="card-grid-section">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div key={num} className="feature-card">
                  <h2>Card {num}</h2>
                  <p>Hello I'm Card {num}, and this is my content.</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Design1;
