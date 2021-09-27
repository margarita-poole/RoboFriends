import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        border: "5px solid black",
        height: "calc(100% - 172px)",
        overflow: "auto",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
