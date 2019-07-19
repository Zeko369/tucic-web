import React from "react";

// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";
import { HashLink } from "react-router-hash-link";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";

import image1 from "assets/img/small-icons/key.svg";
import image2 from "assets/img/small-icons/paint.svg";
import image3 from "assets/img/small-icons/tools.svg";
import image4 from "assets/img/small-icons/3d-printer.svg";
import image5 from "assets/img/small-icons/knife.png";
import image6 from "assets/img/small-icons/van.svg";

import bg_image from "assets/img/theme/top-bg.png";

class SectionPage extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    // this.refs.main.scrollTop = 0;
    this.refs.main.scrollTop = 0;

    fetch("http://localhost:5000/api/homepage/actual")
      .then(data => data.json())
      .then(data => {
        const { items, text } = data;
        this.setState({ images: items, text: text });
      })
      .catch(err => console.error(err));
    this.carouselIntevral = setInterval(this.change_image, 5000);
  }

  constructor(props) {
    super(props);

    this.state = {
      current_image: 0,
      timeout: 0,
      images: [{ url: "" }],
      text: ""
    };

    this.change_image = this.change_image.bind(this);
  }

  componentWillUnmount() {
    this.carouselIntevral && clearInterval(this.carouselIntevral);
    this.carouselIntevral = false;
  }

  change_image() {
    const { current_image, images, timeout } = this.state;
    if (timeout > 0) {
      this.setState({ timeout: timeout - 1 });
    } else {
      this.setState({
        current_image:
          images.length === current_image + 1 ? 0 : current_image + 1
      });
    }
  }

  setItem(i) {
    this.setState({ current_image: i, timeout: 2 });
  }

  render() {
    const items = [
      {
        image: image1,
        text: "Izrada kljuceva",
        points: [
          "asd",
          "asdasasdasd",
          "LKALKJALKDLKasdj lkadlk ajlkdajslkd jasj"
        ]
      },
      {
        image: image2,
        text: "Boje i lakovi",
        points: [
          "Novo u već širokoj ponudi našeg dućana, na 50 novih kvadratnih metara u sklopu prodavaonice otvoren je odjel boja i lakova.Uz široku ponudu boja za metale, drvo, temeljnih boja, uveli smo i kompjutersko nijansiranje boja za zidove te fasade.",

          "Asortiman se sastoji od renomiranih proizvođača boja kao što su: Jupol, Spektra, Helios.",

          "Uz boje pojačali smo i brusni program te sada u ponudi imamo i brusne papire velikih granulacije kako na papiru tako i na platnu. Takodjer kod nas možete pronaći fugir mase, ljepila za pločice te gips.",

          "No ni to nije sve, od sada kod nas mozete naći i sredstva za čišćenje za sve podloge od kućanstva do industrije, sve vrste valjaka i kistova, spužve za pranje, krpe za podove, mopove itd. Uz mogućnost kupovanja cijelog asortimana robe preko GSKG-a, Zapad stana, Mepa stana i drugih predstavnika stanara. Time smo uz postojeće usluge kompletirali sve na jednom mjestu za održavanje vaših kućanstava ili zgrada."
        ]
      },
      {
        image: image3,
        text: "Zeljeznarija",
        points: [
          "asd",
          "asdasasdasd",
          "LKALKJALKDLKasdj lkadlk ajlkdajslkd jasj"
        ]
      },
      {
        image: image4,
        text: "Graviranje",
        points: [
          "asd",
          "asdasasdasd",
          "LKALKJALKDLKasdj lkadlk ajlkdajslkd jasj"
        ]
      },
      {
        image: image5,
        text: "Brusiona",
        points: [
          "asd",
          "asdasasdasd",
          "LKALKJALKDLKasdj lkadlk ajlkdajslkd jasj"
        ]
      },
      {
        image: image6,
        text: "InteRvencije",
        points: [
          "asd",
          "asdasasdasd",
          "LKALKJALKDLKasdj lkadlk ajlkdajslkd jasj"
        ]
      }
    ];

    const { images, current_image } = this.state;

    let lines = [];
    for (let i = 0; i < images.length; i++) {
      lines.push(
        <div
          key={`something${i}`}
          onClick={() => this.setItem(i)}
          className={i === current_image ? "current pagin" : "pagin"}
        />
      );
    }

    const { name } = this.props.match.params;
    const item = items.filter(item => item.text.replace(/ /g, "_") === name)[0];

    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <div className="position-relative">
            <section className="section section-lg section-shaped pb-250">
              <div
                className="shape shape-style-1 shape-default"
                style={{ backgroundImage: `url(${bg_image})` }}
              />
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
              <Card className="card-profile shadow my-card">
                <div className="px-4 card-container-my">
                  <div className="messageButton">
                    <HashLink
                      smooth
                      to={`/#contact`}
                      className="btn btn-danger btn-sm float-right"
                    >
                      Message
                    </HashLink>
                  </div>
                  <Row>
                    <Col xs="3" lg="3" className="headerCardImage" />
                    <Col className="order-lg-2" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div />
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <div className="description">
                          <ul>
                            {item.points.map(point => (
                              <li>{point}</li>
                            ))}
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="foobar123">
                    <div className="pagination-images">
                      <img
                        src={images[this.state.current_image].url}
                        className="pagin-image"
                        alt={images[this.state.current_image].url}
                      />
                      <hr />
                      <div className="pagination">
                        <div className="pagin-container">{lines}</div>
                      </div>
                    </div>
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
