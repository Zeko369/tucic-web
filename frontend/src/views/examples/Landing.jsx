import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

import image1 from "assets/img/small-icons/key.svg";
import image2 from "assets/img/small-icons/paint.svg";
import image3 from "assets/img/small-icons/tools.svg";
import image4 from "assets/img/small-icons/3d-printer.svg";
import image5 from "assets/img/small-icons/knife.png";
import image6 from "assets/img/small-icons/van.svg";

import logo from "assets/img/logo.svg";

import bg_image from "assets/img/theme/top-bg.png";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";

// index page sections
import SimpleFooter from "components/Footers/SimpleFooter.jsx";

class Landing extends React.Component {
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

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;

    fetch("http://zekan.tk:54321/api/homepage/actual")
      .then(data => data.json())
      .then(data => {
        const { items, text } = data;
        this.setState({ images: items, text: text });
      })
      .catch(err => console.error(err));
    this.carouselIntevral = setInterval(this.change_image, 5000);
  }

  setItem(i) {
    this.setState({ current_image: i, timeout: 2 });
  }

  render() {
    const items = [
      {
        image: image1,
        text: "Izrada kljuceva"
      },
      {
        image: image2,
        text: "Boje i lakovi"
      },
      {
        image: image3,
        text: "Zeljeznarija"
      },
      {
        image: image4,
        text: "Graviranje"
      },
      {
        image: image5,
        text: "Brusiona"
      },
      {
        image: image6,
        text: "InteRvencije"
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

    return (
      <React.Fragment>
        <DemoNavbar landing />
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
                      <img className="mainLogo" src={logo} alt="Logo" />
                      <p className="lead text-white">
                        Naizgled mali kvartovski dućan, s opisom <br />
                        asortimana: "Od igle do lokomitve". <br />
                        Istarzite nasu ponudu i sami se uvjerite!
                      </p>
                      <div className="btn-wrapper">
                        <Link
                          to={`/webshop`}
                          className="btn btn-icon mb-3 mb-sm-0 btn-danger"
                        >
                          <span className="btn-inner--icon">
                            <i className="fa fa-shopping-cart mr-2" />
                          </span>
                          <span className="nav-link-inner--text ml-1">
                            Webshop
                          </span>
                        </Link>
                      </div>
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
          <section className="section section-lg pt-lg-0 mt--200">
            <div className="myContainer">
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    {items.map((item, key) => (
                      <Col
                        lg="2"
                        md="4"
                        xs="6"
                        key={`${key}${item}`}
                        className="mb-4 mt-0"
                      >
                        <Card className="shadow border-0 card-icon">
                          <CardBody className="centered">
                            <div className="icon-and-text">
                              <div className="kruzic mb-2">
                                <img src={item.image} alt={item.text} />
                              </div>
                              <h5 className="text-default text-uppercase text-card">
                                {item.text}
                              </h5>
                            </div>
                            <Link
                              to={`/usluge/${item.text.replace(/ /g, "_")}`}
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
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="4">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-danger kruzic123 shadow rounded-circle mb-5">
                      <i className="ni ni-bell-55" />
                    </div>
                    <h3>Aktualno</h3>
                    <p>{this.state.text}</p>

                    <ul className="list-unstyled mt-5">
                      {images.map((item, key) => (
                        <li className="py-2" key={`${key}${item}`}>
                          <div
                            className="d-flex align-items-center actual-items-div"
                            onClick={() => this.setItem(key)}
                          >
                            <div>
                              <Badge
                                className="badge-circle mr-3 kruzic123"
                                color="danger"
                              >
                                <i className="ni ni-check-bold" />
                              </Badge>
                            </div>
                            <div>
                              <h6 className="mb-0">{item.text}</h6>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Col>
                <Col md="8">
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
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg bg-gradient-default bg-bottom">
            <Container className="pt-lg pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">O nama</h2>
                  <p className="lead text-white">
                    Utemeljeni smo 1994.god., poznatiji kao zeljeznarija
                    Spansko. Nas tim cine dobro upuceni radnici od kojih uvijek
                    mozete dobiti kvalitetan savijet i preporuku za artikl koji
                    trazite. Prioritet nam je da svaki kupac bude zadovoljan
                    asortimanom i uslugom koju nudimo - zadvoljan kupac,
                    garancija su za daljnji razvoj i prospiritet tvrtke.
                  </p>
                </Col>
              </Row>
              <Row className="row-grid mt-5">
                <Col lg="4" style={{ textAlign: "center" }}>
                  <div className="icon icon-lg icon-shape shadow rounded-circle kruzic123">
                    <i className="ni ni-email-83" />
                  </div>
                  <h5 className="text-white mt-3">Email</h5>
                  <p className="text-white mt-3">
                    Racunovodstvo: zeljko.luzija@zg.t-com.hr
                    <br />
                    Usluge graviranja: tucicdoo@gmail.com
                  </p>
                </Col>
                <Col lg="4" style={{ textAlign: "center" }}>
                  <div className="icon icon-lg icon-shape shadow rounded-circle kruzic123">
                    <i className="ni ni-world" />
                  </div>
                  <h5 className="text-white mt-3">Lokacija</h5>
                  <p className="text-white mt-3">
                    Ulica Alberta Fortisa 16
                    <br />
                    (U blizini trznice spansko, u istoj zgradi s Erste bankom)
                  </p>
                </Col>
                <Col lg="4" style={{ textAlign: "center" }}>
                  <div className="icon icon-lg icon-shape shadow rounded-circle kruzic123">
                    <i className="ni ni-mobile-button" />
                  </div>
                  <h5 className="text-white mt-3">Kontakt</h5>
                  <p className="text-white mt-3">
                    Ducan: 01 3898 230
                    <br />
                    Racunovodstvo: +385 91 3863 076
                    <br />
                    Direktor: +385 91 3898 230
                  </p>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
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
          <section className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">Suradujte s nama</h4>
                      <FormGroup
                        className={classnames("mt-5", {
                          focused: this.state.nameFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-user-run" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Ime i prezime"
                            type="text"
                            onFocus={e => this.setState({ nameFocused: true })}
                            onBlur={e => this.setState({ nameFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email adresa"
                            type="email"
                            onFocus={e => this.setState({ emailFocused: true })}
                            onBlur={e => this.setState({ emailFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="Poruka..."
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="danger"
                          size="lg"
                          type="button"
                        >
                          Posalji upit
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
        <div id="contact" />
      </React.Fragment>
    );
  }
}

export default Landing;
