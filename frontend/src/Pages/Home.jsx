import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";
import Subtitle from "./../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import Testimonial from "../components/Testimonial/Testimonial";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonyImagesGallery from "../components/Image-gallery/MasonyImagesGallery";
import Newsletter from "../shared/Newsletter";


const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero_content">
                <div className="hero_subtitle d-flex aling-items-center">
                  <Subtitle Subtitle={"know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>

                <h1>
                  {" "}
                  Traveling opens the door to creating{" "}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  It is very important for the customer to pay attention to the
                  adipiscing process. It hinders the mind from being flattered
                  by pleasures, there are indeed no one here to open our doors
                  and similar things, pain is held by but! Flattery, or flight?
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>

            <Col lg="2">
              <div className="hero_img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle"> What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle Subtitle={"Explore"} />
              <h2 className="featured__tour-title"> Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content ">
                <Subtitle Subtitle={"Experience"} />
                <h2>
                  {" "}
                  With all experience <br /> we will serve you
                </h2>
                <p>
                  It is very important for the customer to be aware of the
                  problem.
                  <br /> Some of these times, he takes the inventor from where.
                </p>
              </div>

              <div className="counter__wrapper d-flex aling-items-center gap-5">
                <div className="counter__box">
                  <span>14k+</span>
                  <h6>Successful Trip</h6>
                </div>

                <div className="counter__box">
                  <span>4k+</span>
                  <h6>Regular Clients</h6>
                </div>

                <div className="counter__box">
                  <span>20</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="exprience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle Subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonyImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Row>
          <Col lg='12'>
            <Subtitle Subtitle={'Fans Love'} />
            <h2 className="testimonial__title"> What our fans say about us </h2>

          </Col>
          <Col ld='12'>
            <Testimonial />
          </Col>

        </Row>
      </section>
      <Newsletter />
      
    
    
    </>
  );
};

export default Home;
