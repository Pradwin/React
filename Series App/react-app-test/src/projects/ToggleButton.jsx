import { useState } from "react";
import "../projects/ToggleButton.css";

export const ToggleButton = () => {
  const [isOn, setIsOn] = useState(true); 

  const handleClick = () => {
    setIsOn(!isOn);
  };

  const toggle = isOn ? "on" : "off";

  return (
    <>
      <div className="box" onClick={handleClick}>
        <div className="boxy">
          <div className={`circle ${toggle}`}>{toggle}</div>
        </div>
      </div>
    </>
  );
};
