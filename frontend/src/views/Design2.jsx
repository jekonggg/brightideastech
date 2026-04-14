import React from 'react';
import Navbar from '../components/Navbar';
import { ArrowLeft, ArrowRight, XCircle } from 'lucide-react';

const Design2 = ({ onSwitch, onGoToDesign1 }) => {
  return (
    <div className="design-2">
      <Navbar onSwitch={onSwitch} onGoToDesign1={onGoToDesign1} />
      <main style={{ background: 'white' }}>
        
        {/* Section 1: Table & Headings */}
        <section className="design-section">
          <div className="content-container">
            <h1 style={{ fontWeight: 700, color: 'var(--dark-blue)', marginBottom: '0px' }}>I'm design two</h1>
            <h1 className="font-regular" style={{ color: 'var(--dark-blue)', marginBottom: '40px', fontWeight: 400 }}>This is a text, and you're close to finishing!</h1>
            
            <div className="table-outside-border-fix">
              <table className="design-2-table">
              <thead>
                <tr>
                  <td colSpan="3" className="table-header-merged">This is a table</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* Cell 1 */}
                  <td>
                    <div className="table-cell-content">
                      <p className="table-cell-title">Cell 1</p>
                      <ul className="table-text-list">
                        <li><div className="table-li-content">Some text here</div></li>
                        <li><div className="table-li-content">Some text here</div></li>
                        <li><div className="table-li-content">Some text here</div></li>
                      </ul>
                      <button className="btn-v1 btn-form-short" style={{ marginTop: '20px' }}>Action Button</button>
                    </div>
                  </td>
                  {/* Cell 2 */}
                  <td>
                    <div className="table-cell-content">
                      <p className="table-cell-title">Cell 2</p>
                      <ul className="table-text-list">
                        <li><div className="table-li-content">Some text here <XCircle size={16} className="table-delete-icon" /></div></li>
                        <li><div className="table-li-content">Some text here <XCircle size={16} className="table-delete-icon" /></div></li>
                        <li><div className="table-li-content">Some text here <XCircle size={16} className="table-delete-icon" /></div></li>
                        <li><div className="table-li-content">Some text here <XCircle size={16} className="table-delete-icon" /></div></li>
                        <li><div className="table-li-content">Some text here <XCircle size={16} className="table-delete-icon" /></div></li>
                      </ul>
                    </div>
                  </td>
                  {/* Cell 3 */}
                  <td>
                    <div className="table-cell-content">
                      <p className="table-cell-title">Cell 3</p>
                      <div style={{ height: '200px', width: '100%', overflow: 'hidden', borderRadius: '8px', marginTop: '15px' }}>
                        <img 
                          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80" 
                          alt="Fit" 
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  {/* Cell 4 */}
                  <td>
                    <div className="table-cell-content">
                      <p className="table-cell-title">Cell 4</p>
                      <ul className="table-text-list">
                        <li><div className="table-li-content">Some text here</div></li>
                        <li><div className="table-li-content">Some text here</div></li>
                        <li><div className="table-li-content">Some text here</div></li>
                      </ul>
                    </div>
                  </td>
                  {/* Cell 5 */}
                  <td>
                    <div className="table-cell-content" style={{ gap: '20px' }}>
                      <p className="table-cell-title">Cell 5</p>
                      <button className="btn-v1 btn-form-short">Standard Button</button>
                      <button className="btn-v2 btn-form-med">
                        <ArrowRight size={16} />
                        Icon Button
                      </button>
                    </div>
                  </td>
                  {/* Cell 6 */}
                  <td>
                    <div className="table-cell-content">
                      <p className="table-cell-title">Cell 6</p>
                      <ul className="table-text-list">
                        <li><div className="table-li-content">Some text here <XCircle size={16} className="table-delete-icon" /></div></li>
                        <li><div className="table-li-content">Some text here <XCircle size={16} className="table-delete-icon" /></div></li>
                        <li><div className="table-li-content">Some text here <XCircle size={16} className="table-delete-icon" /></div></li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </section>

        {/* Section 2: Stylized List */}
        <section className="list-section-wrapper">
          <div className="content-container">
            <div className="list-section-header">
              <h1>Section 2 Design 2</h1>
            </div>

            <div className="list-column-headers">
              <span>Text</span>
              <span>Text</span>
              <span>Button</span>
            </div>

            <div className="list-rows-container">
              {[1, 2, 3, 4].map((row) => (
                <div key={row} className="list-row-pill">
                  <div className="text-cell">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                  <div className="text-cell">
                    Phasellus imperdiet, nulla et dictum interdum.
                  </div>
                  <div className="button-cell">
                    <button className="btn-v1">A Button</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Banner with Overlay */}
        <section className="design-2-banner">
          <h2>Section 3 Header</h2>
          <p>
            This is the regular text centered within the banner. It remains highly visible 
            against the 65% opacity blue overlay, providing a premium feel to the overall design.
          </p>
        </section>

      </main>
    </div>
  );
};

export default Design2;
