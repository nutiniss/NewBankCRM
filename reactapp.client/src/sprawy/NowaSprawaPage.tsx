import type { ReactNode } from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const caseTypes = ['Reklamacja', 'Wydanie dokumentacji', 'Założenie nowego konta', 'Wydanie karty', 'Zmiana danych firmowych', 'Dyspozycja operacyjna']
const priorities = ['Niski', 'Średni', 'Wysoki', 'Krytyczny']
const statuses = ['Nowa', 'W analizie', 'Oczekuje na klienta', 'Oczekuje na jednostkę banku', 'Do akceptacji', 'Zamknięta']
const channels = ['Doradca', 'Oddział', 'Bankowość internetowa', 'Telefon', 'E-mail', 'Korespondencja papierowa']
const categories = ['Obsługa rachunków', 'Karty i płatności', 'Dokumentacja bankowa', 'Reklamacje i spory', 'Onboarding klienta', 'Uprawnienia i pełnomocnictwa']
const customers = ['Alfa Sp. z o.o.', 'Beta Manufacturing S.A.', 'Centrum Logistyczne Gamma', 'Delta Trade Sp. z o.o.']
const contacts = ['Jan Nowak', 'Katarzyna Zielińska', 'Michał Wiśniewski', 'Agnieszka Lewandowska']
const bankUnits = ['Centrum Obsługi Klienta Firmowego', 'Back Office Rachunków', 'Departament Kart', 'Zespół Reklamacji', 'Compliance/KYC', 'Dokumentacja Kredytowa']
const products = ['Rachunek bieżący', 'Karta firmowa', 'Kredyt obrotowy', 'Kredyt inwestycyjny', 'Leasing', 'Bankowość internetowa']
const slaOptions = ['4 godziny', '1 dzień roboczy', '3 dni robocze', '7 dni roboczych', '14 dni kalendarzowych', '30 dni kalendarzowych']
const riskFlags = ['Skarga formalna', 'Ryzyko reputacyjne', 'Ryzyko AML/KYC', 'Wymaga autoryzacji', 'Klient VIP', 'Termin ustawowy']

type SectionProps = {
    title: string
    icon: string
    children: ReactNode
    className?: string
}

const Section = ({ title, icon, children, className = '' }: SectionProps) => (
    <Card className={`meeting-section-card h-100 ${className}`.trim()}>
        <Card.Body>
            <div className="meeting-section-header">
                <div className="meeting-section-title">
                    <span className="meeting-section-icon" aria-hidden="true">{icon}</span>
                    <h2>{title}</h2>
                </div>
                <span className="meeting-section-info" aria-label={`Informacje o sekcji ${title}`}>ⓘ</span>
            </div>
            {children}
        </Card.Body>
    </Card>
)

export const NowaSprawa = () => {
    return (
        <Container fluid className="new-meeting-page pb-4">
            <Form>
                <div className="new-meeting-toolbar mb-4">
                    <div>
                        <h1 className="new-meeting-eyebrow mb-0">Dodaj sprawę</h1>
                    </div>
                    <div className="new-meeting-actions">
                        <Button variant="info" className="me-2">Anuluj</Button>
                        <Button variant="primary">Zapisz sprawę</Button>
                    </div>
                </div>

                <Row className="g-4 align-items-stretch">
                    <Col xl={4} lg={6}>
                        <div className="meeting-stack">
                            <Section title="Identyfikacja sprawy" icon="☷">
                                <Row className="g-3">
                                    <Col xs={12}>
                                        <Form.Group controlId="caseTitle">
                                            <Form.Label>Tytuł sprawy *</Form.Label>
                                            <Form.Control type="text" placeholder="np. Reklamacja opłaty za przelew" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group controlId="caseType">
                                            <Form.Label>Typ sprawy *</Form.Label>
                                            <Form.Select defaultValue="">
                                                <option value="" disabled>Wybierz typ</option>
                                                {caseTypes.map((type) => <option key={type}>{type}</option>)}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group controlId="caseCategory">
                                            <Form.Label>Kategoria biznesowa *</Form.Label>
                                            <Form.Select defaultValue="">
                                                <option value="" disabled>Wybierz kategorię</option>
                                                {categories.map((category) => <option key={category}>{category}</option>)}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group controlId="casePriority">
                                            <Form.Label>Priorytet</Form.Label>
                                            <Form.Select defaultValue="Średni">{priorities.map((priority) => <option key={priority}>{priority}</option>)}</Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group controlId="caseStatus">
                                            <Form.Label>Status</Form.Label>
                                            <Form.Select defaultValue="Nowa">{statuses.map((status) => <option key={status}>{status}</option>)}</Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group controlId="caseChannel">
                                            <Form.Label>Kanał zgłoszenia</Form.Label>
                                            <Form.Select defaultValue="Doradca">{channels.map((channel) => <option key={channel}>{channel}</option>)}</Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group controlId="caseReceivedDate">
                                            <Form.Label>Data wpływu</Form.Label>
                                            <Form.Control type="date" />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12}>
                                        <Form.Group controlId="caseDescription">
                                            <Form.Label>Opis zgłoszenia *</Form.Label>
                                            <Form.Control as="textarea" rows={5} maxLength={5000} placeholder="Opisz potrzeby klienta, oczekiwany rezultat i najważniejsze ustalenia." />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Section>
                        </div>
                    </Col>

                    <Col xl={4} lg={6}>
                        <div className="meeting-stack">
                            <Section title="Klient i relacje" icon="◉">
                                <Row className="g-3">
                                    <Col xs={12}>
                                        <Form.Group controlId="caseCustomer">
                                            <Form.Label>Podmiot / grupa *</Form.Label>
                                            <Form.Select defaultValue="">
                                                <option value="" disabled>Wybierz klienta</option>
                                                {customers.map((customer) => <option key={customer}>{customer}</option>)}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group controlId="caseContact">
                                            <Form.Label>Osoba kontaktowa</Form.Label>
                                            <Form.Select defaultValue="">
                                                <option value="" disabled>Wybierz osobę</option>
                                                {contacts.map((contact) => <option key={contact}>{contact}</option>)}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group controlId="caseContactPhone">
                                            <Form.Label>Telefon / e-mail</Form.Label>
                                            <Form.Control type="text" placeholder="+48 000 000 000 / e-mail" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group controlId="caseProduct">
                                            <Form.Label>Produkt / usługa</Form.Label>
                                            <Form.Select defaultValue="">
                                                <option value="" disabled>Wybierz produkt</option>
                                                {products.map((product) => <option key={product}>{product}</option>)}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group controlId="caseContractNumber">
                                            <Form.Label>Nr rachunku / umowy / karty</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12}>
                                        <Form.Group controlId="caseCustomerExpectation">
                                            <Form.Label>Oczekiwanie klienta</Form.Label>
                                            <Form.Control as="textarea" rows={4} placeholder="np. zwrot opłaty, przygotowanie zaświadczenia, uruchomienie rachunku, wydanie karty" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Section>

                            <Section title="Dokumenty i zgody" icon="⇪">
                                <Row className="g-3">
                                    <Col sm={6}><Form.Check className="meeting-check" type="checkbox" id="casePowerOfAttorney" label="Zweryfikowano reprezentację" /></Col>
                                    <Col sm={6}><Form.Check className="meeting-check" type="checkbox" id="caseConsent" label="Zgody i dyspozycje " /></Col>
                                    <Col xs={12}>
                                        <div className="meeting-upload-box">
                                            <div className="meeting-upload-icon" aria-hidden="true">⇪</div>
                                            <h3>Dodaj dokumenty</h3>
                                            <p>Dołącz wniosek, pełnomocnictwo, reklamację, korespondencję lub dokumentację do wydania klientowi.</p>
                                            <Form.Group controlId="caseAttachments"><Form.Control type="file" multiple /></Form.Group>
                                        </div>
                                    </Col>
                                </Row>
                            </Section>
                        </div>
                    </Col>

                    <Col xl={4}>
                        <div className="meeting-stack">
                            <Section title="Obsługa i SLA" icon="☑">
                                <Row className="g-3">
                                    <Col sm={6}>
                                        <Form.Group controlId="caseOwner">
                                            <Form.Label>Właściciel sprawy</Form.Label>
                                            <Form.Control type="text" defaultValue="Paulina Kowalska" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group controlId="caseUnit">
                                            <Form.Label>Jednostka realizująca</Form.Label>
                                            <Form.Select defaultValue="">
                                                <option value="" disabled>Wybierz jednostkę</option>
                                                {bankUnits.map((unit) => <option key={unit}>{unit}</option>)}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group controlId="caseSla">
                                            <Form.Label>SLA / termin realizacji</Form.Label>
                                            <Form.Select defaultValue="3 dni robocze">{slaOptions.map((sla) => <option key={sla}>{sla}</option>)}</Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group controlId="caseDueDate">
                                            <Form.Label>Data wymagalności</Form.Label>
                                            <Form.Control type="date" />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12}>
                                        <Form.Group controlId="caseNextStep">
                                            <Form.Label>Następny krok</Form.Label>
                                            <Form.Control as="textarea" rows={3} placeholder="np. przekazać do Back Office, poprosić klienta o dokumenty, przygotować odpowiedź" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Section>

                            <Section title="Ryzyka i zgodność" icon="⚑">
                                <Row className="g-3">
                                    <Col xs={12}>
                                        <Form.Group controlId="caseRiskFlags">
                                            <Form.Label>Flagi kontrolne</Form.Label>
                                            <Form.Select multiple defaultValue={[]}>
                                                {riskFlags.map((flag) => <option key={flag}>{flag}</option>)}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}><Form.Check className="meeting-check" type="checkbox" id="caseComplaintRegister" label="Rejestr reklamacji" /></Col>
                                    <Col sm={6}><Form.Check className="meeting-check" type="checkbox" id="caseLegalDeadline" label="Termin ustawowy" /></Col>
                                    <Col xs={12}>
                                        <Form.Group controlId="caseComplianceNote">
                                            <Form.Label>Notatka compliance / AML / RODO</Form.Label>
                                            <Form.Control as="textarea" rows={3} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Section>
                        </div>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}
