import React from "react";

import { MdSearch } from "react-icons/md";
import Carousel from "./Carousel";
import noLogo from "../../assets/no_logo.webp";

const MainCard = ({ listdata }) => {
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
          <a className="titlelinks">
            {listdata.cs_collegename}
            {/* IIT Delhi - Indian Institute of Technology - [IITD] */}
          </a>
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
            </ul>
          </div>
        </div>

        <div className="row hint-row">
          <div className="col-md-9 col-sm-12">
            <p className="hintpara">
              Your Chances are Good in 8 out of 8 Courses
            </p>
          </div>

          <div className="col-md-3 col-sm-12">
            <div href="#" className="graylinktxt text-right">
              Overall Fees
            </div>
          </div>
        </div>

        <Carousel listdata={listdata} />
      </div>
    </div>
  );
};

export default MainCard;
