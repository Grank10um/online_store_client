import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form} from "react-bootstrap";
import {createValuation} from "../../http/valuationApi";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {fetchCustomers} from "../../http/userApi";
import {useParams} from "react-router-dom";
import DatePicker from "react-datepicker";


const CreateValuation = observer(({show, onHide}) => {
    const {device} = useContext(Context)
    const [valuation, setValuation] = useState(0)
    const [info, setInfo] = useState('Комментарии')
    const {id} = useParams()
    const [dateValuation, setDateValuation] = useState(new Date());
    const addValuation = () => {
        createValuation(0, valuation, info,dateValuation,id,device.selectedCustomer.id).then(data => {
            setValuation(0)
            setInfo('')
            //device.selectedCustomer.id=null
            onHide()})
    }

    useEffect(()=>{
        fetchCustomers().then(data=>device.setCustomers(data))
    }, [])

    function getDateValuation(dateValuation) {
        setDateValuation(dateValuation);
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Внести деньги
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown id="customersChoice" className="mt-2 mb-2">
                        <Dropdown.Toggle>{device.selectedCustomer.cus_name || "Кто внес деньги"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.customers.map(customers =>
                                <Dropdown.Item
                                    onClick={() => device.setSelectedCustomer(customers)}
                                    key={customers.id}
                                >
                                    {customers.cus_name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={valuation}
                        className="mt-2 mb-2"
                        onChange={e => setValuation(e.target.value)}  //проверка на число
                        placeholder={"Введите сумму"}
                    />
                    <DatePicker selected={dateValuation} onChange={getDateValuation} />
                    <Form.Control
                        value={info}
                        className="mt-2 mb-2"
                        onChange={e => setInfo(e.target.value)}
                        placeholder={"Комментарии"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addValuation}>Внести</Button>
            </Modal.Footer>
        </Modal>
    )});


export default CreateValuation;