import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import predictorList from "../../models/predictorList.model";
import { responseData } from "../../redux/Action/predictorSubmit/responseData";
import {
  MdHouse,
  MdMale,
  MdModeEdit,
  MdSearch,
  MdVerified,
} from "react-icons/md";
import Loading from "../Loading/Loading";
import MainCard from "./MainCard";

const MainSection = () => {
  const dispatch = useDispatch();
  const predictorData = useSelector((state) => state.responseData);
  const { predictorallData, loading, error } = predictorData;

  const [courseList, setCourseList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [collegeList, setCollegeList] = useState();
  const [itemPerpage, setIterPerPage] = useState(10);
  const [filterByCollege, setFilterByCollege] = useState({
    rankId: "15000",
    casteId: "OPEN",
    genderId: "1",
    homeStateId: "28",
    filterStateId: "28",
    cityId: "",
    abled: "0",
    courseList: "1",
    sortBy: "closingRank",
    orderBy: "desc",
  });

  const getValueData = sessionStorage.getItem("values")
    ? JSON.parse(sessionStorage.getItem("values"))
    : null;

  // filterState
  const handleFilterByCourse = async () => {
    try {
      const { data } = await predictorList.filterCourseList(filterByCollege);
      console.log(data);
      if (data) {
        // setCollegeList(data.predictorResList);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //stateList
  const predictorStateList = async () => {
    try {
      const { data } = await predictorList.stateList();
      setStateList(data.stateList);
    } catch (err) {
      console.log(err);
    }
  };

  //CourseList
  const predictorCourseList = async () => {
    try {
      const { data } = await predictorList.courseList();
      setCourseList(data.predictorCourseList);
    } catch (err) {
      console.log(err);
    }
  };

  //onChangeHandler
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterByCollege({ ...filterByCollege, [name]: value });
    console.log(name, value);
  };

  //showMore button
  const showMoreItem = () => {
    setIterPerPage((prev) => prev + 6);
  };

  useEffect(() => {
    if (predictorallData) {
      setCollegeList(predictorallData);
    }
  }, [predictorallData]);

  useEffect(() => {
    predictorStateList();
    predictorCourseList();
  }, []);

  useEffect(() => {
    if (getValueData) {
      dispatch(responseData(getValueData));
    }
  }, [dispatch]);

  console.log(collegeList);
  // console.log(getValueData);
  return (
    <section className="main_sec">
      <div className="container ">
        {loading ? (
          <Loading />
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div className="row">
            <div className="col-xl-8 col-lg-6 col-sm-12 custom-col-lay">
              <div className="mainblock">
                <div>
                  {collegeList && collegeList.length !== 0 ? (
                    collegeList.slice(0, itemPerpage).map((listdata, i) => {
                      return <MainCard listdata={listdata} key={i} />;
                    })
                  ) : (
                    <div>No data found</div>
                  )}
                </div>

                {predictorallData.length !== 0 && (
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
                      <div className="ticktext" style={{ maxWidth: "100%" }}>
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
                      <div className="ticktext" style={{ maxWidth: "100%" }}>
                        {/* {collegeList} */} Tamil Nadu
                      </div>
                    </div>
                    <div className="catticked" id="">
                      <span
                        className="material-icons cnlbutton"
                        style={{ color: "#119d78" }}
                      >
                        <MdMale />
                      </span>

                      <div className="ticktext" style={{ maxWidth: "100%" }}>
                        Male
                      </div>
                    </div>
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
                                  name="test1"
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
                                  name="test1"
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
                              <label htmlFor="r12" className="customradio">
                                <input
                                  type="radio"
                                  id="r12"
                                  className="customradioinput"
                                  name="test12"
                                />
                                <div className="radiobx">Percentage </div>
                              </label>
                            </li>
                            <li>
                              <label htmlFor="r22" className="customradio">
                                <input
                                  type="radio"
                                  id="r22"
                                  className="customradioinput"
                                  name="test12"
                                />
                                <div className="radiobx">Andhra Pradesh</div>
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
                      <div className="accordion-body" id="ownerShipFilter">
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
                                        onClick={handleFilterByCourse}
                                      />
                                      <div className="radiobx">
                                        {courseItem.courseName.split("(")[0]}
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
                                        // checked={
                                        //   selectedState === stateItem.stateId
                                        // }
                                        onChange={handleFilterChange}
                                        onClick={handleFilterByCourse}
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
          </div>
        )}
      </div>
    </section>
  );
};

export default MainSection;
