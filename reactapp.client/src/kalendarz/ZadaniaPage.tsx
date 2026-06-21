import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { Zadanie } from '../types/kalendarz/zadanie'
import { ZadanieItem } from './ZadanieItem'
import { applySortDirection, comparePolishDate, compareText, getNextSortConfig, getSortLabel, SortConfig } from '../tableSorting'

const listaZadan: Zadanie[] = [
    { nazwa: 'Aktualizacja analizy finansowej klienta HydroTech', priorytet: 'Wysoki', termin: '22.04.2026', status: 'W toku' },
    { nazwa: 'Przygotowanie oferty cross-sellingowej dla MediCore', priorytet: 'Średni', termin: '24.04.2026', status: 'Nowe' },
    { nazwa: 'Kontakt z działem prawnym ws. zabezpieczeń', priorytet: 'Wysoki', termin: '25.04.2026', status: 'Nowe' },
    { nazwa: 'Weryfikacja dokumentów KYC dla GreenPol', priorytet: 'Niski', termin: '29.04.2026', status: 'Nowe' },
]

export const Zadania = () => {
    const [filtry, setFiltry] = useState({ fraza: '', priorytet: '', status: '' })
    const [sortowanie, setSortowanie] = useState<SortConfig<'nazwa' | 'priorytet' | 'termin' | 'status'>>({ key: 'termin', direction: 'asc' })

    const listaPoFiltrowaniu = useMemo(() => [...listaZadan.filter((zadanie) => {
        const fraza = filtry.fraza.toLowerCase()
        return (!fraza || [zadanie.nazwa, zadanie.termin].some((wartosc) => wartosc.toLowerCase().includes(fraza)))
            && (!filtry.priorytet || zadanie.priorytet === filtry.priorytet)
            && (!filtry.status || zadanie.status === filtry.status)
    })].sort((a, b) => {
        const priorytety = { Wysoki: 3, Średni: 2, Niski: 1 } as Record<string, number>
        const wynik = sortowanie.key === 'termin'
            ? comparePolishDate(a.termin, b.termin)
            : sortowanie.key === 'priorytet'
                ? (priorytety[a.priorytet] ?? 0) - (priorytety[b.priorytet] ?? 0)
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
                    <Accordion defaultActiveKey="filtrowanie"><Accordion.Item eventKey="filtrowanie"><Accordion.Header>Filtrowanie</Accordion.Header><Accordion.Body><Form className="table-filters-form">
                        <Form.Group><Form.Label>Szukaj po zadaniu lub terminie</Form.Label><Form.Control type="text" value={filtry.fraza} onChange={(event) => setFiltry({ ...filtry, fraza: event.target.value })} /></Form.Group>
                        <Form.Group><Form.Label>Priorytet</Form.Label><Form.Select value={filtry.priorytet} onChange={(event) => setFiltry({ ...filtry, priorytet: event.target.value })}><option value="">Wszystkie</option><option>Wysoki</option><option>Średni</option><option>Niski</option></Form.Select></Form.Group>
                        <Form.Group><Form.Label>Status</Form.Label><Form.Select value={filtry.status} onChange={(event) => setFiltry({ ...filtry, status: event.target.value })}><option value="">Wszystkie</option><option>Nowe</option><option>W toku</option><option>Zakończone</option></Form.Select></Form.Group>
                        <Button variant="outline-secondary" type="button" onClick={() => setFiltry({ fraza: '', priorytet: '', status: '' })}>Wyczyść filtry</Button>
                    </Form></Accordion.Body></Accordion.Item></Accordion>
                </aside>
                <main className="table-content-area">
                    <div className="business-table-shell">
                        <Table responsive hover className="business-table">
                            <thead><tr><th>{naglowekSortowania('nazwa', 'Zadanie')}</th><th>{naglowekSortowania('priorytet', 'Priorytet')}</th><th>{naglowekSortowania('termin', 'Termin realizacji')}</th><th>{naglowekSortowania('status', 'Status')}</th><th className="business-table-actions-header">Akcje</th></tr></thead>
                            <tbody>
                                {listaPoFiltrowaniu.map((item) => <ZadanieItem key={`${item.nazwa}-${item.termin}`} zadanie={item} editPath={`/nowe-zadanie?zadanie=${encodeURIComponent(item.nazwa)}&tryb=edycja`} />)}
                                {listaPoFiltrowaniu.length === 0 && <tr><td colSpan={5} className="text-center text-muted">Brak zadań spełniających wybrane kryteria.</td></tr>}
                            </tbody>
                        </Table>
                    </div>
                    <div className="table-actions-footer"><Link to="/nowe-zadanie" className="btn btn-primary business-table-new-button">Nowe zadanie</Link></div>
                </main>
            </div>
        </Container>
    )
}
