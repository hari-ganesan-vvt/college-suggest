import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { BiCloudDownload } from "react-icons/bi";
import { MdOutlineBookmarkAdd } from "react-icons/md";

const Carousel = ({ listdata }) => {
  const swiperRef = useRef();
  return (
    <div>
      <Swiper
        spaceBetween={10}
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        grabCursor={true}
        style={{ width: "100%", height: "max-content" }}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1.4,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1.8,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1.8,
            spaceBetween: 20,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 1.8,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 2.2,
            spaceBetween: 20,
          },
        }}
      >
        {listdata.j_course.map((courseList, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="slidebx">
                <a className="linktitle">{courseList.j_course_name}</a>
                <div className="preseat">
                  <div className="pretxt">
                    <p>
                      Seats : <span>{courseList.jSeats}</span>
                    </p>
                    <p>
                      Fee : <span>{courseList.jFees}</span>
                    </p>
                  </div>
                  <div>
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
                </div>

                <a
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  href="#"
                  className="prebtn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.99992 7.5C10.663 7.5 11.2988 7.76339 11.7677 8.23223C12.2365 8.70107 12.4999 9.33696 12.4999 10C12.4999 10.663 12.2365 11.2989 11.7677 11.7678C11.2988 12.2366 10.663 12.5 9.99992 12.5C9.33688 12.5 8.70099 12.2366 8.23215 11.7678C7.76331 11.2989 7.49992 10.663 7.49992 10C7.49992 9.33696 7.76331 8.70107 8.23215 8.23223C8.70099 7.76339 9.33688 7.5 9.99992 7.5ZM9.99992 3.75C14.1666 3.75 17.7249 6.34167 19.1666 10C17.7249 13.6583 14.1666 16.25 9.99992 16.25C5.83325 16.25 2.27492 13.6583 0.833252 10C2.27492 6.34167 5.83325 3.75 9.99992 3.75ZM2.64992 10C3.32346 11.3753 4.36934 12.534 5.66865 13.3444C6.96796 14.1548 8.46858 14.5844 9.99992 14.5844C11.5313 14.5844 13.0319 14.1548 14.3312 13.3444C15.6305 12.534 16.6764 11.3753 17.3499 10C16.6764 8.62474 15.6305 7.46604 14.3312 6.65562C13.0319 5.8452 11.5313 5.41557 9.99992 5.41557C8.46858 5.41557 6.96796 5.8452 5.66865 6.65562C4.36934 7.46604 3.32346 8.62474 2.64992 10Z"
                      fill="#585858"
                    />
                  </svg>
                  Cutoff
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="row align-items-center card_bottom">
        <div className="col-md-4 col-8">
          <button className="prebtn1">
            <BiCloudDownload className=" me-2 m-svg" />
            Brochure
          </button>
        </div>
        <div className="col-4 col-md-8">
          <div className="d-flex align-items-center justify-content-end">
            <div className="d-block">
              <div className="d-flex">
                <button className="prebtn1 bg-gray me-2">
                  <svg
                    className="me-2 m-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                  >
                    <path
                      d="M5.66675 13.6667L4.50008 12.4792L6.64591 10.3333H0.666748V8.66667H6.64591L4.50008 6.52083L5.66675 5.33333L9.83341 9.5L5.66675 13.6667ZM12.3334 8.66667L8.16675 4.5L12.3334 0.333333L13.5001 1.52083L11.3542 3.66667H17.3334V5.33333H11.3542L13.5001 7.47917L12.3334 8.66667Z"
                      fill="#212121"
                    />
                  </svg>
                  <span className="m-text">Compare</span>
                </button>

                <button className="prebtn1 bg-gray btn-icon">
                  <MdOutlineBookmarkAdd className="material-icons me-2 m-svg" />
                  <span className="m-text">Bookmark</span>
                </button>
              </div>
            </div>

            <div className="d-blok">
              <div className="d-block rel m-swipe-hide">
                <div className="swiperbtnwarpbx">
                  <div
                    className="swiper-button-prev swiper-button-prev11 custom-swipebtn me-3"
                    onClick={() => swiperRef.current?.slidePrev()}
                  ></div>
                  <div
                    className="swiper-button-next swiper-button-next11 custom-swipebtn"
                    onClick={() => swiperRef.current?.slideNext()}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
