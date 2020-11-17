import React from "react";
import "./sidebar.styles.scss";
const SideBar = () => {
  return (
    <div>
      <div className="sidebar">
        <header>Menu</header>
        <ul>
          <li>
            <a href="#">
              <i className="fas fa-qrcode "> Trang Chủ</i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-link"> Hồ Sơ</i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-stream"> Quản Lí Hồ Sơ</i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-calendar-week"> Dịch Vụ</i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-question-circle"> Trang Tĩnh</i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-sliders-h"> Phân Quyền</i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
