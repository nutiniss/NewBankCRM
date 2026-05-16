import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Samochod } from '../types/samochod/samochod';
import { SamochodItem } from './SamochodItem';
//Hook useState zwraca dwa elementy: dane które przechowuje w postaci listy i funkcje do aktualizacji tych danych
export const Samochody = () => {
    const [listaSamochodow, setListaSamochodow] = useState<Samochod[]>([
        {
            numerRejestracyjny: "123",
            vin: "1",
            cena: 1000,
            opis: "1",
        },
        {
            numerRejestracyjny: "234",
            vin: "2",
            cena: 2000,
            opis: "2",
        },
        {
            numerRejestracyjny: "345",
            vin: "3",
            cena: 3000,
            opis: "3",
        },
        {
            numerRejestracyjny: "567",
            vin: "4",
            cena: 4000,
            opis: "4",
        }
    ]);
    useEffect(() => {
        const listaSamochodowPobranychApi: Samochod[] = [
            {
                numerRejestracyjny: "123",
                vin: "1",
                cena: 1000,
                opis: "1 API",
            },
            {
                numerRejestracyjny: "234",
                vin: "2",
                cena: 2000,
                opis: "2 API",
            },
            {
                numerRejestracyjny: "345",
                vin: "3",
                cena: 3000,
                opis: "3 API",
            }];
        setListaSamochodow(listaSamochodowPobranychApi);
    }, [])
    return (
        <Container fluid>
            <Accordion defaultActiveKey="filtrowanie">
                <Accordion.Item eventKey="filtrowanie">
                    <Accordion.Header>Filtrowanie i sortowanie</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Szukaj po numerze rejestracyjnym</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col className="col-2">
                                    <Form.Group>
                                        <Form.Label>Cena od</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col className="col-2">
                                    <Form.Group>
                                        <Form.Label>Cena do</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
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
                    {listaSamochodow.map((item, index) => <SamochodItem key={index} samochod={item} editPath={`/samochod?vin=${encodeURIComponent(item.vin)}&tryb=edycja`} />
                    )}
                </tbody>
            </Table>
            </div>
            <div className="table-actions-footer">
                <Link to="/samochod" className="btn btn-primary business-table-new-button">Nowy samochód</Link>
            </div>
        </Container>
    )
}