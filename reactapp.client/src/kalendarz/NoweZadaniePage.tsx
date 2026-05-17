import type { ReactNode } from 'react'
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

const taskTypes = [
    'Kontakt z klientem',
    'Przygotowanie dokumentów',
    'Analiza wniosku',
    'Zadanie operacyjne',
    'Follow-up po spotkaniu',
]

const taskGoals = [
    'Uzupełnienie dokumentacji',
    'Przygotowanie oferty',
    'Weryfikacja danych klienta',
    'Obsługa posprzedażowa',
    'Domknięcie kolejnego kroku sprzedaży',
]

const bankEmployees = [
    'Anna Kowalska',
    'Marlena Chrobak',
    'Sławomir Sroka',
    'Violetta Chmielewska',
    'Piotr Zawisza',
]

const companies = [
    'Alfa Sp. z o.o.',
    'Beta Manufacturing S.A.',
    'Centrum Logistyczne Gamma',
    'Delta Trade Sp. z o.o.',
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

const clientContacts = [
    'Jan Nowak',
    'Katarzyna Zielińska',
    'Michał Wiśniewski',
    'Agnieszka Lewandowska',
]

const checklistTemplates = [
    'Wysłanie listy wymaganych dokumentów',
    'Potwierdzenie odbioru od klienta',
    'Weryfikacja kompletności',
    'Przekazanie do analityka',
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

export const NoweZadanie = () => {
    return (
        <Container fluid className="new-meeting-page pb-4">
            <Form>
                <div className="new-task-toolbar mb-4">
                    <div>
                        <h1 className="new-task-title mb-0">Dodaj nowe zadanie</h1>
                    </div>
                    <div className="new-task-actions">
                        <Button variant="info" className="me-2">Anuluj</Button>
                        <Button variant="primary">Zapisz zadanie</Button>
                    </div>
                </div>

                <Row className="g-4 align-items-stretch">
                    <Col xl={4} lg={5}>
                        <Section title="Szczegóły zadania" icon="☷">
                            <Row className="g-3">
                                <Col xs={12}>
                                    <Form.Group controlId="taskName">
                                        <Form.Label>Nazwa zadania</Form.Label>
                                        <Form.Control type="text" placeholder="Np. uzupełnić dokumenty do wniosku" />
                                    </Form.Group>
                                </Col>
                                <Col xs={12}>
                                    <Form.Group controlId="taskType">
                                        <Form.Label>Typ zadania</Form.Label>
                                        <Form.Select defaultValue="">
                                            <option value="" disabled>Wybierz typ</option>
                                            {taskTypes.map((type) => (
                                                <option key={type}>{type}</option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col sm={6}>
                                    <Form.Group controlId="taskPriority">
                                        <Form.Label>Priorytet</Form.Label>
                                        <Form.Select defaultValue="Średni">
                                            <option>Niski</option>
                                            <option>Średni</option>
                                            <option>Wysoki</option>
                                            <option>Krytyczny</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col sm={6}>
                                    <Form.Group controlId="taskStatus">
                                        <Form.Label>Status</Form.Label>
                                        <Form.Select defaultValue="Nowe">
                                            <option>Nowe</option>
                                            <option>W trakcie</option>
                                            <option>Oczekuje na klienta</option>
                                            <option>Zakończone</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col sm={6}>
                                    <Form.Group controlId="taskStartDate">
                                        <Form.Label>Data rozpoczęcia</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col sm={6}>
                                    <Form.Group controlId="taskDueDate">
                                        <Form.Label>Termin realizacji</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col sm={6}>
                                    <Form.Check className="meeting-check" type="checkbox" id="taskConfidential" label="Poufne" />
                                </Col>
                                <Col sm={6}>
                                    <Form.Check className="meeting-check" type="checkbox" id="taskRepeatable" label="Cykliczne" />
                                </Col>
                                <Col xs={12}>
                                    <Form.Label>Przypomnienie</Form.Label>
                                    <ButtonGroup className="meeting-reminder-group" aria-label="Wybór przypomnienia dla zadania">
                                        {['Brak', 'Dzień przed', 'W dniu terminu'].map((reminder, index) => (
                                            <ToggleButton
                                                key={reminder}
                                                id={`taskReminder${index}`}
                                                type="radio"
                                                variant="outline-primary"
                                                name="taskReminder"
                                                value={reminder}
                                                defaultChecked={index === 0}
                                            >
                                                {reminder}
                                            </ToggleButton>
                                        ))}
                                    </ButtonGroup>
                                </Col>
                            </Row>
                        </Section>
                    </Col>

                    <Col xl={4} lg={7}>
                        <div className="meeting-stack">
                            <Section title="Plan realizacji" icon="◎">
                                <Tabs defaultActiveKey="description" id="task-plan-tabs" className="meeting-tabs mb-3">
                                    <Tab eventKey="description" title="Opis">
                                        <Row className="g-3">
                                            <Col xs={12}>
                                                <Form.Group controlId="taskGoal">
                                                    <Form.Label>Cel zadania</Form.Label>
                                                    <Form.Select defaultValue="">
                                                        <option value="" disabled>Wybierz cel</option>
                                                        {taskGoals.map((goal) => (
                                                            <option key={goal}>{goal}</option>
                                                        ))}
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={12}>
                                                <Form.Group controlId="taskDescription">
                                                    <Form.Label>Opis</Form.Label>
                                                    <Form.Control as="textarea" rows={4} placeholder="Opisz zakres prac, oczekiwany rezultat i kontekst klienta" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Tab>
                                    <Tab eventKey="checklist" title="Checklist">
                                        <div className="meeting-related-list">
                                            {checklistTemplates.map((item, index) => (
                                                <Form.Check
                                                    key={item}
                                                    className="meeting-check"
                                                    type="checkbox"
                                                    id={`taskChecklist${index}`}
                                                    label={item}
                                                />
                                            ))}
                                        </div>
                                    </Tab>
                                    <Tab eventKey="attachments" title="Załączniki">
                                        <div className="meeting-upload-box">
                                            <div className="meeting-upload-icon" aria-hidden="true">⇪</div>
                                            <h3>Dodaj materiały do zadania</h3>
                                            <p>Dołącz dokumenty klienta, szablony ofert albo notatki potrzebne do realizacji.</p>
                                            <Button variant="primary">Wybierz pliki</Button>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </Section>

                            <Section title="Powiązania" icon="↔">
                                <div className="meeting-related-list">
                                    <RelatedObjectRow id="taskCompany" label="Klient" placeholder="Wybierz klienta" options={companies} />
                                    <RelatedObjectRow id="taskOpportunity" label="Szansa sprzedażowa" placeholder="Wybierz szansę" options={salesOpportunities} />
                                    <RelatedObjectRow id="taskCase" label="Sprawa" placeholder="Wybierz sprawę" options={cases} />
                                    <RelatedObjectRow id="taskMeeting" label="Spotkanie" placeholder="Wybierz spotkanie" options={meetings} />
                                </div>
                            </Section>
                        </div>
                    </Col>

                    <Col xl={4}>
                        <div className="meeting-stack">
                            <Section title="Odpowiedzialni" icon="☉">
                                <Row className="g-3">
                                    <Col xs={12}>
                                        <Form.Group controlId="taskOwner">
                                            <Form.Label>Właściciel zadania</Form.Label>
                                            <Form.Select defaultValue="">
                                                <option value="" disabled>Wybierz pracownika</option>
                                                {bankEmployees.map((employee) => (
                                                    <option key={employee}>{employee}</option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12}>
                                        <Form.Group controlId="taskObservers">
                                            <Form.Label>Obserwatorzy</Form.Label>
                                            <Form.Select multiple aria-label="Wybierz obserwatorów zadania">
                                                {bankEmployees.map((employee) => (
                                                    <option key={employee}>{employee}</option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12}>
                                        <Form.Group controlId="taskClientContact">
                                            <Form.Label>Kontakt po stronie klienta</Form.Label>
                                            <Form.Select defaultValue="">
                                                <option value="" disabled>Wybierz kontakt</option>
                                                {clientContacts.map((contact) => (
                                                    <option key={contact}>{contact}</option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Section>

                            <Section title="Rezultat i następny krok" icon="✓">
                                <Row className="g-3">
                                    <Col xs={12}>
                                        <Form.Group controlId="taskExpectedResult">
                                            <Form.Label>Oczekiwany rezultat</Form.Label>
                                            <Form.Control as="textarea" rows={3} placeholder="Co powinno być gotowe po zamknięciu zadania?" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6} xl={12} xxl={6}>
                                        <Form.Group controlId="taskNextStep">
                                            <Form.Label>Następny krok</Form.Label>
                                            <Form.Select defaultValue="">
                                                <option value="" disabled>Wybierz działanie</option>
                                                <option>Utwórz spotkanie</option>
                                                <option>Utwórz sprawę</option>
                                                <option>Wyślij wiadomość</option>
                                                <option>Bez kolejnego kroku</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6} xl={12} xxl={6}>
                                        <Form.Group controlId="taskNextStepDate">
                                            <Form.Label>Data następnego kroku</Form.Label>
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
