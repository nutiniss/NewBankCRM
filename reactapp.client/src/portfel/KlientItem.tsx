import { Klient } from '../types/portfel/klient'

type KlientProps = {
    klient: Klient
}

export const KlientItem = (props: KlientProps) => {
    const { klient } = props
    return (
        <tr>
            <td>{klient.id}</td>
            <td>{klient.imieNazwisko}</td>
            <td>{klient.segment}</td>
            <td>{klient.wartoscPortfela.toLocaleString('pl-PL')} PLN</td>
            <td>{klient.statusRelacji}</td>
        </tr>
    )
}
