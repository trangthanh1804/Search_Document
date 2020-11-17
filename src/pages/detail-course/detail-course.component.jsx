import React from "react";
import Headercomponent from "sections/header/header.component";
import Footercomponent from "sections/footer/footer.component";
import DetailHeader from "sections/detail-header/detail-header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { actGetInfoCourse } from "../../store/actions/course.actions";
import { useLocation, useParams } from "react-router-dom";
import DegreeInfo from "../../sections/degree-info/degree-info";
const DetailCourse = () => {
  const dispatch = useDispatch();
  const courseInfo = useSelector((state) => state.course.courseInfo);
  const { id } = useParams();

  useEffect(() => {
    dispatch(actGetInfoCourse(id));
  }, []);

  return (
    <div>
      <Headercomponent />
      <DetailHeader courseInfo={courseInfo} />
      <DegreeInfo />
      <Footercomponent />
    </div>
  );
};

export default DetailCourse;
