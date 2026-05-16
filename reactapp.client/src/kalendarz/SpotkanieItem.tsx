import { Link } from 'react-router-dom'
import { Spotkanie } from '../types/kalendarz/spotkanie'

type SpotkanieProps = {
    spotkanie: Spotkanie
    editPath: string
}

export const SpotkanieItem = (props: SpotkanieProps) => {
    const { spotkanie, editPath } = props

    return (
        <tr>
            <td>{spotkanie.klient}</td>
            <td>{spotkanie.dataIGodzina}</td>
            <td>{spotkanie.tryb}</td>
            <td>{spotkanie.status ?? 'Zaplanowane'}</td>
            <td className="business-table-actions-cell">
                <Link to={editPath} className="btn btn-outline-primary btn-sm table-action-button">Edytuj</Link>
            </td>
        </tr>
    )
}
