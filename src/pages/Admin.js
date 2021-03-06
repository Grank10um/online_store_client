import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import FlavorForm from "../components/modals/CreateDevice";


const Admin = () => {

    const [deviceVisible, setDeviceVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">

            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setDeviceVisible(true)}
            >
                Добавить устройство
            </Button>
            <FlavorForm show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
    

        </Container>
    );
};

export default Admin;