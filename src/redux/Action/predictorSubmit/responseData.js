import predictorList from "../../../models/predictorList.model";

export const responseData = (values) => async (dispatch) => {
  try {
    dispatch({ type: "USER_DATA_REQUEST" });
    const { data } = await predictorList.formSubmitData(values);
    const { predictorResList } = data;

    let courseList = [];
    predictorResList.map((allBasedCollegeList) => {
      let cscollegeName = allBasedCollegeList["cs_collegename"];
      if (
        !courseList.some((course) => course.cs_collegename === cscollegeName)
      ) {
        courseList.push({
          cs_sno: allBasedCollegeList["cs_sno"],
          collegeId: allBasedCollegeList["collegeId"],
          cs_collegename: cscollegeName,
          j_course: [],
          courseID: [],
          quotaId: allBasedCollegeList["quotaId"],
          seatId: allBasedCollegeList["seatId"],
          cs_collegelogo: allBasedCollegeList["cs_collegelogo"],
          cs_college_url: allBasedCollegeList["cs_college_url"],
          cs_college_page_url: allBasedCollegeList["cs_college_page_url"],
          cs_col_state: allBasedCollegeList["cs_col_state"],
          j_closing_rank: [],
          jSeats: [],
          cs_collegeuniversity: allBasedCollegeList["cs_collegeuniversity"],
          cs_col_type: allBasedCollegeList["cs_col_type"],
          collegeTypeName: allBasedCollegeList["collegeTypeName"],
          collegeTypeUrl: allBasedCollegeList["collegeTypeUrl"],

          stateName: allBasedCollegeList["stateName"],
          cityName: allBasedCollegeList["cityName"],
        });
      }
      courseList.forEach((course) => {
        if (course.cs_collegename === cscollegeName) {
          let j_course = allBasedCollegeList["j_course"];
          let jSeats = allBasedCollegeList["jSeats"];
          if (!course["j_course"].includes(j_course)) {
            course.j_course.push(j_course);
          }

          // if (!course["jSeats"].some((seat) => seat.jSeats === jSeats)) {
          //   course.jSeats.push(jSeats)
          // }
          course.courseID.push(allBasedCollegeList["courseID"]);
          course.j_closing_rank.push(allBasedCollegeList["j_closing_rank"]);
        }
      });
    });
    dispatch({ type: "USER_DATA_SUBMIT", payload: courseList });
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
