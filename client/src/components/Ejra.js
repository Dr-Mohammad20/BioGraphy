import React, { Component } from "react";
import SabegheStyle from "../Styles/SabegheStyle.module.css";

class Ejra extends Component {
  render() {
    return (
      <div className={SabegheStyle.aboutStyleParag} id="ejra">
        <h1 className={SabegheStyle.h1Font}>سوابق اجرایی</h1>
        <h3 className={SabegheStyle.h3Font}>سابقه 1</h3>
        <h3 className={SabegheStyle.h3Font}>سابقه 2</h3>
        <h3 className={SabegheStyle.h3Font}>سابقه 3</h3>
      </div>
    );
  }
}

export default Ejra;
