import React, { useState } from 'react';

function AccordionItem({ title, content, isOpen, onClick }) {
  return (
    <div className="rounded-md mb-4 w-[150vh] h-12vh bg-custom-gray text-[20px]">
      <div className="accordion-title bg-custom-gray h-[12vh] w-[150vh] flex justify-between items-center text-[30px] pl-[5vh] pr-[5vh]" onClick={onClick}>
        <span>{title}</span>
        <span className='text-[70px]'>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="accordion-content p-4">{content}</div>}
    </div>
  );
}

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
}

export default Accordion;
