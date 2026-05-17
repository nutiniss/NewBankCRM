import Accordion from 'react-bootstrap/Accordion'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import { Klient } from '../types/portfel/klient'
import { KlientItem } from './KlientItem'

type FiltryKlientow = {
    fraza: string
    status: string
    branza: string
    segment: string
    statusRelacji: string
    statusMbo: string
    kredytowy: string
    kraj: string
    formaPrawna: string
    flagaJdg: string
    sekcjaPkd: string
    statusCmis: string
    rolaWGrupie: string
    grupaKapitalowa: string
    miejscowosc: string
    przychodyNettoOd: string
    przychodyNettoDo: string
    pracownicyOd: string
    dataRelacjiOd: string
    dataRelacjiDo: string
}

const pusteFiltry: FiltryKlientow = {
    fraza: '',
    status: '',
    branza: '',
    segment: '',
    statusRelacji: '',
    statusMbo: '',
    kredytowy: '',
    kraj: '',
    formaPrawna: '',
    flagaJdg: '',
    sekcjaPkd: '',
    statusCmis: '',
    rolaWGrupie: '',
    grupaKapitalowa: '',
    miejscowosc: '',
    przychodyNettoOd: '',
    przychodyNettoDo: '',
    pracownicyOd: '',
    dataRelacjiOd: '',
    dataRelacjiDo: '',
}

const normalizuj = (wartosc?: string) => wartosc?.toLocaleLowerCase('pl-PL') ?? ''

const zawiera = (wartosc: string | undefined, szukanaFraza: string) => normalizuj(wartosc).includes(normalizuj(szukanaFraza))

const parsujDateRelacji = (data: string) => {
    const [dzien, miesiac, rok] = data.split('.')

    if (!dzien || !miesiac || !rok) {
        return undefined
    }

    return new Date(Number(rok), Number(miesiac) - 1, Number(dzien))
}

const filtrLiczbowy = (wartosc: number | undefined, od: string, doWartosci: string) => {
    if (wartosc === undefined) {
        return !od && !doWartosci
    }

    const minimum = od ? Number(od) : undefined
    const maksimum = doWartosci ? Number(doWartosci) : undefined

    return (minimum === undefined || wartosc >= minimum) && (maksimum === undefined || wartosc <= maksimum)
}

const filtrDatyRelacji = (dataRelacji: string, od: string, doWartosci: string) => {
    const data = parsujDateRelacji(dataRelacji)

    if (!data) {
        return false
    }

    const minimum = od ? new Date(od) : undefined
    const maksimum = doWartosci ? new Date(doWartosci) : undefined

    return (minimum === undefined || data >= minimum) && (maksimum === undefined || data <= maksimum)
}

export const MoiKlienci = () => {
    const [listaKlientow, setListaKlientow] = useState<Klient[]>([])
    const [filtry, setFiltry] = useState<FiltryKlientow>(pusteFiltry)

    useEffect(() => {
        const listaKlientowZApi: Klient[] = [
            {
                nazwa: 'Nexon Industry',
                nazwaSkrocona: 'Nexon',
                status: 'Klient',
                branza: 'Produkcja',
                dataNawiazaniaRelacji: '10.04.2026',
                segment: 'Premium',
                statusRelacji: 'Nowa',
                statusMbo: 'Nowy',
                kredytowy: 'Tak',
                identyfikatorPodatkowy: '5210000001',
                identyfikatorRejestrowy: '140000001',
                numerEwidencji: 'KRS 0000000001',
                kraj: 'Polska',
                kodLei: '259400NEXON00000001',
                stronaWww: 'https://nexon.example.com',
                grupaKapitalowa: 'Nexon Holding',
                rolaWGrupie: 'Podmiot zależny',
                miejscowosc: 'Warszawa',
                adresZagraniczny: false,
                potencjalDochodowy: 30000000,
                potencjalAkwizycyjny: 42000000,
                przychodyNetto: 40623487,
                rokObrotowy: 2023,
                zrodloPrzychodu: 'Sprawozdanie finansowe',
                formaPrawna: 'Spółka z ograniczoną odpowiedzialnością',
                flagaJdg: 'Nie',
                sekcjaPkd: 'C - Przetwórstwo przemysłowe',
                pkdGlowne: '25.62 - Obróbka mechaniczna elementów metalowych',
                statusCmis: 'Aktywny',
                liczbaPracownikow: 1200,
                dataZalozenia: '2006-02-15',
                ostatniaDataPozyskania: '2026-04-10',
            },
            {
                nazwa: 'PortLine Cargo',
                nazwaSkrocona: 'PortLine',
                status: 'Klient',
                branza: 'Transport',
                dataNawiazaniaRelacji: '11.04.2026',
                segment: 'Standard',
                statusRelacji: 'Aktywna',
                statusMbo: 'Pozyskany',
                kredytowy: 'Do weryfikacji',
                identyfikatorPodatkowy: '5210000002',
                identyfikatorRejestrowy: '140000002',
                numerEwidencji: 'KRS 0000000002',
                kraj: 'Polska',
                grupaKapitalowa: 'PortLine Group',
                rolaWGrupie: 'Podmiot dominujący',
                miejscowosc: 'Gdańsk',
                potencjalDochodowy: 9000000,
                potencjalAkwizycyjny: 15000000,
                przychodyNetto: 18500000,
                rokObrotowy: 2023,
                zrodloPrzychodu: 'Użytkownik',
                formaPrawna: 'Spółka akcyjna',
                flagaJdg: 'Nie',
                sekcjaPkd: 'H - Transport i gospodarka magazynowa',
                pkdGlowne: '49.41 - Transport drogowy towarów',
                statusCmis: 'Do weryfikacji',
                liczbaPracownikow: 310,
                dataZalozenia: '2012-09-04',
                ostatniaDataPozyskania: '2026-04-11',
            },
            {
                nazwa: 'EcoFarm Group',
                nazwaSkrocona: 'EcoFarm',
                status: 'Prospekt',
                branza: 'Agro',
                dataNawiazaniaRelacji: '13.04.2026',
                segment: 'Premium',
                statusRelacji: 'Do kontaktu',
                statusMbo: 'W trakcie pozyskania',
                kredytowy: 'Tak',
                identyfikatorPodatkowy: '5210000003',
                kraj: 'Czechy',
                grupaKapitalowa: 'EcoFarm Europe',
                rolaWGrupie: 'Podmiot zależny',
                miejscowosc: 'Brno',
                adresZagraniczny: true,
                potencjalDochodowy: 17000000,
                potencjalAkwizycyjny: 24000000,
                przychodyNetto: 30120000,
                rokObrotowy: 2023,
                zrodloPrzychodu: 'System zewnętrzny',
                formaPrawna: 'Spółka z ograniczoną odpowiedzialnością',
                flagaJdg: 'Nie',
                sekcjaPkd: 'F - Budownictwo',
                pkdGlowne: '01.11 - Uprawa zbóż',
                statusCmis: 'Aktywny',
                liczbaPracownikow: 540,
                dataZalozenia: '2018-05-18',
                ostatniaDataPozyskania: '2026-04-13',
            },
            {
                nazwa: 'MediNova',
                nazwaSkrocona: 'MediNova',
                status: 'Klient',
                branza: 'Medycyna',
                dataNawiazaniaRelacji: '15.04.2026',
                segment: 'VIP',
                statusRelacji: 'Aktywna',
                statusMbo: 'Pozyskany',
                kredytowy: 'Tak',
                identyfikatorPodatkowy: '5210000004',
                kraj: 'Polska',
                grupaKapitalowa: 'MediNova Holding',
                rolaWGrupie: 'Jednostka samodzielna',
                miejscowosc: 'Kraków',
                potencjalDochodowy: 45000000,
                potencjalAkwizycyjny: 62000000,
                przychodyNetto: 78100000,
                rokObrotowy: 2023,
                zrodloPrzychodu: 'Sprawozdanie finansowe',
                formaPrawna: 'Spółka akcyjna',
                flagaJdg: 'Nie',
                sekcjaPkd: 'J - Informacja i komunikacja',
                pkdGlowne: '86.10 - Działalność szpitali',
                statusCmis: 'Aktywny',
                liczbaPracownikow: 2100,
                dataZalozenia: '2001-11-22',
                ostatniaDataPozyskania: '2026-04-15',
            },
            {
                nazwa: 'Baltic Logistics Sp. z o.o.',
                nazwaSkrocona: 'Baltic Logistics',
                status: 'Prospekt',
                branza: 'Logistyka',
                dataNawiazaniaRelacji: '18.03.2026',
                segment: 'VIP',
                statusRelacji: 'Aktywna',
                statusMbo: 'W trakcie pozyskania',
                kredytowy: 'Nie',
                identyfikatorPodatkowy: '5210000005',
                kraj: 'Niemcy',
                grupaKapitalowa: 'Baltic Logistics International',
                rolaWGrupie: 'Podmiot dominujący',
                miejscowosc: 'Hamburg',
                adresZagraniczny: true,
                potencjalDochodowy: 22000000,
                potencjalAkwizycyjny: 29000000,
                przychodyNetto: 51200000,
                rokObrotowy: 2023,
                zrodloPrzychodu: 'System zewnętrzny',
                formaPrawna: 'Spółka z ograniczoną odpowiedzialnością',
                flagaJdg: 'Nie',
                sekcjaPkd: 'H - Transport i gospodarka magazynowa',
                pkdGlowne: '52.29 - Działalność usługowa wspomagająca transport',
                statusCmis: 'Nieaktywny',
                liczbaPracownikow: 850,
                dataZalozenia: '2010-01-08',
                ostatniaDataPozyskania: '2026-03-18',
            },
        ]
        setListaKlientow(listaKlientowZApi)
    }, [])

    const zmienFiltr = (nazwa: keyof FiltryKlientow, wartosc: string) => {
        setFiltry((aktualne) => ({ ...aktualne, [nazwa]: wartosc }))
    }

    const listaPoFiltrowaniu = useMemo(() => listaKlientow.filter((klient) => {
        const pasujeDoFrazy = !filtry.fraza || [
            klient.nazwa,
            klient.nazwaSkrocona,
            klient.identyfikatorPodatkowy,
            klient.identyfikatorRejestrowy,
            klient.numerEwidencji,
            klient.kodLei,
            klient.stronaWww,
            klient.pkdGlowne,
        ].some((wartosc) => zawiera(wartosc, filtry.fraza))

        return pasujeDoFrazy
            && (!filtry.status || klient.status === filtry.status)
            && (!filtry.branza || klient.branza === filtry.branza)
            && (!filtry.segment || klient.segment === filtry.segment)
            && (!filtry.statusRelacji || klient.statusRelacji === filtry.statusRelacji)
            && (!filtry.statusMbo || klient.statusMbo === filtry.statusMbo)
            && (!filtry.kredytowy || klient.kredytowy === filtry.kredytowy)
            && (!filtry.kraj || klient.kraj === filtry.kraj)
            && (!filtry.formaPrawna || klient.formaPrawna === filtry.formaPrawna)
            && (!filtry.flagaJdg || klient.flagaJdg === filtry.flagaJdg)
            && (!filtry.sekcjaPkd || klient.sekcjaPkd === filtry.sekcjaPkd)
            && (!filtry.statusCmis || klient.statusCmis === filtry.statusCmis)
            && (!filtry.rolaWGrupie || klient.rolaWGrupie === filtry.rolaWGrupie)
            && (!filtry.grupaKapitalowa || zawiera(klient.grupaKapitalowa, filtry.grupaKapitalowa))
            && (!filtry.miejscowosc || zawiera(klient.miejscowosc, filtry.miejscowosc))
            && filtrLiczbowy(klient.przychodyNetto, filtry.przychodyNettoOd, filtry.przychodyNettoDo)
            && filtrLiczbowy(klient.liczbaPracownikow, filtry.pracownicyOd, '')
            && filtrDatyRelacji(klient.dataNawiazaniaRelacji, filtry.dataRelacjiOd, filtry.dataRelacjiDo)
    }), [listaKlientow, filtry])   

    return (
        <Container fluid>
            <div className="table-view-layout">
                <aside className="table-filters-sidebar">
                    <Accordion defaultActiveKey="filtrowanie" className="mb-3">
                        <Accordion.Item eventKey="filtrowanie">
                            <Accordion.Header>Filtrowanie i sortowanie</Accordion.Header>
                            <Accordion.Body>
                                <Form className="table-filters-form">
                                    <Form.Group controlId="clientSearch">
                                        <Form.Label>Szukaj po nazwie, NIP, REGON, KRS, LEI lub PKD</Form.Label>
                                        <Form.Control type="text" placeholder="np. MediNova albo 49.41" value={filtry.fraza} onChange={(event) => zmienFiltr('fraza', event.target.value)} />
                                    </Form.Group>
                                    <Form.Group controlId="clientStatus">
                                        <Form.Label>Status</Form.Label>
                                        <Form.Select value={filtry.status} onChange={(event) => zmienFiltr('status', event.target.value)}>
                                            <option value="">Wszyscy</option>
                                            <option>Klient</option>
                                            <option>Prospekt</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group controlId="clientIndustry">
                                        <Form.Label>Branża</Form.Label>
                                        <Form.Select value={filtry.branza} onChange={(event) => zmienFiltr('branza', event.target.value)}>
                                            <option value="">Wszystkie</option>
                                            <option>Agro</option>
                                            <option>Logistyka</option>
                                            <option>Medycyna</option>
                                            <option>Produkcja</option>
                                            <option>Transport</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group controlId="clientSegment">
                                        <Form.Label>Segment klienta</Form.Label>
                                        <Form.Select value={filtry.segment} onChange={(event) => zmienFiltr('segment', event.target.value)}>
                                            <option value="">Wszystkie</option>
                                            <option>VIP</option>
                                            <option>Premium</option>
                                            <option>Standard</option>
                                            <option>Prospekt strategiczny</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group controlId="clientRelationStatus">
                                        <Form.Label>Status relacji</Form.Label>
                                        <Form.Select value={filtry.statusRelacji} onChange={(event) => zmienFiltr('statusRelacji', event.target.value)}>
                                            <option value="">Wszystkie</option>
                                            <option>Aktywna</option>
                                            <option>Do kontaktu</option>
                                            <option>Nowa</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group controlId="clientMboStatus">
                                        <Form.Label>Status MBO</Form.Label>
                                        <Form.Select value={filtry.statusMbo} onChange={(event) => zmienFiltr('statusMbo', event.target.value)}>
                                            <option value="">Wszystkie</option>
                                            <option>Pozyskany</option>
                                            <option>W trakcie pozyskania</option>
                                            <option>Nowy</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group controlId="clientCreditworthy">
                                        <Form.Label>Kredytowy</Form.Label>
                                        <Form.Select value={filtry.kredytowy} onChange={(event) => zmienFiltr('kredytowy', event.target.value)}>
                                            <option value="">Wszystkie</option>
                                            <option>Tak</option>
                                            <option>Nie</option>
                                            <option>Do weryfikacji</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group controlId="clientCountry">
                                        <Form.Label>Kraj</Form.Label>
                                        <Form.Select value={filtry.kraj} onChange={(event) => zmienFiltr('kraj', event.target.value)}>
                                            <option value="">Wszystkie</option>
                                            <option>Polska</option>
                                            <option>Czechy</option>
                                            <option>Niemcy</option>
                                            <option>Słowacja</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group controlId="clientLegalForm">
                                        <Form.Label>Forma prawna</Form.Label>
                                        <Form.Select value={filtry.formaPrawna} onChange={(event) => zmienFiltr('formaPrawna', event.target.value)}>
                                            <option value="">Wszystkie</option>
                                            <option>Spółka z ograniczoną odpowiedzialnością</option>
                                            <option>Spółka akcyjna</option>
                                            <option>Jednoosobowa działalność gospodarcza</option>
                                            <option>Spółka komandytowa</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group controlId="clientJdgFlag">
                                        <Form.Label>Flaga JDG</Form.Label>
                                        <Form.Select value={filtry.flagaJdg} onChange={(event) => zmienFiltr('flagaJdg', event.target.value)}>
                                            <option value="">Wszystkie</option>
                                            <option>Nie</option>
                                            <option>Tak</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group controlId="clientPkdSection">
                                        <Form.Label>Sekcja PKD głównego</Form.Label>
                                        <Form.Select value={filtry.sekcjaPkd} onChange={(event) => zmienFiltr('sekcjaPkd', event.target.value)}>
                                            <option value="">Wszystkie</option>
                                            <option>J - Informacja i komunikacja</option>
                                            <option>C - Przetwórstwo przemysłowe</option>
                                            <option>H - Transport i gospodarka magazynowa</option>
                                            <option>F - Budownictwo</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group controlId="clientCmisStatus">
                                        <Form.Label>Status CMIS</Form.Label>
                                        <Form.Select value={filtry.statusCmis} onChange={(event) => zmienFiltr('statusCmis', event.target.value)}>
                                            <option value="">Wszystkie</option>
                                            <option>Aktywny</option>
                                            <option>Nieaktywny</option>
                                            <option>Do weryfikacji</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group controlId="clientGroupRole">
                                        <Form.Label>Rola w grupie</Form.Label>
                                        <Form.Select value={filtry.rolaWGrupie} onChange={(event) => zmienFiltr('rolaWGrupie', event.target.value)}>
                                            <option value="">Wszystkie</option>
                                            <option>Podmiot dominujący</option>
                                            <option>Podmiot zależny</option>
                                            <option>Jednostka samodzielna</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group controlId="clientCapitalGroup">
                                        <Form.Label>Nazwa grupy</Form.Label>
                                        <Form.Control type="text" placeholder="np. Holding" value={filtry.grupaKapitalowa} onChange={(event) => zmienFiltr('grupaKapitalowa', event.target.value)} />
                                    </Form.Group>
                                    <Form.Group controlId="clientCity">
                                        <Form.Label>Miejscowość</Form.Label>
                                        <Form.Control type="text" placeholder="np. Gdańsk" value={filtry.miejscowosc} onChange={(event) => zmienFiltr('miejscowosc', event.target.value)} />
                                    </Form.Group>
                                    <Form.Group controlId="clientRevenueFrom">
                                        <Form.Label>Przychody netto od</Form.Label>
                                        <Form.Control type="number" min="0" value={filtry.przychodyNettoOd} onChange={(event) => zmienFiltr('przychodyNettoOd', event.target.value)} />
                                    </Form.Group>
                                    <Form.Group controlId="clientRevenueTo">
                                        <Form.Label>Przychody netto do</Form.Label>
                                        <Form.Control type="number" min="0" value={filtry.przychodyNettoDo} onChange={(event) => zmienFiltr('przychodyNettoDo', event.target.value)} />
                                    </Form.Group>
                                    <Form.Group controlId="clientEmployeesFrom">
                                        <Form.Label>Liczba pracowników od</Form.Label>
                                        <Form.Control type="number" min="0" value={filtry.pracownicyOd} onChange={(event) => zmienFiltr('pracownicyOd', event.target.value)} />
                                    </Form.Group>
                                    <Form.Group controlId="clientRelationDateFrom">
                                        <Form.Label>Relacja od</Form.Label>
                                        <Form.Control type="date" value={filtry.dataRelacjiOd} onChange={(event) => zmienFiltr('dataRelacjiOd', event.target.value)} />
                                    </Form.Group>
                                    <Form.Group controlId="clientRelationDateTo">
                                        <Form.Label>Relacja do</Form.Label>
                                        <Form.Control type="date" value={filtry.dataRelacjiDo} onChange={(event) => zmienFiltr('dataRelacjiDo', event.target.value)} />
                                    </Form.Group>
                                    <Button variant="outline-secondary" type="button" onClick={() => setFiltry(pusteFiltry)}>
                                        Wyczyść filtry
                                    </Button>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </aside>
                <main className="table-content-area">
                            
            <div className="business-table-shell">
                <Table responsive hover className="business-table">
                <thead>
                    <tr>
                        <th>Nazwa klienta</th>
                        <th>Status</th>
                        <th>Branża</th>
                        <th>Data nawiązania relacji</th>
                        <th>Segment</th>
                        <th>Status relacji</th>
                        <th>Status MBO</th>
                        <th>Kredytowy</th>
                        <th>Kraj</th>
                        <th className="business-table-actions-header">Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    {listaPoFiltrowaniu.map((item) => <KlientItem key={`${item.nazwa}-${item.dataNawiazaniaRelacji}`} klient={item} editPath={`/nowy-klient-potencjalny?klient=${encodeURIComponent(item.nazwa)}&tryb=edycja`} />)}
                    {listaPoFiltrowaniu.length === 0 && (
                        <tr>
                            <td colSpan={10} className="text-center text-muted">Brak klientów spełniających wybrane kryteria.</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            </div>
            <div className="table-actions-footer">
                <Link to="/nowy-klient-potencjalny" className="btn btn-primary business-table-new-button">Nowy klient</Link>
            </div>
                </main>
            </div>
        </Container>
    )
}
