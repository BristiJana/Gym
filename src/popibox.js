import React from "react";
import "./App.css";
const popibox = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        {props.content}
        <a
          href="#"
          class="link1"
          onClick={props.handleClose}
          style={{
            textDecoration: "none",
            color: "wheat",
            marginLeft: "250px",
            marginRight: "30px",
            fontSize: "15px",
          }}
        >
          Cancel
        </a>
        <a
          href="#"
          class="link2"
          onClick={props.handleClose}
          style={{
            textDecoration: "none",
            color: "#c21010",

            fontSize: "15px",
          }}
        >
          Ok
        </a>
      </div>
    </div>
  );
};

export default popibox;
