import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { BASE_URL } from "../../baseUrl";
import { toast } from "react-toastify";
import { responseData } from "../../redux/Action/predictorSubmit/responseData";
import CourseForm from "./CourseForm";
import axios from "axios";
import * as Yup from "yup";

const TabForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userAuth = useSelector((state) => state.userLogin);
  const [selectedRank, setSelectedRank] = useState();
  const [stateList, setStateList] = useState([]);
  const [casteList, setCasteList] = useState([]);
  const [courseList, setCourseList] = useState([]);

  const { userInfo } = userAuth;

  //validation
  const validationSchema = Yup.object().shape({
    rankId: Yup.string().required("Rank is required!"),
    stateId: Yup.string().required("State is required!"),
    casteId: Yup.string().required("Caste is required!"),
    genderId: Yup.string().required("Gender is required!"),
  });

  //formik
  const { values, handleChange, errors, touched, handleSubmit } = useFormik({
    initialValues: {
      rankId: "",
      stateId: "",
      casteId: "",
      genderId: "",
      abled: "0",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      if (userInfo === null) {
        toast.warn("Login First");
      } else {
        dispatch(responseData(values));
        navigate("/overallrank");
      }
      // actions.resetForm();
    },
  });

  //predictorStateList
  const predictorStateList = async () => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}/predictor/predictorStateList`
      );
      setStateList(data.stateList);
    } catch (err) {
      console.log(err);
    }
  };

  //predictorCasteList
  const predictorCasteList = async () => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}/predictor/predictorCasteList`
      );
      setCasteList(data.predictorCasteList);
    } catch (err) {
      console.log(err);
    }
  };

  //predictorCourseList
  const predictorCourseList = async () => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}/predictor/predictorCourseList`
      );
      setCourseList(data.predictorCourseList);
    } catch (err) {
      console.log(err);
    }
  };

  //data fetching
  useEffect(() => {
    predictorStateList();
    predictorCasteList();
    predictorCourseList();
  }, []);

  return (
    <section className="tabsection">
      <div className="container">
        <div className="tabbx">
          <ul className="tabbxhead nav nav-pills" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Value Based
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Course Based
              </button>
            </li>
          </ul>
          {/* <!-- tab-content-here --> */}
          <div className="tabblock">
            <h3>Enter JEE Main Paper 1 Exam Details</h3>
            {/* <!-- tabcontent1-here --> */}
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="tab_warp">
                  {/* <!-- checkbox-sec-here-ends --> */}
                  <div className="fromblock d-block">
                    <form
                      method="POST"
                      action="overallrank.php"
                      id="valueForm"
                      onSubmit={handleSubmit}
                      className="needs-validation"
                      noValidate
                    >
                      {/* <!-- checkbox-sec-here --> */}
                      <div className="chectop" style={{ marginBottom: "25px" }}>
                        <label htmlFor="r1" className="customradio">
                          <input
                            type="radio"
                            id="r1"
                            className="customradioinput"
                            name="predictType"
                            value="Category Rank"
                            // checked={selectedRank === "Category Rank"}
                            onChange={(e) => setSelectedRank(e.target.value)}
                          />
                          <div className="radiobx">Category Rank</div>
                        </label>
                        <label htmlFor="r2" className="customradio">
                          <input
                            type="radio"
                            id="r2"
                            className="customradioinput"
                            name="predictType"
                            value="General Rank"
                            // checked={selectedRank === "General Rank"}
                            onChange={(e) => setSelectedRank(e.target.value)}
                          />
                          <div className="radiobx">General Rank</div>
                        </label>
                      </div>
                      <div className="form-row has-validation">
                        <input
                          type="hidden"
                          name="formBased"
                          id="formType"
                          value="valueBased"
                        />
                        <label htmlFor="validationCustom03">
                          JEE Main Paper 1 &nbsp;
                          <span id="rankType" name="rankType">
                            {selectedRank}
                          </span>
                        </label>
                        <input
                          type="number"
                          name="rankId"
                          placeholder="Enter Your Rank"
                          id="validationCustom03"
                          className={
                            "form-control" +
                            (errors.rankId && touched.rankId
                              ? " is-invalid"
                              : "")
                          }
                          onChange={handleChange}
                          value={values.rankId}
                          // value={initialState.rankId}
                          //   onkeypress= "return onlyNumberKey(event)"
                        />
                        <div className="invalid-feedback">
                          {errors.rankId && touched.rankId
                            ? errors.rankId
                            : null}
                        </div>
                      </div>
                      <div className="form-row">
                        <label htmlFor="#">Select your Home State</label>
                        <select
                          id="stateName"
                          name="stateId"
                          aria-label="Default select example"
                          className={
                            "form-control" +
                            (errors.stateId && touched.stateId
                              ? " is-invalid"
                              : "")
                          }
                          onChange={handleChange}
                          value={values.stateId}
                          // defaultValue={"DEFAULT"}
                          //   onchange="hiddenState()"
                        >
                          <option hidden value="DEFAULT">
                            Select your Home State
                          </option>
                          {stateList.length !== 0 ? (
                            stateList
                              .sort((a, b) => {
                                if (a.stateName < b.stateName) {
                                  return -1;
                                }
                                if (a.stateName > b.stateName) {
                                  return 1;
                                }
                                return 0;
                              })
                              .map((state) => (
                                <option
                                  value={state.stateId}
                                  key={state.stateId}
                                >
                                  {state.stateName}
                                </option>
                              ))
                          ) : (
                            <option>No Data Found!</option>
                          )}
                        </select>
                        <div className="invalid-feedback">
                          {errors.stateId && touched.stateId
                            ? errors.stateId
                            : null}
                        </div>
                      </div>
                      <div className="form-row">
                        <label htmlFor="#">Caste Group</label>
                        <select
                          id="casteName"
                          name="casteId"
                          aria-label="Default select example"
                          className={
                            "form-control" +
                            (errors.casteId && touched.casteId
                              ? " is-invalid"
                              : "")
                          }
                          onChange={handleChange}
                          value={values.casteId}
                        >
                          <option hidden value="DEFAULT">
                            Select Caste
                          </option>
                          {casteList.length !== 0 ? (
                            casteList.map((caste) => (
                              <option
                                value={caste.casteName}
                                key={caste.casteId}
                              >
                                {caste.casteName}
                              </option>
                            ))
                          ) : (
                            <option>No Data found</option>
                          )}
                        </select>
                        <div className="invalid-feedback">
                          {errors.casteId && touched.casteId
                            ? errors.casteId
                            : null}
                        </div>
                      </div>
                      <div className="form-row">
                        <label htmlFor="#">Gender</label>
                        <div
                          className="chectop m-0 is-invalid"
                          onChange={handleChange}
                        >
                          <label htmlFor="r4" className="customradio">
                            <input
                              type="radio"
                              id="r4"
                              className="customradioinput"
                              name="genderId"
                              onChange={handleChange}
                              value="2"
                            />
                            <div className="radiobx">Female</div>
                          </label>
                          <label htmlFor="r5" className="customradio">
                            <input
                              type="radio"
                              id="r5"
                              className="customradioinput"
                              name="genderId"
                              onChange={handleChange}
                              value="1"
                            />
                            <div className="radiobx">Male</div>
                          </label>
                        </div>
                        <div className="invalid-feedback">
                          {errors.genderId && touched.genderId
                            ? errors.genderId
                            : null}
                        </div>
                      </div>
                      <div className="form-row">
                        <label htmlFor="#">Are You Specially Abled?</label>
                        <div className="chectop m-0" onChange={handleChange}>
                          <label htmlFor="r6" className="customradio">
                            <input
                              type="radio"
                              id="r6"
                              className="customradioinput"
                              name="abled"
                              value="1"
                            />
                            <div className="radiobx">Yes</div>
                          </label>
                          <label htmlFor="r7" className="customradio">
                            <input
                              type="radio"
                              id="r7"
                              className="customradioinput"
                              name="abled"
                              value="0"
                              defaultChecked
                            />
                            <div className="radiobx">No</div>
                          </label>
                        </div>
                      </div>
                      <input
                        type="hidden"
                        name="formBased"
                        id="formType"
                        value="valueBased"
                      />
                      <input
                        type="hidden"
                        name="stateValue"
                        id="stateValue"
                        value=""
                      />
                      {userInfo ? (
                        <input
                          type="submit"
                          // disabled={isSubmitting}
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
              <CourseForm
                courseList={courseList}
                casteList={casteList}
                stateList={stateList}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabForm;