import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import { Sprawa } from '../types/sprawy/sprawa'
import { SprawaItem } from './SprawaItem'

export const Sprawy = () => {
    const listaSpraw: Sprawa[] = [
        { numer: 'SPR-001', tytul: 'Reklamacja polisy', priorytet: 'Wysoki', status: 'Otwarte' },
        { numer: 'SPR-002', tytul: 'Aktualizacja pełnomocnictwa', priorytet: 'Średni', status: 'W toku' },
    ]

    return (
        <Container fluid>
            <div className="business-table-shell">
                <Table responsive hover className="business-table">
                <thead>
                    <tr>
                        <th>Numer</th>
                        <th>Tytuł</th>
                        <th>Priorytet</th>
                        <th>Status</th>
                                            <th className="business-table-actions-header">Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    {listaSpraw.map((item, index) => <SprawaItem key={index} sprawa={item} editPath={`/nowa-sprawa?numer=${encodeURIComponent(item.numer)}&tryb=edycja`} />)}
                </tbody>
            </Table>
            </div>
            <div className="table-actions-footer">
                <Link to="/nowa-sprawa" className="btn btn-primary business-table-new-button">Nowa sprawa</Link>
            </div>
        </Container>
    )
}
