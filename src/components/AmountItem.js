import React from 'react';
import {Card, Container } from 'react-bootstrap';

const AmountItem = ({amount}) => {

    return (
        <Container>
            <Card className='mt-3'>
                <Card.Header>{amount.val_type}</Card.Header>
                <Card.Body>
                    <Card.Title>{amount.val_info+ ', Платил: '+amount.customerId}</Card.Title>
                    <Card.Text>
                        {amount.val_sum + ' Rub'}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};
export default AmountItem;