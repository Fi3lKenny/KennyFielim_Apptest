import React from "react";
import axios from "axios";
import "./ListContact.css";

import { Col, Container, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Imported File
import AppHeader from "../header/AppHeader";
import NavbarBack from "../../components/navbar/navbar_back/NavbarBack";
import CardList from "../../components/card/CardList";

class AddContact extends React.Component {
  state = {
    loading: true,
    error: "",
    listContact: null,
  };

  loadData = () => {
    return axios({
      method: "get",
      url: "https://simple-contact-crud.herokuapp.com/contact",
    })
      .then((response) => {
        this.setState({
          listContact: response.data.data,
          loading: false,
          error: false,
        });
      })
      .catch((response) => {
        this.setState({
          error: response.data.message,
          loading: false,
        });
      });
  };

  showLoading() {
    return toast.info("Loading Data...", {
      toastId: 1,
    });
  }

  showError() {
    return toast.error("There was an error loading the data", {
      toastId: 1,
    });
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    const { loading, error, listContact } = this.state;

    if (loading) {
      return this.showLoading();
    }

    if (error) {
      return this.showError();
    }

    return (
      <>
        <AppHeader>
          <NavbarBack title="Contact List" to="/home" />
        </AppHeader>
        <Container className="top-space" fluid>
          <Row>
            {listContact.map((data) => (
              <Col xs={12} md={6} key={data.id}>
                <CardList
                  id={data.id}
                  firstName={data.firstName}
                  lastName={data.lastName}
                  age={data.age}
                  photoLink={data.photo}
                />
              </Col>
            ))}
          </Row>
        </Container>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
    );
  }
}

export default AddContact;
