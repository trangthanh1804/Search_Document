import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./home.styles.scss";
import {
  actGetCategorieCourse,
  actGetListCourse,
} from "store/actions/course.actions";
import Headercomponent from "sections/header/header.component";
import Banner from "sections/banner/banner.component";
import BenefitCardsComponent from "sections/benefit-cards/benefit-cards.component";
import Studentstorycomponent from "sections/student-story/student-story.component";
import Footercomponent from "sections/footer/footer.component";
import CourseList from "sections/course-list/course-list.component";
import ListDocument from "sections/list-document/list-document";
const Home = () => {
  const dispatch = useDispatch();
  const listCourse = useSelector((state) => state.course.listCourse);

  useEffect(() => {
    dispatch(actGetCategorieCourse());
  }, []);

  useEffect(() => {
    dispatch(actGetListCourse());
  }, []);

  return (
    <div>
      <Headercomponent />

      <Banner />
      <ListDocument />
      {/* <CourseList listCourse={listCourse} /> */}

      {/* <BenefitCardsComponent /> */}

      {/* <h2 className="title">test scss</h2> */}

      {/* <Studentstorycomponent /> */}

      <Footercomponent />
    </div>
  );
};

export default Home;
