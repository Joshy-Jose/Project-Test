import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Button from '../../components/UI/Modal/Button/Button'

class OrderSummary extends Component {


    render () {

        const IngredientSummary = Object.keys(this.props.ingredients)
    .map(igKey => {
        return ( 
        <li key={igKey}>
        <span style={{textTransform: 'capitalize'}}>{igKey}: {this.props.ingredients[igKey]}</span>
        </li>)

    });
        return (
            <Aux>
            <h3>Your Order</h3>
            <p>Delicious Burger with following ingredients:</p>
            <ul>
                 {IngredientSummary}
            </ul>
            <p><strong>Total Price:{this.props.price.toFixed(2)}</strong></p>
            <Button btnType="Danger" clicked={this.props.puchaseCancelled}>CANCAL</Button>
            <Button btnType="Success"clicked={this.props.purchaseContinue}>CONTINUE</Button>
        </Aux>
        );

    }


}

export default OrderSummary;