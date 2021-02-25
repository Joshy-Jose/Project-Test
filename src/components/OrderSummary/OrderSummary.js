import React from 'react';
import Aux from '../../hoc/Aux'

const orderSummary = (props) =>
{
    console.log('props',props);
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
        <p> Continue to checkout?</p>
        </Aux>
    );

}

export default orderSummary;