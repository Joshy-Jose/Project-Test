import React from 'react';
import Aux from '../../hoc/Aux';
import Button from '../../components/UI/Modal/Button/Button'

const orderSummary = (props) =>
{
    const IngredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return ( 
        <li key={igKey}>
        <span style={{textTransform: 'capitalize'}}>{igKey}: {props.ingredients[igKey]}</span>
        </li>)

    });


    return(
        <Aux>
            <h3>Your Order</h3>
            <p>Delicious Burger with following ingredients:</p>
            <ul>
                 {IngredientSummary}
            </ul>
            <p><strong>Total Price:{props.price.toFixed(2)}</strong></p>
            <Button btnType="Danger" clicked={props.puchaseCancelled}>CANCAL</Button>
            <Button btnType="Success"clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    );

}

export default orderSummary;