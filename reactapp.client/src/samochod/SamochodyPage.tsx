import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { Samochod } from '../types/samochod/samochod';
import { SamochodItem } from './SamochodItem';
//Hook useState zwraca dwa elementy: dane które przechowuje w postaci listy i funkcje do aktualizacji tych danych
export const Samochody = () => {
    const [listaSamochodow, setListaSamochodow] = useState<Samochod[]>([
        { numerRejestracyjny: "123", vin: "1", cena: 1000, opis: "1" },
        { numerRejestracyjny: "234", vin: "2", cena: 2000, opis: "2" },
        { numerRejestracyjny: "345", vin: "3", cena: 3000, opis: "3" },
        { numerRejestracyjny: "567", vin: "4", cena: 4000, opis: "4" }
    ]);
    const [filtry, setFiltry] = useState({ fraza: '', cenaOd: '', cenaDo: '' });

    useEffect(() => {
        const listaSamochodowPobranychApi: Samochod[] = [
            { numerRejestracyjny: "123", vin: "1", cena: 1000, opis: "1 API" },
            { numerRejestracyjny: "234", vin: "2", cena: 2000, opis: "2 API" },
            { numerRejestracyjny: "345", vin: "3", cena: 3000, opis: "3 API" }];
        setListaSamochodow(listaSamochodowPobranychApi);
    }, [])

    const listaPoFiltrowaniu = useMemo(() => listaSamochodow.filter((samochod) => {
        const fraza = filtry.fraza.toLowerCase();
        return (!fraza || [samochod.numerRejestracyjny, samochod.vin, samochod.opis].some((wartosc) => wartosc.toLowerCase().includes(fraza)))
            && (!filtry.cenaOd || samochod.cena >= Number(filtry.cenaOd))
            && (!filtry.cenaDo || samochod.cena <= Number(filtry.cenaDo));
    }), [filtry, listaSamochodow]);

    return (
        <Container fluid>
            <div className="table-view-layout">
                <aside className="table-filters-sidebar">
                    <Accordion defaultActiveKey="filtrowanie">
                        <Accordion.Item eventKey="filtrowanie">
                            <Accordion.Header>Filtrowanie i sortowanie</Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                    <Row className="mb-3">
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Szukaj po numerze, VIN lub opisie</Form.Label>
                                                <Form.Control type="text" value={filtry.fraza} onChange={(event) => setFiltry({ ...filtry, fraza: event.target.value })} />
                                            </Form.Group>
                                        </Col>
                                        <Col className="col-2">
                                            <Form.Group>
                                                <Form.Label>Cena od</Form.Label>
                                                <Form.Control type="number" min="0" value={filtry.cenaOd} onChange={(event) => setFiltry({ ...filtry, cenaOd: event.target.value })} />
                                            </Form.Group>
                                        </Col>
                                        <Col className="col-2">
                                            <Form.Group>
                                                <Form.Label>Cena do</Form.Label>
                                                <Form.Control type="number" min="0" value={filtry.cenaDo} onChange={(event) => setFiltry({ ...filtry, cenaDo: event.target.value })} />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Button variant="outline-secondary" type="button" onClick={() => setFiltry({ fraza: '', cenaOd: '', cenaDo: '' })}>Wyczyść filtry</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </aside>
                <main className="table-content-area">
                    <div className="table-results-count text-muted">Wyniki: {listaPoFiltrowaniu.length} z {listaSamochodow.length}</div>
                    <div className="business-table-shell">
                        <Table responsive hover className="business-table">
                            <thead>
                                <tr>
                                    <th>VIN</th>
                                    <th>Numer rejestracyjny</th>
                                    <th>Opis</th>
                                    <th>Cena</th>
                                    <th className="business-table-actions-header">Akcje</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaPoFiltrowaniu.map((item, index) => <SamochodItem key={index} samochod={item} editPath={`/samochod?vin=${encodeURIComponent(item.vin)}&tryb=edycja`} />)}
                                {listaPoFiltrowaniu.length === 0 && <tr><td colSpan={5} className="text-center text-muted">Brak samochodów spełniających wybrane kryteria.</td></tr>}
                            </tbody>
                        </Table>
                    </div>
                    <div className="table-actions-footer">
                        <Link to="/samochod" className="btn btn-primary business-table-new-button">Nowy samochód</Link>
                    </div>
                </main>
            </div>
        </Container>
    )
}
