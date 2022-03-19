import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

//Imported File
import AppHeader from "../header/AppHeader";
import MenuItem from "../../components/menu/MenuItem";
import NavbarDefault from "../../components/navbar/navbar_default/NavbarDefault"

class Home extends React.Component {
  render() {
    return (
      <>
        <AppHeader>
            <NavbarDefault title={"Main Menu"} />
        </AppHeader>
        <Container className="top-space" fluid>
          <Row>
            <Col className="my-3" xs={12} lg={6}>
              <Link className="no-decoration" to="/add">
                <MenuItem
                  name={"Add Contact"}
                  menuLogo={"phone"}
                  styleName={"bg-blue border-color-blue"}
                />
              </Link>
            </Col>
            <Col className="my-3" xs={12} lg={6}>
              <Link className="no-decoration" to="/list">
                <MenuItem
                  name={"List Contact"}
                  menuLogo={"list-squares"}
                  styleName={"bg-green border-color-green"}
                />
              </Link>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Home;
