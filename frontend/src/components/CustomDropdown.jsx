import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const CustomDropdown = ({ options = [], placeholder = 'Select item', value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    onChange?.(option);
    setIsOpen(false);
  };

  const selectedOption = options.find(opt => opt.value === value) || options.find(opt => opt === value);
  const displayLabel = selectedOption?.label || selectedOption || placeholder;
  const hasValue = !!value;

  return (
    <div className={`dropdown-container ${isOpen ? 'is-open' : ''}`} ref={dropdownRef}>
      <div 
        className={`dropdown-trigger ${hasValue ? 'has-content' : 'has-placeholder'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{displayLabel}</span>
        <ChevronDown size={20} style={{ transition: 'transform 0.2s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
      </div>

      {isOpen && (
        <div className="dropdown-options">
          {options.map((option, index) => {
            const optionValue = option.value !== undefined ? option.value : option;
            const optionLabel = option.label !== undefined ? option.label : option;
            
            return (
              <div 
                key={index}
                className="dropdown-option"
                onClick={() => handleSelect(optionValue)}
              >
                {optionLabel}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
