
import React,{ Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from  '../../components/Burger/Burger';
import classes from './BuildComponents.module.css'

class BurgerBuilder extends Component
{
    
     state = {
         ingredients: {
             salad: 0,
             bacon: 0,
             cheese: 0,
             meat: 0
         }
     }

    render() {
        console.log("1");

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div className={classes.Content}>
                    BuildComponents
                </div>
            </Aux>

        );
    }
    

}
export default BurgerBuilder;