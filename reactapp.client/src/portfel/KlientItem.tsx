import { Klient } from '../types/portfel/klient'

type KlientProps = {
    klient: Klient
}

export const KlientItem = (props: KlientProps) => {
    const { klient } = props

    return (
        <tr>
            <td>{klient.nazwa}</td>
            <td>{klient.branza}</td>
            <td>{klient.dataNawiazaniaRelacji}</td>
            <td>{klient.segment ?? '—'}</td>
            <td>{klient.statusRelacji ?? '—'}</td>
        </tr>
    )
}
