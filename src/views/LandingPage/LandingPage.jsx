import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import './style.css'

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Button from "components/CustomButtons/Button.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";

import logo from 'assets/img/logo.svg';
import image from "assets/img/bg.jpg";

import ProfilePage from './foo';

const dashboardRoutes = [];
class LandingPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected: 0
    };

    this.change = this.change.bind(this);
  }

  change(to_id){
    this.setState({selected: to_id});
    console.log(to_id)
  }

  render() {
    let selectedDiv = <div>{
      this.state.selected == 0 ? <ProfilePage/> :
      this.state.selected == 1 ? <a>FOOOO</a> :
      this.state.selected == 2 ? <a>FOOOOdsafsdf</a> :
      this.state.selected == 3 ? <a>FOOasdasdasdasdOO</a> :
      this.state.selected == 4 ? <a>FOOO786234876234O</a> : <a>PET</a>
    }</div>;
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand=""
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 100,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/top-bg.png")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <img width={"90%"} src={logo} alt="logo" />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection change={this.change} state={this.state} />

            {selectedDiv}

            <br/>

            <div
              className="foobar"
              style={{
                backgroundImage: "url(" + image + ")",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "100%",
                height: "500px"
              }}
            >
              <Button
                className="webshop123"
                color="danger"
                size="lg"
                style={{
                  backgroundColor: "#ed1c24",
                  position: "relative",
                  top: "50%",
                  left: "50%",
                  width: "200px",
                  height: "60px",
                  marginTop: "-30px",
                  marginLeft: "-100px"
                }}
              >
                Webshop
              </Button>
            </div>
            <WorkSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
