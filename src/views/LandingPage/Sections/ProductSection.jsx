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
            {/* <Link to="izrada-kljuceva"> */}
            <div onClick={() => this.props.change(0)}>
              <InfoArea
                className={`icon123 ${(this.props.state.selected == 0) ? 'selected123' : ''}`}
                title="Izrada kljuceva"
                icon={Chat}
                iconColor="info"
                vertical
              />
            </div>
            {/* </Link> */}
          </GridItem>
          <GridItem xs={6} sm={4} md={2}>
            {/* <Link to="izrada-kljuceva"> */}
            <div onClick={() => this.props.change(1)}>
              <InfoArea
                className={`icon123 ${(this.props.state.selected == 0 + 1) ? 'selected123' : ''}`}
                title="Boje i lakovi"
                icon={Foo}
                iconColor="success"
                vertical
              />
              </div>
            {/* </Link> */}
          </GridItem>
          <GridItem xs={6} sm={4} md={2}>
            {/* <Link to="izrada-kljuceva"> */}
            <div onClick={() => this.props.change(2)}>
              <InfoArea
                className={`icon123 ${(this.props.state.selected == 1 + 1) ? 'selected123' : ''}`}
                title="Zeljeznarija"
                icon={Bar}
                iconColor="danger"
                vertical
              />
              </div>
            {/* </Link> */}
          </GridItem>
          <GridItem xs={6} sm={4} md={2}>
            {/* <Link to="izrada-kljuceva"> */}
            <div onClick={() => this.props.change(3)}>
              <InfoArea
                className={`icon123 ${(this.props.state.selected == 2 + 1) ? 'selected123' : ''}`}
                title="Graviranje"
                icon={Chat_a}
                iconColor="info"
                vertical
              />
              </div>
            {/* </Link> */}
          </GridItem>
          <GridItem xs={6} sm={4} md={2}>
            {/* <Link to="izrada-kljuceva"> */}
            <div onClick={() => this.props.change(4)}>
              <InfoArea
                className={`icon123 ${(this.props.state.selected == 3 + 1) ? 'selected123' : ''}`}
                title="Brusiona"
                icon={Foo_a}
                iconColor="success"
                vertical
              />
              </div>
            {/* </Link> */}
          </GridItem>
          <GridItem xs={6} sm={4} md={2}>
            {/* <Link to="izrada-kljuceva"> */}
            <div onClick={() => this.props.change(5)}>
              <InfoArea
                className={`icon123 ${(this.props.state.selected == 4 + 1) ? 'selected123' : ''}`}
                title="Intervencije"
                icon={Bar_a}
                iconColor="danger"
                vertical
              />
              </div>
            {/* </Link> */}
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
