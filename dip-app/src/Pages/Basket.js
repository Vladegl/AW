import React, { Component, createElement } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import item1 from '../shopItems/cardItem1.jpeg'
import item2 from '../shopItems/cardItem2.jpg'
import item3 from '../shopItems/cardItem3.jpg'
import { render } from 'react-dom';


let cart = {
    'item1': {
        'name': "MacBook Air",
        'price': 600,
    },
    'item2': {
        'name': "Bulls Wildcross Street",
        'price': 350,
    },
    'item3': {
        'name': "Converse All Star",
        'price': 125,
    },

}

class Basket extends Component {
    constructor(props) {
        super(props);

        this.state = { count: 0, count1: 0, count2: 0 }
        this.increaseButton = this.increaseButton.bind(this);
        this.decreaseButton = this.decreaseButton.bind(this);
        this.increaseButton1 = this.increaseButton1.bind(this);
        this.decreaseButton1 = this.decreaseButton1.bind(this);
        this.increaseButton2 = this.increaseButton2.bind(this);
        this.decreaseButton2 = this.decreaseButton2.bind(this);
        this.alertfunc = this.alertfunc.bind(this);

    }

    increaseButton() {
        this.setState(stateSet => ({
            count: stateSet.count + 1
        }))
    }
    increaseButton1() {
        this.setState(stateSet => ({
            count1: stateSet.count1 + 1
        }))
    }
    increaseButton2() {
        this.setState(stateSet => ({
            count2: stateSet.count2 + 1
        }))
    }

    decreaseButton() {
        if (this.state.count - 1 >= 0)
            this.setState(stateSet => ({
                count: stateSet.count - 1
            }))
    }
    decreaseButton1() {
        if (this.state.count1 - 1 >= 0)
            this.setState(stateSet => ({
                count1: stateSet.count1 - 1
            }))
    }
    decreaseButton2() {
        if (this.state.count2 - 1 >= 0)
            this.setState(stateSet => ({
                count2: stateSet.count2 - 1
            }))
    }

    alertfunc() {
        let price;
        if(this.state.count)
        alert('Вы успішно придбали товар')
        else
        alert('На даний момент не обрано жодного товару')
    }


    render() {
        return (
            <div className='ShoppingContainer'>
                <div className='ShoppingItem'>
                    <img src={item1} />
                    <div>{cart.item1.name} - {cart.item1.price}$</div>
                    <button onClick={this.increaseButton}>Покласти у кошик</button>
                    <button onClick={this.decreaseButton}>Видалити з кошика</button>
                    <div>У кошику {this.state.count} од. товару</div>
                </div>
                <div className='ShoppingItem'>
                    <img src={item2} />
                    <div>{cart.item2.name} - {cart.item2.price}$</div>
                    <button onClick={this.increaseButton1}>Покласти у кошик</button>
                    <button onClick={this.decreaseButton1}>Видалити з кошика</button>
                    <div>У кошику {this.state.count1} од. товару</div>
                </div>
                <div className='ShoppingItem'>
                    <img src={item3} />
                    <div>{cart.item3.name} - {cart.item3.price}$</div>
                    <button onClick={this.increaseButton2}>Покласти у кошик</button>
                    <button onClick={this.decreaseButton2}>Видалити з кошика</button>
                    <div>У кошику {this.state.count2} од. товару</div>
                </div>
        <button className="sumButton" onClick={this.alertfunc}>Оплатити<span>({this.state.count*cart.item1.price+this.state.count1*cart.item2.price+this.state.count2*cart.item3.price}$)</span></button>
            </div>
        );
    }
}

export default Basket;