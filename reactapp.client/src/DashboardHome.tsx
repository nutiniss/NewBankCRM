import './DashboardHome.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Table from 'react-bootstrap/Table';
import { PieChart } from 'react-minimal-pie-chart';
import { Link } from 'react-router-dom';
import { Klient } from './types/portfel/klient';
import { Okazja } from './types/szanseSprzedazowe/okazja';
import { Zadanie } from './types/kalendarz/zadanie';
import { Spotkanie } from './types/kalendarz/spotkanie';

const realizacjaCelu = 68;
const realizacjaPlanuMiesiecznego = 54;
const wartoscPortfela = '48,6 mln PLN';
const moiKlienci = 126;
const moiPotencjalniKlienci = 34;

const nowiKlienci: Klient[] = [
    { nazwa: 'Nexon Industry', status: 'Klient', branza: 'Produkcja', dataNawiazaniaRelacji: '10.04.2026' },
    { nazwa: 'PortLine Cargo', status: 'Klient', branza: 'Transport', dataNawiazaniaRelacji: '11.04.2026' },
    { nazwa: 'EcoFarm Group', status: 'Prospekt', branza: 'Agro', dataNawiazaniaRelacji: '13.04.2026' },
    { nazwa: 'MediNova', status: 'Klient', branza: 'Medycyna', dataNawiazaniaRelacji: '15.04.2026' },
];

const szanseSprzedazowe: Okazja[] = [
    { klient: 'Baltic Logistics Sp. z o.o.', produkt: 'Kredyt obrotowy', etap: 'Negocjacje warunków', dataZamkniecia: '28.04.2026' },
    { klient: 'HydroTech S.A.', produkt: 'Leasing floty', etap: 'Analiza ryzyka', dataZamkniecia: '06.05.2026' },
    { klient: 'GreenPol Energia', produkt: 'Kredyt inwestycyjny', etap: 'Oferta wstępna', dataZamkniecia: '12.05.2026' },
    { klient: 'MediCore Group', produkt: 'Cash management', etap: 'Spotkanie decyzyjne', dataZamkniecia: '15.05.2026' },
];

const podsumowanieSzans = [
    { title: 'Kredyty', value: 30, color: 'var(--color2)' },
    { title: 'Leasing', value: 35, color: 'var(--color3)' },
    { title: 'Finansowanie handlu', value: 20, color: 'var(--color4)' },
    { title: 'Cash Management', value: 15, color: 'var(--color5)' },
];

const licznikSzansPerEtap = [
    { etap: 'Kontakt', liczba: 8 },
    { etap: 'Oferta', liczba: 6 },
    { etap: 'Negocjacje', liczba: 4 },
    { etap: 'Domknięcie', liczba: 3 },
];

const zadaniaPriorytetowe: Zadanie[] = [
    { nazwa: 'Aktualizacja analizy finansowej klienta HydroTech', priorytet: 'Wysoki', termin: '22.04.2026' },
    { nazwa: 'Przygotowanie oferty cross-sellingowej dla MediCore', priorytet: 'Średni', termin: '24.04.2026' },
    { nazwa: 'Kontakt z działem prawnym ws. zabezpieczeń', priorytet: 'Wysoki', termin: '25.04.2026' },
    { nazwa: 'Weryfikacja dokumentów KYC dla GreenPol', priorytet: 'Niski', termin: '29.04.2026' },
];

const nadchodzaceSpotkania: Spotkanie[] = [
    { firma: 'Baltic Logistics Sp. z o.o.', typ: 'Spotkanie', dataIGodzina: '21.04.2026, 10:30', miejsce: 'Bank', temat: 'Analiza potrzeb finansowych', organizator: 'Anna Kowalska' },
    { firma: 'MediCore Group', typ: 'Spotkanie', dataIGodzina: '22.04.2026, 13:00', miejsce: 'Siedziba klienta', temat: 'Obsługa posprzedażowa', organizator: 'Marlena Chrobak' },
    { firma: 'GreenPol Energia', typ: 'Rozmowa telefoniczna', dataIGodzina: '23.04.2026, 09:15', miejsce: 'Inne', temat: 'Dokumenty klienta', organizator: 'Sławomir Sroka' },
    { firma: 'HydroTech S.A.', typ: 'Spotkanie', dataIGodzina: '24.04.2026, 11:45', miejsce: 'Bank', temat: 'Negocjacje zabezpieczeń', organizator: 'Violetta Chmielewska' },
];

function App() {
    return (
        <Container fluid className="dashboard-page pb-4">
            <Row className="g-3 mb-3 align-items-stretch">
                <Col xl={3} md={6}>
                    <section className="dashboard-tile sales-target-tile">
                        <h2 className="tile-title color1">Wykonanie celu sprzedażowego</h2>
                        <div className="sales-progress-stack">
                            <p className="tile-subtitle color2">Realizacja planu kwartalnego</p>
                            <ProgressBar now={realizacjaCelu} label={`${realizacjaCelu}%`} className="sales-progress mb-3" />
                            <p className="tile-subtitle color2">Realizacja planu miesięcznego</p>
                            <ProgressBar now={realizacjaPlanuMiesiecznego} label={`${realizacjaPlanuMiesiecznego}%`} className="sales-progress" />
                        </div>
                    </section>
                </Col>
                <Col xl={3} md={6}>
                    <section className="dashboard-tile portfolio-summary-tile">
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
                        <Link to="/moi-klienci" className="see-more-link">Zobacz więcej</Link>
                    </section>
                </Col>
            </Row>

            <Row className="g-3 mb-3 align-items-stretch">
                <Col xl={3} md={6}>
                    <section className="dashboard-tile">
                        <h2 className="tile-title color1">Podsumowanie szans</h2>
                        <div className="pie-chart-layout">
                            <div className="opportunities-pie" aria-label="Podsumowanie szans sprzedażowych" role="img">
                                <PieChart
                                    data={podsumowanieSzans}
                                    lineWidth={100}                                    
                                    startAngle={-90}
                                    animate
                                />
                            </div>
                            <ul className="pie-legend">
                                {podsumowanieSzans.map((item) => (
                                    <li key={item.title}>
                                        <span className="legend-swatch" style={{ backgroundColor: item.color }} />
                                        <span>{item.title}: {item.value}%</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Link to="/szanse-sprzedazowe" className="see-more-link">Zobacz więcej</Link>
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
                        <Link to="/pipeline" className="see-more-link">Zobacz więcej</Link>
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
                        <Link to="/szanse-sprzedazowe" className="see-more-link">Zobacz więcej</Link>
                    </section>
                </Col>
            </Row>

            <Row className="g-3 mb-3 align-items-stretch">
                <Col xl={6}>
                    <section className="dashboard-tile">
                        <h2 className="tile-title color1">Najbliższe zadania</h2>
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
                        <Link to="/zadania" className="see-more-link">Zobacz więcej</Link>
                    </section>
                </Col>
                <Col xl={6}>
                    <section className="dashboard-tile">
                        <h2 className="tile-title color1">Nadchodzące spotkania</h2>
                        <Table responsive hover className="dashboard-table mb-0">
                            <thead>
                                <tr>
                                    <th>Firma</th>
                                    <th>Data i godzina</th>
                                    <th>Miejsce</th>
                                </tr>
                            </thead>
                            <tbody>
                                {nadchodzaceSpotkania.map((spotkanie) => (
                                    <tr key={`${spotkanie.firma}-${spotkanie.dataIGodzina}`}>
                                        <td>{spotkanie.firma}</td>
                                        <td>{spotkanie.dataIGodzina}</td>
                                        <td>{spotkanie.miejsce}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <Link to="/spotkania" className="see-more-link">Zobacz więcej</Link>
                    </section>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
