import React, {useState, useEffect, useContext} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button, Dropdown} from "react-bootstrap";
import {createApartment} from "../../http/apartmentApi";
import {fetchStatuses} from "../../http/statusApi"
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';

const CreateApartment = observer(({show, onHide}) => {
    const {apartment} = useContext(Context)
    const [adress, setAdress] = useState('')
    const addApartment = () => {
        createApartment(adress, apartment.selectedStatus.id)
            // .then(function (response) {
            //     response.json().then(function (data) {
            //         console.log('data', data)
            //     })
            // })

     .then(data => onHide())
  //           console.log(JSON.parse(JSON.res().id))
    }

    useEffect(() => {
        fetchStatuses().then(data => apartment.setStatuses(data))
    }, [])

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={adress}
                        onChange={e => setAdress(e.target.value)}
                        placeholder={"Введите название типа"}
                />
                <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{apartment.selectedStatus.status_name || "Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {apartment.statuses.map(status =>
                                <Dropdown.Item
                                    onClick={() => apartment.setSelectedStatus(status)}
                                    key={status.id}
                                >
                                    {status.status_name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
            </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addApartment}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateApartment;