import { Link } from 'react-router-dom'
import { Klient } from '../types/portfel/klient'

type KlientProps = {
    klient: Klient
    editPath: string
}

export const KlientItem = (props: KlientProps) => {
    const { klient, editPath } = props

    return (
        <tr>
            <td>{klient.nazwa}</td>
            <td>{klient.status}</td>
            <td>{klient.branza}</td>
            <td>{klient.dataNawiazaniaRelacji}</td>
            <td>{klient.segment ?? '—'}</td>
            <td>{klient.statusRelacji ?? '—'}</td>
            <td>{klient.statusMbo ?? '—'}</td>
            <td>{klient.kredytowy ?? '—'}</td>
            <td>{klient.kraj ?? '—'}</td>
            <td className="business-table-actions-cell">
                <Link to={editPath} className="btn btn-outline-primary btn-sm table-action-button">Edytuj</Link>
            </td>
        </tr>
    )
}
