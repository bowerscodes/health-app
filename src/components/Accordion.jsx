import React, { useState } from 'react';


import '../styles/scss/accordion.scss';

const Accordion = ({ title, content }) => {

const [open, setOpen] = useState(false);

  return(
    <div className="accordion">
      <div className="accordion-item">
        <div
          className="accordion-title"
          onClick={() => setOpen(!open)}
        >
          <div>{title}</div>
          <div>{open ? '-' : '+'}</div>  
        </div>
        {open && <div className="accordion-content">{content}</div>}
      </div>
    </div>
  );
};

export default Accordion;