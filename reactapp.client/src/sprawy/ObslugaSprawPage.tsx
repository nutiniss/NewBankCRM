import { useMemo, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

type ObslugiwanaSprawa = {
    numer: string
    nazwaKlienta: string
    dataZgloszenia: string
    typSprawy: string
    priorytet: string
    status: string
    wlasciciel: string
    termin: string
    produkt: string
    opis: string
    oczekiwanyRezultat: string
    nastepnyKrok: string
}

const sprawyStartowe: ObslugiwanaSprawa[] = [
    {
        numer: 'SPR-2026-0142',
        nazwaKlienta: 'Alfa Sp. z o.o.',
        dataZgloszenia: '2026-06-17',
        typSprawy: 'Reklamacja opłaty',
        priorytet: 'Wysoki',
        status: 'W toku',
        wlasciciel: 'A. Doradca',
        termin: '2026-06-24',
        produkt: 'Rachunek bieżący',
        opis: 'Klient kwestionuje naliczenie opłaty za przelew zagraniczny i prosi o weryfikację taryfy.',
        oczekiwanyRezultat: 'Zwrot opłaty lub pisemne uzasadnienie naliczenia kosztu.',
        nastepnyKrok: 'Przekazać historię transakcji do zespołu reklamacji.',
    },
    {
        numer: 'SPR-2026-0139',
        nazwaKlienta: 'Beta Manufacturing S.A.',
        dataZgloszenia: '2026-06-14',
        typSprawy: 'Zmiana pełnomocnictwa',
        priorytet: 'Średni',
        status: 'W toku',
        wlasciciel: 'A. Doradca',
        termin: '2026-06-21',
        produkt: 'Bankowość internetowa',
        opis: 'Aktualizacja listy użytkowników i limitów autoryzacji po zmianach w zarządzie spółki.',
        oczekiwanyRezultat: 'Aktywne dostępy dla nowych pełnomocników zgodnie z uchwałą.',
        nastepnyKrok: 'Zweryfikować kompletność dokumentów rejestrowych.',
    },
    {
        numer: 'SPR-2026-0128',
        nazwaKlienta: 'Centrum Logistyczne Gamma',
        dataZgloszenia: '2026-06-09',
        typSprawy: 'Zaświadczenie bankowe',
        priorytet: 'Niski',
        status: 'Nowa',
        wlasciciel: 'M. Opiekun',
        termin: '2026-06-26',
        produkt: 'Kredyt obrotowy',
        opis: 'Klient potrzebuje zaświadczenia o obsłudze kredytu do przetargu publicznego.',
        oczekiwanyRezultat: 'Przygotowane i podpisane zaświadczenie w formie PDF.',
        nastepnyKrok: 'Potwierdzić zakres danych wymaganych przez klienta.',
    },
]

export const ObslugaSpraw = () => {
    const [sprawy, setSprawy] = useState(sprawyStartowe)
    const [filtryOtwarte, setFiltryOtwarte] = useState(true)
    const [filtry, setFiltry] = useState({
        fraza: '',
        priorytet: '',
        status: 'W toku',
        typSprawy: '',
        wlasciciel: '',
        terminDo: '',
    })
    const [wybranyNumer, setWybranyNumer] = useState(sprawyStartowe[0].numer)

    const opcjeFiltrow = useMemo(() => ({
        typySpraw: Array.from(new Set(sprawy.map((sprawa) => sprawa.typSprawy))),
        wlasciciele: Array.from(new Set(sprawy.map((sprawa) => sprawa.wlasciciel))),
    }), [sprawy])

    const listaPoFiltrowaniu = useMemo(() => sprawy.filter((sprawa) => {
        const fraza = filtry.fraza.trim().toLowerCase()

        return (!fraza || [sprawa.numer, sprawa.nazwaKlienta, sprawa.typSprawy, sprawa.produkt].some((wartosc) => wartosc.toLowerCase().includes(fraza)))
            && (!filtry.priorytet || sprawa.priorytet === filtry.priorytet)
            && (!filtry.status || sprawa.status === filtry.status)
            && (!filtry.typSprawy || sprawa.typSprawy === filtry.typSprawy)
            && (!filtry.wlasciciel || sprawa.wlasciciel === filtry.wlasciciel)
            && (!filtry.terminDo || sprawa.termin <= filtry.terminDo)
    }), [filtry, sprawy])

    const wybranaSprawa = sprawy.find((sprawa) => sprawa.numer === wybranyNumer) ?? listaPoFiltrowaniu[0] ?? sprawy[0]

    const aktualizujSprawe = (pole: keyof ObslugiwanaSprawa, wartosc: string) => {
        setSprawy((aktualneSprawy) => aktualneSprawy.map((sprawa) => (
            sprawa.numer === wybranaSprawa.numer ? { ...sprawa, [pole]: wartosc } : sprawa
        )))
    }

    return (
        <Container fluid className="case-service-page pb-4">
            <Accordion activeKey={filtryOtwarte ? 'filtry' : undefined} className="case-service-filters mb-3">
                <Accordion.Item eventKey="filtry">
                    <Accordion.Header onClick={() => setFiltryOtwarte((otwarte) => !otwarte)}>Filtrowanie</Accordion.Header>
                    <Accordion.Body>
                        <Row className="g-3 align-items-end">
                            <Col lg={4} md={6}>
                                <Form.Group controlId="caseServiceSearchFilter">
                                    <Form.Label>Szukaj sprawy</Form.Label>
                                    <Form.Control placeholder="Numer, klient, typ lub produkt" value={filtry.fraza} onChange={(event) => setFiltry({ ...filtry, fraza: event.target.value })} />
                                </Form.Group>
                            </Col>
                            <Col lg={2} md={3} sm={6}>
                                <Form.Group controlId="caseServicePriorityFilter">
                                    <Form.Label>Priorytet</Form.Label>
                                    <Form.Select value={filtry.priorytet} onChange={(event) => setFiltry({ ...filtry, priorytet: event.target.value })}>
                                        <option value="">Wszystkie</option>
                                        <option>Niski</option>
                                        <option>Średni</option>
                                        <option>Wysoki</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col lg={2} md={3} sm={6}>
                                <Form.Group controlId="caseServiceStatusFilter">
                                    <Form.Label>Status</Form.Label>
                                    <Form.Select value={filtry.status} onChange={(event) => setFiltry({ ...filtry, status: event.target.value })}>
                                        <option value="">Wszystkie</option>
                                        <option>Nowa</option>
                                        <option>W toku</option>
                                        <option>Zamknięta</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col lg={2} md={4} sm={6}>
                                <Form.Group controlId="caseServiceTypeFilter">
                                    <Form.Label>Typ sprawy</Form.Label>
                                    <Form.Select value={filtry.typSprawy} onChange={(event) => setFiltry({ ...filtry, typSprawy: event.target.value })}>
                                        <option value="">Wszystkie</option>
                                        {opcjeFiltrow.typySpraw.map((typ) => <option key={typ}>{typ}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col lg={2} md={4} sm={6}>
                                <Form.Group controlId="caseServiceOwnerFilter">
                                    <Form.Label>Właściciel</Form.Label>
                                    <Form.Select value={filtry.wlasciciel} onChange={(event) => setFiltry({ ...filtry, wlasciciel: event.target.value })}>
                                        <option value="">Wszyscy</option>
                                        {opcjeFiltrow.wlasciciele.map((wlasciciel) => <option key={wlasciciel}>{wlasciciel}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col lg={2} md={4} sm={6}>
                                <Form.Group controlId="caseServiceDueDateFilter">
                                    <Form.Label>Termin do</Form.Label>
                                    <Form.Control type="date" value={filtry.terminDo} onChange={(event) => setFiltry({ ...filtry, terminDo: event.target.value })} />
                                </Form.Group>
                            </Col>
                            <Col lg={2} md={4} sm={12} className="case-service-clear-filter-col">
                                <Button variant="outline-secondary" type="button" onClick={() => setFiltry({ fraza: '', priorytet: '', status: '', typSprawy: '', wlasciciel: '', terminDo: '' })}>Wyczyść filtry</Button>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <div className="case-service-workspace">
                <aside className="case-list-panel">
                    <h2>Lista spraw</h2>
                    <div className="case-card-list">
                        {listaPoFiltrowaniu.map((sprawa) => (
                            <button key={sprawa.numer} type="button" className={`case-ticket${sprawa.numer === wybranaSprawa.numer ? ' active' : ''}`} onClick={() => setWybranyNumer(sprawa.numer)}>
                                <span className="case-ticket-row"><strong>{sprawa.numer}</strong><span>{sprawa.dataZgloszenia}</span></span>
                                <span className="case-ticket-client">{sprawa.nazwaKlienta}</span>
                                <span className="case-ticket-row"><span>{sprawa.typSprawy}</span><Badge bg="light" text="dark">{sprawa.priorytet}</Badge></span>
                            </button>
                        ))}
                        {listaPoFiltrowaniu.length === 0 && <p className="case-list-empty">Brak spraw dla wybranych filtrów.</p>}
                    </div>
                </aside>

                <main className="case-details-panel">
                    <div className="case-details-header">
                        <div>
                            <h1>{wybranaSprawa.numer}</h1>
                        </div>
                        <Button variant="primary" type="button">Zapisz zmiany</Button>
                    </div>
                    <Form>
                        <Row className="g-3">
                            <Col lg={6}><Form.Group><Form.Label>Nazwa klienta</Form.Label><Form.Control value={wybranaSprawa.nazwaKlienta} onChange={(event) => aktualizujSprawe('nazwaKlienta', event.target.value)} /></Form.Group></Col>
                            <Col lg={3}><Form.Group><Form.Label>Data zgłoszenia</Form.Label><Form.Control type="date" value={wybranaSprawa.dataZgloszenia} onChange={(event) => aktualizujSprawe('dataZgloszenia', event.target.value)} /></Form.Group></Col>
                            <Col lg={3}><Form.Group><Form.Label>Termin</Form.Label><Form.Control type="date" value={wybranaSprawa.termin} onChange={(event) => aktualizujSprawe('termin', event.target.value)} /></Form.Group></Col>
                            <Col lg={4}><Form.Group><Form.Label>Typ sprawy</Form.Label><Form.Control value={wybranaSprawa.typSprawy} onChange={(event) => aktualizujSprawe('typSprawy', event.target.value)} /></Form.Group></Col>
                            <Col lg={4}><Form.Group><Form.Label>Produkt</Form.Label><Form.Control value={wybranaSprawa.produkt} onChange={(event) => aktualizujSprawe('produkt', event.target.value)} /></Form.Group></Col>
                            <Col lg={2}><Form.Group><Form.Label>Priorytet</Form.Label><Form.Select value={wybranaSprawa.priorytet} onChange={(event) => aktualizujSprawe('priorytet', event.target.value)}><option>Niski</option><option>Średni</option><option>Wysoki</option></Form.Select></Form.Group></Col>
                            <Col lg={2}><Form.Group><Form.Label>Status</Form.Label><Form.Select value={wybranaSprawa.status} onChange={(event) => aktualizujSprawe('status', event.target.value)}><option>Nowa</option><option>W toku</option><option>Zamknięta</option></Form.Select></Form.Group></Col>
                            <Col lg={4}><Form.Group><Form.Label>Właściciel</Form.Label><Form.Control value={wybranaSprawa.wlasciciel} onChange={(event) => aktualizujSprawe('wlasciciel', event.target.value)} /></Form.Group></Col>
                            <Col xs={12}><Form.Group><Form.Label>Opis sprawy</Form.Label><Form.Control as="textarea" rows={4} value={wybranaSprawa.opis} onChange={(event) => aktualizujSprawe('opis', event.target.value)} /></Form.Group></Col>
                            <Col md={6}><Form.Group><Form.Label>Oczekiwany rezultat</Form.Label><Form.Control as="textarea" rows={3} value={wybranaSprawa.oczekiwanyRezultat} onChange={(event) => aktualizujSprawe('oczekiwanyRezultat', event.target.value)} /></Form.Group></Col>
                            <Col md={6}><Form.Group><Form.Label>Następny krok</Form.Label><Form.Control as="textarea" rows={3} value={wybranaSprawa.nastepnyKrok} onChange={(event) => aktualizujSprawe('nastepnyKrok', event.target.value)} /></Form.Group></Col>
                        </Row>
                    </Form>
                </main>
            </div>
        </Container>
    )
}
