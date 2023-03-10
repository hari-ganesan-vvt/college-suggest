import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MainSection from "../../components/overallRankLayout/MainSection";
import Assets from "../../imports/assets.imports";

const OverallRank = () => {
  const dispatch = useDispatch();
  const [activeEmoji, setActiveEmoji] = useState(false);
  // console.log(filterAll);
  //getValues session Storage
  const getValueData = sessionStorage.getItem("_values")
    ? JSON.parse(sessionStorage.getItem("_values"))
    : null;

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div className="overallrank">
        <section className="hero_sec clg-sugg_green">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-sm-12">
                <div className="d-block heroleftcon">
                  <h1 className="text-white t2">
                    Select JEE Main 2023 College Admission Counseling
                  </h1>
                  <p className="paratitle">
                    College Predictor Results Shown for {getValueData?.rankId}
                    &nbsp; JEE Paper-1
                    <span>{getValueData?.rankType}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ul className="n_breadcrumbs witheditpad">
            <li className="n_breadcrumbs_items">
              <Link to="/" className="n_breadcrumbs_items_links">
                Home
              </Link>
            </li>
            <li className="n_breadcrumbs_items">
              <Link to="/predictor" className="n_breadcrumbs_items_links">
                Predictors
              </Link>
            </li>
            <li className="n_breadcrumbs_items active">
              <a className="n_breadcrumbs_items_links">Overall</a>
            </li>
            {/* <button
              className="e_btn "
              data-bs-toggle="modal"
              data-bs-target="#exampleModalFullscreenMd"
            >
              <i className="material-icons cnlbutton vm me-1">edit</i>Edit
            </button> */}
          </ul>
        </section>

        <section className="typ-wrap">
          <div className="continer">
            <ul className="typ-wrap_flex">
              <li>
                <a href="#" className="typbx active">
                  <img src={Assets.allArrow} />
                  All
                </a>
              </li>
              <li>
                <a href="#" className="typbx">
                  <div className="minicons">
                    <img src={Assets.favicg} alt="" />
                  </div>
                  Recommended
                </a>
              </li>

              <li
                onClick={() => {
                  dispatch({
                    type: "FILTER_CHANGE_DATA",
                    payload: "HIGH_UPDATED",
                  });
                }}
              >
                <a href="#" className="typbx">
                  <img src={Assets.highEmoji} alt="HighEmoji" />
                  High
                </a>
              </li>

              <li
                onClick={() =>
                  dispatch({
                    type: "FILTER_CHANGE_DATA",
                    payload: "MEDIUM_UPDATED",
                  })
                }
              >
                <a href="#" className="typbx">
                  <img src={Assets.mediumEmoji} alt="mediumEmoji" />
                  Medium
                </a>
              </li>

              <li
                onClick={() =>
                  dispatch({
                    type: "FILTER_CHANGE_DATA",
                    payload: "LOW_UPDATED",
                  })
                }
              >
                <a href="#" className="typbx">
                  <img src={Assets.lowEmoji} alt="lowEmoji" />
                  Low
                </a>
              </li>
            </ul>
          </div>
        </section>
        <MainSection getValueData={getValueData} />
      </div>
    </>
  );
};

export default OverallRank;
