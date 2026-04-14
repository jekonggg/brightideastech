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
      items: ['List Item 1', 'List Item 2', 'List Item 3', 'List Item 4']
    },
    { 
      id: 2, 
      label: 'Items 2', 
      disabled: false, // No longer visually disabled
      items: ['List Item A', 'List Item B', 'List Item C', 'List Item D'] 
    }
  ];

  const handleMobileClick = (item) => {
    setActiveSubMenu(activeSubMenu === item.id ? null : item.id);
  };

  const handleSubItemClick = (subItem) => {
    if (isMobile) {
      // On mobile, just do nothing (no navigation)
      console.log(`Clicked ${subItem} on mobile - No navigation performed`);
    } else {
      // On desktop, navigate to Design 2
      onSwitch();
    }
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
                  <div 
                    key={idx} 
                    className="nav-list-item"
                    onClick={() => handleSubItemClick(sub)}
                  >
                    {sub}
                  </div>
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
                  className="mobile-nav-main"
                  onClick={() => handleMobileClick(group)}
                  style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', padding: '10px' }}
                >
                  <span style={{ color: 'var(--dark-blue)' }}>
                    {group.label}
                  </span>
                  {activeSubMenu === group.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                
                {activeSubMenu === group.id && (
                  <div className="mobile-sub-list">
                    {group.items.map((sub, idx) => (
                      <div 
                        key={idx} 
                        className="mobile-sub-item"
                        onClick={() => handleSubItemClick(sub)}
                        style={{ paddingLeft: '20px', cursor: 'pointer' }}
                      >
                        {sub}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
