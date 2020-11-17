import React from "react";
import logo from "assets/images/logo.png";
import "./header.styles.scss";
function headercomponent() {
  return (
  <header className="header">
  <img src={logo} />
  <div className="header__item-1">
    <h1>BỘ TÀI NGUYÊN VÀ MÔI TRƯỜNG</h1>
    <span>
      ĐẠI HỌC TÀI NGUYÊN VÀ MÔI TRƯỜNG <br />
      THÀNH PHỐ HỒ CHÍ MINH
    </span>
  </div>
  <div className="header__item-2">
    <input type="text" placeholder="Tìm kiếm" />
    <span className="header__icon">
      <i className="fa fa-search" />
    </span>
  </div>
</header>

  );
}
export default headercomponent;
