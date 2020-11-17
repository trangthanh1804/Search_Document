import React from "react";
import "./coure-list.component.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'

function CourseList({ listCourse }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };


  return (
    <div className="courseList ">
      <div className="container">
        <h2 className="courseList-content m-5">
          Explore our schools to find your perfect program
        </h2>

        <Slider {...settings}>
          {listCourse?.map((course) => (
            <Link to={`/detail-course/${course.maKhoaHoc}`} key={course.maKhoaHoc} className="slick-slide">
              <img
                className="slick-slide-image"
                src={course.hinhAnh}
                alt="hinhAnh"
              />
              <div>
                <h4 className="slick-slide-title">{course.tenKhoaHoc}</h4>
              </div>
              <div>
                <p className="slick-slide-title-1">{course.maKhoaHoc}</p>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CourseList;
