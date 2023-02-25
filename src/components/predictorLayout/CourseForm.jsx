import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { basicValidation } from "../../utils/validation";
import { useNavigate } from "react-router-dom";
import { responseData } from "../../redux/Action/predictorSubmit/responseData";
import { toast } from "react-toastify";

const CourseForm = ({ courseList, casteList, stateList }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userAuth = useSelector((state) => state.userLogin);
  const [selectedRank, setSelectedRank] = useState("");

  const { userInfo } = userAuth;

  //formik
  const { values, handleChange, errors, isSubmitting, touched, handleSubmit } =
    useFormik({
      initialValues: {
        rankId: "",
        stateId: "",
        casteId: "",
        genderId: "",
        abled: "0",
        courseList: "",
      },
      validationSchema: basicValidation,
      onSubmit: (values, actions) => {
        if (userInfo === null) {
          toast.warn("Login First");
        } else {
          alert("data submit");
          dispatch(responseData(values));
          navigate("/overallrank");
        }

        console.log(values);
      },
    });

  return (
    <div
      className="tab-pane fade"
      id="pills-profile"
      role="tabpanel"
      aria-labelledby="pills-profile-tab"
    >
      <div className="tab_warp">
        {/* <!-- checkbox-sec-here-ends --> */}
        <div className="fromblock d-block">
          <form
            action="overallrank.php"
            method="POST"
            onSubmit={handleSubmit}
            id="courseForm"
          >
            {/* <!-- checkbox-sec-here --> */}
            <div className="chectop" style={{ marginBottom: "25px" }}>
              <label htmlFor="r11" className="customradio">
                <input
                  type="radio"
                  id="r11"
                  className="customradioinput"
                  name="predictType"
                  value="Category Rank"
                  // defaultChecked={selectedRank === "Category Rank"}
                  onChange={(e) => setSelectedRank(e.target.value)}
                />
                <div className="radiobx">Category Rank</div>
              </label>
              <label htmlFor="r12" className="customradio">
                <input
                  type="radio"
                  id="r12"
                  className="customradioinput"
                  name="predictType"
                  value="General Rank"
                  // defaultChecked={selectedRank === "General Rank"}
                  onChange={(e) => setSelectedRank(e.target.value)}
                />
                <div className="radiobx">General Rank</div>
              </label>
            </div>
            <div className="form-row">
              <input
                type="hidden"
                name="formBased"
                id="formType"
                value="valueBased"
              />
              <label htmlFor="#">
                JEE Main Paper 1&nbsp;
                <span id="rankType" name="rankType">
                  {selectedRank}
                </span>
              </label>
              <input
                type="number"
                id="courseRank"
                name="rankId"
                placeholder="Enter Your Rank"
                className={
                  "form-control" +
                  (errors.rankId && touched.rankId ? " is-invalid" : "")
                }
                onChange={handleChange}
                value={values.rankId}
                //   onKeyPress="return onlyNumberKey(event)"
              />
              <div className="invalid-feedback">
                {errors.rankId && touched.rankId ? errors.rankId : null}
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="#">Course</label>
              <select
                id="courseList"
                name="courseList"
                className={
                  "form-control" +
                  (errors.courseList && touched.courseList ? " is-invalid" : "")
                }
                aria-label="Default select example"
                // defaultValue={"DEFAULT"}
                onChange={handleChange}
                value={values.courseList}
              >
                <option hidden value={"DEFAULT"}>
                  Select course
                </option>

                {courseList.length !== 0 ? (
                  courseList
                    .sort((a, b) => {
                      if (a.stateName < b.stateName) {
                        return -1;
                      }
                      if (a.stateName > b.stateName) {
                        return 1;
                      }
                      return 0;
                    })
                    .map((course) => (
                      <option value={course.courseId} key={course.courseId}>
                        {course.courseName}
                      </option>
                    ))
                ) : (
                  <option>No Data Found</option>
                )}
              </select>
              <div className="invalid-feedback">
                {errors.courseList && touched.courseList
                  ? errors.courseList
                  : null}
              </div>
            </div>
            <div className="form-row">
              <label htmlFor="#">Select your Home State</label>
              <select
                id="courseStateName"
                name="stateId"
                aria-label="Default select example"
                className={
                  "form-control" +
                  (errors.stateId && touched.stateId ? " is-invalid" : "")
                }
                onChange={handleChange}
                value={values.stateId}
                // defaultValue={"DEFAULT"}
              >
                <option hidden value="DEFAULT" name="course">
                  Select your Home State
                </option>

                {stateList.length !== 0 ? (
                  stateList.map((state) => (
                    <option value={state.stateId} key={state.stateId}>
                      {state.stateName}
                    </option>
                  ))
                ) : (
                  <option>No Data Found</option>
                )}
              </select>
              <div className="invalid-feedback">
                {errors.stateId && touched.stateId ? errors.stateId : null}
              </div>
            </div>
            <div className="form-row">
              <label htmlFor="#">Caste Group</label>
              <select
                id="courseCasteName"
                name="casteId"
                aria-label="Default select example"
                // defaultValue={"DEFAULT"}
                className={
                  "form-control" +
                  (errors.casteId && touched.casteId ? " is-invalid" : "")
                }
                onChange={handleChange}
                value={values.casteId}
              >
                <option hidden value="DEFAULT" name="caste">
                  Select Caste
                </option>

                {casteList.length !== 0 ? (
                  casteList.map((caste) => (
                    <option value={caste.casteName} key={caste.casteId}>
                      {caste.casteName}
                    </option>
                  ))
                ) : (
                  <option>No Data found</option>
                )}
              </select>
              <div className="invalid-feedback">
                {errors.casteId && touched.casteId ? errors.casteId : null}
              </div>
            </div>
            <div className="form-row">
              <label htmlFor="#">Gender</label>
              <div className="chectop m-0 is-invalid" onChange={handleChange}>
                <label htmlFor="r41" className="customradio">
                  <input
                    type="radio"
                    id="r41"
                    className="customradioinput"
                    name="genderId"
                    onChange={handleChange}
                    value="2"
                  />
                  <div className="radiobx">Female</div>
                </label>
                <label htmlFor="r51" className="customradio">
                  <input
                    type="radio"
                    id="r51"
                    className="customradioinput"
                    name="genderId"
                    onChange={handleChange}
                    value="1"
                  />
                  <div className="radiobx">Male</div>
                </label>
              </div>
              {errors.genderId && touched.genderId && (
                <div className="invalid-feedback">{errors.genderId}</div>
              )}
            </div>
            <div className="form-row">
              <label htmlFor="#">Are You Specially Abled?</label>
              <div className="chectop m-0" onChange={handleChange}>
                <label htmlFor="r61" className="customradio">
                  <input
                    type="radio"
                    id="r61"
                    className="customradioinput"
                    name="abled"
                    value="1"
                  />
                  <div className="radiobx">Yes</div>
                </label>
                <label htmlFor="r71" className="customradio">
                  <input
                    type="radio"
                    id="r71"
                    className="customradioinput"
                    name="abled"
                    value="0"
                    defaultChecked
                  />
                  <div className="radiobx">No</div>
                </label>
              </div>
            </div>
            <input type="hidden" name="csstateValue" id="csstateValue" />

            {userInfo ? (
              <input
                type="submit"
                disabled={isSubmitting}
                className="clg-sug-primebtn submitbtn"
                value="Submit"
              />
            ) : (
              <input
                type="submit"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                className="clg-sug-primebtn submitbtn"
                value="Submit"
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CourseForm;
