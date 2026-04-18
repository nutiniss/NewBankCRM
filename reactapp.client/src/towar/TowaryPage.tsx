import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import { Towar } from '../types/towar/towar';
import { TowarItem } from './TowarItem';
//Hook useState zwraca dwa elementy: dane które przechowuje w postaci listy i funkcje do aktualizacji tych danych
export const Towary = () => {
    const [listaTowarow, setListaTowarow] = useState<Towar[]>([
        {
            kod: "1",
            nazwa: "Nazwa 1",
            kategoria: "Kategoria 1",
            pkwiu: "1",
            cena: 1
        },
        {
            kod: "2",
            nazwa: "Nazwa 2",
            kategoria: "Kategoria 2",
            pkwiu: "2",
            cena: 2
        },
        {
            kod: "3",
            nazwa: "Nazwa 3",
            kategoria: "Kategoria 3",
            pkwiu: "3",
            cena: 3
        },
        {
            kod: "4",
            nazwa: "Nazwa 4",
            kategoria: "Kategoria 4",
            pkwiu: "4",
            cena: 4
        }
    ]);
    useEffect(() => {
        const listaTowarowPobranychApi: Towar[] = [
            {
                kod: "1",
                nazwa: "Nazwa 1 API",
                kategoria: "Kategoria 1",
                pkwiu: "1",
                cena: 1
            },
            {
                kod: "2",
                nazwa: "Nazwa 2 API",
                kategoria: "Kategoria 2",
                pkwiu: "2",
                cena: 2
            },
            {
                kod: "3",
                nazwa: "Nazwa 3 API",
                kategoria: "Kategoria 3",
                pkwiu: "3",
                cena: 3
            }];
        setListaTowarow(listaTowarowPobranychApi);
    },[])
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
                                        <Form.Label>Szukaj po nazwie</Form.Label>
                                        <Form.Control type="text"/>
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
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Kategoria</Form.Label>
                                        <Form.Select>
                                            <option>Wybierz</option>
                                            <option value="1">Cegły</option>
                                            <option value="2">Cement</option>
                                            <option value="3">Pustaki</option>
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
                        <th>Kod</th>
                        <th>Kategoria</th>
                        <th>Nazwa</th>
                        <th>PKWIU</th>
                        <th>Cena</th>
                    </tr>
                </thead>
                <tbody>
                    {listaTowarow.map((item, index) => <TowarItem key={index} towar={item }/>
                    )}
                {/*    Iterujemy po tablicy obiektów z listy towarów i dla każdego towaru zwracamy komponent, atrybut key jest używany przez react do zrozumienia tego elementu i każdy element jest dodawany, usuwany lub zmieniany*/}
                </tbody>
            </Table>
        </Container>
    )
}