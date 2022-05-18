import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Typebar from '../components/Typebar'
import Statusbar from "../components/Statusbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Shop = () => {
    return (    
        <Container>
            <Row className='mt-3'>
                <Col md={3}>
                    <Typebar />
                </Col>
                <Col md={9}>
                    <Statusbar />
                    Shop
                    <DatePicker />
                </Col>
            </Row>
        </Container>

    )
}

export default Shop
