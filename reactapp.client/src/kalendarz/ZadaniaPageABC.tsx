import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Tab from 'react-bootstrap/Tab'
import Table from 'react-bootstrap/Table'
import Tabs from 'react-bootstrap/Tabs'
import { useMemo, useState } from 'react'
import { Zadanie } from '../types/kalendarz/zadanie'
import { ZadanieItem } from './ZadanieItem'

type ZadanieABC = Zadanie & {
    id: number
    typ: string
    klient: string
    wlasciciel: string
    terminIso: string
}

const listaZadan: ZadanieABC[] = [
    {
        id: 1,
        nazwa: 'Aktualizacja analizy finansowej klienta HydroTech',
        priorytet: 'Wysoki',
        termin: '22.04.2026',
        terminIso: '2026-04-22',
        status: 'W toku',
        typ: 'Analiza',
        klient: 'HydroTech S.A.',
        wlasciciel: 'Anna Doradca'
    },
    {
        id: 2,
        nazwa: 'Przygotowanie oferty cross-sellingowej dla MediCore',
        priorytet: 'Średni',
        termin: '24.04.2026',
        terminIso: '2026-04-24',
        status: 'Nowe',
        typ: 'Oferta',
        klient: 'MediCore Group',
        wlasciciel: 'Marta Opiekun'
    },
    {
        id: 3,
        nazwa: 'Kontakt z działem prawnym ws. zabezpieczeń',
        priorytet: 'Wysoki',
        termin: '25.04.2026',
        terminIso: '2026-04-25',
        status: 'Nowe',
        typ: 'Kontakt',
        klient: 'Baltic Logistics Sp. z o.o.',
        wlasciciel: 'Piotr Analityk'
    },
    {
        id: 4,
        nazwa: 'Weryfikacja dokumentów KYC dla GreenPol',
        priorytet: 'Niski',
        termin: '29.04.2026',
        terminIso: '2026-04-29',
        status: 'Nowe',
        typ: 'KYC',
        klient: 'GreenPol Energia',
        wlasciciel: 'Anna Doradca'
    },
]

const typyZadan = ['Analiza', 'Oferta', 'Kontakt', 'KYC']
const priorytety = ['Wysoki', 'Średni', 'Niski']
const statusy = ['Nowe', 'W toku', 'Zakończone']
const wlasciciele = ['Anna Doradca', 'Marta Opiekun', 'Piotr Analityk']

export const ZadaniaABC = () => {
    const [filtry, setFiltry] = useState({ fraza: '', priorytet: '', status: '' })
    const [edytowaneZadanie, setEdytowaneZadanie] = useState<ZadanieABC>(listaZadan[0])

    const listaPoFiltrowaniu = useMemo(() => listaZadan.filter((zadanie) => {
        const fraza = filtry.fraza.toLowerCase()
        return (!fraza || [zadanie.nazwa, zadanie.termin, zadanie.klient, zadanie.typ].some((wartosc) => wartosc.toLowerCase().includes(fraza)))
            && (!filtry.priorytet || zadanie.priorytet === filtry.priorytet)
            && (!filtry.status || zadanie.status === filtry.status)
    }), [filtry])

    const zmienEdytowaneZadanie = (pole: keyof ZadanieABC, wartosc: string) => {
        setEdytowaneZadanie((zadanie) => ({ ...zadanie, [pole]: wartosc }))
    }

    return (
        <Container fluid className="tasks-abc-page new-meeting-page px-0">
            <div className="tasks-abc-layout">
                <section className="tasks-abc-left-column" aria-label="Filtry i lista zadań">
                    <div className="tasks-abc-filters">
                        <Accordion defaultActiveKey="filtrowanie">
                            <Accordion.Item eventKey="filtrowanie">
                                <Accordion.Header>Filtrowanie i sortowanie</Accordion.Header>
                                <Accordion.Body>
                                    <Form className="table-filters-form">
                                        <Row className="g-3">
                                            <Col md={6} xl={12} xxl={6}>
                                                <Form.Group controlId="taskSearch">
                                                    <Form.Label>Szukaj po zadaniu, kliencie lub terminie</Form.Label>
                                                    <Form.Control type="text" value={filtry.fraza} onChange={(event) => setFiltry({ ...filtry, fraza: event.target.value })} />
                                                </Form.Group>
                                            </Col>
                                            <Col md={3} xl={6} xxl={3}>
                                                <Form.Group controlId="taskPriorityFilter">
                                                    <Form.Label>Priorytet</Form.Label>
                                                    <Form.Select value={filtry.priorytet} onChange={(event) => setFiltry({ ...filtry, priorytet: event.target.value })}>
                                                        <option value="">Wszystkie</option>
                                                        {priorytety.map((priorytet) => <option key={priorytet}>{priorytet}</option>)}
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col md={3} xl={6} xxl={3}>
                                                <Form.Group controlId="taskStatusFilter">
                                                    <Form.Label>Status</Form.Label>
                                                    <Form.Select value={filtry.status} onChange={(event) => setFiltry({ ...filtry, status: event.target.value })}>
                                                        <option value="">Wszystkie</option>
                                                        {statusy.map((status) => <option key={status}>{status}</option>)}
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Button variant="outline-secondary" type="button" onClick={() => setFiltry({ fraza: '', priorytet: '', status: '' })}>Wyczyść filtry</Button>
                                    </Form>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>

                    <main className="tasks-abc-list-panel">                        
                        <div className="business-table-shell">
                            <Table responsive hover className="business-table">
                                <thead>
                                    <tr>
                                        <th>Zadanie</th>
                                        <th>Priorytet</th>
                                        <th>Termin realizacji</th>
                                        <th>Status</th>
                                        <th className="business-table-actions-header">Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listaPoFiltrowaniu.map((item) => (
                                        <ZadanieItem
                                            key={item.id}
                                            zadanie={item}
                                            isSelected={item.id === edytowaneZadanie.id}
                                            onEdit={() => setEdytowaneZadanie(item)}
                                        />
                                    ))}
                                    {listaPoFiltrowaniu.length === 0 && <tr><td colSpan={5} className="text-center text-muted">Brak zadań spełniających wybrane kryteria.</td></tr>}
                                </tbody>
                            </Table>
                        </div>
                    </main>
                </section>

                <div className="tasks-abc-editor-panel" aria-label="Edycja zadania">
                    <Card className="meeting-section-card tasks-abc-editor-card">
                        <Card.Body>
                            <div className="new-task-toolbar mb-4">
                                <div>
                                    <h1 className="new-task-title mb-0">Edycja zadania</h1>
                                </div>
                                <div className="new-task-actions">
                                    <Button variant="info" className="me-2">Anuluj</Button>
                                    <Button variant="primary">Zapisz</Button>
                                </div>
                            </div>

                            <Tabs defaultActiveKey="basic" id="tasks-abc-editor-tabs" className="meeting-tabs mb-3">
                                <Tab eventKey="basic" title="Dane podstawowe">
                                    <Row className="g-3">
                                        <Col xs={12}>
                                            <Form.Group controlId="editedTaskName">
                                                <Form.Label>Nazwa</Form.Label>
                                                <Form.Control value={edytowaneZadanie.nazwa} onChange={(event) => zmienEdytowaneZadanie('nazwa', event.target.value)} />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="editedTaskType">
                                                <Form.Label>Typ</Form.Label>
                                                <Form.Select value={edytowaneZadanie.typ} onChange={(event) => zmienEdytowaneZadanie('typ', event.target.value)}>
                                                    {typyZadan.map((typ) => <option key={typ}>{typ}</option>)}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="editedTaskClient">
                                                <Form.Label>Klient</Form.Label>
                                                <Form.Control value={edytowaneZadanie.klient} onChange={(event) => zmienEdytowaneZadanie('klient', event.target.value)} />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="editedTaskPriority">
                                                <Form.Label>Priorytet</Form.Label>
                                                <Form.Select value={edytowaneZadanie.priorytet} onChange={(event) => zmienEdytowaneZadanie('priorytet', event.target.value)}>
                                                    {priorytety.map((priorytet) => <option key={priorytet}>{priorytet}</option>)}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="editedTaskStatus">
                                                <Form.Label>Status</Form.Label>
                                                <Form.Select value={edytowaneZadanie.status} onChange={(event) => zmienEdytowaneZadanie('status', event.target.value)}>
                                                    {statusy.map((status) => <option key={status}>{status}</option>)}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Tab>
                                
                            </Tabs>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Container>
    )
}