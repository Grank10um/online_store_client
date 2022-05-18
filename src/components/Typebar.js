import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import ListGroup from 'react-bootstrap/ListGroup'
import { useHistory } from 'react-router-dom'

const Typebar = observer(() => {
    const {device} = useContext(Context)
    const history = useHistory()
  return (
    <ListGroup>
      {device.types.map(type =>
        <ListGroup.Item
            key={type.id}
            style={{cursor: 'pointer'}}
            active={type.id === device.selectedType.id}
            border={type.id === device.selectedType.id ? 'danger' : 'light'}
            onClick= {()=> history.push(type.link)}
        >
          {type.name} 
        </ListGroup.Item>
        )}
    </ListGroup>
  );
});

export default Typebar;