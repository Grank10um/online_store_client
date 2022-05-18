import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Container, Row} from "react-bootstrap";

const Statusbar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Container className="d-flex" >
            {device.statuses.map(status =>
                <Card
                    style={ {cursor: "pointer", display: "inline"}}
                    key={status.id}
                    className="p-3"
                    onClick={()=> device.setSelectedStatus(status)}
                >
                    {status.status_name}
                </Card>
            )}
        </Container>
    );
});

export default Statusbar;