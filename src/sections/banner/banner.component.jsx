import React from "react";
import "./banner.component.scss";
function bannercomponent() {
  return (
    <div className=" banner">
      <div class="navbar navbar-expand-md navbar-light animate__animated animate__fadeIn wow">
        <div class="container">
          <button
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#myMenu"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="myMenu">
            <ul class="navbar-nav navbar-nav--menu ">
              <li class="nav-item active">
                <a href="#" class="nav-link">
                  TRANG CHỦ
                </a>
                <div class="nav-item__line"></div>
              </li>
              <li class="nav-item">
                <a href="#gioiThieu" class="nav-link">
                  GIỚI THIỆU
                </a>
                <div class="nav-item__line"></div>
              </li>
              <li class="nav-item">
                <a href="#banner_id" class="nav-link">
                  TIN TỨC
                </a>
                <div class="nav-item__line"></div>
              </li>
              <li class="nav-item">
                <a href="#new_id" class="nav-link">
                  VĂN BẢN
                </a>
                <div class="nav-item__line"></div>
              </li>
              <li class="nav-item">
                <a href="#question_id" class="nav-link">
                  ĐÀO TẠO
                </a>
                <div class="nav-item__line"></div>
              </li>
              <li class="nav-item">
                <a href="#footer_id" class="nav-link">
                  TRA CỨU
                </a>
                <div class="nav-item__line"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default bannercomponent;
