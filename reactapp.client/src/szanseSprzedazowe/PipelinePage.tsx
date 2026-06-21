import { useMemo, useState } from 'react'
import Badge from 'react-bootstrap/Badge'
import { Link, useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import type { Okazja } from '../types/szanseSprzedazowe/okazja'

const stages = ['Przedstawienie oferty', 'Dokumentacja', 'Przekazanie do opinii', 'Decyzja', 'Negocjacje', 'Zamknięcie']

const initialOpportunities: Okazja[] = [
    { id: '000920', klient: 'Firma Konsultingowa S.A.', produkt: 'Finansowanie floty', etap: 'Przedstawienie oferty', dataZamkniecia: '2026-07-10', wartosc: 20000000 },
    { id: '000785', klient: 'Baltic Logistics Sp. z o.o.', produkt: 'Kredyt inwestycyjny', etap: 'Przedstawienie oferty', dataZamkniecia: '2026-06-18', wartosc: 10000000 },
    { id: '000700', klient: 'Delta Trade Sp. z o.o.', produkt: 'Bankowość transakcyjna', etap: 'Przekazanie do opinii', dataZamkniecia: '2026-07-12', wartosc: 60000 },
    { id: '000598', klient: 'Centrum Logistyczne Gamma', produkt: 'Gotówka', etap: 'Przekazanie do opinii', dataZamkniecia: '2026-06-15', wartosc: 50000 },
    { id: '000420', klient: 'Alfa Sp. z o.o.', produkt: 'Treasury', etap: 'Dokumentacja', dataZamkniecia: '2026-06-10', wartosc: 5000000 },
    { id: '000789', klient: 'TRE IRS', produkt: 'Instrumenty pochodne', etap: 'Dokumentacja', dataZamkniecia: '2026-07-01', wartosc: 3000000 },
    { id: '000617', klient: 'Firma Konsultingowa S.A.', produkt: 'TRE FX Hedge', etap: 'Dokumentacja', dataZamkniecia: '2026-07-18', wartosc: 2000000 },
    { id: '000555', klient: 'Firma Konsultingowa S.A.', produkt: 'Karty Charge', etap: 'Negocjacje', dataZamkniecia: '2026-07-10', wartosc: 30000 },
    { id: '000696', klient: 'Beta Manufacturing S.A.', produkt: 'Kredyt akwizycyjny', etap: 'Negocjacje', dataZamkniecia: '2026-08-16', wartosc: 70000000 },
    { id: '000717', klient: 'GreenPol Energia', produkt: 'Kredyt inwestycyjny', etap: 'Zamknięcie', dataZamkniecia: '2026-06-16', wartosc: 20000000 },
    { id: '000828', klient: 'MediCore Group', produkt: 'TRE Invest', etap: 'Zamknięcie', dataZamkniecia: '2026-07-10', wartosc: 4000000 },
]

const today = new Date('2026-06-21T00:00:00')

const formatAmount = (value?: number) => value?.toLocaleString('pl-PL', { style: 'currency', currency: 'PLN', maximumFractionDigits: 0 }) ?? '—'
const formatDate = (value: string) => new Intl.DateTimeFormat('pl-PL').format(new Date(`${value}T00:00:00`))
const isOverdue = (value: string) => new Date(`${value}T00:00:00`) < today

export const Pipeline = () => {
    const navigate = useNavigate()
    const [opportunities, setOpportunities] = useState(initialOpportunities)
    const [draggedOpportunityId, setDraggedOpportunityId] = useState<string | null>(null)

    const opportunitiesByStage = useMemo(() => stages.map((stage) => ({
        stage,
        opportunities: opportunities.filter((opportunity) => opportunity.etap === stage),
    })), [opportunities])

    const getOpportunityEditPath = (opportunity: Okazja) => `/nowa-okazja-biznesowa?id=${encodeURIComponent(opportunity.id ?? '')}&klient=${encodeURIComponent(opportunity.klient)}&produkt=${encodeURIComponent(opportunity.produkt)}&tryb=edycja`

    const moveOpportunity = (stage: string) => {
        if (!draggedOpportunityId) return

        setOpportunities((currentOpportunities) => currentOpportunities.map((opportunity) => (
            opportunity.id === draggedOpportunityId ? { ...opportunity, etap: stage } : opportunity
        )))
        setDraggedOpportunityId(null)
    }

    return (
        <Container fluid className="pipeline-page pb-4">
            <div className="pipeline-toolbar mb-4">
                <h1 className="pipeline-title mb-0">Pipeline</h1>
                <div className="pipeline-actions">
                    <Link to="/nowa-okazja-biznesowa" className="btn btn-primary">Dodaj</Link>
                </div>
            </div>

            <div className="pipeline-board" aria-label="Pipeline szans sprzedażowych">
                {opportunitiesByStage.map(({ stage, opportunities: stageOpportunities }) => (
                    <section
                        key={stage}
                        className="pipeline-column"
                        aria-label={stage}
                        onDragOver={(event) => event.preventDefault()}
                        onDrop={() => moveOpportunity(stage)}
                    >
                        <header className="pipeline-column-header">
                            <span>{stage}</span>
                            <Badge bg="secondary" pill>{stageOpportunities.length}</Badge>
                        </header>
                        <div className="pipeline-column-body">
                            {stageOpportunities.map((opportunity) => {
                                const overdue = isOverdue(opportunity.dataZamkniecia)

                                return (
                                    <Card
                                        key={opportunity.id}
                                        className={`pipeline-card${overdue ? ' pipeline-card-overdue' : ''}`}
                                        draggable
                                        onClick={() => navigate(getOpportunityEditPath(opportunity))}
                                        onDragStart={() => setDraggedOpportunityId(opportunity.id ?? null)}
                                        onDragEnd={() => setDraggedOpportunityId(null)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(event) => {
                                            if (event.key === 'Enter' || event.key === ' ') {
                                                event.preventDefault()
                                                navigate(getOpportunityEditPath(opportunity))
                                            }
                                        }}
                                    >
                                        <Card.Body>
                                            <div className="pipeline-card-meta">
                                                <span>{opportunity.id}</span>
                                                <span className={overdue ? 'pipeline-date-overdue' : ''}>{formatDate(opportunity.dataZamkniecia)}</span>
                                            </div>
                                            <Card.Title className="pipeline-card-title">{opportunity.klient}</Card.Title>
                                            <div className="pipeline-card-row"><span>Produkt</span><strong>{opportunity.produkt}</strong></div>
                                            <div className="pipeline-card-row"><span>Kwota umowy</span><strong>{formatAmount(opportunity.wartosc)}</strong></div>
                                        </Card.Body>
                                    </Card>
                                )
                            })}
                            {stageOpportunities.length === 0 && <div className="pipeline-empty">Upuść tutaj szansę</div>}
                        </div>
                    </section>
                ))}
            </div>
        </Container>
    )
}
