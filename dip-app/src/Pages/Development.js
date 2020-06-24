import React, { Component } from 'react';
import { Container, TabContainer, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'react-bootstrap';
import tabItem1 from '../tabcontent/tabItem1.jpeg'
import tabItem2 from '../tabcontent/tabItem2.jpeg'
import tabItem3 from '../tabcontent/tabItem3.png'
import tabItem4 from '../tabcontent/tabItem4.png'

class Development extends Component {
    render() {
        return (
            <Container>
                <TabContainer id="ltags" defaultActiveKey="first" >
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-5">
                                <NavItem>
                                    <NavLink eventKey="first">
                                        Дизайн
                                    </NavLink>
                                    <NavLink eventKey="second">
                                        Розробник
                                    </NavLink>
                                    <NavLink eventKey="third">
                                        Програмна реалізація
                                    </NavLink>
                                    <NavLink eventKey="fourth">
                                        Фреймворки
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <TabContent className="mt-3">
                                <TabPane eventKey="first">
                                    <p>Основою дизайнерської ідеєю послужив базовий набір стилів фреймворка React і bootstrap.js, метою якого є максимально формальна розстановка компонентів з мінімізацією непотрібних даних. Таким чином йде уникнення непотрібної завантаженості і об'ємності сайту </p>
                                    <img
                                        src={tabItem1}
                                    />

                                </TabPane>
                                <TabPane eventKey="second">
                                    <img
                                        src={tabItem2}
                                    />
                                    <p>
                                        Власне кажучи, розробником є доповідач з цього проекту, Еглевскій Владислав Олександрович, 1998 г., гр. КІУКІ-16-7.</p>
                                </TabPane>
                                <TabPane eventKey="third">
                                    <img
                                        src={tabItem3}
                                    />
                                    <p>В процесі розробки був використаний величезний стек технологій, описаних в теоретичній частині дипломної роботи</p>
                                </TabPane>
                                <TabPane eventKey="fourth">
                                    <p>Основними фреймворками в процесі створення даного проекту були React.js, Bootstrap.js зі допоміжною бібліотекою react-router</p>
                                    <img
                                        src={tabItem4}
                                    />

                                </TabPane>
                            </TabContent>
                        </Col>
                    </Row>
                </TabContainer>
            </Container>
        );
    }
}

export default Development;