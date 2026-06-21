import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { PieChart } from 'react-minimal-pie-chart'

const formatCurrency = (value: number) => value.toLocaleString('pl-PL', { style: 'currency', currency: 'PLN', maximumFractionDigits: 0 })

const segmenty = [
    { title: 'VIP', value: 32, color: 'var(--color2)' },
    { title: 'Premium', value: 46, color: 'var(--color3)' },
    { title: 'Standard', value: 48, color: 'var(--color4)' },
]

const branze = [
    { nazwa: 'Produkcja', wartosc: 18_500_000 },
    { nazwa: 'Medycyna', wartosc: 13_200_000 },
    { nazwa: 'Transport', wartosc: 8_600_000 },
    { nazwa: 'Agro', wartosc: 5_100_000 },
    { nazwa: 'Logistyka', wartosc: 3_200_000 },
]

const statusy = [
    { nazwa: 'Aktywna', liczba: 82 },
    { nazwa: 'Do kontaktu', liczba: 29 },
    { nazwa: 'Nowa', liczba: 15 },
]

const maksymalnaWartoscBranzy = Math.max(...branze.map((branza) => branza.wartosc))
const maksymalnaLiczbaStatusu = Math.max(...statusy.map((status) => status.liczba))

export const AnalizaPortfela = () => {
    return (
        <Container fluid className="portfolio-analysis-page pb-4">
            <Row className="g-3 mb-3">
                <Col md={4}>
                    <Card className="analysis-kpi-card">
                        <Card.Body>
                            <Card.Title>Łączna wartość portfela</Card.Title>
                            <Card.Text>48,6 mln PLN</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="analysis-kpi-card">
                        <Card.Body>
                            <Card.Title>Moi klienci</Card.Title>
                            <Card.Text>126</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="analysis-kpi-card">
                        <Card.Body>
                            <Card.Title>Moi potencjalni klienci</Card.Title>
                            <Card.Text>34</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="g-3 align-items-stretch">
                <Col xl={4} lg={6}>
                    <Card className="analysis-chart-card h-100">
                        <Card.Body>
                            <Card.Title>Struktura portfela według segmentu</Card.Title>
                            <div className="analysis-pie-layout">
                                <PieChart data={segmenty}  animate />
                                <ul className="analysis-legend">
                                    {segmenty.map((segment) => (
                                        <li key={segment.title}>
                                            <span className="analysis-legend-dot" style={{ backgroundColor: segment.color }} />
                                            <span>{segment.title}</span>
                                            <strong>{segment.value}</strong>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6}>
                    <Card className="analysis-chart-card h-100">
                        <Card.Body>
                            <Card.Title>Ekspozycja według branży</Card.Title>
                            <div className="analysis-bars">
                                {branze.map((branza) => (
                                    <div className="analysis-bar-row" key={branza.nazwa}>
                                        <div className="analysis-bar-label">
                                            <span>{branza.nazwa}</span>
                                            <strong>{formatCurrency(branza.wartosc)}</strong>
                                        </div>
                                        <div className="analysis-bar-track">
                                            <div className="analysis-bar-fill" style={{ width: `${(branza.wartosc / maksymalnaWartoscBranzy) * 100}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={12}>
                    <Card className="analysis-chart-card h-100">
                        <Card.Body>
                            <Card.Title>Status relacji klientowskich</Card.Title>
                            <div className="analysis-status-chart">
                                {statusy.map((status) => (
                                    <div className="analysis-status-column" key={status.nazwa}>
                                        <div className="analysis-status-bar" style={{ height: `${(status.liczba / maksymalnaLiczbaStatusu) * 100}%` }}>
                                            <span>{status.liczba}</span>
                                        </div>
                                        <strong>{status.nazwa}</strong>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
