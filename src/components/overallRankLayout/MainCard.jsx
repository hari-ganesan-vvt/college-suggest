import React from "react";
import { MdOutlinePayments, MdSearch, MdHouse } from "react-icons/md";
import Carousel from "./Carousel";
import noLogo from "../../assets/no_logo.webp";

const MainCard = ({ listdata, stateInfo }) => {
  return (
    <div className="main_card">
      <div className="main_card_head d-flex align-items-center">
        <div className="m-logo_bx">
          <img
            src={
              listdata.cs_collegelogo == ""
                ? noLogo
                : `https://collegesuggest.com/assets/images/${listdata.cs_collegelogo}`
            }
            alt="collegeLogo"
          />
        </div>
        <div className="m-logo_bx_right">
          <a className="titlelinks">{listdata.cs_collegename}</a>

          {stateInfo.stateName === listdata.stateName && (
            <span className="material-icons m_logo_bx_icn">
              <MdHouse />
            </span>
          )}

          <p className="locationpara">
            {listdata.cityName},{listdata?.stateName}
          </p>
        </div>
      </div>
      <div className="main_card_body">
        <div className="search_block">
          <MdSearch className="sicn" />
          <input type="text" placeholder="Find Your Course" />

          <div className="s_list_modal">
            <ul>
              <li className="courseId">
                <a>
                  <div>
                    <div className="minimg">
                      <svg
                        className="allsvg"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 20 12"
                        fill="none"
                      >
                        <path
                          d="M7.075 6.99998H1C0.716667 6.99998 0.479333 6.90398 0.288 6.71198C0.0960001 6.52064 0 6.28331 0 5.99998C0 5.71664 0.0960001 5.47898 0.288 5.28698C0.479333 5.09564 0.716667 4.99998 1 4.99998H7.075L4.75 2.64998C4.56667 2.46664 4.471 2.23764 4.463 1.96298C4.45433 1.68764 4.55 1.44998 4.75 1.24998C4.93333 1.06664 5.16667 0.974976 5.45 0.974976C5.73333 0.974976 5.96667 1.06664 6.15 1.24998L10.2 5.29998C10.4 5.49998 10.5 5.73331 10.5 5.99998C10.5 6.26664 10.4 6.49998 10.2 6.69998L6.15 10.75C5.96667 10.9333 5.73767 11.0293 5.463 11.038C5.18767 11.046 4.95 10.95 4.75 10.75C4.56667 10.5666 4.475 10.3333 4.475 10.05C4.475 9.76664 4.56667 9.53331 4.75 9.34998L7.075 6.99998ZM12 2.99998C11.7167 2.99998 11.4793 2.90398 11.288 2.71198C11.096 2.52064 11 2.28331 11 1.99998C11 1.71664 11.096 1.47898 11.288 1.28698C11.4793 1.09564 11.7167 0.999976 12 0.999976H19C19.2833 0.999976 19.5207 1.09564 19.712 1.28698C19.904 1.47898 20 1.71664 20 1.99998C20 2.28331 19.904 2.52064 19.712 2.71198C19.5207 2.90398 19.2833 2.99998 19 2.99998H12ZM12 11C11.7167 11 11.4793 10.904 11.288 10.712C11.096 10.5206 11 10.2833 11 9.99998C11 9.71664 11.096 9.47898 11.288 9.28698C11.4793 9.09564 11.7167 8.99998 12 8.99998H19C19.2833 8.99998 19.5207 9.09564 19.712 9.28698C19.904 9.47898 20 9.71664 20 9.99998C20 10.2833 19.904 10.5206 19.712 10.712C19.5207 10.904 19.2833 11 19 11H12ZM15 6.99998C14.7167 6.99998 14.4793 6.90398 14.288 6.71198C14.096 6.52064 14 6.28331 14 5.99998C14 5.71664 14.096 5.47898 14.288 5.28698C14.4793 5.09564 14.7167 4.99998 15 4.99998H19C19.2833 4.99998 19.5207 5.09564 19.712 5.28698C19.904 5.47898 20 5.71664 20 5.99998C20 6.28331 19.904 6.52064 19.712 6.71198C19.5207 6.90398 19.2833 6.99998 19 6.99998H15Z"
                          fill="#202124"
                        ></path>
                      </svg>
                    </div>
                    <div className="d-block">
                      <h3 className="titlelinks mini">OverAll</h3>
                    </div>
                  </div>
                </a>
              </li>
              {listdata &&
                listdata.j_course.map((course, i) => {
                  return (
                    <li key={i}>
                      <a href="#">
                        <div>
                          <div className="minimg">
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
                              ></path>
                            </svg>
                          </div>
                          <div className="d-block">
                            <h3 className="titlelinks mini">
                              {course?.j_course_name}
                            </h3>
                            {/* <p className="locationpara mini">
                              {course.}
                            </p> */}
                          </div>
                        </div>
                      </a>
                    </li>
                  );
                })}

              {/* <li>
                <a href="#">
                  <div className="minimg">
                    <img
                      src="https://cs.collegesuggest.com/assets/images/indian-institute-of-1661752401.webp"
                      alt=""
                    />
                  </div>
                  <div className="d-block">
                    <h3 className="titlelinks mini">
                      IIT Delhi - Indian Institute of Technology - [IITD]
                    </h3>
                    <p className="locationpara mini">Hauz Khas, Delhi</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="minimg">
                    <img
                      src="https://cs.collegesuggest.com/assets/images/indian-institute-of-1661752401.webp"
                      alt=""
                    />
                  </div>
                  <div className="d-block">
                    <h3 className="titlelinks mini">
                      IIT Delhi - Indian Institute of Technology - [IITD]
                    </h3>
                    <p className="locationpara mini">Hauz Khas, Delhi</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="minimg">
                    <img
                      src="https://cs.collegesuggest.com/assets/images/indian-institute-of-1661752401.webp"
                      alt=""
                    />
                  </div>
                  <div className="d-block">
                    <h3 className="titlelinks mini">
                      IIT Delhi - Indian Institute of Technology - [IITD]
                    </h3>
                    <p className="locationpara mini">Hauz Khas, Delhi</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="minimg">
                    <img
                      src="https://cs.collegesuggest.com/assets/images/indian-institute-of-1661752401.webp"
                      alt=""
                    />
                  </div>
                  <div className="d-block">
                    <h3 className="titlelinks mini">
                      IIT Delhi - Indian Institute of Technology - [IITD]
                    </h3>
                    <p className="locationpara mini">Hauz Khas, Delhi</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="minimg">
                    <img
                      src="https://cs.collegesuggest.com/assets/images/indian-institute-of-1661752401.webp"
                      alt=""
                    />
                  </div>
                  <div className="d-block">
                    <h3 className="titlelinks mini">
                      IIT Delhi - Indian Institute of Technology - [IITD]
                    </h3>
                    <p className="locationpara mini">Hauz Khas, Delhi</p>
                  </div>
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="row hint-row">
          <div className="col-md-9 col-sm-12">
            <p className="hintpara">
              Your Chances are Good in {listdata.j_course.length} out of &nbsp;
              {listdata.j_course.length} Courses
            </p>
          </div>

          <div className="col-md-3 col-sm-12">
            <div href="#" className="graylinktxt text-right">
              <MdOutlinePayments /> Overall Fees
            </div>
          </div>
        </div>

        <Carousel listdata={listdata} />
      </div>
    </div>
  );
};

export default MainCard;
