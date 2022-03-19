import React from "react";
import axios from "axios";
import "./CardList.css";

import { Row, Card, Button, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from "react-toastify";

//error image
import image_error from "../../assets/no_image.jpg";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function CardList(props) {
  const deleteContact = (e, id) => {
    e.preventDefault();

    confirmAlert({
      title: "Delete this contact?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            axios({
              method: "delete",
              url: "https://simple-contact-crud.herokuapp.com/contact/" + id,
            })
              .then((response) => {
                console.log(response);
                toast.success("Selected Contact Successfully Deleted");
                window.setTimeout(function(){window.location.reload(false)},2000);
              })
              .catch((response) => {
                console.log(response);
                toast.error("Delete Contact Error");
              });
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  return (
    <>
      <Card className="custom-card my-2">
        <div>
          <img
            className="avatar"
            src={props.photoLink}
            alt="Avatar"
            onError={(e) => (
              (e.target.onerror = null), (e.target.src = image_error)
            )}
          />
        </div>
        <Card.Body>
          <Card.Title>{props.firstName + "" + props.lastName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Age: {props.age}
          </Card.Subtitle>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col xs={6}>
              <LinkContainer to={ `/edit/${props.id}` }>
                <Button
                  className="btn-edit"
                >
                  <FontAwesomeIcon icon="pencil" />
                </Button>
              </LinkContainer>
            </Col>
            <Col xs={6}>
              <Button
                className="btn-delete"
                onClick={(e) => deleteContact(e, props.id)}
              >
                <FontAwesomeIcon icon="trash-can" />
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
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

export default CardList;
