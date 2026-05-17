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
            <td>{spotkanie.firma}</td>
            <td>{spotkanie.typ}</td>
            <td>{spotkanie.dataIGodzina}</td>
            <td>{spotkanie.miejsce}</td>
            <td>{spotkanie.temat}</td>
            <td>{spotkanie.organizator}</td>
            <td>{spotkanie.status ?? 'Zaplanowane'}</td>
            <td className="business-table-actions-cell">
                <Link to={editPath} className="btn btn-outline-primary btn-sm table-action-button">Edytuj</Link>
            </td>
        </tr>
    )
}
