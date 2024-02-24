import { useState } from "react";
import "./Accordion.css";
export default function Accordion({ id, children, labelText, open, onClick }) {
  const handleClick = () => {
    onClick(id);
  };
  return (
    <div className="accordion">
      <div className="label-text" onClick={handleClick}>
        {labelText}
      </div>
      {!!open && <div>{children}</div>}
    </div>
  );
}
