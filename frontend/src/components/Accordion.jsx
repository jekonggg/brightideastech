import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item-custom">
      <div 
        className={`accordion-header-custom ${isOpen ? 'is-active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2>{title}</h2>
        <ChevronDown 
          size={20} 
          style={{ 
            transition: 'transform 0.2s', 
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' 
          }} 
        />
      </div>
      {isOpen && (
        <div className="accordion-content-custom">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const items = [
    {
      title: 'Accordion Title 1',
      content: 'Experience a seamless user interface designed specifically for high-efficiency workflows and modern aesthetics. This component utilizes CSS transitions to ensure smooth interactions across all devices. We prioritize accessibility and performance to deliver a top-tier digital experience for every visitor.'
    },
    {
      title: 'Accordion Title 2',
      content: 'Our design system is built on a foundation of clarity, consistency, and purposeful motion. Every element has been meticulously crafted to meet the highest standards of modern web development. You will find that navigating through this application feels intuitive and responsive at every turn.'
    },
    {
      title: 'Accordion Title 3',
      content: 'The 2x3 grid layout provides a structured approach to presenting complex information in an organized manner. By utilizing this format, we ensure that users can scan and digest content quickly without being overwhelmed. Efficiency and clarity are the primary goals of this specific architectural decision.'
    },
    {
      title: 'Accordion Title 4',
      content: 'Responsive design is at the core of our implementation strategy, ensuring a perfect look on everything from desktops to mobiles. We use flexible grids and optimized media queries to provide a consistent brand voice across all touchpoints. Your content will always remain accessible and visually appealing regardless of the screen size.'
    },
    {
      title: 'Accordion Title 5',
      content: 'Interaction design plays a crucial role in engaging users and guiding them through the application lifecycle. Subtle hover states and smooth expansion animations provide the micro-feedback necessary for a truly premium feel. We believe that the small details make the biggest difference in user satisfaction.'
    },
    {
      title: 'Accordion Title 6',
      content: 'Security and scalability are the invisible pillars that support this entire technical examination project. Every line of code is written with long-term maintenance and peak performance in mind for a robust system. We are committed to excellence in both the visual layer and the underlying architecture.'
    }
  ];

  return (
    <div className="section-2-design-1" style={{ padding: 0 }}>
      <h1 className="section-2-header" style={{ textAlign: 'left', width: '100%' }}>Section 2 Design 1</h1>
      
      <div className="accordion-grid">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
