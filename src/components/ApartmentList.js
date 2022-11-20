import { observer } from 'mobx-react-lite';
import React, {useContext} from 'react';
import { Row } from 'react-bootstrap';
import { Context } from '../index';
import ApartmentItem from './ApartmentItem';


const ApartmentList = observer(() => {
    const {apartment}=useContext(Context)

  return ( 
    <Row>
        {apartment.apartments.map(apartment=>
                <ApartmentItem key={apartment.id} apartment={apartment}/>
            )}
    </Row>
      
  );
});
export default ApartmentList;