import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form} from "react-bootstrap";
import {createAmount} from "../../http/valuationApi";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {fetchUsers} from "../../http/userApi";
import {useParams} from "react-router-dom";


const CreateAmount = observer(({show, onHide}) => {
    const {device, logins} = useContext(Context)
    const [amount, setAmount] = useState(0)
    const [info, setInfo] = useState('')
    const {id} = useParams()
    const addAmount = () => {
        createAmount(device.selectedWorkType.id,amount,info, id, logins.selectedUser.id).then(data => {
            setAmount(0)
            setInfo('')
            onHide()})
    }

    useEffect(()=>{
        fetchUsers().then(data=>logins.setUser(data))
    }, [])

    const ShowHideCustomers = () => {
        let customerShowHide=document.getElementById('customersChoice')
        if (customerShowHide.hidden) {
            customerShowHide.hidden=false
        }else {
            customerShowHide.hidden=true
        }
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить расходы
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                        placeholder={"Введите стоимость"}
                    />
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{device.selectedWorkType.name || "Выберите тип расходов"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.workTypes.map(workType =>
                                <Dropdown.Item
                                    onClick={() => device.setSelectedWorkType(workType)}
                                    key={workType.id}
                                >
                                    {workType.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={info}
                        onChange={e => setInfo(e.target.value)}
                        placeholder={"Описание"}
                    />
                    <Form.Check
                        onChange={ShowHideCustomers}
                        type="switch"
                        id="custom-switch"
                        label="Собственные стредства?"

                    />
                    <Dropdown id="customersChoice" className="mt-2 mb-2"  hidden={true}>
                        <Dropdown.Toggle>{logins.selectedUser.id ? logins.selectedUser.email : "Кто покупал"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {logins.user.map(customers =>
                                <Dropdown.Item
                                    onClick={() => logins.setSelectedUser(customers)}
                                    key={customers.email}
                                >
                                    {customers.email}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addAmount}>Добавить</Button>
            </Modal.Footer>
        </Modal>
)});


export default CreateAmount;