import React, { Component } from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import item1 from '../assets/item1.jpg'
import item2 from '../assets/item2.jpg'
import item3 from '../assets/item3.jpg'
import CarouselCaption from 'react-bootstrap/CarouselCaption';


class SliderBox extends Component {
    render() {
        return (
            <Carousel>
                <CarouselItem>
                    <img
                        className="d-block w-100"
                        src={item1}
                        alt="First item"
                    />
                    <CarouselCaption>
                        <div>Покупки з будь-якої точки планети</div>
                        <p>Купувати з нами дуже просто! Доставка в будь-яку точку світу та численні відділення не залишать байдужим навіть найвибагливішого покупця.
                    </p>
                    </CarouselCaption>
                </CarouselItem>
                <CarouselItem>
                    <img
                        className="d-block w-100"
                        src={item2}
                        alt="Second item"
                    />
                    <CarouselCaption>
                        <div>Нас рекомендують!</div>
                        <p>Величезна кількість позитивних відгуків наших покупців є запорукою нашої надійності на світовому ринку.
                            </p>
                    </CarouselCaption>
                </CarouselItem>
                <CarouselItem>
                    <img
                        className="d-block w-100"
                        src={item3}
                        alt="Third item"
                    />
                    <CarouselCaption>
                        <div>Дружнє співтовариство!</div>
                        <p>Вибирайте нас і станете частиною величезної спільноти! Щомісячні конкурси, івенти і призи для активних користувачів нашої платформи.
                                    </p>
                    </CarouselCaption>
                </CarouselItem>
            </Carousel>
        );
    }
}

export default SliderBox;