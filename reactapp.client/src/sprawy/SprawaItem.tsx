import { Link } from 'react-router-dom'
import { Sprawa } from '../types/sprawy/sprawa'

type SprawaProps = {
    sprawa: Sprawa
    editPath: string
}

export const SprawaItem = (props: SprawaProps) => {
    const { sprawa, editPath } = props
    return (
        <tr>
            <td>{sprawa.numer}</td>
            <td>{sprawa.tytul}</td>
            <td>{sprawa.nazwaKlienta}</td>
            <td>{sprawa.typSprawy}</td>
            <td>{sprawa.produkt}</td>
            <td>{sprawa.priorytet}</td>
            <td>{sprawa.status}</td>
            <td>{sprawa.wlasciciel}</td>
            <td>{sprawa.termin}</td>
            <td className="business-table-actions-cell">
                <Link to={editPath} className="btn btn-outline-primary btn-sm table-action-button">Edytuj</Link>
            </td>
        </tr>
    )
}
