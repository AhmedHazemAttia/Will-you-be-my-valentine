import React, { useState } from "react";
const ButtonComponent = () => {
    const [yesSize, setYesSize] = useState(16);
    const [noText, setNoText] = useState("No");
    const [yestext, setYestext] = useState("yes");
    const noTexts = ["Are you sure?", "Really", "Positive?", "Think again...", "it can't be", "WHYYYYYYYY!!!!!?","I won't ask again", "Please?"];
    const [noIndex, setNoIndex] = useState(0);
    const [showButton, setShowButton] = useState(true)
  const handleNoClick = () => {
    setYesSize((prevSize) => prevSize + 25);
    setNoIndex((prevIndex) => (prevIndex + 1) % noTexts.length);
    setNoText(noTexts[noIndex]);
  };

  const handleYesClick = () => {
    setYestext('i knew it my Love ❤️ May we have a life full of love and pizza ')
    setYesSize(50)
    setShowButton(false)
  }

  return (
    <div className="btn">
    <div className="d-flex justify-content-between w-50 mx-auto">
        <button
            className="btn btn-primary"
            style={{ fontSize: `${yesSize}px` }}
            onClick={handleYesClick}
        >
            {yestext}
        </button>
        { showButton && <button
            className="btn btn-danger"
            onClick={handleNoClick}
        >
            {noText}
        </button>}
    </div>
    </div>
);
};

export default ButtonComponent;