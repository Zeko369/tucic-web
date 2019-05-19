import React from "react";

// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";

import image1 from 'assets/img/small-icons/key.svg';
import image2 from 'assets/img/small-icons/paint.svg';
import image3 from 'assets/img/small-icons/tools.svg';
import image4 from 'assets/img/small-icons/3d-printer.svg';
import image5 from 'assets/img/small-icons/knife.png';
import image6 from 'assets/img/small-icons/van.svg';

import bg_image from 'assets/img/theme/top-bg.png';
import logo from 'assets/img/logo.svg';

class SectionPage extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    // this.refs.main.scrollTop = 0;
  }

  render() {
    const items = [
      {
        image: image1,
        text: 'Izrada kljuceva',
        points: [
          'asd',
          'asdasasdasd',
          'LKALKJALKDLKasdj lkadlk ajlkdajslkd jasj'
        ]
      },
      {
        image: image2,
        text: 'Boje i lakovi',
        points: [
          'asd',
          'asdasasdasd',
          'LKALKJALKDLKasdj lkadlk ajlkdajslkd jasj'
        ]
      },
      {
        image: image3,
        text: 'Zeljeznarija',
        points: [
          'asd',
          'asdasasdasd',
          'LKALKJALKDLKasdj lkadlk ajlkdajslkd jasj'
        ]
      },
      {
        image: image4,
        text: 'Graviranje',
        points: [
          'asd',
          'asdasasdasd',
          'LKALKJALKDLKasdj lkadlk ajlkdajslkd jasj'
        ]
      },
      {
        image: image5,
        text: 'Brusiona',
        points: [
          'asd',
          'asdasasdasd',
          'LKALKJALKDLKasdj lkadlk ajlkdajslkd jasj'
        ]
      },
      {
        image: image6,
        text: 'InteRvencije',
        points: [
          'asd',
          'asdasasdasd',
          'LKALKJALKDLKasdj lkadlk ajlkdajslkd jasj'
        ]
      }
    ];

    const { name } = this.props.match.params;
    const item = items.filter(item => item.text.replace(/ /g, '_') == name)[0];

    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <div className="position-relative">
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default" style={{backgroundImage: `url(${bg_image})`}}>
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 class="display-3 text-white">{item.text}</h1>
                      {/* <p class="lead text-white">The design system comes with four pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p> */}
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
            {/* 1st Hero Variation */}
          </div>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-1" lg="3">
                      <div className="card-profile-image imageOnSection">
                        <img
                          alt={item.text}
                          className="bg-white"
                          src={item.image}
                        />
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        <HashLink smooth to={`/#contact`} className="btn btn-danger btn-sm float-right">
                          Message
                        </HashLink>
                      </div>
                    </Col>
                    <Col className="order-lg-2" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="mt-5 py-5 text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <div className="description">
                          <ul>
                            {
                              item.points.map(point => (<li>{point}</li>))
                            }
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default SectionPage;
