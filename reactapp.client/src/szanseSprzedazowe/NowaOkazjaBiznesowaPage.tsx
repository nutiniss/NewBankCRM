import { useState, type ReactNode } from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const products = ['Kredyt obrotowy', 'Kredyt inwestycyjny', 'Leasing', 'Finansowanie floty', 'Gwarancja bankowa']
const transactionTypes = ['Nowa sprzedaż', 'Dosprzedaż', 'Odnowienie', 'Refinansowanie']
const currencies = ['EUR', 'PLN', 'USD', 'GBP']
const banks = ['Bank Alfa', 'Bank Beta', 'Bank Gamma', 'Bank Delta']
const probabilities = ['10%', '25%', '50%', '75%', '90%']
const priorities = ['Niski', 'Średni', 'Wysoki']
const statuses = ['Nowy', 'W toku', 'Oczekuje na decyzję', 'Zamknięty']
const riskLevels = ['Niski', 'Średni', 'Wysoki']
const employees = ['Paulina Kowalska', 'Anna Kowalska', 'Marlena Chrobak', 'Sławomir Sroka']
const contacts = ['Jan Nowak', 'Katarzyna Zielińska', 'Michał Wiśniewski', 'Agnieszka Lewandowska']
const customers = ['Alfa Sp. z o.o.', 'Beta Manufacturing S.A.', 'Centrum Logistyczne Gamma', 'Delta Trade Sp. z o.o.']
const cases = ['Aktualizacja danych rejestrowych', 'Wniosek kredytowy 02/2026', 'Reklamacja opłaty za przelew']
const meetings = ['Omówienie potrzeb finansowych', 'Prezentacja oferty leasingowej', 'Negocjacje warunków kredytu']
const stages = ['Przedstawienie oferty', 'Dokumentacja', 'Przekazanie do opinii', 'Decyzja', 'Negocjacje', 'Zamknięcie']

type SectionProps = { title: string; icon: string; children: ReactNode; className?: string }
type RelatedObjectRowProps = { id: string; label: string; placeholder: string; options: string[] }

const Section = ({ title, icon, children, className = '' }: SectionProps) => (
    <Card className={`meeting-section-card h-100 ${className}`.trim()}>
        <Card.Body>
            <div className="meeting-section-header">
                <div className="meeting-section-title"><span className="meeting-section-icon" aria-hidden="true">{icon}</span><h2>{title}</h2></div>
                <span className="meeting-section-info" aria-label={`Informacje o sekcji ${title}`}>ⓘ</span>
            </div>
            {children}
        </Card.Body>
    </Card>
)

const RelatedObjectRow = ({ id, label, placeholder, options }: RelatedObjectRowProps) => (
    <div className="meeting-related-row">
        <Form.Check className="meeting-related-check" type="checkbox" id={`${id}Enabled`} aria-label={`Powiąż: ${label}`} />
        <div className="meeting-related-label">{label}</div>
        <Form.Select id={id} defaultValue="" aria-label={label}>
            <option value="" disabled>{placeholder}</option>
            {options.map((option) => <option key={option}>{option}</option>)}
        </Form.Select>
    </div>
)

export const NowaOkazjaBiznesowa = () => {
    const [activeStage, setActiveStage] = useState(stages[0])

    return (
        <Container fluid className="new-meeting-page pb-4">
        <Form>
            <div className="new-opportunity-toolbar mb-4">
                <h1 className="new-opportunity-title mb-0">Dodaj szansę sprzedażową</h1>
                <div className="new-opportunity-actions"><Button variant="info" className="me-2">Anuluj</Button><Button variant="primary">Zapisz</Button></div>
            </div>

            <div className="opportunity-stage-bar mb-4" aria-label="Etapy procesu sprzedaży">
                {stages.map((stage) => (
                    <button
                        key={stage}
                        type="button"
                        className={`opportunity-stage ${activeStage === stage ? 'active' : ''}`}
                        aria-pressed={activeStage === stage}
                        onClick={() => setActiveStage(stage)}
                    >
                        {stage}
                    </button>
                ))}
            </div>

            <Row className="g-4 align-items-stretch">
                <Col xl={4} lg={6}>
                    <div className="meeting-stack">
                        <Section title="Dane podstawowe" icon="☷">
                            <Row className="g-3">
                                <Col xs={12}><Form.Group controlId="opportunityCustomer"><Form.Label>Podmiot/Grupa *</Form.Label><Form.Select defaultValue=""><option value="" disabled>Wybierz podmiot</option>{customers.map((customer) => <option key={customer}>{customer}</option>)}</Form.Select></Form.Group></Col>
                                <Col xs={12}><Form.Group controlId="opportunityProduct"><Form.Label>Produkt *</Form.Label><div className="opportunity-inline-action"><Form.Select defaultValue=""><option value="" disabled>Wybierz produkt</option>{products.map((product) => <option key={product}>{product}</option>)}</Form.Select><Button variant="primary">Dodaj produkt</Button></div></Form.Group></Col>
                                <Col sm={6}><Form.Group controlId="opportunityTransactionType"><Form.Label>Typ transakcji *</Form.Label><Form.Select defaultValue="Nowa sprzedaż">{transactionTypes.map((type) => <option key={type}>{type}</option>)}</Form.Select></Form.Group></Col>
                                <Col sm={6}><Form.Group controlId="opportunityCurrency"><Form.Label>Waluta umowy *</Form.Label><Form.Select defaultValue="EUR">{currencies.map((currency) => <option key={currency}>{currency}</option>)}</Form.Select></Form.Group></Col>
                                <Col sm={6}><Form.Group controlId="opportunityAmountCurrency"><Form.Label>Kwota umowy w walucie *</Form.Label><Form.Control type="number" defaultValue="500000" /></Form.Group></Col>
                                <Col sm={6}><Form.Group controlId="opportunityAmountPln"><Form.Label>Kwota umowy (PLN)</Form.Label><Form.Control type="text" defaultValue="2 315 350,00" readOnly /></Form.Group></Col>
                                <Col sm={6}><Form.Check className="meeting-check" type="checkbox" id="opportunityRenewal" label="Odnowienie" /></Col>
                                <Col sm={6}><Form.Check className="meeting-check" type="checkbox" id="opportunityRefinancing" label="Refinansowanie" defaultChecked /></Col>
                                <Col xs={12}><Form.Group controlId="opportunityRefinancingBank"><Form.Label>Refinansowanie - bank *</Form.Label><Form.Select defaultValue=""><option value="" disabled>Wybierz bank</option>{banks.map((bank) => <option key={bank}>{bank}</option>)}</Form.Select></Form.Group></Col>
                                <Col sm={6} className="opportunity-align-bottom"><Form.Group controlId="opportunityExpectedSignDate"><Form.Label>Przewidywana data podpisania umowy *</Form.Label><Form.Control type="date" /></Form.Group></Col>
                                <Col sm={6} className="opportunity-align-bottom"><Form.Group controlId="opportunityProbability"><Form.Label>Prawdopodobieństwo *</Form.Label><Form.Select defaultValue=""><option value="" disabled>Wybierz</option>{probabilities.map((probability) => <option key={probability}>{probability}</option>)}</Form.Select></Form.Group></Col>
                                <Col sm={6}><Form.Group controlId="opportunityCompetitors"><Form.Label>Konkurujące banki</Form.Label><Form.Select defaultValue=""><option value="" disabled>Wybierz</option>{banks.map((bank) => <option key={bank}>{bank}</option>)}</Form.Select></Form.Group></Col>
                                <Col sm={6}><Form.Group controlId="opportunityIncome"><Form.Label>Planowany dochód (PLN)</Form.Label><Form.Control type="number" /></Form.Group></Col>
                                <Col sm={6} className="opportunity-align-bottom"><Form.Check className="meeting-check" type="checkbox" id="opportunityJoint" label="Szansa wspólna" /></Col>
                                <Col sm={6}><Form.Group controlId="opportunityAuthor"><Form.Label>Autor</Form.Label><Form.Select defaultValue="Paulina Kowalska">{employees.map((employee) => <option key={employee}>{employee}</option>)}</Form.Select></Form.Group></Col>
                            </Row>
                        </Section>                       
                    </div>
                </Col>

                <Col xl={4} lg={6}>
                    <div className="meeting-stack">
                        <Section title="Dane szczegółowe" icon="◎">
                            <Row className="g-3">
                                <Col sm={6}><Form.Group controlId="opportunityPriority"><Form.Label>Priorytet</Form.Label><Form.Select defaultValue="Średni">{priorities.map((priority) => <option key={priority}>{priority}</option>)}</Form.Select></Form.Group></Col>
                                <Col sm={6}><Form.Group controlId="opportunityDecisionLevel"><Form.Label>Poziom decyzyjny</Form.Label><Form.Select defaultValue=""><option value="" disabled>Wybierz</option><option>Zarząd</option><option>Dyrektor finansowy</option><option>Właściciel</option></Form.Select></Form.Group></Col>
                                <Col sm={6}><Form.Group controlId="opportunityMargin"><Form.Label>Planowana marża (%)</Form.Label><Form.Control type="number" step="0.01" /></Form.Group></Col>
                                <Col sm={6}><Form.Group controlId="opportunityCommission"><Form.Label>Prowizja (PLN)</Form.Label><Form.Control type="number" /></Form.Group></Col>
                                <Col sm={6}><Form.Group controlId="opportunityTenor"><Form.Label>Tenor (w miesiącach)</Form.Label><Form.Control type="number" /></Form.Group></Col>
                                <Col sm={6}><Form.Group controlId="opportunityLiquidityCost"><Form.Label>Koszt płynności (%)</Form.Label><Form.Control type="number" step="0.01" /></Form.Group></Col>
                                <Col sm={6}><Form.Group controlId="opportunityRoe"><Form.Label>ROE szacowane (%)</Form.Label><Form.Control type="number" step="0.01" /></Form.Group></Col>
                                <Col sm={6}><Form.Group controlId="opportunityProjectName"><Form.Label>Nazwa projektu</Form.Label><Form.Control type="text" /></Form.Group></Col>
                                <Col sm={6} className="opportunity-align-bottom"><Form.Check className="meeting-check" type="checkbox" id="opportunityConsortium" label="Konsorcjum" /></Col>
                                <Col sm={6}><Form.Group controlId="opportunityCollateral"><Form.Label>Potencjalne zabezpieczenia</Form.Label><Form.Select defaultValue=""><option value="" disabled>Wybierz</option><option>Hipoteka</option><option>Gwarancja</option><option>Cesja należności</option></Form.Select></Form.Group></Col>
                                <Col xs={12}><Form.Group controlId="opportunityLaunchSchedule"><Form.Label>Harmonogram uruchomienia</Form.Label><Form.Select defaultValue=""><option value="" disabled>Wybierz harmonogram</option><option>Jednorazowo</option><option>Transze miesięczne</option><option>Transze kwartalne</option></Form.Select></Form.Group></Col>
                            </Row>
                        </Section>
                        <Section title="Załączniki" icon="⇪"><div className="meeting-upload-box"><div className="meeting-upload-icon" aria-hidden="true">⇪</div><h3>Dodaj załączniki</h3><p>Dołącz dokumentację produktu, analizy, ofertę lub materiały od klienta.</p><Form.Group controlId="opportunityAttachments"><Form.Control type="file" multiple /></Form.Group></div></Section>
                    </div>
                </Col>

                <Col xl={4}>
                    <div className="meeting-stack">
                        <Section title="Opis szansy" icon="✎"><Form.Group controlId="opportunityDescription"><Form.Label>Opis szansy</Form.Label><Form.Control as="textarea" rows={6} maxLength={5000} placeholder="0/5000" /></Form.Group></Section>
                        <Section title="Parametry wniosku" icon="☑"><Row className="g-3"><Col sm={6} className="opportunity-align-bottom"><Form.Group controlId="opportunityApplicationDate"><Form.Label>Data przyjęcia wniosku</Form.Label><Form.Control type="date" /></Form.Group></Col><Col sm={6}><Form.Group controlId="opportunityApplicationSendDate"><Form.Label>Planowana data wysyłki wniosku</Form.Label><Form.Control type="date" /></Form.Group></Col><Col sm={6}><Form.Group controlId="opportunityStatus"><Form.Label>Status</Form.Label><Form.Select defaultValue="W toku">{statuses.map((status) => <option key={status}>{status}</option>)}</Form.Select></Form.Group></Col><Col sm={6}><Form.Group controlId="opportunityForecast"><Form.Label>Forecast/Backup</Form.Label><Form.Select defaultValue=""><option value="" disabled>Wybierz</option><option>Forecast</option><option>Backup</option></Form.Select></Form.Group></Col><Col sm={6}><Form.Group controlId="opportunityFastTrack"><Form.Label>FastTrack</Form.Label><Form.Select defaultValue=""><option value="" disabled>Wybierz</option><option>Tak</option><option>Nie</option></Form.Select></Form.Group></Col><Col sm={6}><Form.Group controlId="opportunityRisk"><Form.Label>Poziom ryzyka</Form.Label><Form.Select defaultValue=""><option value="" disabled>Wybierz</option>{riskLevels.map((risk) => <option key={risk}>{risk}</option>)}</Form.Select></Form.Group></Col></Row></Section>
                        <Section title="Powiązane obiekty" icon="⧉"><div className="meeting-related-list"><RelatedObjectRow id="opportunityRelatedCustomer" label="Klient" placeholder="Wybierz klienta" options={customers} /><RelatedObjectRow id="opportunityRelatedContact" label="Osoba kontaktowa" placeholder="Wybierz osobę" options={contacts} /><RelatedObjectRow id="opportunityRelatedCase" label="Sprawa" placeholder="Wybierz sprawę" options={cases} /><RelatedObjectRow id="opportunityRelatedMeeting" label="Spotkanie" placeholder="Wybierz spotkanie" options={meetings} /></div></Section>
                    </div>
                </Col>
            </Row>
        </Form>
        </Container>
    )
}
