import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from 'react-router-dom';
import type { Oferta } from '../types/pulpit/oferta';

const oferty: Oferta[] = [
    {
        tytul: 'Kredyt w rachunku bieżącym',
        opis: 'Elastyczne finansowanie kapitału obrotowego, które wzmacnia płynność firmy i pozwala szybciej reagować na potrzeby rynku.',
        image: '/image/krb.png',
    },
    {
        tytul: 'Kredyt inwestycyjny',
        opis: 'Długoterminowe wsparcie rozwoju przedsiębiorstwa z harmonogramem spłat dopasowanym do cyklu inwestycji.',
        image: '/image/kredytInwestycyjny.png',
    },
    // {
    //     tytul: 'Kredyt obrotowy',
    //     opis: 'Szybki dostęp do środków na bieżące wydatki operacyjne i sezonowe zwiększenie skali działalności.',
    //     image: '/image/kredytObrotowy.png',
    // },
    // {
    //     tytul: 'Leasing Transport',
    //     opis: 'Nowoczesna flota bez angażowania własnego kapitału, z przewidywalnymi kosztami i uproszczonym procesem decyzyjnym.',
    //     image: '/image/leasing.png',
    // },
];

export function Layout() {
    const [isSideBannerCollapsed, setIsSideBannerCollapsed] = useState(false);

    return (
        <div className="app d-flex flex-column min-vh-100">
            <Navbar expand="lg" className="top-navbar px-3">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/" className="brand-section">
                        <img src="/image/logo.png" alt="NewBank CRM" className="logo" />                        
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
                                <NavDropdown.Item as={Link} to="/obsluga-spraw">Obsługa spraw</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/nowa-sprawa">Nowa sprawa</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <Form className="company-search" >
                            <Form.Control
                                type="search"
                                placeholder="Wyszukaj klienta po nazwie firmy"
                                className="company-search-input"
                                aria-label="Wyszukaj klienta po nazwie firmy"                                
                            />
                            <Button type="submit" variant="light" className="company-search-button">Szukaj</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <main className="app-main ps-3 pe-0 flex-grow-1">
                <Container fluid className="layout-main-container">
                    <div className="layout-main-grid">
                        <section className="layout-main-content">
                            <Outlet />
                        </section>

                        <aside className={`layout-side-banner${isSideBannerCollapsed ? ' layout-side-banner-collapsed' : ''}`}>
                            <Button
                                type="button"
                                variant="light"
                                size="sm"
                                className="side-banner-toggle"
                                aria-expanded={!isSideBannerCollapsed}
                                aria-controls="side-banner-offers"
                                onClick={() => setIsSideBannerCollapsed((isCollapsed) => !isCollapsed)}
                            >
                                <i
                                    className={`bi ${isSideBannerCollapsed ? 'bi-chevron-left' : 'bi-chevron-right'}`}
                                    aria-hidden="true"
                                ></i>
                                {/*<span className="side-banner-toggle-text" aria-hidden="true">*/}
                                {/*    {isSideBannerCollapsed ? 'Rozwiń' : 'Zwiń'}*/}
                                {/*</span>*/}
                                <span className="visually-hidden">
                                    {isSideBannerCollapsed ? 'Rozwiń panel ofert' : 'Zwiń panel ofert'}
                                </span>
                            </Button>
                            <div id="side-banner-offers" className="side-banner-content" aria-hidden={isSideBannerCollapsed}>
                                <h2 className="side-banner-title">Oferty</h2>
                                <div className="side-offers-list">
                                    {oferty.map((oferta) => (
                                        <Card className="offer-card side-offer-card" key={oferta.tytul}>
                                            <Card.Img variant="top" src={oferta.image} alt={oferta.tytul} className="offer-image side-offer-image" />
                                            <Card.Body className="d-flex flex-column">
                                                <Card.Title className="side-offer-title">{oferta.tytul}</Card.Title>
                                                <Card.Text className="side-offer-text">{oferta.opis}</Card.Text>
                                                <Link to="/nowa-okazja-biznesowa" className="btn offer-button mt-2">Zaoferuj</Link>
                                            </Card.Body>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </div>
                </Container>
            </main>

            <footer className="app-footer px-3 py-2 mt-3">
                <Container fluid className="app-footer-content">
                    <span className="app-footer-brand">NewBank CRM</span>
                    <div className="app-footer-actions">
                        <Link to="/nowa-okazja-biznesowa" className="btn btn-outline-light btn-sm">
                            Nowa szansa sprzedażowa
                        </Link>
                        <Link to="/nowe-spotkanie" className="btn btn-outline-light btn-sm">
                            Nowe spotkanie
                        </Link>
                        <Link to="/nowe-zadanie" className="btn btn-outline-light btn-sm">
                            Nowe zadanie
                        </Link>
                    </div>
                </Container>
            </footer>
        </div>
    );
}
