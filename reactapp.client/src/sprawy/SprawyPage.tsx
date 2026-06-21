import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { Sprawa } from '../types/sprawy/sprawa'
import { SprawaItem } from './SprawaItem'
import { applySortDirection, compareText, getNextSortConfig, getSortLabel, SortConfig } from '../tableSorting'

const listaSpraw: Sprawa[] = [
    { numer: 'SPR-2026-0142', tytul: 'Reklamacja opłaty za przelew zagraniczny', typSprawy: 'Reklamacja opłaty', nazwaKlienta: 'Alfa Sp. z o.o.', produkt: 'Rachunek bieżący', priorytet: 'Wysoki', status: 'W toku', wlasciciel: 'A. Doradca', dataZgloszenia: '2026-06-17', termin: '2026-06-24' },
    { numer: 'SPR-2026-0139', tytul: 'Aktualizacja pełnomocnictw i limitów', typSprawy: 'Zmiana pełnomocnictwa', nazwaKlienta: 'Beta Manufacturing S.A.', produkt: 'Bankowość internetowa', priorytet: 'Średni', status: 'W toku', wlasciciel: 'A. Doradca', dataZgloszenia: '2026-06-14', termin: '2026-06-21' },
    { numer: 'SPR-2026-0128', tytul: 'Zaświadczenie o obsłudze kredytu', typSprawy: 'Zaświadczenie bankowe', nazwaKlienta: 'Centrum Logistyczne Gamma', produkt: 'Kredyt obrotowy', priorytet: 'Niski', status: 'Nowa', wlasciciel: 'M. Opiekun', dataZgloszenia: '2026-06-09', termin: '2026-06-26' },
    { numer: 'SPR-2026-0121', tytul: 'Wydanie dokumentacji do rachunku', typSprawy: 'Wydanie dokumentacji', nazwaKlienta: 'Delta Trade Sp. z o.o.', produkt: 'Rachunek bieżący', priorytet: 'Średni', status: 'Oczekuje na klienta', wlasciciel: 'P. Kowalska', dataZgloszenia: '2026-06-06', termin: '2026-06-28' },
]

export const Sprawy = () => {
    const [filtry, setFiltry] = useState({ fraza: '', priorytet: '', status: '', typSprawy: '' })
    const [sortowanie, setSortowanie] = useState<SortConfig<'numer' | 'tytul' | 'nazwaKlienta' | 'typSprawy' | 'produkt' | 'priorytet' | 'status' | 'wlasciciel' | 'termin'>>({ key: 'termin', direction: 'asc' })

    const listaPoFiltrowaniu = useMemo(() => [...listaSpraw.filter((sprawa) => {
        const fraza = filtry.fraza.trim().toLowerCase()
        return (!fraza || [sprawa.numer, sprawa.tytul, sprawa.nazwaKlienta, sprawa.typSprawy, sprawa.produkt].some((wartosc) => wartosc.toLowerCase().includes(fraza)))
            && (!filtry.priorytet || sprawa.priorytet === filtry.priorytet)
            && (!filtry.status || sprawa.status === filtry.status)
            && (!filtry.typSprawy || sprawa.typSprawy === filtry.typSprawy)
    })].sort((a, b) => applySortDirection(compareText(a[sortowanie.key], b[sortowanie.key]), sortowanie.direction)), [filtry, sortowanie])

    const typySpraw = useMemo(() => Array.from(new Set(listaSpraw.map((sprawa) => sprawa.typSprawy))), [])
    const naglowekSortowania = (key: typeof sortowanie.key, label: string) => (
        <button type="button" className="sortable-table-header" onClick={() => setSortowanie((aktualne) => getNextSortConfig(aktualne, key))}>
            {label} <span>{getSortLabel(sortowanie, key)}</span>
        </button>
    )

    return (
        <Container fluid>
            <div className="table-view-layout">
                <aside className="table-filters-sidebar">
                    <Accordion defaultActiveKey="filtrowanie">
                        <Accordion.Item eventKey="filtrowanie">
                            <Accordion.Header>Filtrowanie</Accordion.Header>
                            <Accordion.Body>
                                <Form className="table-filters-form">
                                    <Form.Group>
                                        <Form.Label>Szukaj po numerze, tytule, kliencie, typie lub produkcie</Form.Label>
                                        <Form.Control type="text" value={filtry.fraza} onChange={(event) => setFiltry({ ...filtry, fraza: event.target.value })} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Typ sprawy</Form.Label>
                                        <Form.Select value={filtry.typSprawy} onChange={(event) => setFiltry({ ...filtry, typSprawy: event.target.value })}>
                                            <option value="">Wszystkie</option>
                                            {typySpraw.map((typ) => <option key={typ}>{typ}</option>)}
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Priorytet</Form.Label>
                                        <Form.Select value={filtry.priorytet} onChange={(event) => setFiltry({ ...filtry, priorytet: event.target.value })}>
                                            <option value="">Wszystkie</option>
                                            <option>Wysoki</option>
                                            <option>Średni</option>
                                            <option>Niski</option>
                                            <option>Krytyczny</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Status</Form.Label>
                                        <Form.Select value={filtry.status} onChange={(event) => setFiltry({ ...filtry, status: event.target.value })}>
                                            <option value="">Wszystkie</option>
                                            <option>Nowa</option>
                                            <option>W toku</option>
                                            <option>Oczekuje na klienta</option>
                                            <option>Zamknięta</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <div className="table-filters-actions">
                                        <Button variant="outline-secondary" type="button" onClick={() => setFiltry({ fraza: '', priorytet: '', status: '', typSprawy: '' })}>Wyczyść filtry</Button>
                                    </div>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </aside>
                <main className="table-content-area">
                    <div className="business-table-shell">
                        <Table responsive hover className="business-table">
                            <thead>
                                <tr>
                                    <th>{naglowekSortowania('numer', 'Numer')}</th>
                                    <th>{naglowekSortowania('tytul', 'Tytuł')}</th>
                                    <th>{naglowekSortowania('nazwaKlienta', 'Klient')}</th>
                                    <th>{naglowekSortowania('typSprawy', 'Typ sprawy')}</th>
                                    <th>{naglowekSortowania('produkt', 'Produkt')}</th>
                                    <th>{naglowekSortowania('priorytet', 'Priorytet')}</th>
                                    <th>{naglowekSortowania('status', 'Status')}</th>
                                    <th>{naglowekSortowania('wlasciciel', 'Właściciel')}</th>
                                    <th>{naglowekSortowania('termin', 'Termin')}</th>
                                    <th className="business-table-actions-header">Akcje</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaPoFiltrowaniu.map((item) => <SprawaItem key={item.numer} sprawa={item} editPath={`/nowa-sprawa?numer=${encodeURIComponent(item.numer)}&tryb=edycja`} />)}
                                {listaPoFiltrowaniu.length === 0 && <tr><td colSpan={10} className="text-center text-muted">Brak spraw spełniających wybrane kryteria.</td></tr>}
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
