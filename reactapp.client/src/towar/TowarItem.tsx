import { Towar } from "../types/towar/towar"
type TowarProps = {
    //tu można dodać coś jeszcze
    //liczba: number,
    towar: Towar
}

export const TowarItem = (props: TowarProps) => {
    const { towar } = props; //z propsa pobieramy sam towar
    return (<tr>
        <td>{towar.kod}</td>
        <td>{towar.nazwa}</td>
        <td>{towar.kategoria}</td>
        <td>{towar.pkwiu}</td>
        <td>{towar.cena}</td>
    </tr>)
}