import React from "react";

const Star = ({ selected = false, onClick = f => f }) => {
  //<div className={selected ? "star selected" : "star"} onClick={onClick} />

  return (
    <span
      className={selected ? "fas fa-star selected" : "fas fa-star"}
      onClick={onClick}
    />
  );
};

export default Star;
