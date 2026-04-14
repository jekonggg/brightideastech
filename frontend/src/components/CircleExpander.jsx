import React from 'react';

const shapeData = [
  { id: 1, label: 'Bottom Left Circle' },
  { id: 2, label: 'Middle Circle' },
  { id: 3, label: 'Upper Right Circle' }
];

const CircleExpander = ({ selectedId, onSelect }) => {
  return (
    <div className="hero-right">
      {/* Desktop Layout continues to use absolute positioning via CSS classes */}
      {/* For Mobile, we wrap them in specific grid containers defined in index.css */}
      <div className="circles-column">
        <div className="circles-grid-mobile">
          {shapeData.slice(0, 2).map((shape) => (
            <div
              key={shape.id}
              className={`shape-circle circle-${shape.id} ${selectedId === shape.id ? 'is-selected' : ''}`}
              onClick={() => onSelect(shape.id)}
            ></div>
          ))}
        </div>
        <div className="circle-bottom-mobile">
          <div
            className={`shape-circle circle-3 ${selectedId === 3 ? 'is-selected' : ''}`}
            onClick={() => onSelect(3)}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CircleExpander;
