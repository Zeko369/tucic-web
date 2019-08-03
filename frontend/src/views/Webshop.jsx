import React, { Component } from "react";
import DemoNavbar from "../components/Navbars/DemoNavbar";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

import { Link } from "react-router-dom";

import bg_image from "assets/img/theme/top-bg.png";

class Webshop extends Component {
  render() {
    let titles = [
      {
        title: "foobar"
      },
      {
        title: "foobar"
      },
      {
        title: "foobar"
      },
      {
        title: "foobar"
      },
      {
        title: "foobar"
      },
      {
        title: "foobar"
      },
      {
        title: "foobar"
      }
    ];

    const items = titles.map((item, index) => ({
      title: item.title,
      image: require(`../assets/img/webshop/${index + 1}.jpeg`)
    }));

    return (
      <>
        <DemoNavbar webshop />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div
                className="shape shape-style-1 shape-default headerImage"
                style={{ backgroundImage: `url(${bg_image})` }}
              />
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 style={{ color: "white" }}>Webshop</h1>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            <section className="section section-lg pt-lg-0 mt--200">
              <div className="myContainer">
                <Row className="justify-content-center">
                  <Col lg="8" offset="2">
                    <Row className="row-grid">
                      {items.map((item, key) => (
                        <Col
                          lg="4"
                          md="4"
                          xs="6"
                          key={`${key}Item`}
                          className="mb-4 mt-0"
                        >
                          <Card className="shadow border-0 card-foobar">
                            <CardBody
                              className="centered p-0"
                              style={{
                                overflow: "hidden",
                                alignItems: "center"
                              }}
                            >
                              <img
                                src={item.image}
                                alt={item.title}
                                style={{ width: "80%" }}
                              />
                              <h2>{item.title}</h2>

                              <Link
                                to={`/usluge/${item.title.replace(/ /g, "_")}`}
                                className="buton btn btn-danger mt-4"
                              >
                                Saznaj više
                              </Link>
                            </CardBody>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                </Row>
              </div>
            </section>
          </div>
        </main>
      </>
    );
  }
}

export default Webshop;
