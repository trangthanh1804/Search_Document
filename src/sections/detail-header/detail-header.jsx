import React from "react";
import "./detail-header.scss";

function detailHeader({ courseInfo }) {
  return (
    <div className="detail-header">
      <div className="container">
        <div className="detail-header-content">
          <img
            src="//www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/6HcNzUU2MEOjriHI6Ly23u/f402335052b09a53f52435cc03cb1229/udacity-50-percent-off.svg"
            alt="udacity-50-percent-off"
          />
          <div
            className="hero-bg"
            style={{
              backgroundImage: `url(${courseInfo?.hinhAnh})`,
            }}
          >
            <div className="dark-overlay"></div>
            <div className="overlay">
              <div className="content__header">
                <h6>{courseInfo?.tenKhoaHoc}</h6>
                <h1>{courseInfo?.maKhoaHoc}</h1>
              </div>
              <div className="btn_wrapper">
                <button className="button btn button--white  ">
                  Download Syllabus
                </button>
                <button className="button btn button--blue ">Enroll Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default detailHeader;
