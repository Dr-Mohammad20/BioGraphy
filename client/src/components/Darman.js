import React, { Component } from "react";
import SabegheStyle from "../Styles/SabegheStyle.module.css";

class Darman extends Component {
  render() {
    return (
      <div className={SabegheStyle.aboutStyleParag} id="darman">
        <h1 className={SabegheStyle.h1Font}>سوابق درمانی</h1>
        <h3 className={SabegheStyle.h3Font}>سابقه 1</h3>
        <h3 className={SabegheStyle.h3Font}>سابقه 2</h3>
        <h3 className={SabegheStyle.h3Font}>سابقه 3</h3>
      </div>
    );
  }
}

export default Darman;
