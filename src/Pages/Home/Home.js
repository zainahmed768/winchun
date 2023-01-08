import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import "../../assets/css/style.css";
import {
  certificateImg,
  ExperienceImg,
  pencilImg,
  portfolioimg,
  profileImg,
  testimonailsImg,
} from "../../constant";

const Home = () => {
  return (
    <>
      <Header />
      {/* My Profile starts here */}
      <section className="profile-sec mt-5 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="profile-info-wrapper">
                <div className="profile-heading-btn-wrapper">
                  <div className="profile-img-name-wrapper">
                    <div className="profile-img-wrapper">
                      <button className="edit">
                        <i className="fa fa-pencil"></i>
                      </button>
                      <img
                        src={profileImg}
                        className="img-fluid profile-img"
                        alt=""
                      />
                      <span className="active"></span>
                    </div>
                    <div className="profile-name-wrapper">
                      <h5>Syed Muhammad DanialS</h5>
                      <h6>
                        <i className="fa fa-location-pin"></i> Lford, United
                        kingdom - 6:32 P.M Local Time
                      </h6>
                    </div>
                  </div>
                  <div className="profile-btn-wrapper">
                    <a href="#" className="btn">
                      See Public View
                    </a>
                    <a href="#" className="btn">
                      Profile Setting
                    </a>
                  </div>
                </div>
                <div className="all-profile-detail">
                  <div className="row">
                    <div className="col-lg-3 pe-0">
                      <div className="view-profile-wrapper">
                        <div className="view-profile-heading-wrapper">
                          <h5>View Profile</h5>
                          <div className="profile-btn-wrapper">
                            <button className="probtn">
                              {" "}
                              <i className="fa fa-plus"></i>
                            </button>
                            <button className="probtn">
                              {" "}
                              <i className="fa fa-pencil"></i>
                            </button>
                          </div>
                        </div>
                        <div className="view-detail-wrapper">
                          <a href="#">
                            Category Name Goes Here{" "}
                            <i className="fa fa-angle-right"></i>
                          </a>
                          <button className="work">All Work</button>
                        </div>
                      </div>
                      <div className="view-profile-wrapper">
                        <div className="view-profile-heading-wrapper">
                          <h5>Video Introduction</h5>
                          <div className="profile-btn-wrapper">
                            <button className="probtn">
                              {" "}
                              <i className="fa fa-plus"></i>
                            </button>
                            {/* <button className="probtn">
                              {" "}
                              <i className="fa fa-pencil"></i>
                            </button> */}
                          </div>
                        </div>
                        <div className="view-detail-wrapper">
                          <a href="#">
                            Hours per week{" "}
                            <img className="ms-4" src={pencilImg} alt="" />
                          </a>
                          <button className="work">
                            As Needed - Open to Offers
                          </button>
                        </div>
                      </div>
                      <div className="view-profile-wrapper">
                        <div className="view-profile-heading-wrapper">
                          <h5>Languages</h5>
                          <div className="profile-btn-wrapper">
                            <button className="probtn">
                              {" "}
                              <i className="fa fa-plus"></i>
                            </button>
                            <button className="probtn">
                              {" "}
                              <i className="fa fa-pencil"></i>
                            </button>
                          </div>
                        </div>
                        <div className="view-detail-wrapper">
                          <p>
                            <b>English: </b>
                            Fluent
                          </p>
                          <p>
                            <b>Urdu:</b>
                            Fluent
                          </p>
                        </div>
                      </div>
                      <div className="view-profile-wrapper verification">
                        <div className="view-profile-heading-wrapper">
                          <h5>Verifications</h5>
                          {/* <div className="profile-btn-wrapper">
                            <button className="probtn">
                              {" "}
                              <i className="fa fa-plus"></i>
                            </button>
                            <button className="probtn">
                              {" "}
                              <i className="fa fa-pencil"></i>
                            </button>
                          </div> */}
                        </div>
                        <div className="view-detail-wrapper">
                          <div className="veri-wrapper">
                            <p>
                              Military Veteran:{" "}
                              <button className="probtn">
                                <i className="fa fa-plus"></i>
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8 ps-0">
                      <div className="about-pro-wrapper">
                        <div className="proheading-wrapper">
                          <div className="proname-wrapper">
                            <h5>
                              Full Stack Developer | Block Chain Developer{" "}
                            </h5>
                            <button className="probtn">
                              <i className="fa fa-pencil"></i>
                            </button>
                          </div>
                          <div className="pro-hour-wrapper">
                            <div className="hour-heading-wrapper">
                              <h5>$10.00/hr</h5>
                              <div className="hour-btn-wrapper">
                                <button className="probtn">
                                  <i className="fa fa-pencil"></i>
                                </button>
                                <button className="probtn">
                                  <i className="fa fa-link"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="about-pro-content-wrapper">
                          <div className="about-content-wrapper">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                          </div>
                          <div className="about-btn-wrapper">
                            <button className="probtn">
                              <i className="fa fa-pencil"></i>
                            </button>
                          </div>
                        </div>
                        <div className="about-btn-wrapper">
                          <button className="none">Read More</button>
                        </div>
                      </div>
                      <div className="consultation-wrapper">
                        <div className="consultation-img-wrapper">
                          <figure>
                            <img src="" className="img-fluid" alt="" />
                          </figure>
                        </div>
                        <div className="consultation-content-wrapper">
                          <div className="consultation-heading-wrapper">
                            <h5>Consultations</h5>
                            <span>Drafts</span>
                            <p>
                              Clients Can Only see And Buy Active Consultations
                            </p>
                          </div>
                          <div className="consultation-btn-wrapper">
                            <button className="probtn">
                              <i className="fa fa-pencil"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="portfolio-wrapper">
                        <div className="portfolio-heading-wrapper">
                          <h4>Portfolio</h4>
                          <button className="probtn">
                            <i className="fa fa-plus"></i>
                          </button>
                        </div>
                        <div className="portfolio-content-wrapper">
                          <div className="portfolio-img-wrapper">
                            <figure>
                              <img
                                src={portfolioimg}
                                className="img-fluid"
                                alt=""
                              />
                            </figure>
                          </div>
                          <div className="content-wrapper">
                            <p>Showcase your work to win more projects</p>
                            <button>Add Items To Impress Clients</button>
                          </div>
                        </div>
                      </div>
                      <div className="skils-wrapper">
                        <div className="skils-heading-wrapper">
                            <h5>Skill</h5>
                            <button className="probtn">
                                <i className="fa fa-pencil"></i>
                            </button>
                        </div>
                        <div className="skils-content-wrapper">
                            <a href="#" className="btn">Skill category name</a>
                            <a href="#" className="btn">Skill category name</a>
                            <a href="#" className="btn">Skill category name</a>
                            <a href="#" className="btn">Skill category name</a>
                            <a href="#" className="btn">Skill category name</a>
                            <a href="#" className="btn">Skill category name</a>
                            <a href="#" className="btn">Skill category name</a>
                            <a href="#" className="btn">Skill category name</a>
                            <a href="#" className="btn">Skill category name</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* My Profile ends here */}
      {/* Testimonails starts here */}
      <section className="testimonails">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonails-box-wrapper">
                <div className="testimonails-heading-wrapper">
                  <div className="tesimonails-heading">
                    <h5>Testimonials</h5>
                    <p>Endrosment from the past clients</p>
                  </div>
                  <div className="testimonails-btn-wrapper">
                    <button className="add">
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
                <div className="testimonails-content-wrapper">
                  <img src={testimonailsImg} className="img-fluid" alt="" />
                  <div className="testimonails-empty-text-wrapper">
                    <p>Showcase your work to win more projects </p>
                    <p>
                      <b>Add Items To Impress Clients</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonails ends here */}
      {/* certifications starts here */}
      <section className="testimonails">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonails-box-wrapper">
                <div className="testimonails-heading-wrapper">
                  <div className="tesimonails-heading">
                    <h5>Certifications</h5>
                  </div>
                  <div className="testimonails-btn-wrapper">
                    <button className="add">
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
                <div className="testimonails-content-wrapper">
                  <img src={certificateImg} className="img-fluid" alt="" />
                  <div className="testimonails-empty-text-wrapper">
                    <p>
                      Listing your certifications can help prove your specific
                      knowledge or abilities. (+10%) <br />
                      You can add them manually or import them from Credly.{" "}
                    </p>
                    <div className="btn-wrapper">
                      <a href="#">Add manually</a>
                      <a href="#">Import from Credly</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* certifications ends here */}
      {/* other experience starts here */}
      <section className="testimonails mb-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonails-box-wrapper">
                <div className="testimonails-heading-wrapper">
                  <div className="tesimonails-heading">
                    <h5>Other Experiences</h5>
                  </div>
                  <div className="testimonails-btn-wrapper">
                    <button className="add">
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
                <div className="testimonails-content-wrapper">
                  <img src={ExperienceImg} className="img-fluid" alt="" />
                  <div className="testimonails-empty-text-wrapper">
                    <p>Add any other experiences that help you stand out</p>
                    <div className="btn-wrapper">
                      <a href="#">Add an experience</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* other experience ends here */}
      <Footer />
    </>
  );
};

export default Home;
