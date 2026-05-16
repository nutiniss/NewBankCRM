import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { Zadanie } from '../types/kalendarz/zadanie'
import { ZadanieItem } from './ZadanieItem'

const listaZadan: Zadanie[] = [
    { nazwa: 'Aktualizacja analizy finansowej klienta HydroTech', priorytet: 'Wysoki', termin: '22.04.2026', status: 'W toku' },
    { nazwa: 'Przygotowanie oferty cross-sellingowej dla MediCore', priorytet: 'Średni', termin: '24.04.2026', status: 'Nowe' },
    { nazwa: 'Kontakt z działem prawnym ws. zabezpieczeń', priorytet: 'Wysoki', termin: '25.04.2026', status: 'Nowe' },
    { nazwa: 'Weryfikacja dokumentów KYC dla GreenPol', priorytet: 'Niski', termin: '29.04.2026', status: 'Nowe' },
]

export const Zadania = () => {
    const [filtry, setFiltry] = useState({ fraza: '', priorytet: '', status: '' })

    const listaPoFiltrowaniu = useMemo(() => listaZadan.filter((zadanie) => {
        const fraza = filtry.fraza.toLowerCase()
        return (!fraza || [zadanie.nazwa, zadanie.termin].some((wartosc) => wartosc.toLowerCase().includes(fraza)))
            && (!filtry.priorytet || zadanie.priorytet === filtry.priorytet)
            && (!filtry.status || zadanie.status === filtry.status)
    }), [filtry])

    return (
        <Container fluid>
            <div className="table-view-layout">
                <aside className="table-filters-sidebar">
                    <Accordion defaultActiveKey="filtrowanie"><Accordion.Item eventKey="filtrowanie"><Accordion.Header>Filtrowanie i sortowanie</Accordion.Header><Accordion.Body><Form><Row className="mb-3">
                        <Col><Form.Group><Form.Label>Szukaj po zadaniu lub terminie</Form.Label><Form.Control type="text" value={filtry.fraza} onChange={(event) => setFiltry({ ...filtry, fraza: event.target.value })} /></Form.Group></Col>
                        <Col><Form.Group><Form.Label>Priorytet</Form.Label><Form.Select value={filtry.priorytet} onChange={(event) => setFiltry({ ...filtry, priorytet: event.target.value })}><option value="">Wszystkie</option><option>Wysoki</option><option>Średni</option><option>Niski</option></Form.Select></Form.Group></Col>
                        <Col><Form.Group><Form.Label>Status</Form.Label><Form.Select value={filtry.status} onChange={(event) => setFiltry({ ...filtry, status: event.target.value })}><option value="">Wszystkie</option><option>Nowe</option><option>W toku</option><option>Zakończone</option></Form.Select></Form.Group></Col>
                        <Col><Button variant="outline-secondary" type="button" onClick={() => setFiltry({ fraza: '', priorytet: '', status: '' })}>Wyczyść filtry</Button></Col>
                    </Row></Form></Accordion.Body></Accordion.Item></Accordion>
                </aside>
                <main className="table-content-area">
                    <div className="table-results-count text-muted">Wyniki: {listaPoFiltrowaniu.length} z {listaZadan.length}</div>
                    <div className="business-table-shell">
                        <Table responsive hover className="business-table">
                            <thead><tr><th>Zadanie</th><th>Priorytet</th><th>Termin realizacji</th><th>Status</th><th className="business-table-actions-header">Akcje</th></tr></thead>
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
