import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { Towar } from '../types/towar/towar';
import { TowarItem } from './TowarItem';
//Hook useState zwraca dwa elementy: dane które przechowuje w postaci listy i funkcje do aktualizacji tych danych
export const Towary = () => {
    const [listaTowarow, setListaTowarow] = useState<Towar[]>([
        { kod: "1", nazwa: "Nazwa 1", kategoria: "Kategoria 1", pkwiu: "1", cena: 1 },
        { kod: "2", nazwa: "Nazwa 2", kategoria: "Kategoria 2", pkwiu: "2", cena: 2 },
        { kod: "3", nazwa: "Nazwa 3", kategoria: "Kategoria 3", pkwiu: "3", cena: 3 },
        { kod: "4", nazwa: "Nazwa 4", kategoria: "Kategoria 4", pkwiu: "4", cena: 4 }
    ]);
    const [filtry, setFiltry] = useState({ fraza: '', cenaOd: '', cenaDo: '', kategoria: '' });

    useEffect(() => {
        const listaTowarowPobranychApi: Towar[] = [
            { kod: "1", nazwa: "Nazwa 1 API", kategoria: "Kategoria 1", pkwiu: "1", cena: 1 },
            { kod: "2", nazwa: "Nazwa 2 API", kategoria: "Kategoria 2", pkwiu: "2", cena: 2 },
            { kod: "3", nazwa: "Nazwa 3 API", kategoria: "Kategoria 3", pkwiu: "3", cena: 3 }
        ];
        setListaTowarow(listaTowarowPobranychApi);
    }, [])

    const listaPoFiltrowaniu = useMemo(() => listaTowarow.filter((towar) => {
        const fraza = filtry.fraza.toLowerCase();
        return (!fraza || [towar.nazwa, towar.kod, towar.pkwiu].some((wartosc) => wartosc.toLowerCase().includes(fraza)))
            && (!filtry.kategoria || towar.kategoria === filtry.kategoria)
            && (!filtry.cenaOd || towar.cena >= Number(filtry.cenaOd))
            && (!filtry.cenaDo || towar.cena <= Number(filtry.cenaDo));
    }), [filtry, listaTowarow]);

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
                                        <Form.Label>Szukaj po nazwie, kodzie lub PKWiU</Form.Label>
                                        <Form.Control type="text" value={filtry.fraza} onChange={(event) => setFiltry({ ...filtry, fraza: event.target.value })} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Cena od</Form.Label>
                                        <Form.Control type="number" min="0" value={filtry.cenaOd} onChange={(event) => setFiltry({ ...filtry, cenaOd: event.target.value })} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Cena do</Form.Label>
                                        <Form.Control type="number" min="0" value={filtry.cenaDo} onChange={(event) => setFiltry({ ...filtry, cenaDo: event.target.value })} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Kategoria</Form.Label>
                                        <Form.Select value={filtry.kategoria} onChange={(event) => setFiltry({ ...filtry, kategoria: event.target.value })}>
                                            <option value="">Wszystkie</option>
                                            <option>Kategoria 1</option>
                                            <option>Kategoria 2</option>
                                            <option>Kategoria 3</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Button variant="outline-secondary" type="button" onClick={() => setFiltry({ fraza: '', cenaOd: '', cenaDo: '', kategoria: '' })}>Wyczyść filtry</Button>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </aside>
                <main className="table-content-area">
                    <div className="table-results-count text-muted">Wyniki: {listaPoFiltrowaniu.length} z {listaTowarow.length}</div>
                    <div className="business-table-shell">
                        <Table responsive hover className="business-table">
                            <thead>
                                <tr>
                                    <th>Kod</th>
                                    <th>Nazwa</th>
                                    <th>Kategoria</th>
                                    <th>PKWiU</th>
                                    <th>Cena</th>
                                    <th className="business-table-actions-header">Akcje</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaPoFiltrowaniu.map((item, index) => <TowarItem key={index} towar={item} editPath={`/towar?kod=${encodeURIComponent(item.kod)}&tryb=edycja`} />)}
                                {listaPoFiltrowaniu.length === 0 && <tr><td colSpan={6} className="text-center text-muted">Brak towarów spełniających wybrane kryteria.</td></tr>}
                            </tbody>
                        </Table>
                    </div>
                    <div className="table-actions-footer">
                        <Link to="/towar" className="btn btn-primary business-table-new-button">Nowy towar</Link>
                    </div>
                </main>
            </div>
        </Container>
    )
}
