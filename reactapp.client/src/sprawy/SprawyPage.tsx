import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { Sprawa } from '../types/sprawy/sprawa'
import { SprawaItem } from './SprawaItem'

export const Sprawy = () => {
    const listaSpraw: Sprawa[] = [
        { numer: 'SPR-001', tytul: 'Reklamacja polisy', priorytet: 'Wysoki', status: 'Otwarte' },
        { numer: 'SPR-002', tytul: 'Aktualizacja pełnomocnictwa', priorytet: 'Średni', status: 'W toku' },
    ]
    const [filtry, setFiltry] = useState({ fraza: '', priorytet: '', status: '' })

    const listaPoFiltrowaniu = useMemo(() => listaSpraw.filter((sprawa) => {
        const fraza = filtry.fraza.toLowerCase()
        return (!fraza || [sprawa.numer, sprawa.tytul].some((wartosc) => wartosc.toLowerCase().includes(fraza)))
            && (!filtry.priorytet || sprawa.priorytet === filtry.priorytet)
            && (!filtry.status || sprawa.status === filtry.status)
    }), [filtry, listaSpraw])

    return (
        <Container fluid>
            <div className="table-view-layout">
                <aside className="table-filters-sidebar">
                    <Accordion defaultActiveKey="filtrowanie">
                        <Accordion.Item eventKey="filtrowanie">
                            <Accordion.Header>Filtrowanie i sortowanie</Accordion.Header>
                            <Accordion.Body>
                                <Form className="table-filters-form">
                                    <Form.Group>
                                        <Form.Label>Szukaj po numerze lub tytule</Form.Label>
                                        <Form.Control type="text" value={filtry.fraza} onChange={(event) => setFiltry({ ...filtry, fraza: event.target.value })} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Priorytet</Form.Label>
                                        <Form.Select value={filtry.priorytet} onChange={(event) => setFiltry({ ...filtry, priorytet: event.target.value })}>
                                            <option value="">Wszystkie</option>
                                            <option>Wysoki</option>
                                            <option>Średni</option>
                                            <option>Niski</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Status</Form.Label>
                                        <Form.Select value={filtry.status} onChange={(event) => setFiltry({ ...filtry, status: event.target.value })}>
                                            <option value="">Wszystkie</option>
                                            <option>Otwarte</option>
                                            <option>W toku</option>
                                            <option>Zamknięte</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Button variant="outline-secondary" type="button" onClick={() => setFiltry({ fraza: '', priorytet: '', status: '' })}>Wyczyść filtry</Button>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </aside>
                <main className="table-content-area">
                    <div className="table-results-count text-muted">Wyniki: {listaPoFiltrowaniu.length} z {listaSpraw.length}</div>
                    <div className="business-table-shell">
                        <Table responsive hover className="business-table">
                            <thead>
                                <tr>
                                    <th>Numer</th>
                                    <th>Tytuł</th>
                                    <th>Priorytet</th>
                                    <th>Status</th>
                                    <th className="business-table-actions-header">Akcje</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaPoFiltrowaniu.map((item, index) => <SprawaItem key={index} sprawa={item} editPath={`/nowa-sprawa?numer=${encodeURIComponent(item.numer)}&tryb=edycja`} />)}
                                {listaPoFiltrowaniu.length === 0 && <tr><td colSpan={5} className="text-center text-muted">Brak spraw spełniających wybrane kryteria.</td></tr>}
                            </tbody>
                        </Table>
                    </div>
                    <div className="table-actions-footer">
                        <Link to="/nowa-sprawa" className="btn btn-primary business-table-new-button">Nowa sprawa</Link>
                    </div>
                </main>
            </div>
        </Container>
    )
}
