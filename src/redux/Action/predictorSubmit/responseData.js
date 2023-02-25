import axios from "axios";
import { BASE_URL } from "../../../baseUrl";

export const responseData = (values) => async (dispatch) => {
  try {
    dispatch({ type: "USER_DATA_REQUEST" });
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${BASE_URL}/predictor/predictorResList`,
      values,
      requestOptions
    );

    const { predictorResList } = data;

    // let courseFilter = [];
    let courseList = [];
    let filterCourse = [];
    // let courseDetails = [];

    predictorResList.map((allBasedCollegeList) => {
      let cscollegeName = allBasedCollegeList["cs_collegename"];
      filterCourse.push(allBasedCollegeList["j_course"]);
      if (
        !courseList.some((course) => course.cs_collegename === cscollegeName)
      ) {
        courseList.push({
          cs_sno: allBasedCollegeList["cs_sno"],
          collegeId: allBasedCollegeList["collegeId"],
          j_course: [],
          courseID: [],
          quotaId: allBasedCollegeList["quotaId"],
          seatId: allBasedCollegeList["seatId"],
          cs_collegelogo: allBasedCollegeList["cs_collegelogo"],
          cs_college_url: allBasedCollegeList["cs_college_url"],
          cs_college_page_url: allBasedCollegeList["cs_college_page_url"],
          cs_col_state: allBasedCollegeList["cs_col_state"],
          j_closing_rank: [],
          cs_collegeuniversity: allBasedCollegeList["cs_collegeuniversity"],
          cs_col_type: allBasedCollegeList["cs_col_type"],
          collegeTypeName: allBasedCollegeList["collegeTypeName"],
          collegeTypeUrl: allBasedCollegeList["collegeTypeUrl"],
          cs_collegename: cscollegeName,
          stateName: allBasedCollegeList["stateName"],
          cityName: allBasedCollegeList["cityName"],
        });
      }
      courseList.forEach((course) => {
        if (course.cs_collegename === cscollegeName) {
          let j_course = allBasedCollegeList["j_course"];
          if (!course["j_course"].includes(j_course)) {
            course.j_course.push(j_course);
          }

          course.courseID.push(allBasedCollegeList["courseID"]);
          course.j_closing_rank.push(allBasedCollegeList["j_closing_rank"]);
        }
      });
    });
    dispatch({ type: "USER_DATA_SUBMIT", payload: courseList });
    // localStorage.setItem("values", JSON.stringify(values));
  } catch (error) {
    dispatch({
      type: "USER_DATA_FAILED",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
