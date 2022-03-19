import React from "react";
import axios from "axios";
import "./EditContact.css";

import { Col, Container, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Imported File
import AppHeader from "../header/AppHeader";
import NavbarBack from "../../components/navbar/navbar_back/NavbarBack";

class EditContact extends React.Component {
  state = {
    loading: true,
    error: "",
    id: "",
    age: 0,
    firstName: "",
    lastName: "",
    photo: ""
  };

  loadData = () => {
    const windowUrl = window.location.href.split('/');
    const urlSegment = windowUrl[5];

    return axios({
      method: "get",
      url: "https://simple-contact-crud.herokuapp.com/contact/" + urlSegment,
    })
      .then((response) => {
        console.log(response);
        this.setState({
          loading: false,
          error: false,
          id: response.data.data.id,
          age: response.data.data.age,
          firstName: response.data.data.firstName,
          lastName: response.data.data.lastName,
          photo: response.data.data.photo
        });
        document.getElementById("age").defaultValue = response.data.data.age;
      })
      .catch((response) => {
        console.log(response);
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
      method: "put",
      url: "https://simple-contact-crud.herokuapp.com/contact/" + this.state.id,
      data: sendVal,
    })
      .then(response => {
        //handle success
        console.log(response);
        toast.success("Update Contact Data Success");
      })
      .catch(response => {
        //handle error
        console.log(response);
        toast.error("Error! Failed to Update Contact Data");
      });
  };

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <>
        <AppHeader>
          <NavbarBack title="Edit Contact" to="/list" />
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
                  defaultValue={this.state.firstName}
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
                  defaultValue={this.state.lastName}
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
                  defaultValue={this.state.photo}
                />
              </Col>
              <Col>
                <div className="mb-3">
                  <button
                    id="contact-edit"
                    type="submit"
                    className="btn btn-edit w-100"
                  >
                    Update
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

export default EditContact;
