import React, { Component } from "react";
import HomePageStyle from "../Styles/HomePageStyle.module.css";
import LeftMenu from "./LeftMenu";

import avatar from "../Images/avatar.jpg";

class HomePage extends Component {
  render() {
    return (
      <div className={HomePageStyle.MainDiv}>
        <div className={HomePageStyle.RightSide}>
          <LeftMenu />
        </div>
        <div className={HomePageStyle.LeftSide}>
          <div className={HomePageStyle.contetntHome}>
            <div className={HomePageStyle.contetnRight}>
              <img
                className={HomePageStyle.homePic}
                src={avatar}
                alt="Avatar"
              />
            </div>
            <div className={HomePageStyle.contetnLeft}>
              <h1 className={HomePageStyle.t1}>نام</h1>
              <h3 className={HomePageStyle.t2}>تحصیلات</h3>
              <h5 className={HomePageStyle.t3}>سمت</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
