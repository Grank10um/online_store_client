import { observer } from 'mobx-react-lite';
import React, {useContext} from 'react';
import { Row } from 'react-bootstrap';
import { Context } from '../index';
import AmountItem from "./AmountItem";


const AmountList = observer(() => {
    const {amount} = useContext(Context)

    return (
        <Row>
            {amount.amounts.map(amount=>
                <AmountItem key={amount.id} amount={amount}/>
            )}
        </Row>

    );
});
export default AmountList;