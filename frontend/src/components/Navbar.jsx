import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

const Navbar = ({ onSwitch, onGoToDesign1 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { 
      id: 1, 
      label: 'Items 1', 
      disabled: false,
      items: ['Item 1', 'Item 2', 'Item 3']
    },
    { 
      id: 2, 
      label: 'Items 2', 
      disabled: isMobile, 
      items: ['Item 4', 'Item 5', 'Item 6'] 
    }
  ];

  const handleMobileClick = (item) => {
    if (item.disabled) return;
    setActiveSubMenu(activeSubMenu === item.id ? null : item.id);
  };

  return (
    <nav className="sticky-nav">
      <div className="nav-inner">
        <h2 className="nav-logo" onClick={onGoToDesign1} style={{ cursor: 'pointer' }}>This is the Nav</h2>
        
        {/* Desktop Nav */}
        <div className="nav-items desktop-only">
          {navItems.map((item) => (
            <div key={item.id} className="nav-item-container">
              <span className="nav-item-trigger">{item.label}</span>
              <div className="nav-list">
                {item.items.map((sub, idx) => (
                  <div key={idx} className="nav-list-item">{sub}</div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-only">
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && isMobile && (
        <div className="mobile-nav-overlay">
          <div className="mobile-nav-content">
            {navItems.map((group) => (
              <div key={group.id} className="mobile-nav-group">
                <div 
                  className={`mobile-nav-main ${group.disabled ? 'disabled-item' : ''}`}
                  onClick={() => handleMobileClick(group)}
                  style={{ cursor: group.disabled ? 'not-allowed' : 'pointer', display: 'flex', justifyContent: 'space-between', padding: '10px' }}
                >
                  <span style={{ color: group.disabled ? 'var(--hint-gray)' : 'var(--dark-blue)' }}>
                    {group.label} {group.disabled && <small>(Disabled)</small>}
                  </span>
                  {!group.disabled && (
                    activeSubMenu === group.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />
                  )}
                </div>
                
                {activeSubMenu === group.id && !group.disabled && (
                  <div className="mobile-sub-list">
                    {group.items.map((sub, idx) => (
                      <div 
                        key={idx} 
                        className="mobile-sub-item"
                        onClick={() => {
                          setIsMenuOpen(false);
                          onGoToDesign1();
                        }}
                        style={{ paddingLeft: '20px', cursor: 'pointer' }}
                      >
                        {sub}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Design Toggle (Optional, hidden on mobile) */}
            {!isMobile && (
              <button className="btn-v1" onClick={onSwitch} style={{ marginTop: '20px' }}>
                Switch Design
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
