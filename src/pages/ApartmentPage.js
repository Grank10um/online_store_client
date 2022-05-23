import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Typebar from '../components/Typebar'
import CreateAmount from '../components/modals/CreateAmount';
import {useParams} from 'react-router-dom';
import {fetchOneApartment} from "../http/apartmentApi";


const ApartmentPage = () => {
    const [amountVisible, setAmountVisible] = useState(false)
    const [apartment_info, setApartment_info] = useState()
    const {id} = useParams()
    useEffect(() => {
        fetchOneApartment(id).then(data => setApartment_info(data))
    }, [])

    return (
        <Container>
            <Row className='mt-3'>
                <Col md={3}>
                    <Typebar />
                </Col>
                <Col md={6}>
                    <h5>Адрес: {apartment_info && apartment_info.ap_adress}</h5>
                    <h6> qwerty </h6>
                </Col>
                <Col md={3}>
                    <Button
                        variant={"outline-dark"}
                        className="mt-4 p-2"
                        size="sm"
                        onClick={() => setAmountVisible(true)}
                    >
                        Внести расходы
                    </Button>
                    <Button
                        variant={"outline-dark"}
                        size="sm"
                        className="mt-2 p-2"
                        onClick={() => setAmountVisible(true)}
                    >
                        На продажу</Button>
                    <Button
                        variant={"outline-dark"}
                        size="sm"
                        className="mt-2 p-2"
                        onClick={() => setAmountVisible(true)}
                    >
                        Внести деньги инвестора!!</Button>
                </Col>
            </Row>
            <CreateAmount show={amountVisible} onHide={() => setAmountVisible(false)}/>
        </Container>
    )
}

export default ApartmentPage
