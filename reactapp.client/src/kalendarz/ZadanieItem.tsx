import { Link } from 'react-router-dom'
import { Zadanie } from '../types/kalendarz/zadanie'

type ZadanieProps = {
    zadanie: Zadanie
    editPath: string
}

export const ZadanieItem = (props: ZadanieProps) => {
    const { zadanie, editPath } = props
    return (
        <tr>
            <td>{zadanie.nazwa}</td>
            <td>{zadanie.priorytet}</td>
            <td>{zadanie.termin}</td>
            <td>{zadanie.status ?? 'Nowe'}</td>
            <td className="business-table-actions-cell">
                <Link to={editPath} className="btn btn-outline-primary btn-sm table-action-button">Edytuj</Link>
            </td>
        </tr>
    )
}
