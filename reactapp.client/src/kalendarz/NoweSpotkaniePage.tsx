import { useState, type ReactNode } from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

const meetingGoals = [
    'Umówienie spotkania',
    'Sprzedaż',
    'Obsługa posprzedażowa',
    'Nawiązanie relacji',
    'Negocjacje',
]

const salesOpportunities = [
    'Finansowanie floty samochodowej',
    'Kredyt inwestycyjny dla Alfa Sp. z o.o.',
    'Pakiet rachunków premium',
]

const cases = [
    'Aktualizacja danych rejestrowych',
    'Reklamacja opłaty za przelew',
    'Wniosek o zmianę limitu',
]

const meetings = [
    'Omówienie potrzeb finansowych',
    'Negocjacje warunków kredytu',
    'Prezentacja oferty leasingowej',
]

const bankEmployees = [
    'Anna Kowalska',
    'Marlena Chrobak',
    'Sławomir Sroka',
    'Violetta Chmielewska',
    'Piotr Zawisza',
]

const reminderOptions = ['Brak', 'Godzina Przed', 'Dzień Przed']

const companies = [
    'Alfa Sp. z o.o.',
    'Beta Manufacturing S.A.',
    'Centrum Logistyczne Gamma',
    'Delta Trade Sp. z o.o.',
]

const clientContacts = [
    'Jan Nowak',
    'Katarzyna Zielińska',
    'Michał Wiśniewski',
    'Agnieszka Lewandowska',
]

const topics = [
    'Analiza potrzeb',
    'Warunki finansowania',
    'Zabezpieczenia',
    'Harmonogram decyzji',
    'Dokumenty klienta',
]

const products = [
    'Kredyt obrotowy',
    'Kredyt inwestycyjny',
    'Leasing',
    'Rachunek firmowy',
    'Terminal płatniczy',
]

type SectionProps = {
    title: string
    icon: string
    children: ReactNode
    className?: string
}

type RelatedObjectRowProps = {
    id: string
    label: string
    placeholder: string
    options: string[]
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

const RelatedObjectRow = ({ id, label, placeholder, options }: RelatedObjectRowProps) => (
    <div className="meeting-related-row">
        <Form.Check className="meeting-related-check" type="checkbox" id={`${id}Enabled`} aria-label={`Powiąż: ${label}`} />
        <div className="meeting-related-label">{label}</div>
        <Form.Select id={id} defaultValue="" aria-label={label}>
            <option value="" disabled>{placeholder}</option>
            {options.map((option) => (
                <option key={option}>{option}</option>
            ))}
        </Form.Select>
    </div>
)

export const NoweSpotkanie = () => {
    const [selectedReminder, setSelectedReminder] = useState(reminderOptions[0])
    return (
        <Container fluid className="new-meeting-page pb-4">
            <Form>
                <div className="new-meeting-toolbar mb-4">
                    <div>                        
                        <h1 className="new-meeting-eyebrow mb-0">Dodaj nowe spotkanie</h1>
                    </div>
                    <div className="new-meeting-actions">
                        <Button variant="info" className="me-2">Anuluj</Button>
                        <Button variant="primary">Zapisz spotkanie</Button>
                    </div>
                </div>

                <Row className="g-4 align-items-stretch">
                    <Col xl={4} lg={5}>
                        <Section title="Szczegóły spotkania" icon="☷">
                            <Row className="g-3">
                                <Col xs={12}>
                                    <Form.Group controlId="meetingType">
                                        <Form.Label>Typ</Form.Label>
                                        <Form.Select defaultValue="Spotkanie">
                                            <option>Spotkanie</option>
                                            <option>Rozmowa telefoniczna</option>
                                            <option>Spotkanie wewnętrzne</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col xs={12}>
                                    <Form.Check className="meeting-check" type="checkbox" id="meetingAllDay" label="Spotkanie całodniowe" />
                                </Col>
                                <Col sm={6}>
                                    <Form.Group controlId="meetingDateFrom">
                                        <Form.Label>Data od</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col sm={6}>
                                    <Form.Group controlId="meetingTimeFrom">
                                        <Form.Label>Godzina od</Form.Label>
                                        <Form.Control type="time" />
                                    </Form.Group>
                                </Col>
                                <Col sm={6}>
                                    <Form.Group controlId="meetingDateTo">
                                        <Form.Label>Data do</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col sm={6}>
                                    <Form.Group controlId="meetingTimeTo">
                                        <Form.Label>Godzina do</Form.Label>
                                        <Form.Control type="time" />
                                    </Form.Group>
                                </Col>
                                <Col sm={6}>
                                    <Form.Group controlId="meetingStatus">
                                        <Form.Label>Status</Form.Label>
                                        <Form.Select defaultValue="Zaplanowane">
                                            <option>Zaplanowane</option>
                                            <option>Zakończone</option>
                                            <option>Anulowane</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col sm={6}>
                                    <Form.Group controlId="meetingPriority">
                                        <Form.Label>Priorytet</Form.Label>
                                        <Form.Select defaultValue="Średni">
                                            <option>Niski</option>
                                            <option>Średni</option>
                                            <option>Wysoki</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col sm={6}>
                                    <Form.Check className="meeting-check" type="checkbox" id="meetingConfidential" label="Poufne" />
                                </Col>
                                <Col sm={6}>
                                    <Form.Check className="meeting-check" type="checkbox" id="meetingRecurring" label="Cykliczność" />
                                </Col>
                                <Col xs={12}>
                                    <Form.Label>Przypomnienie</Form.Label>
                                    <ButtonGroup className="meeting-reminder-group" aria-label="Wybór przypomnienia">
                                        {reminderOptions.map((reminder, index) => (
                                            <ToggleButton
                                                key={reminder}
                                                id={`meetingReminder${index}`}
                                                type="radio"
                                                variant="outline-primary"
                                                name="meetingReminder"
                                                value={reminder}
                                                checked={selectedReminder === reminder}
                                                onChange={(event) => setSelectedReminder(event.currentTarget.value)}
                                            >
                                                {reminder}
                                            </ToggleButton>
                                        ))}
                                    </ButtonGroup>
                                </Col>
                                <Col sm={6}>
                                    <Form.Group controlId="meetingPlace">
                                        <Form.Label>Miejsce</Form.Label>
                                        <Form.Select defaultValue="Bank">
                                            <option>Bank</option>
                                            <option>Siedziba klienta</option>
                                            <option>Inne</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col sm={6}>
                                    <Form.Group controlId="meetingInitiator">
                                        <Form.Label>Inicjator</Form.Label>
                                        <Form.Select defaultValue="Bank">
                                            <option>Bank</option>
                                            <option>Klient</option>
                                            <option>Agent</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col xs={12}>
                                    <Form.Group controlId="meetingLocation">
                                        <Form.Label>Lokalizacja</Form.Label>
                                        <Form.Control type="text" placeholder="Wpisz adres, salę lub link" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Section>
                    </Col>

                    <Col xl={4} lg={7}>
                        <div className="meeting-stack">
                            <Section title="Temat i załączniki" icon="✎">
                                <Tabs defaultActiveKey="topic" id="meeting-topic-tabs" className="meeting-tabs mb-3">
                                    <Tab eventKey="topic" title="Temat">
                                        <Row className="g-3">
                                            <Col xs={12}>
                                                <Form.Group controlId="meetingGoal">
                                                    <Form.Label>Cel</Form.Label>
                                                    <Form.Select multiple aria-label="Wybierz cele spotkania">
                                                        {meetingGoals.map((goal) => (
                                                            <option key={goal}>{goal}</option>
                                                        ))}
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={12}>
                                                <Form.Group controlId="meetingSubject">
                                                    <Form.Label>Temat</Form.Label>
                                                    <Form.Control type="text" placeholder="Temat spotkania" />
                                                </Form.Group>
                                            </Col>
                                            <Col xs={12}>
                                                <Form.Group controlId="meetingDescription">
                                                    <Form.Label>Treść</Form.Label>
                                                    <Form.Control as="textarea" rows={6} placeholder="Opisz zakres rozmowy" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Tab>
                                    <Tab eventKey="attachments" title="Załączniki">
                                        <div className="meeting-upload-box">
                                            <div className="meeting-upload-icon" aria-hidden="true">⇪</div>
                                            <h3>Dodaj załączniki</h3>
                                            <p>Wgraj agendę, notatki lub dokumenty klienta powiązane ze spotkaniem.</p>
                                            <Form.Group controlId="meetingAttachments">
                                                <Form.Control type="file" multiple />
                                            </Form.Group>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </Section>

                            <Section title="Powiązane obiekty" icon="⧉">
                                <div className="meeting-related-list">
                                    <RelatedObjectRow id="meetingOpportunity" label="Szansa sprzedażowa" placeholder="Wybierz szansę sprzedażową" options={salesOpportunities} />
                                    <RelatedObjectRow id="meetingCase" label="Sprawa" placeholder="Wybierz sprawę" options={cases} />
                                    <RelatedObjectRow id="meetingRelatedMeeting" label="Inne spotkanie" placeholder="Wybierz spotkanie" options={meetings} />
                                </div>
                            </Section>
                        </div>
                    </Col>

                    <Col xl={4}>
                        <div className="meeting-stack">
                            <Section title="Uczestnicy" icon="♙">
                                <h3 className="meeting-subsection-title">Uczestnicy - Bank</h3>
                                <Row className="g-3">
                                    <Col xs={12}>
                                        <Form.Group controlId="meetingOrganizer">
                                            <Form.Label>Organizator</Form.Label>
                                            <Form.Select defaultValue="Anna Kowalska">
                                                {bankEmployees.map((employee) => (
                                                    <option key={employee}>{employee}</option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12}>
                                        <Form.Group controlId="meetingBankParticipants">
                                            <Form.Label>Uczestnicy</Form.Label>
                                            <Form.Select multiple aria-label="Wybierz uczestników ze strony banku">
                                                {bankEmployees.map((employee) => (
                                                    <option key={employee}>{employee}</option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <hr />
                                <h3 className="meeting-subsection-title">Uczestnicy - Klient</h3>
                                <Row className="g-3">
                                    <Col xs={12}>
                                        <Form.Group controlId="meetingCompany">
                                            <Form.Label>Firma</Form.Label>
                                            <Form.Select defaultValue="">
                                                <option value="" disabled>Wybierz firmę</option>
                                                {companies.map((company) => (
                                                    <option key={company}>{company}</option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12}>
                                        <Form.Group controlId="meetingClientParticipants">
                                            <Form.Label>Uczestnicy</Form.Label>
                                            <Form.Select multiple aria-label="Wybierz uczestników klienta">
                                                {clientContacts.map((contact) => (
                                                    <option key={contact}>{contact}</option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Section>

                            <Section title="Podsumowanie" icon="✓">
                                <Row className="g-3">
                                    <Col xs={12}>
                                        <Form.Group controlId="meetingSummary">
                                            <Form.Label>Przebieg spotkania</Form.Label>
                                            <Form.Control as="textarea" rows={4} placeholder="Najważniejsze ustalenia i przebieg rozmowy" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} xl={12} xxl={6}>
                                        <Form.Group controlId="meetingTopics">
                                            <Form.Label>Podjęte tematy</Form.Label>
                                            <Form.Select multiple aria-label="Wybierz podjęte tematy">
                                                {topics.map((topic) => (
                                                    <option key={topic}>{topic}</option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} xl={12} xxl={6}>
                                        <Form.Group controlId="meetingProducts">
                                            <Form.Label>Produkty</Form.Label>
                                            <Form.Select multiple aria-label="Wybierz produkty">
                                                {products.map((product) => (
                                                    <option key={product}>{product}</option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12}>
                                        <Form.Group controlId="meetingResult">
                                            <Form.Label>Rezultat</Form.Label>
                                            <Form.Select defaultValue="">
                                                <option value="" disabled>Wybierz rezultat</option>
                                                <option>Zakończone sprzedażą</option>
                                                <option>Kolejne spotkanie</option>
                                                <option>Brak</option>
                                                <option>Nie dotyczy</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <hr />
                                <h3 className="meeting-subsection-title">Następny kontakt</h3>
                                <Row className="g-3">
                                    <Col sm={6}>
                                        <Form.Group controlId="nextContactType">
                                            <Form.Label>Typ</Form.Label>
                                            <Form.Select defaultValue="Spotkanie">
                                                <option>Spotkanie</option>
                                                <option>Rozmowa telefoniczna</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group controlId="nextContactDate">
                                            <Form.Label>Data</Form.Label>
                                            <Form.Control type="date" />
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
