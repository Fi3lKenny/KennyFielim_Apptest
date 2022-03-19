import React from "react";
import './AppMainContent.css';
import {Col, Container, Row} from "react-bootstrap";

function AppContent(props) {
	return (
		<Container className='pb-3' fluid>
			<Row className='content-wrapper mx-2 py-3'>
				<Col className='m-auto'>
					{props.children}
				</Col>
			</Row>
		</Container>
	);
}

export default AppContent;