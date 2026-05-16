import { Link } from 'react-router-dom'
import { Towar } from '../types/towar/towar'

type TowarProps = {
    towar: Towar
    editPath: string
}

export const TowarItem = (props: TowarProps) => {
    const { towar, editPath } = props
    return (
        <tr>
            <td>{towar.kod}</td>
            <td>{towar.kategoria}</td>
            <td>{towar.nazwa}</td>
            <td>{towar.pkwiu}</td>
            <td>{towar.cena}</td>
            <td className="business-table-actions-cell">
                <Link to={editPath} className="btn btn-outline-primary btn-sm table-action-button">Edytuj</Link>
            </td>
        </tr>
    )
}
