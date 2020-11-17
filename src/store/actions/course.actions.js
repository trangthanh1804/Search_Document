import { getCategoriesCoursehttp, getListCoursehttp, getInfoCoursehttp } from "apis/courseHttp";

export const actGetCategorieCourse = () => {
  return (dispatch) => {
    getCategoriesCoursehttp()
      .then((categoriesCourse) => {
        dispatch({
          type: "GET_CATEGORIES_SUCCESS",
          payload: categoriesCourse,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actGetListCourse = () => {
  return (dispatch) => {
    getListCoursehttp()
      .then((listCourse) => {
        dispatch({
          type: "GET_LIST_COURSE",
          payload: listCourse,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actGetInfoCourse = (id) => {
  return (dispatch) => {
    getInfoCoursehttp(id)
      .then(course => {
        dispatch({
          type: "GET_INFO_COURSE",
          payload: course
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}
