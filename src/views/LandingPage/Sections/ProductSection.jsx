import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
// @material-ui/icons
//import Chat from "@material-ui/icons/Chat";
import Chat from "../key.svg";
import Chat_a from "../3d-printer.svg";
// import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Foo from "../paint.svg";
import Foo_a from "../knife.png";
// import Fingerprint from "@material-ui/icons/Fingerprint";
import Bar from "../tools.svg";
import Bar_a from "../van.svg";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

import './style123.css'

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer>
          <GridItem xs={6} sm={4} md={2}>
            <Link to="landing-page">
              <InfoArea
                className="icon123"
                title="Izrada kljuceva"
                icon={Chat}
                iconColor="info"
                vertical
              />
            </Link>
          </GridItem>
          <GridItem xs={6} sm={4} md={2}>
            <Link to="izrada-kljuceva">
              <InfoArea
                className="icon123"
                title="Boje i lakovi"
                icon={Foo}
                iconColor="success"
                vertical
              />
            </Link>
          </GridItem>
          <GridItem xs={6} sm={4} md={2}>
            <Link to="izrada-kljuceva">
              <InfoArea
                className="icon123"
                title="Zeljeznarija"
                icon={Bar}
                iconColor="danger"
                vertical
              />
            </Link>
          </GridItem>
          <GridItem xs={6} sm={4} md={2}>
            <Link to="izrada-kljuceva">
              <InfoArea
                className="icon123"
                title="Graviranje"
                icon={Chat_a}
                iconColor="info"
                vertical
              />
            </Link>
          </GridItem>
          <GridItem xs={6} sm={4} md={2}>
            <Link to="izrada-kljuceva">
              <InfoArea
                className="icon123"
                title="Brusiona"
                icon={Foo_a}
                iconColor="success"
                vertical
              />
            </Link>
          </GridItem>
          <GridItem xs={6} sm={4} md={2}>
            <Link to="izrada-kljuceva">
              <InfoArea
                className="icon123"
                title="Intervencije"
                icon={Bar_a}
                iconColor="danger"
                vertical
              />
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
