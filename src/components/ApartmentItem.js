import React from 'react';
import {Card, Button, Container } from 'react-bootstrap';
import {APARTMENT_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom"

const ApartmentItem = ({apartment}) => {
    const history = useHistory()

  return (
  <Container>
      <Card className='mt-3'>
        <Card.Header>{apartment.id}</Card.Header>
          <Card.Body>
              <Card.Title>{apartment.ap_adress}</Card.Title>
                  <Card.Text>
                      {apartment.status.status_name}
                  </Card.Text>
              <Button
                  variant={"outline-dark"}
                  className="mt-4 p-2"
                  onClick={() => history.push(APARTMENT_ROUTE + '/' + apartment.id)}
              >Подробнее</Button>
              </Card.Body>
          </Card>
  </Container>
  );
};
export default ApartmentItem;