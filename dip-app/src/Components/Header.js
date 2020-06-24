import React, { Component } from 'react';
import { Navbar, Container, NavLink, Form, FormControl, Nav, Button, NavbarBrand } from 'react-bootstrap';
import logo from '../logo192.png';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../Pages/Home';
import Development from '../Pages/Development';
import Shop from '../Pages/Shop';
import Basket from '../Pages/Basket';


class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <NavbarBrand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inlile-block align-top"
                                alt="Logo"
                            />
                            Web Shop
                        </NavbarBrand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="ml-5">
                            <Nav className="mr-auto">
                                <NavLink classname="ml-4" href="/">Головна</NavLink>
                                <NavLink className="ml-4" href="/development">Розробка</NavLink>
                                <NavLink className="ml-4" href="/shop">Товари</NavLink>
                            </Nav>
                            <NavLink className="ml-4" href="/basket"><Button id='cartButton' variant="outline-info"> Кошик </Button></NavLink>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/development" component={Development} />
                        <Route exact path="/shop" component={Shop} />
                        <Route exact path="/basket" component={Basket} />
                    </Switch>
                </Router>
            </>
        );
    }
}

export default Header;