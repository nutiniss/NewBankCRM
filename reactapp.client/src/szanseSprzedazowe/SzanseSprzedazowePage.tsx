import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { Okazja } from '../types/szanseSprzedazowe/okazja'
import { OkazjaItem } from './OkazjaItem'
import { applySortDirection, compareNumber, comparePolishDate, compareText, getNextSortConfig, getSortLabel, SortConfig } from '../tableSorting'

const listaOkazji: Okazja[] = [
    { klient: 'Baltic Logistics Sp. z o.o.', produkt: 'Kredyt obrotowy', etap: 'Negocjacje warunków', dataZamkniecia: '28.04.2026', wartosc: 2400000 },
    { klient: 'HydroTech S.A.', produkt: 'Leasing floty', etap: 'Analiza ryzyka', dataZamkniecia: '06.05.2026', wartosc: 1700000 },
    { klient: 'GreenPol Energia', produkt: 'Kredyt inwestycyjny', etap: 'Oferta wstępna', dataZamkniecia: '12.05.2026', wartosc: 3200000 },
    { klient: 'MediCore Group', produkt: 'Cash management', etap: 'Spotkanie decyzyjne', dataZamkniecia: '15.05.2026', wartosc: 900000 },
]

export const SzanseSprzedazowe = () => {
    const [filtry, setFiltry] = useState({ fraza: '', etap: '', wartoscOd: '', wartoscDo: '' })
    const [sortowanie, setSortowanie] = useState<SortConfig<'klient' | 'produkt' | 'etap' | 'dataZamkniecia' | 'wartosc'>>({ key: 'dataZamkniecia', direction: 'asc' })

    const listaPoFiltrowaniu = useMemo(() => [...listaOkazji.filter((okazja) => {
        const fraza = filtry.fraza.toLowerCase()
        const wartosc = okazja.wartosc ?? 0
        return (!fraza || [okazja.klient, okazja.produkt].some((wartoscTekstowa) => wartoscTekstowa.toLowerCase().includes(fraza)))
            && (!filtry.etap || okazja.etap === filtry.etap)
            && (!filtry.wartoscOd || wartosc >= Number(filtry.wartoscOd))
            && (!filtry.wartoscDo || wartosc <= Number(filtry.wartoscDo))
    })].sort((a, b) => {
        const wynik = sortowanie.key === 'dataZamkniecia'
            ? comparePolishDate(a.dataZamkniecia, b.dataZamkniecia)
            : sortowanie.key === 'wartosc'
                ? compareNumber(a.wartosc, b.wartosc)
                : compareText(a[sortowanie.key], b[sortowanie.key])

        return applySortDirection(wynik, sortowanie.direction)
    }), [filtry, sortowanie])

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
                                    <Form.Group><Form.Label>Szukaj po kliencie lub produkcie</Form.Label><Form.Control type="text" value={filtry.fraza} onChange={(event) => setFiltry({ ...filtry, fraza: event.target.value })} /></Form.Group>
                                    <Form.Group><Form.Label>Etap</Form.Label><Form.Select value={filtry.etap} onChange={(event) => setFiltry({ ...filtry, etap: event.target.value })}><option value="">Wszystkie</option><option>Negocjacje warunków</option><option>Analiza ryzyka</option><option>Oferta wstępna</option><option>Spotkanie decyzyjne</option></Form.Select></Form.Group>
                                    <Form.Group><Form.Label>Wartość od</Form.Label><Form.Control type="number" min="0" value={filtry.wartoscOd} onChange={(event) => setFiltry({ ...filtry, wartoscOd: event.target.value })} /></Form.Group>
                                    <Form.Group><Form.Label>Wartość do</Form.Label><Form.Control type="number" min="0" value={filtry.wartoscDo} onChange={(event) => setFiltry({ ...filtry, wartoscDo: event.target.value })} /></Form.Group>
                                    <Button variant="outline-secondary" type="button" onClick={() => setFiltry({ fraza: '', etap: '', wartoscOd: '', wartoscDo: '' })}>Wyczyść filtry</Button>
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
                                    <th>{naglowekSortowania('klient', 'Nazwa klienta')}</th>
                                    <th>{naglowekSortowania('produkt', 'Produkt')}</th>
                                    <th>{naglowekSortowania('etap', 'Etap')}</th>
                                    <th>{naglowekSortowania('dataZamkniecia', 'Planowana data zamknięcia etapu')}</th>
                                    <th className="business-table-actions-header">Akcje</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaPoFiltrowaniu.map((item) => <OkazjaItem key={`${item.klient}-${item.produkt}`} okazja={item} editPath={`/nowa-okazja-biznesowa?klient=${encodeURIComponent(item.klient)}&produkt=${encodeURIComponent(item.produkt)}&tryb=edycja`} />)}
                                {listaPoFiltrowaniu.length === 0 && <tr><td colSpan={5} className="text-center text-muted">Brak szans spełniających wybrane kryteria.</td></tr>}
                            </tbody>
                        </Table>
                    </div>
                    <div className="table-actions-footer">
                        <Link to="/nowa-okazja-biznesowa" className="btn btn-primary business-table-new-button">Nowa szansa sprzedażowa</Link>
                    </div>
                </main>
            </div>
        </Container>
    )
}
