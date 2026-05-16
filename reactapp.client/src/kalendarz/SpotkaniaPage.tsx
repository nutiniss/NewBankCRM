import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { Spotkanie } from '../types/kalendarz/spotkanie'
import { SpotkanieItem } from './SpotkanieItem'

const listaSpotkan: Spotkanie[] = [
    { klient: 'Baltic Logistics Sp. z o.o.', dataIGodzina: '21.04.2026, 10:30', tryb: 'Zdalnie', status: 'Potwierdzone' },
    { klient: 'MediCore Group', dataIGodzina: '22.04.2026, 13:00', tryb: 'Stacjonarnie', status: 'Zaplanowane' },
    { klient: 'GreenPol Energia', dataIGodzina: '23.04.2026, 09:15', tryb: 'Zdalnie', status: 'Zaplanowane' },
    { klient: 'HydroTech S.A.', dataIGodzina: '24.04.2026, 11:45', tryb: 'Stacjonarnie', status: 'Potwierdzone' },
]

export const Spotkania = () => {
    const [filtry, setFiltry] = useState({ fraza: '', tryb: '', status: '' })

    const listaPoFiltrowaniu = useMemo(() => listaSpotkan.filter((spotkanie) => {
        const fraza = filtry.fraza.toLowerCase()
        return (!fraza || [spotkanie.klient, spotkanie.dataIGodzina].some((wartosc) => wartosc.toLowerCase().includes(fraza)))
            && (!filtry.tryb || spotkanie.tryb === filtry.tryb)
            && (!filtry.status || spotkanie.status === filtry.status)
    }), [filtry])

    return (
        <Container fluid>
            <div className="table-view-layout">
                <aside className="table-filters-sidebar">
                    <Accordion defaultActiveKey="filtrowanie">
                        <Accordion.Item eventKey="filtrowanie"><Accordion.Header>Filtrowanie i sortowanie</Accordion.Header><Accordion.Body><Form><Row className="mb-3">
                            <Col><Form.Group><Form.Label>Szukaj po kliencie lub terminie</Form.Label><Form.Control type="text" value={filtry.fraza} onChange={(event) => setFiltry({ ...filtry, fraza: event.target.value })} /></Form.Group></Col>
                            <Col><Form.Group><Form.Label>Tryb spotkania</Form.Label><Form.Select value={filtry.tryb} onChange={(event) => setFiltry({ ...filtry, tryb: event.target.value })}><option value="">Wszystkie</option><option>Stacjonarnie</option><option>Zdalnie</option></Form.Select></Form.Group></Col>
                            <Col><Form.Group><Form.Label>Status</Form.Label><Form.Select value={filtry.status} onChange={(event) => setFiltry({ ...filtry, status: event.target.value })}><option value="">Wszystkie</option><option>Zaplanowane</option><option>Potwierdzone</option><option>Zrealizowane</option></Form.Select></Form.Group></Col>
                            <Col><Button variant="outline-secondary" type="button" onClick={() => setFiltry({ fraza: '', tryb: '', status: '' })}>Wyczyść filtry</Button></Col>
                        </Row></Form></Accordion.Body></Accordion.Item>
                    </Accordion>
                </aside>
                <main className="table-content-area">
                    <div className="table-results-count text-muted">Wyniki: {listaPoFiltrowaniu.length} z {listaSpotkan.length}</div>
                    <div className="business-table-shell">
                        <Table responsive hover className="business-table">
                            <thead><tr><th>Nazwa klienta</th><th>Data i godzina</th><th>Tryb spotkania</th><th>Status</th><th className="business-table-actions-header">Akcje</th></tr></thead>
                            <tbody>
                                {listaPoFiltrowaniu.map((item) => <SpotkanieItem key={`${item.klient}-${item.dataIGodzina}`} spotkanie={item} editPath={`/nowe-spotkanie?klient=${encodeURIComponent(item.klient)}&tryb=edycja`} />)}
                                {listaPoFiltrowaniu.length === 0 && <tr><td colSpan={5} className="text-center text-muted">Brak spotkań spełniających wybrane kryteria.</td></tr>}
                            </tbody>
                        </Table>
                    </div>
                    <div className="table-actions-footer"><Link to="/nowe-spotkanie" className="btn btn-primary business-table-new-button">Nowe spotkanie</Link></div>
                </main>
            </div>
        </Container>
    )
}
