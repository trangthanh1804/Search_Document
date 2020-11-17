const initialState = {
  categoriesCourse: null,
  listCourse: [],
  courseInfo: null
};

const courseReducer = (state = initialState, actions) => {
  const { payload } = actions;
  switch (actions.type) {
    case "GET_CATEGORIES_SUCCESS":
      state.categoriesCourse = payload;
      return { ...state };
    case "GET_LIST_COURSE":
      state.listCourse = payload;
      return { ...state };
    case "GET_INFO_COURSE":
      state.courseInfo = payload;
      return { ...state }
    default:
      return state;
  }
};
export default courseReducer;
