import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./index.css";

// Define the App component
function App() {
  // Slick slider settings
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <div className="wrapper d-flex align-items-center">
        <video className="background-video" autoPlay muted loop>
          <source src="/public/bg_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <Container fluid>
          <div className="d-flex justify-content-center">
            {" "}
            <div className="left_content p-5 m-4">
              <h1 className="display-1 fw-bold text-center title">
                Welcome to Niketon bd
              </h1>
            </div>
          </div>

          <Row className="d-flex align-items-center">
            {/* Left content */}
            {/*     <Col xs={6}>
              <div className="d-flex justify-content-center">
                <img src="/public/niketon-bd 1.png" alt="" />
              </div>
              <div className="left_content">
                <h1 className="display-1 fw-bold text-center title">
                  Welcome to Niketon bd
                </h1>
                <Container className="p-5 text-justify">
                  <p className="fs-5 text-white">
                    Niketon BD is a visionary housing project dedicated to
                    providing affordable and sustainable living solutions in
                    Bangladesh. With a commitment to quality construction and
                    modern amenities, Niketon BD aims to redefine the
                    residential landscape, offering a harmonious blend of
                    comfort and community. Emphasizing eco-friendly practices,
                    the project strives to create a greener and more vibrant
                    living environment for residents.
                  </p>
                 
                </Container>
              </div>
            </Col>
 */}
            {/* Right content with Slick slider */}
            <Col xs={12}>
              <div className="d-flex justify-center align-items-center">
                <div className="container">
                  <Slider {...settings}>
                    <div className={"d-flex justify-content-center"}>
                      <img
                        src="/public/s1.png"
                        className="img-fluid"
                        width={"300px"}
                        alt=""
                        srcSet=""
                      />
                    </div>
                    <div className={"d-flex justify-content-center"}>
                      <img
                        src="/public/s2.png"
                        className="img-fluid"
                        alt=""
                        width={"300px"}
                      />
                    </div>
                    <div className={"d-flex justify-content-center"}>
                      <img
                        src="/public/s3.png"
                        className="img-fluid"
                        alt=""
                        width={"300px"}
                      />
                    </div>
                    <div className={"d-flex justify-content-center"}>
                      <img
                        src="/public/s4.png"
                        className="img-fluid"
                        alt=""
                        width={"300px"}
                      />
                    </div>
                    <div className={"d-flex justify-content-center"}>
                      <img
                        src="/public/s5.png"
                        className="img-fluid"
                        alt=""
                        width={"300px"}
                      />
                    </div>
                  </Slider>
                </div>
              </div>
            </Col>
          </Row>

          <div className="d-flex justify-content-center">
            {" "}
            <div className="left_content p-2 m-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.infinityalgostation.niketonbd&pli=1"
                target="blank"
              >
                <img
                  src="/public/playstore1.png"
                  width={"200px"}
                  alt=""
                  srcSet=""
                />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
