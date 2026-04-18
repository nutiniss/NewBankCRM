import './DashboardHome.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Table from 'react-bootstrap/Table';

type Szansa = {
    klient: string;
    produkt: string;
    etap: string;
    dataZamkniecia: string;
};

type Zadanie = {
    nazwa: string;
    priorytet: 'Wysoki' | 'Średni' | 'Niski';
    termin: string;
};

type Spotkanie = {
    klient: string;
    dataIGodzina: string;
    tryb: 'Stacjonarnie' | 'Zdalnie';
};

type NowyKlient = {
    nazwa: string;
    branza: string;
    dataNawiazaniaRelacji: string;
};

type Oferta = {
    tytul: string;
    opis: string;
    image: string;
};

const realizacjaCelu = 68;
const realizacjaPlanuMiesiecznego = 54;
const wartoscPortfela = '48,6 mln PLN';
const moiKlienci = 126;
const moiPotencjalniKlienci = 34;

const nowiKlienci: NowyKlient[] = [
    { nazwa: 'Nexon Industry', branza: 'Produkcja', dataNawiazaniaRelacji: '10.04.2026' },
    { nazwa: 'PortLine Cargo', branza: 'Transport', dataNawiazaniaRelacji: '11.04.2026' },
    { nazwa: 'EcoFarm Group', branza: 'Agro', dataNawiazaniaRelacji: '13.04.2026' },
    { nazwa: 'MediNova', branza: 'Medycyna', dataNawiazaniaRelacji: '15.04.2026' },
];

const szanseSprzedazowe: Szansa[] = [
    { klient: 'Baltic Logistics Sp. z o.o.', produkt: 'Kredyt obrotowy', etap: 'Negocjacje warunków', dataZamkniecia: '28.04.2026' },
    { klient: 'HydroTech S.A.', produkt: 'Leasing floty', etap: 'Analiza ryzyka', dataZamkniecia: '06.05.2026' },
    { klient: 'GreenPol Energia', produkt: 'Kredyt inwestycyjny', etap: 'Oferta wstępna', dataZamkniecia: '12.05.2026' },
    { klient: 'MediCore Group', produkt: 'Cash management', etap: 'Spotkanie decyzyjne', dataZamkniecia: '15.05.2026' },
];

const podsumowanieSzans = [
    { etykieta: 'Nowe', wartosc: 30, kolor: 'color2' },
    { etykieta: 'W toku', wartosc: 35, kolor: 'color3' },
    { etykieta: 'Finalizacja', wartosc: 20, kolor: 'color4' },
    { etykieta: 'Wygrane', wartosc: 15, kolor: 'color5' },
];

const licznikSzansPerEtap = [
    { etap: 'Kontakt', liczba: 8 },
    { etap: 'Analiza', liczba: 6 },
    { etap: 'Oferta', liczba: 5 },
    { etap: 'Negocjacje', liczba: 4 },
    { etap: 'Domknięcie', liczba: 3 },
];

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
    {
        tytul: 'Kredyt obrotowy',
        opis: 'Szybki dostęp do środków na bieżące wydatki operacyjne i sezonowe zwiększenie skali działalności.',
        image: '/image/kredytObrotowy.png',
    },
    {
        tytul: 'Leasing Transport',
        opis: 'Nowoczesna flota bez angażowania własnego kapitału, z przewidywalnymi kosztami i uproszczonym procesem decyzyjnym.',
        image: '/image/leasing.png',
    },
];

const zadaniaPriorytetowe: Zadanie[] = [
    { nazwa: 'Aktualizacja analizy finansowej klienta HydroTech', priorytet: 'Wysoki', termin: '22.04.2026' },
    { nazwa: 'Przygotowanie oferty cross-sellingowej dla MediCore', priorytet: 'Średni', termin: '24.04.2026' },
    { nazwa: 'Kontakt z działem prawnym ws. zabezpieczeń', priorytet: 'Wysoki', termin: '25.04.2026' },
    { nazwa: 'Weryfikacja dokumentów KYC dla GreenPol', priorytet: 'Niski', termin: '29.04.2026' },
];

const nadchodzaceSpotkania: Spotkanie[] = [
    { klient: 'Baltic Logistics Sp. z o.o.', dataIGodzina: '21.04.2026, 10:30', tryb: 'Zdalnie' },
    { klient: 'MediCore Group', dataIGodzina: '22.04.2026, 13:00', tryb: 'Stacjonarnie' },
    { klient: 'GreenPol Energia', dataIGodzina: '23.04.2026, 09:15', tryb: 'Zdalnie' },
    { klient: 'HydroTech S.A.', dataIGodzina: '24.04.2026, 11:45', tryb: 'Stacjonarnie' },
];

function App() {
    return (
        <Container fluid className="dashboard-page pb-4">
            <Row className="g-3 mb-3 align-items-stretch">
                <Col xl={3} md={6}>
                    <section className="dashboard-tile">
                        <h2 className="tile-title color1">Wykonanie celu sprzedażowego</h2>
                        <p className="tile-subtitle color2">Realizacja planu kwartalnego</p>
                        <ProgressBar now={realizacjaCelu} label={`${realizacjaCelu}%`} className="sales-progress mb-3" />
                        <p className="tile-subtitle color2">Realizacja planu miesięcznego</p>
                        <ProgressBar now={realizacjaPlanuMiesiecznego} label={`${realizacjaPlanuMiesiecznego}%`} className="sales-progress" />
                    </section>
                </Col>
                <Col xl={3} md={6}>
                    <section className="dashboard-tile">
                        <h2 className="tile-title color1">Podsumowanie portfela</h2>
                        <p className="metric-value">{wartoscPortfela}</p>
                        <div className="portfolio-kpis">
                            <div className="portfolio-kpi-item">
                                <span className="portfolio-kpi-label">Moi klienci</span>
                                <span className="portfolio-kpi-value">{moiKlienci}</span>
                            </div>
                            <div className="portfolio-kpi-item">
                                <span className="portfolio-kpi-label">Moi potencjalni klienci</span>
                                <span className="portfolio-kpi-value">{moiPotencjalniKlienci}</span>
                            </div>
                        </div>
                        <p className="metric-note">Średnia marża: 3.9%</p>
                    </section>
                </Col>
                <Col xl={6} md={12}>
                    <section className="dashboard-tile">
                        <h2 className="tile-title color1">Nowi klienci</h2>
                        <Table responsive hover className="dashboard-table mb-0">
                            <thead>
                                <tr>
                                    <th>Nazwa klienta</th>
                                    <th>Branża</th>
                                    <th>Data nawiązania relacji</th>
                                </tr>
                            </thead>
                            <tbody>
                                {nowiKlienci.map((klient) => (
                                    <tr key={klient.nazwa}>
                                        <td>{klient.nazwa}</td>
                                        <td>{klient.branza}</td>
                                        <td>{klient.dataNawiazaniaRelacji}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <a href="#" className="see-more-link">Zobacz więcej</a>
                    </section>
                </Col>
            </Row>

            <Row className="g-3 mb-3 align-items-stretch">
                <Col xl={3} md={6}>
                    <section className="dashboard-tile">
                        <h2 className="tile-title color1">Podsumowanie szans</h2>
                        <div className="pie-chart-layout">
                            <div className="opportunities-pie" aria-label="Podsumowanie szans sprzedażowych" role="img" />
                            <ul className="pie-legend">
                                {podsumowanieSzans.map((item) => (
                                    <li key={item.etykieta}>
                                        <span className={`legend-swatch ${item.kolor}`} />
                                        <span>{item.etykieta}: {item.wartosc}%</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <a href="#" className="see-more-link">Zobacz więcej</a>
                    </section>
                </Col>
                <Col xl={3} md={6}>
                    <section className="dashboard-tile">
                        <h2 className="tile-title color1">Szanse per etap</h2>
                        <div className="stage-counters">
                            {licznikSzansPerEtap.map((element) => (
                                <div className="stage-counter-item" key={element.etap}>
                                    <span className="stage-name">{element.etap}</span>
                                    <span className="stage-count">{element.liczba}</span>
                                </div>
                            ))}
                        </div>
                        <a href="#" className="see-more-link">Zobacz więcej</a>
                    </section>
                </Col>
                <Col xl={6}>
                    <section className="dashboard-tile">
                        <h2 className="tile-title color1">Szanse sprzedażowe</h2>
                        <Table responsive hover className="dashboard-table mb-0">
                            <thead>
                                <tr>
                                    <th>Nazwa klienta</th>
                                    <th>Produkt</th>
                                    <th>Etap</th>
                                    <th>Planowana data zamknięcia etapu</th>
                                </tr>
                            </thead>
                            <tbody>
                                {szanseSprzedazowe.map((szansa) => (
                                    <tr key={`${szansa.klient}-${szansa.produkt}`}>
                                        <td>{szansa.klient}</td>
                                        <td>{szansa.produkt}</td>
                                        <td>{szansa.etap}</td>
                                        <td>{szansa.dataZamkniecia}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <a href="#" className="see-more-link">Zobacz więcej</a>
                    </section>
                </Col>
            </Row>

            <Row className="g-3 mb-3 align-items-stretch">
                <Col xl={6}>
                    <section className="dashboard-tile">
                        <h2 className="tile-title color1">Priorytetowe zadania</h2>
                        <Table responsive hover className="dashboard-table mb-0">
                            <thead>
                                <tr>
                                    <th>Nazwa zadania</th>
                                    <th>Priorytet</th>
                                    <th>Termin realizacji</th>
                                </tr>
                            </thead>
                            <tbody>
                                {zadaniaPriorytetowe.map((zadanie) => (
                                    <tr key={zadanie.nazwa}>
                                        <td>{zadanie.nazwa}</td>
                                        <td>
                                            <span className={`priority-chip ${zadanie.priorytet.toLowerCase()}`}>{zadanie.priorytet}</span>
                                        </td>
                                        <td>{zadanie.termin}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <a href="#" className="see-more-link">Zobacz więcej</a>
                    </section>
                </Col>
                <Col xl={6}>
                    <section className="dashboard-tile">
                        <h2 className="tile-title color1">Nadchodzące spotkania</h2>
                        <Table responsive hover className="dashboard-table mb-0">
                            <thead>
                                <tr>
                                    <th>Nazwa klienta</th>
                                    <th>Data i godzina</th>
                                    <th>Stacjonarnie/Zdalnie</th>
                                </tr>
                            </thead>
                            <tbody>
                                {nadchodzaceSpotkania.map((spotkanie) => (
                                    <tr key={`${spotkanie.klient}-${spotkanie.dataIGodzina}`}>
                                        <td>{spotkanie.klient}</td>
                                        <td>{spotkanie.dataIGodzina}</td>
                                        <td>{spotkanie.tryb}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <a href="#" className="see-more-link">Zobacz więcej</a>
                    </section>
                </Col>
            </Row>

            <Row className="g-3">
                <Col xs={12}>
                    <section className="dashboard-tile">
                        <h2 className="tile-title color1">Sekcja z ofertami</h2>
                        <Row className="g-3">
                            {oferty.map((oferta) => (
                                <Col key={oferta.tytul} md={6} xl={3}>
                                    <Card className="offer-card h-100">
                                        <Card.Img variant="top" src={oferta.image} alt={oferta.tytul} className="offer-image" />
                                        <Card.Body className="d-flex flex-column">
                                            <Card.Title>{oferta.tytul}</Card.Title>
                                            <Card.Text className="flex-grow-1">{oferta.opis}</Card.Text>
                                            <Button className="offer-button mt-2">Zaoferuj</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </section>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
