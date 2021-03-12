import React from 'react';
// import Logo from '../../../Logo/Logo';
import burgerLogo from '../../../../assests/images/burger-logo.png';
import NavigationItems from '../../Toolbar/NavigationItems/NavigationItems';
import classes from '../../Toolbar/SideDrawer/SideDrawer.module.css';
import Backdrop from '../../../UI/Modal/Backdrop/Backdrop';
import Aux from '../../../../hoc/Aux';

const sideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses =  [classes.SideDrawer, classes.Open];
    }

    return(
        <Aux>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
            <img src={burgerLogo} alt="MyBurger" height="70%"/> 
            </div> 
            <nav>
                <NavigationItems/>
            </nav>
        </div>
 </Aux>
);

}

export default sideDrawer;