import React, {useContext, useEffect, useState} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Typebar from '../components/Typebar'
import CreateAmount from '../components/modals/CreateAmount';
import CreateValuation from "../components/modals/CreateValuation";
import {useParams} from 'react-router-dom';
import {fetchOneApartment} from "../http/apartmentApi";
import {fetchOneApartmentValuation, fetchValuations} from "../http/valuationApi";
import AmountList from "../components/AmountList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";


const ApartmentPage = observer (() => {
    const {amount} = useContext(Context)
    const [amountVisible, setAmountVisible] = useState(false)
    const [valuationVisible, setValuationVisible] = useState(false)
    const [apartment_info, setApartment_info] = useState()
    const [apartment_val, setApartment_val] = useState()
    const {id} = useParams()
    useEffect(() => {
        fetchOneApartment(id).then(data => setApartment_info(data))
        fetchOneApartmentValuation(id).then(data => setApartment_val(data))
        fetchValuations(id).then(data => amount.setAmounts(data))
        //fetchOneApartmentValuation(id).then(data=> console.log(data))
    }, [])

    return (
        <Container>
            <Row className='mt-3'>
                <Col md={3}>
                    <Typebar />
                </Col>
                <Col md={6}>
                    <h5>Адрес: {apartment_info && apartment_info.ap_adress}</h5>
                    <h6>Затраты: {apartment_val} </h6>
                    <AmountList/>
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
                        onClick={() => setValuationVisible(true)}
                    >
                        Внести деньги инвестора</Button>
                </Col>
            </Row>
            <CreateAmount show={amountVisible} onHide={() => setAmountVisible(false)}/>
            <CreateValuation show={valuationVisible} onHide={() => setValuationVisible(false)}/>
        </Container>
    )
});

export default ApartmentPage;
