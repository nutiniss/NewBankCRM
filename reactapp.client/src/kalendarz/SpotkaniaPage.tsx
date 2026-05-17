import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { Spotkanie } from '../types/kalendarz/spotkanie'
import { SpotkanieItem } from './SpotkanieItem'

const listaSpotkan: Spotkanie[] = [
    { firma: 'Alfa Sp. z o.o.', typ: 'Spotkanie', dataIGodzina: '21.04.2026, 10:30', miejsce: 'Bank', temat: 'Analiza potrzeb finansowych', organizator: 'Anna Kowalska', status: 'Zaplanowane' },
    { firma: 'Beta Manufacturing S.A.', typ: 'Rozmowa telefoniczna', dataIGodzina: '22.04.2026, 13:00', miejsce: 'Inne', temat: 'Warunki kredytu inwestycyjnego', organizator: 'Marlena Chrobak', status: 'Zaplanowane' },
    { firma: 'Centrum Logistyczne Gamma', typ: 'Spotkanie', dataIGodzina: '23.04.2026, 09:15', miejsce: 'Siedziba klienta', temat: 'Finansowanie floty samochodowej', organizator: 'Sławomir Sroka', status: 'Zaplanowane' },
    { firma: 'Delta Trade Sp. z o.o.', typ: 'Spotkanie', dataIGodzina: '24.04.2026, 11:45', miejsce: 'Bank', temat: 'Pakiet rachunków premium', organizator: 'Violetta Chmielewska', status: 'Zakończone' },
    { firma: 'Baltic Logistics Sp. z o.o.', typ: 'Spotkanie wewnętrzne', dataIGodzina: '27.04.2026, 08:30', miejsce: 'Bank', temat: 'Przygotowanie oferty leasingowej', organizator: 'Piotr Zawisza', status: 'Zaplanowane' },
    { firma: 'MediCore Group', typ: 'Spotkanie', dataIGodzina: '28.04.2026, 14:00', miejsce: 'Siedziba klienta', temat: 'Obsługa posprzedażowa', organizator: 'Anna Kowalska', status: 'Zaplanowane' },
    { firma: 'GreenPol Energia', typ: 'Rozmowa telefoniczna', dataIGodzina: '29.04.2026, 12:15', miejsce: 'Inne', temat: 'Dokumenty klienta', organizator: 'Marlena Chrobak', status: 'Anulowane' },
    { firma: 'HydroTech S.A.', typ: 'Spotkanie', dataIGodzina: '30.04.2026, 15:30', miejsce: 'Bank', temat: 'Negocjacje zabezpieczeń', organizator: 'Sławomir Sroka', status: 'Zakończone' },
]

export const Spotkania = () => {
    const [filtry, setFiltry] = useState({ fraza: '', miejsce: '', status: '' })

    const listaPoFiltrowaniu = useMemo(() => listaSpotkan.filter((spotkanie) => {
        const fraza = filtry.fraza.toLowerCase()
        return (!fraza || [spotkanie.firma, spotkanie.dataIGodzina, spotkanie.temat, spotkanie.organizator].some((wartosc) => wartosc.toLowerCase().includes(fraza)))
            && (!filtry.miejsce || spotkanie.miejsce === filtry.miejsce)
            && (!filtry.status || spotkanie.status === filtry.status)
    }), [filtry])

    return (
        <Container fluid>
            <div className="table-view-layout">
                <aside className="table-filters-sidebar">
                    <Accordion defaultActiveKey="filtrowanie">
                        <Accordion.Item eventKey="filtrowanie"><Accordion.Header>Filtrowanie i sortowanie</Accordion.Header><Accordion.Body><Form className="table-filters-form">
                            <Form.Group><Form.Label>Szukaj po firmie, terminie, temacie lub organizatorze</Form.Label><Form.Control type="text" value={filtry.fraza} onChange={(event) => setFiltry({ ...filtry, fraza: event.target.value })} /></Form.Group>
                            <Form.Group><Form.Label>Miejsce</Form.Label><Form.Select value={filtry.miejsce} onChange={(event) => setFiltry({ ...filtry, miejsce: event.target.value })}><option value="">Wszystkie</option><option>Bank</option><option>Siedziba klienta</option><option>Inne</option></Form.Select></Form.Group>
                            <Form.Group><Form.Label>Status</Form.Label><Form.Select value={filtry.status} onChange={(event) => setFiltry({ ...filtry, status: event.target.value })}><option value="">Wszystkie</option><option>Zaplanowane</option><option>Zakończone</option><option>Anulowane</option></Form.Select></Form.Group>
                            <Button variant="outline-secondary" type="button" onClick={() => setFiltry({ fraza: '', miejsce: '', status: '' })}>Wyczyść filtry</Button>
                        </Form></Accordion.Body></Accordion.Item>
                    </Accordion>
                </aside>
                <main className="table-content-area">
                    <div className="business-table-shell">
                        <Table responsive hover className="business-table">
                            <thead><tr><th>Firma</th><th>Typ</th><th>Data i godzina</th><th>Miejsce</th><th>Temat</th><th>Organizator</th><th>Status</th><th className="business-table-actions-header">Akcje</th></tr></thead>
                            <tbody>
                                {listaPoFiltrowaniu.map((item) => <SpotkanieItem key={`${item.firma}-${item.dataIGodzina}`} spotkanie={item} editPath={`/nowe-spotkanie?firma=${encodeURIComponent(item.firma)}&tryb=edycja`} />)}
                                {listaPoFiltrowaniu.length === 0 && <tr><td colSpan={8} className="text-center text-muted">Brak spotkań spełniających wybrane kryteria.</td></tr>}
                            </tbody>
                        </Table>
                    </div>
                    <div className="table-actions-footer"><Link to="/nowe-spotkanie" className="btn btn-primary business-table-new-button">Nowe spotkanie</Link></div>
                </main>
            </div>
        </Container>
    )
}
