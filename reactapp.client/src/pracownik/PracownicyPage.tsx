import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import { Pracownik } from '../types/pracownik/pracownik';
import { PracownikItem } from './PracownikItem';

export const Pracownicy = () => {
    const [listaPracownikow, setListaTowarow] = useState<Pracownik[]>([
        {
            imie: "Imie 1",
            nazwisko: "Nazwisko 1",
            stanowisko: "Stanowisko 1",
            placaBrutto: 1
        },
        {
            imie: "Imie 2",
            nazwisko: "Nazwisko 2",
            stanowisko: "Stanowisko 2",
            placaBrutto: 2
        },
        {
            imie: "Imie 3",
            nazwisko: "Nazwisko 3",
            stanowisko: "Stanowisko 3",
            placaBrutto: 3
        },
        {
            imie: "Imie 4",
            nazwisko: "Nazwisko 4",
            stanowisko: "Stanowisko 4",
            placaBrutto: 4
        }
    ]);
    useEffect(() => {
        const listaPracownikowPobranychApi: Pracownik[] = [
            {
                imie: "Imie 1 API",
                nazwisko: "Nazwisko 1",
                stanowisko: "Stanowisko 1",
                placaBrutto: 1
            },
            {
                imie: "Imie 2 API",
                nazwisko: "Nazwisko 2",
                stanowisko: "Stanowisko 2",
                placaBrutto: 2
            },
            {
                imie: "Imie 3 API",
                nazwisko: "Nazwisko 3",
                stanowisko: "Stanowisko 3",
                placaBrutto: 3
            }];
        setListaTowarow(listaPracownikowPobranychApi);
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
                                        <Form.Label>Szukaj po nazwisku</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col className="col-2">
                                    <Form.Group>
                                        <Form.Label>Płaca brutto od</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col className="col-2">
                                    <Form.Group>
                                        <Form.Label>Płaca brutto do</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Stanowisko</Form.Label>
                                        <Form.Select>
                                            <option>Wybierz</option>
                                            <option value="1">Dyrektor</option>
                                            <option value="2">Kierownik</option>
                                            <option value="3">Sprzedawca</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Imię</th>
                        <th>Nazwisko</th>
                        <th>Stanowisko</th>
                        <th>Płaca brutto</th>
                    </tr>
                </thead>
                <tbody>
                    {listaPracownikow.map((item, index) => <PracownikItem key={index} pracownik={ item }/>
                    )}
                </tbody>
            </Table>
        </Container>
    )
}