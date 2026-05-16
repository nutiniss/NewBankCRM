import { Link } from 'react-router-dom'
import { Pracownik } from '../types/pracownik/pracownik'

type PracownikProps = {
    pracownik: Pracownik
    editPath: string
}

export const PracownikItem = (props: PracownikProps) => {
    const { pracownik, editPath } = props
    return (
        <tr>
            <td>{pracownik.imie}</td>
            <td>{pracownik.nazwisko}</td>
            <td>{pracownik.stanowisko}</td>
            <td>{pracownik.placaBrutto}</td>
            <td className="business-table-actions-cell">
                <Link to={editPath} className="btn btn-outline-primary btn-sm table-action-button">Edytuj</Link>
            </td>
        </tr>
    )
}
