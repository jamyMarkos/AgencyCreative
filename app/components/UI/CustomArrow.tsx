import React from "react";

const CustomArrow = ({ direction, onClick }) => {
  return (
    <button>
      {direction == "left" && <span>&#8592;</span>}
      {direction == "right" && <span>&#8594;</span>}
    </button>
  );
};

export default CustomArrow;
