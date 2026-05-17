import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { Pracownik } from '../types/pracownik/pracownik';
import { PracownikItem } from './PracownikItem';

export const Pracownicy = () => {
    const [listaPracownikow, setListaTowarow] = useState<Pracownik[]>([
        { imie: "Imie 1", nazwisko: "Nazwisko 1", stanowisko: "Stanowisko 1", placaBrutto: 1 },
        { imie: "Imie 2", nazwisko: "Nazwisko 2", stanowisko: "Stanowisko 2", placaBrutto: 2 },
        { imie: "Imie 3", nazwisko: "Nazwisko 3", stanowisko: "Stanowisko 3", placaBrutto: 3 },
        { imie: "Imie 4", nazwisko: "Nazwisko 4", stanowisko: "Stanowisko 4", placaBrutto: 4 }
    ]);
    const [filtry, setFiltry] = useState({ fraza: '', placaOd: '', placaDo: '', stanowisko: '' });

    useEffect(() => {
        const listaPracownikowPobranychApi: Pracownik[] = [
            { imie: "Imie 1 API", nazwisko: "Nazwisko 1", stanowisko: "Stanowisko 1", placaBrutto: 1 },
            { imie: "Imie 2 API", nazwisko: "Nazwisko 2", stanowisko: "Stanowisko 2", placaBrutto: 2 },
            { imie: "Imie 3 API", nazwisko: "Nazwisko 3", stanowisko: "Stanowisko 3", placaBrutto: 3 }];
        setListaTowarow(listaPracownikowPobranychApi);
    }, [])

    const listaPoFiltrowaniu = useMemo(() => listaPracownikow.filter((pracownik) => {
        const fraza = filtry.fraza.toLowerCase();
        return (!fraza || [pracownik.imie, pracownik.nazwisko].some((wartosc) => wartosc.toLowerCase().includes(fraza)))
            && (!filtry.stanowisko || pracownik.stanowisko === filtry.stanowisko)
            && (!filtry.placaOd || pracownik.placaBrutto >= Number(filtry.placaOd))
            && (!filtry.placaDo || pracownik.placaBrutto <= Number(filtry.placaDo));
    }), [filtry, listaPracownikow]);

    return (
        <Container fluid>
            <div className="table-view-layout">
                <aside className="table-filters-sidebar">
                    <Accordion defaultActiveKey="filtrowanie">
                        <Accordion.Item eventKey="filtrowanie">
                            <Accordion.Header>Filtrowanie i sortowanie</Accordion.Header>
                            <Accordion.Body>
                                <Form className="table-filters-form">
                                    <Form.Group>
                                        <Form.Label>Szukaj po imieniu lub nazwisku</Form.Label>
                                        <Form.Control type="text" value={filtry.fraza} onChange={(event) => setFiltry({ ...filtry, fraza: event.target.value })} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Płaca brutto od</Form.Label>
                                        <Form.Control type="number" min="0" value={filtry.placaOd} onChange={(event) => setFiltry({ ...filtry, placaOd: event.target.value })} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Płaca brutto do</Form.Label>
                                        <Form.Control type="number" min="0" value={filtry.placaDo} onChange={(event) => setFiltry({ ...filtry, placaDo: event.target.value })} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Stanowisko</Form.Label>
                                        <Form.Select value={filtry.stanowisko} onChange={(event) => setFiltry({ ...filtry, stanowisko: event.target.value })}>
                                            <option value="">Wszystkie</option>
                                            <option>Stanowisko 1</option>
                                            <option>Stanowisko 2</option>
                                            <option>Stanowisko 3</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Button variant="outline-secondary" type="button" onClick={() => setFiltry({ fraza: '', placaOd: '', placaDo: '', stanowisko: '' })}>Wyczyść filtry</Button>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </aside>
                <main className="table-content-area">
                    <div className="table-toolbar mb-3">
                        <div>
                            <h1 className="table-toolbar-title">Pracownicy</h1>
                        </div>
                        <div className="table-toolbar-actions">
                            <Link to="/pracownik" className="btn btn-primary business-table-new-button">Dodaj pracownika</Link>
                        </div>
                    </div>
                    <div className="table-results-count text-muted">Wyniki: {listaPoFiltrowaniu.length} z {listaPracownikow.length}</div>
                    <div className="business-table-shell">
                        <Table responsive hover className="business-table">
                            <thead>
                                <tr>
                                    <th>Imię</th>
                                    <th>Nazwisko</th>
                                    <th>Stanowisko</th>
                                    <th>Płaca brutto</th>
                                    <th className="business-table-actions-header">Akcje</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaPoFiltrowaniu.map((item, index) => <PracownikItem key={index} pracownik={item} editPath={`/pracownik?nazwisko=${encodeURIComponent(item.nazwisko)}&tryb=edycja`} />)}
                                {listaPoFiltrowaniu.length === 0 && <tr><td colSpan={5} className="text-center text-muted">Brak pracowników spełniających wybrane kryteria.</td></tr>}
                            </tbody>
                        </Table>
                    </div>
                </main>
            </div>
        </Container>
    )
}
