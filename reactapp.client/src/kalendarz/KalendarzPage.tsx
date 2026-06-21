import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { Wydarzenie } from '../types/kalendarz/wydarzenie'
import { applySortDirection, comparePolishDate, compareText, getNextSortConfig, getSortLabel, SortConfig } from '../tableSorting'

const wydarzenia: Wydarzenie[] = [
    { data: '21.04.2026', godzina: '10:30', typ: 'Spotkanie', opis: 'Baltic Logistics Sp. z o.o. — spotkanie zdalne', klient: 'Baltic Logistics Sp. z o.o.' },
    { data: '23.04.2026', godzina: '09:00', typ: 'Zadanie', opis: 'Aktualizacja analizy finansowej klienta HydroTech', priorytet: 'Wysoki' },
    { data: '22.04.2026', godzina: '13:00', typ: 'Spotkanie', opis: 'MediCore Group — spotkanie stacjonarne', klient: 'MediCore Group' },
    { data: '24.04.2026', godzina: '08:30', typ: 'Zadanie', opis: 'Przygotowanie oferty cross-sellingowej dla MediCore', priorytet: 'Średni' },
]

export const Kalendarz = () => {
    const [filtry, setFiltry] = useState({ fraza: '', typ: '', priorytet: '' })
    const [sortowanie, setSortowanie] = useState<SortConfig<'data' | 'godzina' | 'typ' | 'opis'>>({ key: 'data', direction: 'asc' })

    const getEditPath = (wydarzenie: Wydarzenie) => {
        if (wydarzenie.typ === 'Spotkanie') {
            return `/nowe-spotkanie?termin=${encodeURIComponent(`${wydarzenie.data} ${wydarzenie.godzina}`)}&tryb=edycja`
        }

        return `/nowe-zadanie?termin=${encodeURIComponent(wydarzenie.data)}&tryb=edycja`
    }

    const listaPoFiltrowaniu = useMemo(() => [...wydarzenia.filter((wydarzenie) => {
        const fraza = filtry.fraza.toLowerCase()
        return (!fraza || [wydarzenie.data, wydarzenie.godzina, wydarzenie.opis, wydarzenie.klient].some((wartosc) => wartosc?.toLowerCase().includes(fraza)))
            && (!filtry.typ || wydarzenie.typ === filtry.typ)
            && (!filtry.priorytet || wydarzenie.priorytet === filtry.priorytet)
    })].sort((a, b) => applySortDirection(
        sortowanie.key === 'data' ? comparePolishDate(a.data, b.data) || compareText(a.godzina, b.godzina) : compareText(a[sortowanie.key], b[sortowanie.key]),
        sortowanie.direction,
    )), [filtry, sortowanie])

    const dniTygodnia = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek']
    const datyTygodnia = ['21.04.2026', '22.04.2026', '23.04.2026', '24.04.2026', '25.04.2026']
    const wydarzeniaWTygodniu = useMemo(() => datyTygodnia.map((data, index) => ({
        data,
        dzien: dniTygodnia[index],
        wydarzenia: listaPoFiltrowaniu.filter((wydarzenie) => wydarzenie.data === data),
    })), [listaPoFiltrowaniu])

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
                        <Form.Group><Form.Label>Szukaj po opisie, kliencie lub dacie</Form.Label><Form.Control type="text" value={filtry.fraza} onChange={(event) => setFiltry({ ...filtry, fraza: event.target.value })} /></Form.Group>
                        <Form.Group><Form.Label>Typ</Form.Label><Form.Select value={filtry.typ} onChange={(event) => setFiltry({ ...filtry, typ: event.target.value })}><option value="">Wszystkie</option><option>Spotkanie</option><option>Zadanie</option></Form.Select></Form.Group>
                        <Form.Group><Form.Label>Priorytet zadania</Form.Label><Form.Select value={filtry.priorytet} onChange={(event) => setFiltry({ ...filtry, priorytet: event.target.value })}><option value="">Wszystkie</option><option>Wysoki</option><option>Średni</option><option>Niski</option></Form.Select></Form.Group>
                        <Button variant="outline-secondary" type="button" onClick={() => setFiltry({ fraza: '', typ: '', priorytet: '' })}>Wyczyść filtry</Button>
                    </Form></Accordion.Body></Accordion.Item></Accordion>
                </aside>
                <main className="table-content-area">
                    <section className="weekly-calendar mb-3" aria-label="Kalendarz tygodniowy">
                        <div className="weekly-calendar-header">
                            <h2>Kalendarz tygodniowy</h2>
                            <span>21–25.04.2026</span>
                        </div>
                        <div className="weekly-calendar-grid">
                            {wydarzeniaWTygodniu.map((dzien) => (
                                <article className="weekly-calendar-day" key={dzien.data}>
                                    <div className="weekly-calendar-day-header">
                                        <strong>{dzien.dzien}</strong>
                                        <span>{dzien.data}</span>
                                    </div>
                                    <div className="weekly-calendar-events">
                                        {dzien.wydarzenia.map((wydarzenie) => (
                                            <Link to={getEditPath(wydarzenie)} className={`weekly-calendar-event weekly-calendar-event-${wydarzenie.typ.toLowerCase()}`} key={`${wydarzenie.data}-${wydarzenie.godzina}-${wydarzenie.opis}`}>
                                                <span>{wydarzenie.godzina}</span>
                                                <strong>{wydarzenie.typ}</strong>
                                                <small>{wydarzenie.opis}</small>
                                            </Link>
                                        ))}
                                        {dzien.wydarzenia.length === 0 && <p className="weekly-calendar-empty">Brak wydarzeń</p>}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                    <div className="business-table-shell">
                        <Table responsive hover className="business-table">
                            <thead>
                                <tr><th>{naglowekSortowania('data', 'Data')}</th><th>{naglowekSortowania('godzina', 'Godzina')}</th><th>{naglowekSortowania('typ', 'Typ')}</th><th>{naglowekSortowania('opis', 'Opis')}</th><th className="business-table-actions-header">Akcje</th></tr>
                            </thead>
                            <tbody>
                                {listaPoFiltrowaniu.map((item) => (
                                    <tr key={`${item.data}-${item.godzina}-${item.opis}`}>
                                        <td>{item.data}</td><td>{item.godzina}</td><td>{item.typ}</td><td>{item.opis}</td>
                                        <td className="business-table-actions-cell"><Link to={getEditPath(item)} className="btn btn-outline-primary btn-sm table-action-button">Edytuj</Link></td>
                                    </tr>
                                ))}
                                {listaPoFiltrowaniu.length === 0 && <tr><td colSpan={5} className="text-center text-muted">Brak wydarzeń spełniających wybrane kryteria.</td></tr>}
                            </tbody>
                        </Table>
                    </div>
                    <div className="table-actions-footer"><Link to="/nowe-spotkanie" className="btn btn-primary business-table-new-button">Nowe spotkanie</Link><Link to="/nowe-zadanie" className="btn btn-info business-table-new-button">Nowe zadanie</Link></div>
                </main>
            </div>
        </Container>
    )
}
