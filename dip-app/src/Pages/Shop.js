import React, { Component } from 'react';
import { Container, CardDeck, Card, CardImg, Button } from 'react-bootstrap';
import cardItem1 from '../shopItems/cardItem1.jpeg'
import cardItem2 from '../shopItems/cardItem2.jpg'
import cardItem3 from '../shopItems/cardItem3.jpg'
import { CardBody, CardTitle } from 'react-bootstrap/Card';

const spanItemStyle = {
    color: 'blue'
}



class Shop extends Component {
    render() {
        return (
            <Container>
                <h2 className="text-center mb-4">
                Тут ви можете ознайомитися з товарами в наявності і їх цінами. Для покупки перейдіть в корзину в правому верхньому куту меню.
            </h2>
                <CardDeck>
                    <Card>
                        <CardImg variant="top" src={cardItem1}></CardImg>
                        <div className="text-center mb-5">Макбук <span style={spanItemStyle}>MacBook Air</span></div>
                        <Button>600$</Button>
                    </Card>
                    <Card>
                        <CardImg variant="top" src={cardItem2}></CardImg>
                        <div className="text-center mb-5">Велосипед <span style={spanItemStyle}>Bulls Wildcross Street</span></div>
                        <Button>350$</Button>
                    </Card>
                    <Card>
                        <CardImg variant="top" src={cardItem3}></CardImg>
                        <div className="text-center mb-5">Кросовки <span style={spanItemStyle}>Converse All Star</span></div>
                        <Button>125$</Button>
                    </Card>
                </CardDeck>
            </Container>
        );
    }
}

export default Shop;