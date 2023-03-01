import React, { useEffect, useState } from "react";
import predictorList from "../../models/predictorList.model";
import {
  MdHouse,
  MdMale,
  MdModeEdit,
  MdSearch,
  MdVerified,
  MdFemale,
  MdClose,
} from "react-icons/md";
import _ from "lodash";
import Loading from "../Loading/Loading";
import MainCard from "./MainCard";

const MainSection = () => {
  //getValues session Storage
  const getValueData = sessionStorage.getItem("_values")
    ? JSON.parse(sessionStorage.getItem("_values"))
    : null;

  //state
  const [courseList, setCourseList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [collegeList, setCollegeList] = useState();
  const [itemPerpage, setIterPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [filterByCollege, setFilterByCollege] = useState({
    rankId: getValueData?.rankId,
    casteId: getValueData?.casteId,
    genderId: getValueData?.genderId,
    homeStateId: getValueData?.stateId,
    filterStateId: "",
    cityId: "",
    abled: getValueData?.abled,
    courseList: "",
    sortBy: "",
    orderBy: "",
  });

  //findValues && selectedValues
  const findFormState = _.find(stateList, {
    stateId: parseInt(getValueData?.stateId),
  });

  const selectedStateValue = _.find(stateList, {
    stateId: parseInt(filterByCollege.filterStateId),
  });

  const selectedCourseValue = _.find(courseList, {
    courseId: parseInt(filterByCollege.courseList),
  });

  const handleSelectedAllClear = () => {
    setFilterByCollege({
      ...filterByCollege,
      filterStateId: "",
      // cityId: "",
      courseList: "",
      sortBy: "",
      orderBy: "",
    });
  };

  //form submitValues
  const responseSubmitData = async () => {
    setLoading(true);
    try {
      const { data } = await predictorList.formSubmitData(getValueData);
      const { predictorResList } = data;
      let courseList = [];

      predictorResList.map((allBasedCollegeList) => {
        let cscollegeName = allBasedCollegeList["cs_collegename"];
        let seat = allBasedCollegeList["jSeats"];
        let fees = allBasedCollegeList["jFees"];
        if (
          !courseList.some((course) => course.cs_collegename === cscollegeName)
        ) {
          courseList.push({
            cs_sno: allBasedCollegeList["cs_sno"],
            collegeId: allBasedCollegeList["collegeId"],
            cs_collegename: cscollegeName,
            j_course: [
              {
                j_course_name: allBasedCollegeList["j_course"],
                jSeats: [seat],
                jFees: [fees],
              },
            ],
            courseID: [allBasedCollegeList["courseID"]],
            quotaId: allBasedCollegeList["quotaId"],
            seatId: allBasedCollegeList["seatId"],
            cs_collegelogo: allBasedCollegeList["cs_collegelogo"],
            cs_college_url: allBasedCollegeList["cs_college_url"],
            cs_college_page_url: allBasedCollegeList["cs_college_page_url"],
            cs_col_state: allBasedCollegeList["cs_col_state"],
            j_closing_rank: [allBasedCollegeList["j_closing_rank"]],
            cs_collegeuniversity: allBasedCollegeList["cs_collegeuniversity"],
            cs_col_type: allBasedCollegeList["cs_col_type"],
            collegeTypeName: allBasedCollegeList["collegeTypeName"],
            collegeTypeUrl: allBasedCollegeList["collegeTypeUrl"],
            stateName: allBasedCollegeList["stateName"],
            cityName: allBasedCollegeList["cityName"],
          });
        } else {
          courseList.forEach((course) => {
            if (course.cs_collegename === cscollegeName) {
              let j_course = allBasedCollegeList["j_course"];
              course.j_course.jFees = [...new Set(course.j_course.jFees)];

              let index = course.j_course.findIndex(
                (c) => c.j_course_name === j_course
              );
              if (index !== -1) {
                if (!course.j_course[index].jSeats.includes(seat)) {
                  course.j_course[index].jSeats.push(seat);
                }
              } else {
                course.j_course.push({
                  j_course_name: j_course,
                  jSeats: [seat],
                  jFees: [fees],
                });
              }
              course.courseID.push(allBasedCollegeList["courseID"]);
              course.j_closing_rank.push(allBasedCollegeList["j_closing_rank"]);
            }
          });
        }
      });
      console.log("update data", courseList);
      // console.log(courseList[0].j_course);
      setCollegeList(courseList);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  //filterState;
  // const handleFilterByCourse = async () => {
  //   try {
  //     const { data } = await predictorList.filterCourseList(filterByCollege);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //stateList
  const predictorStateList = async () => {
    try {
      const { data } = await predictorList.stateList();

      let resultData = data.stateList.sort((a, b) => {
        if (a.stateName < b.stateName) {
          return -1;
        }
        if (a.stateName > b.stateName) {
          return 1;
        }
        return 0;
      });
      setStateList(resultData);
    } catch (err) {
      console.log(err);
    }
  };

  //CourseList
  const predictorCourseList = async () => {
    try {
      const { data } = await predictorList.courseList();
      let resultData = data.predictorCourseList.sort((a, b) => {
        if (a.stateName < b.stateName) {
          return -1;
        }
        if (a.stateName > b.stateName) {
          return 1;
        }
        return 0;
      });
      setCourseList(resultData);
    } catch (err) {
      console.log(err);
    }
  };

  //onChangeHandler
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterByCollege({ ...filterByCollege, [name]: value });
    // console.log(name, value);
  };

  //showMore button
  const showMoreItem = () => {
    setIterPerPage((prev) => prev + 6);
  };

  useEffect(() => {
    responseSubmitData();
    predictorStateList();
    predictorCourseList();
  }, []);

  // console.log(findValues);
  return (
    <section className="main_sec">
      <div className="container ">
        {loading ? (
          <Loading />
        ) : (
          <div className="row">
            {collegeList && collegeList.length !== 0 ? (
              <>
                <>
                  <div className="col-xl-8 col-lg-6 col-sm-12 custom-col-lay">
                    <div className="mainblock">
                      <div>
                        {collegeList &&
                          collegeList
                            .slice(0, itemPerpage)
                            .map((listdata, i) => {
                              return <MainCard listdata={listdata} key={i} />;
                            })}
                      </div>

                      {collegeList && collegeList.length !== 0 && (
                        <button className="loadmore" onClick={showMoreItem}>
                          Loadmore
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 mobilehide">
                    <div className="sticybx">
                      <div className="d-block">
                        <div className="cat-show-box" id="formValues">
                          {/* <div
                    className="catticked dark"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalFullscreenMd"
                    id=""
                  >
                    <span
                      className="material-icons cnlbutton"
                      style={{ color: "#000" }}
                    >
                      edit
                    </span>
                    <div className="ticktext" style={{ maxWidth: "100%" }}>
                      Edit
                    </div>
                  </div> */}
                          <button
                            className="e_btn"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalFullscreenMd"
                          >
                            <MdModeEdit className="m-edit-icon" />
                            Edit
                          </button>
                          <div className="catticked" id="">
                            <span
                              className="material-icons cnlbutton"
                              style={{ color: "#119d78" }}
                            >
                              <MdVerified />
                            </span>
                            <div
                              className="ticktext"
                              style={{ maxWidth: "100%" }}
                            >
                              {getValueData?.rankId}
                            </div>
                          </div>
                          <div className="catticked" id="">
                            <span
                              className="material-icons cnlbutton"
                              style={{ color: "#119d78" }}
                            >
                              <MdHouse />
                            </span>
                            <div
                              className="ticktext"
                              style={{ maxWidth: "100%" }}
                            >
                              {/* {collegeList} */}
                              {findFormState?.stateName}
                            </div>
                          </div>
                          <div className="catticked" id="">
                            <span
                              className="material-icons cnlbutton"
                              style={{ color: "#119d78" }}
                            >
                              {getValueData?.genderId === "1" ? (
                                <MdMale />
                              ) : (
                                <MdFemale />
                              )}
                            </span>

                            <div
                              className="ticktext"
                              style={{ maxWidth: "100%" }}
                            >
                              {getValueData?.genderId === "1"
                                ? "Male"
                                : "Female"}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="d-block mb-2">
                        <h3 className="fl_txt text-left">Filter</h3>
                        <div className="cat-show-box" id="desktopFilterTag">
                          <div
                            className="catticked"
                            id="FTclear"
                            // onclick="closeFilter('FTclear','all')"
                          >
                            <span
                              className="material-icons cnlbutton"
                              onClick={handleSelectedAllClear}
                            >
                              <MdClose />
                            </span>
                            <div className="ticktext">Clear All</div>
                          </div>

                          {filterByCollege.orderBy && (
                            <div
                              className="catticked"
                              id="FTorderasc"
                              // onclick="closeFilter('FTorder','asc')"
                            >
                              <span
                                className="material-icons cnlbutton"
                                onClick={() =>
                                  setFilterByCollege({
                                    ...filterByCollege,
                                    orderBy: "",
                                  })
                                }
                              >
                                <MdClose />
                              </span>
                              <div className="ticktext">
                                {filterByCollege.orderBy == "asce"
                                  ? "Ascending"
                                  : "Decending"}
                              </div>
                            </div>
                          )}
                          {filterByCollege.sortBy && (
                            <div
                              className="catticked"
                              id="FTSortnirfRank"
                              // onclick="closeFilter('FTSort','nirfRank')"
                            >
                              <span
                                className="material-icons cnlbutton"
                                onClick={() =>
                                  setFilterByCollege({
                                    ...filterByCollege,
                                    sortBy: "",
                                  })
                                }
                              >
                                <MdClose />
                              </span>
                              <div className="ticktext">
                                {filterByCollege?.sortBy}
                              </div>
                            </div>
                          )}

                          {selectedCourseValue?.courseName && (
                            <div
                              className="catticked"
                              id="FTorderasc"
                              // onclick="closeFilter('FTorder','asc')"
                            >
                              <span
                                className="material-icons cnlbutton"
                                onClick={() =>
                                  setFilterByCollege({
                                    ...filterByCollege,
                                    courseList: "",
                                  })
                                }
                              >
                                <MdClose />
                              </span>
                              <div className="ticktext">
                                {selectedCourseValue?.courseName.split("(")[0]}
                              </div>
                            </div>
                          )}

                          {selectedStateValue?.stateName && (
                            <div
                              className="catticked"
                              id="FTorderasc"
                              // onclick="closeFilter('FTorder','asc')"
                            >
                              <span
                                className="material-icons cnlbutton"
                                onClick={() =>
                                  setFilterByCollege({
                                    ...filterByCollege,
                                    filterStateId: "",
                                  })
                                }
                              >
                                <MdClose />
                              </span>
                              <div className="ticktext">
                                {selectedStateValue?.stateName}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div
                        className="course-accordion accordion"
                        id="accordionCourse4"
                      >
                        <div className="accordion-item">
                          <button
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne1"
                            className="collapsed"
                            aria-expanded="false"
                            fdprocessedid="sxwxf"
                          >
                            Order by
                          </button>
                          <div
                            id="collapseOne1"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionCourse3"
                          >
                            <div className="accordion-body" id="stateFilter">
                              <div className="acc_heightbx">
                                <ul className="acc-list " id="state_list">
                                  <li>
                                    <label htmlFor="r1" className="customradio">
                                      <input
                                        type="radio"
                                        id="r1"
                                        className="customradioinput"
                                        name="orderBy"
                                        value="asce"
                                        onChange={handleFilterChange}
                                        // onClick={ascendingEvent}
                                      />
                                      <div className="radiobx">Ascending </div>
                                    </label>
                                  </li>
                                  <li>
                                    <label htmlFor="r2" className="customradio">
                                      <input
                                        type="radio"
                                        id="r2"
                                        className="customradioinput"
                                        name="orderBy"
                                        value="desc"
                                        onChange={handleFilterChange}
                                        // onClick={descendingEvent}
                                      />
                                      <div className="radiobx">Descending</div>
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <button
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne2"
                            className="collapsed"
                            aria-expanded="false"
                            fdprocessedid="sxwxf"
                          >
                            Sort by
                          </button>
                          <div
                            id="collapseOne2"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionCourse3"
                          >
                            <div className="accordion-body" id="stateFilter">
                              <div className="acc_heightbx">
                                <ul className="acc-list " id="state_list">
                                  <li>
                                    <label
                                      htmlFor="r12"
                                      className="customradio"
                                    >
                                      <input
                                        type="radio"
                                        id="r12"
                                        className="customradioinput"
                                        name="sortBy"
                                        value="closingRank"
                                        onChange={handleFilterChange}
                                      />
                                      <div className="radiobx">
                                        Closing Rank
                                      </div>
                                    </label>
                                  </li>
                                  <li>
                                    <label
                                      htmlFor="r13"
                                      className="customradio"
                                    >
                                      <input
                                        type="radio"
                                        id="r13"
                                        className="customradioinput"
                                        name="sortBy"
                                        value="NIRFRank"
                                        onChange={handleFilterChange}
                                      />
                                      <div className="radiobx">NIRF Rank </div>
                                    </label>
                                  </li>
                                  <li>
                                    <label
                                      htmlFor="r22"
                                      className="customradio"
                                    >
                                      <input
                                        type="radio"
                                        id="r22"
                                        className="customradioinput"
                                        name="sortBy"
                                        value="medianSalary"
                                        onChange={handleFilterChange}
                                      />
                                      <div className="radiobx">
                                        Median Salary
                                      </div>
                                    </label>
                                  </li>
                                  <li>
                                    <label
                                      htmlFor="r24"
                                      className="customradio"
                                    >
                                      <input
                                        type="radio"
                                        id="r24"
                                        className="customradioinput"
                                        name="sortBy"
                                        value="placement"
                                        onChange={handleFilterChange}
                                      />
                                      <div className="radiobx">Placement</div>
                                    </label>
                                  </li>
                                  <li>
                                    <label
                                      htmlFor="r25"
                                      className="customradio"
                                    >
                                      <input
                                        type="radio"
                                        id="r25"
                                        className="customradioinput"
                                        name="sortBy"
                                        value="fees"
                                        onChange={handleFilterChange}
                                      />
                                      <div className="radiobx">Fees</div>
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item">
                          <button
                            className="collapsed1"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree3"
                            aria-expanded="true"
                            fdprocessedid="cm6dn"
                          >
                            Courses
                          </button>
                          <div
                            id="collapseThree3"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#accordionCourse3"
                          >
                            <div
                              className="accordion-body"
                              id="ownerShipFilter"
                            >
                              <div className="sidebar-widget">
                                <div className="widget-search d-block w-100">
                                  <form action="#" className="d-block">
                                    <div className="search_block mini">
                                      <MdSearch className="sicn" />
                                      <input
                                        type="text"
                                        placeholder="Find Your Course"
                                      />
                                    </div>
                                  </form>
                                </div>
                              </div>

                              <div className="acc_heightbx">
                                <ul className="acc-list " id="ownershipnew">
                                  {courseList &&
                                    courseList.map((courseItem) => {
                                      return (
                                        <li key={courseItem.courseId}>
                                          <label
                                            htmlFor={courseItem.courseId}
                                            className="customradio"
                                          >
                                            <input
                                              type="radio"
                                              id={courseItem.courseId}
                                              className="customradioinput"
                                              name="courseList"
                                              value={courseItem.courseId}
                                              // checked={
                                              //   filterByCollege.courseList ===
                                              //   courseItem.courseId
                                              // }
                                              onChange={handleFilterChange}
                                              // onClick={handleFilterByCourse}
                                            />
                                            <div className="radiobx">
                                              {
                                                courseItem.courseName.split(
                                                  "("
                                                )[0]
                                              }
                                            </div>
                                          </label>
                                        </li>
                                      );
                                    })}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <button
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne4"
                            className="collapsed"
                            aria-expanded="false"
                            fdprocessedid="sxwxf"
                          >
                            State
                          </button>
                          <div
                            id="collapseOne4"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionCourse3"
                          >
                            <div className="accordion-body" id="stateFilter">
                              <div className="acc_heightbx">
                                <ul className="acc-list " id="ownershipnew">
                                  {stateList &&
                                    stateList.map((stateItem) => {
                                      return (
                                        <li key={stateItem.stateId}>
                                          <label
                                            htmlFor={stateItem.stateName}
                                            className="customradio"
                                          >
                                            <input
                                              type="radio"
                                              id={stateItem.stateName}
                                              name="filterStateId"
                                              value={stateItem.stateId}
                                              className="customradioinput"
                                              // checked={console.log(
                                              //   filterByCollege.filterStateId ===
                                              //     stateItem.stateId
                                              // )}

                                              onChange={handleFilterChange}
                                              // onClick={handleFilterByCourse}
                                            />
                                            <div className="radiobx">
                                              {stateItem.stateName}
                                            </div>
                                          </label>
                                        </li>
                                      );
                                    })}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <div className="accordion-item">
                  <button
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne5"
                    className="collapsed"
                    aria-expanded="false"
                    fdprocessedid="sxwxf"
                  >
                    City
                  </button>
                  <div
                    id="collapseOne5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionCourse3"
                  >
                    <div className="accordion-body" id="stateFilter">
                      <div className="acc_heightbx">
                        <ul className="acc-list " id="ownershipnew">
                          <li>
                            <label htmlFor="r1345" className="customradio">
                              <input
                                type="radio"
                                id="r1345"
                                className="customradioinput"
                                name="test1345"
                              />
                              <div className="radiobx">
                                Computer Science Engineering
                              </div>
                            </label>
                          </li>
                          <li>
                            <label htmlFor="r2345" className="customradio">
                              <input
                                type="radio"
                                id="r2345"
                                className="customradioinput"
                                name="test1345"
                              />
                              <div className="radiobx">
                                Electronics and Communication Engineering
                              </div>
                            </label>
                          </li>
                          <li>
                            <label htmlFor="r3345" className="customradio">
                              <input
                                type="radio"
                                id="r3345"
                                className="customradioinput"
                                name="test1345"
                              />
                              <div className="radiobx">
                                Electrical Engineering
                              </div>
                            </label>
                          </li>

                          <li>
                            <label htmlFor="r3445" className="customradio">
                              <input
                                type="radio"
                                id="r3445"
                                className="customradioinput"
                                name="test134"
                              />
                              <div className="radiobx">Civil Engineering</div>
                            </label>
                          </li>

                          <li>
                            <label htmlFor="r3545" className="customradio">
                              <input
                                type="radio"
                                id="r3545"
                                className="customradioinput"
                                name="test134"
                              />
                              <div className="radiobx">
                                Electrical and Electronics Engineering
                              </div>
                            </label>
                          </li>
                          <li>
                            <label htmlFor="r3645" className="customradio">
                              <input
                                type="radio"
                                id="r3645"
                                className="customradioinput"
                                name="test1345"
                              />
                              <div className="radiobx">
                                Mechanical Engineering
                              </div>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div> */}
                      </div>
                    </div>
                  </div>
                </>
              </>
            ) : (
              <div>No data found</div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default MainSection;
