import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from 'react-router-dom';

export function Layout() {
    const [searchCompany, setSearchCompany] = useState('');

    const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <div className="app">
            <Navbar expand="lg" className="top-navbar px-3">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/" className="brand-section">
                        <img src="/image/logo.png" alt="NewBank CRM" className="logo" />
                        <span className="brand-text">NewBank CRM</span>
                    </Navbar.Brand>

                    <div className="user-panel">
                        <span className="user-name">
                            <i className="bi bi-person-circle user-name-icon" aria-hidden="true"></i>
                            <span>A.Doradca (72722)</span>
                        </span>
                        <Button variant="outline-light" size="sm">Wyloguj</Button>
                    </div>
                </Container>
            </Navbar>

            <Navbar expand="lg" className="menu-navbar px-3">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="w-100">
                        <Nav
                            className="menu-nav me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/" className="menu-link">Pulpit</Nav.Link>

                            <NavDropdown title="Mój portfel" id="moj-portfel" className="menu-dropdown">
                                <NavDropdown.Item as={Link} to="/moi-klienci">Moi klienci</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/nowy-klient-potencjalny">Nowy klient potencjalny</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/analiza-portfela">Analiza portfela</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Kalendarz" id="kalendarz-menu" className="menu-dropdown">
                                <NavDropdown.Item as={Link} to="/kalendarz">Kalendarz</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/spotkania">Spotkania</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/zadania">Zadania</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/nowe-spotkanie">Nowe spotkanie</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/nowe-zadanie">Nowe zadanie</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Szanse sprzedażowe" id="szanse-sprzedazowe-menu" className="menu-dropdown">
                                <NavDropdown.Item as={Link} to="/szanse-sprzedazowe">Szanse sprzedażowe</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/pipeline">Pipeline</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/nowa-okazja-biznesowa">Nowa szansa sprzedażowa</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Sprawy" id="sprawy-menu" className="menu-dropdown">
                                <NavDropdown.Item as={Link} to="/sprawy">Sprawy</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/nowa-sprawa">Nowa sprawa</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <Form className="company-search" onSubmit={handleSearchSubmit}>
                            <Form.Control
                                type="search"
                                placeholder="Wyszukaj klienta po nazwie firmy"
                                className="company-search-input"
                                aria-label="Wyszukaj klienta po nazwie firmy"
                                value={searchCompany}
                                onChange={(event) => setSearchCompany(event.target.value)}
                            />
                            <Button type="submit" variant="light" className="company-search-button">Szukaj</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="px-3 mt-3">
                <Container fluid>
                    <Outlet />
                </Container>
            </div>
        </div>
    );
}
