import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import { Wydarzenie } from '../types/kalendarz/wydarzenie'

export const Kalendarz = () => {
    const wydarzenia: Wydarzenie[] = [
        { data: '21.04.2026', godzina: '10:30', typ: 'Spotkanie', opis: 'Baltic Logistics Sp. z o.o. — spotkanie zdalne', klient: 'Baltic Logistics Sp. z o.o.' },
        { data: '22.04.2026', godzina: '09:00', typ: 'Zadanie', opis: 'Aktualizacja analizy finansowej klienta HydroTech', priorytet: 'Wysoki' },
        { data: '22.04.2026', godzina: '13:00', typ: 'Spotkanie', opis: 'MediCore Group — spotkanie stacjonarne', klient: 'MediCore Group' },
        { data: '24.04.2026', godzina: '08:30', typ: 'Zadanie', opis: 'Przygotowanie oferty cross-sellingowej dla MediCore', priorytet: 'Średni' },
    ]

    const getEditPath = (wydarzenie: Wydarzenie) => {
        if (wydarzenie.typ === 'Spotkanie') {
            return `/nowe-spotkanie?termin=${encodeURIComponent(`${wydarzenie.data} ${wydarzenie.godzina}`)}&tryb=edycja`
        }

        return `/nowe-zadanie?termin=${encodeURIComponent(wydarzenie.data)}&tryb=edycja`
    }

    return (
        <Container fluid>
            <div className="business-table-shell">
                <Table responsive hover className="business-table">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Godzina</th>
                            <th>Typ</th>
                            <th>Opis</th>
                            <th className="business-table-actions-header">Akcje</th>
                        </tr>
                    </thead>
                    <tbody>
                        {wydarzenia.map((item) => (
                            <tr key={`${item.data}-${item.godzina}-${item.opis}`}>
                                <td>{item.data}</td>
                                <td>{item.godzina}</td>
                                <td>{item.typ}</td>
                                <td>{item.opis}</td>
                                <td className="business-table-actions-cell">
                                    <Link to={getEditPath(item)} className="btn btn-outline-primary btn-sm table-action-button">Edytuj</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <div className="table-actions-footer">
                <Link to="/nowe-spotkanie" className="btn btn-primary business-table-new-button">Nowe spotkanie</Link>
                <Link to="/nowe-zadanie" className="btn btn-info business-table-new-button">Nowe zadanie</Link>
            </div>
        </Container>
    )
}
