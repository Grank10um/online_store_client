import React, {useContext, useState} from 'react';
import {Button, Col, Container, Row} from 'react-bootstrap';
import Typebar from '../components/Typebar'
import CreateTrade from "../components/modals/CreateTrade";
import {observer} from "mobx-react-lite";



const Trades = observer(() => {
    const [tradeVisible, setTradeVisible] = useState(false)

    return (    
        <Container>
            <Row className='mt-3'>
                <Col md={3}>
                    <Typebar />
                </Col>
                <Col md={9}>
                    <Button
                        variant={"outline-dark"}
                        className="mt-4 p-2"
                        onClick={() => setTradeVisible(true)}
                    >
                        Купить квартиру</Button>
                </Col>
            </Row>
            <CreateTrade show={tradeVisible} onHide={() => setTradeVisible(false)}/>
        </Container>
    );
});

export default Trades;