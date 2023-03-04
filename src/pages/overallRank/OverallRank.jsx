import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import favicg from "../../assets/favicg.png";
import Footer from "../../components/footer/Footer";
import MainSection from "../../components/overallRankLayout/MainSection";

const OverallRank = () => {
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
                    College Predictor Results Shown for 75 JEE Paper-1
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
                  <div className="minicons">
                    <img src={favicg} alt="" />
                  </div>
                  Recommended
                </a>
              </li>

              <li>
                <a href="#" className="typbx">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 2C6.47 2 2 6.5 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM15.5 8C15.8978 8 16.2794 8.15804 16.5607 8.43934C16.842 8.72064 17 9.10218 17 9.5C17 9.89782 16.842 10.2794 16.5607 10.5607C16.2794 10.842 15.8978 11 15.5 11C15.1022 11 14.7206 10.842 14.4393 10.5607C14.158 10.2794 14 9.89782 14 9.5C14 9.10218 14.158 8.72064 14.4393 8.43934C14.7206 8.15804 15.1022 8 15.5 8ZM8.5 8C8.89782 8 9.27936 8.15804 9.56066 8.43934C9.84196 8.72064 10 9.10218 10 9.5C10 9.89782 9.84196 10.2794 9.56066 10.5607C9.27936 10.842 8.89782 11 8.5 11C8.10218 11 7.72064 10.842 7.43934 10.5607C7.15804 10.2794 7 9.89782 7 9.5C7 9.10218 7.15804 8.72064 7.43934 8.43934C7.72064 8.15804 8.10218 8 8.5 8ZM12 17.5C9.67 17.5 7.69 16.04 6.89 14H17.11C16.3 16.04 14.33 17.5 12 17.5Z"
                      fill="#0DA344"
                    />
                  </svg>
                  High
                </a>
              </li>

              <li>
                <a href="#" className="typbx">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM10.25 10C10.2547 10.1671 10.2259 10.3334 10.1652 10.4891C10.1046 10.6448 10.0133 10.7868 9.8968 10.9066C9.7803 11.0265 9.64096 11.1217 9.48701 11.1868C9.33306 11.2518 9.16763 11.2854 9.0005 11.2854C8.83337 11.2854 8.66794 11.2518 8.51399 11.1868C8.36004 11.1217 8.2207 11.0265 8.10421 10.9066C7.98771 10.7868 7.89643 10.6448 7.83576 10.4891C7.7751 10.3334 7.74627 10.1671 7.751 10C7.7602 9.67473 7.89588 9.36587 8.1292 9.13906C8.36253 8.91224 8.6751 8.78535 9.0005 8.78535C9.3259 8.78535 9.63847 8.91224 9.87179 9.13906C10.1051 9.36587 10.2408 9.67473 10.25 10ZM16.25 10C16.2547 10.1671 16.2259 10.3334 16.1652 10.4891C16.1046 10.6448 16.0133 10.7868 15.8968 10.9066C15.7803 11.0265 15.641 11.1217 15.487 11.1868C15.3331 11.2518 15.1676 11.2854 15.0005 11.2854C14.8334 11.2854 14.6679 11.2518 14.514 11.1868C14.36 11.1217 14.2207 11.0265 14.1042 10.9066C13.9877 10.7868 13.8964 10.6448 13.8358 10.4891C13.7751 10.3334 13.7463 10.1671 13.751 10C13.7602 9.67473 13.8959 9.36587 14.1292 9.13906C14.3625 8.91224 14.6751 8.78535 15.0005 8.78535C15.3259 8.78535 15.6385 8.91224 15.8718 9.13906C16.1051 9.36587 16.2408 9.67473 16.25 10ZM7.5 15.75C7.5 15.5511 7.57902 15.3603 7.71967 15.2197C7.86032 15.079 8.05109 15 8.25 15H15.75C15.9489 15 16.1397 15.079 16.2803 15.2197C16.421 15.3603 16.5 15.5511 16.5 15.75C16.5 15.9489 16.421 16.1397 16.2803 16.2803C16.1397 16.421 15.9489 16.5 15.75 16.5H8.25C8.05109 16.5 7.86032 16.421 7.71967 16.2803C7.57902 16.1397 7.5 15.9489 7.5 15.75Z"
                      fill="#F9960C"
                    />
                  </svg>
                  Medium
                </a>
              </li>

              <li>
                <a href="#" className="typbx">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 2C6.47 2 2 6.5 2 12C2 17.5 6.47 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM15.5 8C16.33 8 17 8.67 17 9.5C17 10.33 16.33 11 15.5 11C14.67 11 14 10.33 14 9.5C14 8.67 14.67 8 15.5 8ZM8.5 8C9.33 8 10 8.67 10 9.5C10 10.33 9.33 11 8.5 11C7.67 11 7 10.33 7 9.5C7 8.67 7.67 8 8.5 8ZM6.89 17C7.69 14.96 9.67 13.5 12 13.5C14.33 13.5 16.31 14.96 17.11 17H6.89Z"
                      fill="#DB1E1E"
                    />
                  </svg>
                  Low
                </a>
              </li>
            </ul>
          </div>
        </section>
        <MainSection getValueData={getValueData} />
      </div>
      <Footer />
    </>
  );
};

export default OverallRank;
