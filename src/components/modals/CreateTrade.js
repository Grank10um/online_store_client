import React, {useState, useEffect, useContext} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button, Dropdown, Row, Container} from "react-bootstrap";
import {createApartment} from "../../http/apartmentApi";
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import {fetchCustomers, fetchUsers} from "../../http/userApi";
import {createTrade} from "../../http/tradeApi";
import DatePicker from "react-datepicker";


const CreateTrade = observer(({show, onHide}) => {
    const {device} = useContext(Context)
    const {user}=useContext(Context)
    const [adress, setAdress] = useState('')
    const [info, setInfo] = useState('')
    const [bank, setBank] = useState('')
    const [oficialPrice, setOficialPrice] = useState('')
    const [realPrice, setRealPrice] = useState('')
    const [dateTrade, setDateTrade] = useState(new Date());
    const addApartment = () => {
        createApartment(adress,1)
            .then(data=>createTrade("Покупка" ,bank,info,oficialPrice,realPrice,dateTrade,data,device.selectedCustomer.id))
            .then (data => onHide())
    }

    useEffect(() => {
        fetchCustomers().then(data=>device.setCustomers(data))
    }, [])

    function getDateTrade(dateTrade) {
        setDateTrade(dateTrade);
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Купить
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle>{device.selectedCustomer.cus_name || "Выберите владельца/инвестора"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.customers.map(customer =>
                            <Dropdown.Item
                                onClick={() => device.setSelectedCustomer(customer)}
                                key={customer.id}
                            >
                                    {customer.cus_name}
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control
                    value={adress}
                    onChange={e => setAdress(e.target.value)}
                    placeholder={"Введите адрес кваритры(коротное наименование)"}
                />
                <Form.Control className="mt-3 pl-3 pr-3"
                    value={bank}
                    onChange={e => setBank(e.target.value)}
                    placeholder={"Банк"}
                />
                <Container className="d-flex justify-content-between mt-3 pl-3 pr-3" >
                <Form.Control style={{display: "inline"}}
                    value={oficialPrice}
                    onChange={e => setOficialPrice(e.target.value)}
                    placeholder={"Цена по договору"}
                />
                <Form.Control
                    value={realPrice}
                    onChange={e => setRealPrice(e.target.value)}
                    placeholder={"Фактическая цена"}
                />
                    <DatePicker selected={dateTrade} onChange={getDateTrade} />
                </Container>

                <Form.Control className="mt-3 pl-3 pr-3"
                    value={info}
                    onChange={e => setInfo(e.target.value)}
                    placeholder={"Комментарии"}
                />




            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addApartment}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateTrade;