import React, {useContext, useEffect, useState} from 'react';
import Typebar from '../components/Typebar'
import { Container, Row, Col, Button} from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import ApartmentList from '../components/ApartmentList';
import { Context } from '../index';
import { fetchApartments } from '../http/apartmentApi';
import CreateApartment from '../components/modals/CreateApartment';
import Statusbar from "../components/Statusbar";

const Apartment = observer(() => {
    const {apartment} = useContext(Context)
    const [apartmentVisible, setApartmentVisible] = useState(false)

    useEffect(()=>{
        fetchApartments().then(data=> apartment.setApartments(data))
    })

    return (
        <Container>
            <Row className='mt-3'>
                <Col md={3}>
                    <Typebar />
                </Col>
                <Col md={9}>
                    <Statusbar />

                    <Button
                        variant={"outline-dark"}
                        className="mt-4 p-2"
                        onClick={() => setApartmentVisible(true)}
                    >
                        Добавить квартиру</Button>

                    <Row>
                        <ApartmentList/>
                    </Row>
                </Col>
            </Row>
            <CreateApartment show={apartmentVisible} onHide={() => setApartmentVisible(false)}/>
        </Container>
    );
});

export default Apartment;
