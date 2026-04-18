import { Spotkanie } from '../types/kalendarz/spotkanie'

type SpotkanieProps = {
    spotkanie: Spotkanie
}

export const SpotkanieItem = (props: SpotkanieProps) => {
    const { spotkanie } = props
    return (
        <tr>
            <td>{spotkanie.temat}</td>
            <td>{spotkanie.klient}</td>
            <td>{spotkanie.data}</td>
            <td>{spotkanie.status}</td>
        </tr>
    )
}
