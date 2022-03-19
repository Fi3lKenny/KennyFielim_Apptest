import React from "react";
import axios from "axios";
import "./AddContact.css";

import { Col, Container, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Imported File
import AppHeader from "../header/AppHeader";
import NavbarBack from "../../components/navbar/navbar_back/NavbarBack";

class AddContact extends React.Component {
  onSubmit = (e) => {
    e.preventDefault();
    const sendVal = {
      firstName: e.target.first_name.value,
      lastName: e.target.last_name.value,
      age: e.target.age.value,
      photo: e.target.photo_link.value ? e.target.photo_link.value : 'N/A',
    };
    console.log(sendVal);

    axios({
      method: "post",
      url: "https://simple-contact-crud.herokuapp.com/contact",
      data: sendVal,
    })
      .then(response => {
        //handle success
        console.log(response);
        toast.success("Add Contact Data Success");
      })
      .catch(response => {
        //handle error
        console.log(response);
        toast.error("Error! Failed to Add Contact Data");
      });
  };

  render() {
    return (
      <>
        <AppHeader>
          <NavbarBack title="Add Contact" to="/home" />
        </AppHeader>
        <Container className="top-space" fluid>
          <form onSubmit={this.onSubmit}>
            <Row>
              <Col xs={12} md={6} className="mb-3">
                <label className="custom-default-label">First Name</label>
                <input
                  id="first-name"
                  type="text"
                  className="custom-default-input wide"
                  name="first_name"
                  required
                />
              </Col>
              <Col xs={12} md={6} className="mb-3">
                <label className="custom-default-label">Last Name</label>
                <input
                  id="last-name"
                  type="text"
                  className="custom-default-input wide"
                  name="last_name"
                  required
                />
              </Col>
              <Col xs={12} md={6} className="mb-3">
                <label className="custom-default-label">Age</label>
                <input
                  id="age"
                  type="number"
                  className="custom-default-input wide"
                  name="age"
                  min="1"
                  max="150"
                  required
                />
              </Col>
              <Col xs={12} md={6} className="mb-5">
                <label className="custom-default-label">Photo Link</label>
                <input
                  id="photo-link"
                  type="text"
                  className="custom-default-input wide"
                  name="photo_link"
                />
              </Col>
              <Col>
                <div className="mb-3">
                  <button
                    id="contact-save"
                    type="submit"
                    className="btn btn-save w-100"
                  >
                    Save
                  </button>
                </div>
              </Col>
            </Row>
          </form>
        </Container>
        <ToastContainer
          position="top-center"
          autoClose={2000}
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
