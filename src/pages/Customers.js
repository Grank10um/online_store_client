import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Typebar from "../components/Typebar";

const Customers = () => {
    return (
        <Container>
            <Row className='mt-3'>
                <Col md={3}>
                    <Typebar />
                </Col>
                <Col md={9}>
                    Customers
                </Col>
            </Row>
        </Container>

    )
}

export default Customers;