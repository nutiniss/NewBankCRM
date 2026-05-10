import type { ReactNode } from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

type SectionProps = {
    title: string
    icon: string
    children: ReactNode
}

const Section = ({ title, icon, children }: SectionProps) => (
    <Card className="lead-section-card h-100">
        <Card.Body>
            <div className="lead-section-header">
                <div className="lead-section-title">
                    <span className="lead-section-icon" aria-hidden="true">{icon}</span>
                    <h2>{title}</h2>
                </div>
                <span className="lead-section-info" aria-label={`Informacje o sekcji ${title}`}>ⓘ</span>
            </div>
            {children}
        </Card.Body>
    </Card>
)

export const NowyKlientPotencjalny = () => {
    return (
        <Container fluid className="new-lead-page pb-4">
            <Form>
                <div className="new-lead-toolbar mb-4">
                    <div>
                        <p className="text-uppercase text-muted small mb-1">Portfel / Klienci potencjalni</p>
                        <h1 className="new-lead-title mb-0">Dodaj klienta potencjalnego</h1>
                        <p className="text-muted mb-0">Uzupełnij kartę prospekta w układzie zgodnym z widokiem klienta.</p>
                    </div>
                    <div className="new-lead-actions">
                        <Button variant="primary" className="me-2">Dodaj</Button>
                        <Button variant="info">Anuluj</Button>
                    </div>
                </div>

                <Row className="g-4 align-items-stretch">
                    <Col xxl={6} xl={7}>
                        <Section title="Dane podstawowe" icon="↗">
                            <h3 className="lead-subsection-title">Informacje o podmiocie</h3>
                            <Row className="g-3">
                                <Col md={8}>
                                    <Form.Group controlId="leadCompanyName">
                                        <Form.Label>Nazwa</Form.Label>
                                        <Form.Control type="text" placeholder="np. Accenture Sp. z o.o." />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group controlId="leadShortName">
                                        <Form.Label>Nazwa skrócona</Form.Label>
                                        <Form.Control type="text" placeholder="np. Accenture" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group controlId="leadEntityType">
                                        <Form.Label>Typ podmiotu</Form.Label>
                                        <Form.Select defaultValue="">
                                            <option value="" disabled>Wybierz</option>
                                            <option>Klient</option>
                                            <option>Prospekt</option>
                                            <option>Kontrahent</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group controlId="leadMboStatus">
                                        <Form.Label>Status MBO</Form.Label>
                                        <Form.Select defaultValue="">
                                            <option value="" disabled>Wybierz</option>
                                            <option>Pozyskany</option>
                                            <option>W trakcie pozyskania</option>
                                            <option>Nowy</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group controlId="leadCreditworthy">
                                        <Form.Label>Kredytowy</Form.Label>
                                        <Form.Select defaultValue="">
                                            <option value="" disabled>Wybierz</option>
                                            <option>Tak</option>
                                            <option>Nie</option>
                                            <option>Do weryfikacji</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group controlId="leadTaxId">
                                        <Form.Label>Identyfikator podatkowy</Form.Label>
                                        <Form.Control type="text" placeholder="NIP" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group controlId="leadRegistryId">
                                        <Form.Label>Identyfikator rejestrowy</Form.Label>
                                        <Form.Control type="text" placeholder="REGON" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group controlId="leadKrs">
                                        <Form.Label>Numer wpisu do ewidencji</Form.Label>
                                        <Form.Control type="text" placeholder="KRS / CEIDG" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group controlId="leadCountry">
                                        <Form.Label>Kraj</Form.Label>
                                        <Form.Select defaultValue="Polska">
                                            <option>Polska</option>
                                            <option>Czechy</option>
                                            <option>Niemcy</option>
                                            <option>Słowacja</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group controlId="leadLei">
                                        <Form.Label>Kod LEI i data ważności</Form.Label>
                                        <Form.Control type="text" placeholder="259400... (20-12-2027)" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group controlId="leadWebsite">
                                        <Form.Label>Strona www</Form.Label>
                                        <Form.Control type="url" placeholder="https://" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <hr />
                            <h3 className="lead-subsection-title">Grupa kapitałowa</h3>
                            <Row className="g-3">
                                <Col md={8}>
                                    <Form.Group controlId="leadCapitalGroup">
                                        <Form.Label>Nazwa grupy</Form.Label>
                                        <Form.Control type="text" placeholder="np. Grupa Kapitałowa Accenture" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group controlId="leadGroupRole">
                                        <Form.Label>Rola w grupie</Form.Label>
                                        <Form.Select defaultValue="">
                                            <option value="" disabled>Wybierz</option>
                                            <option>Podmiot dominujący</option>
                                            <option>Podmiot zależny</option>
                                            <option>Jednostka samodzielna</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Section>
                    </Col>

                    <Col xxl={6} xl={5}>
                        <Row className="g-4">
                            <Col xs={12}>
                                <Section title="Dane adresowe" icon="⌁">
                                    <Row className="g-3">
                                        <Col md={6} xl={12} xxl={6}>
                                            <Form.Group controlId="leadRegisteredAddress">
                                                <Form.Label>Adres siedziby</Form.Label>
                                                <Form.Control as="textarea" rows={3} placeholder={'Polska, Mazowieckie\n00-121 Warszawa\nul. Sienna 39'} />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6} xl={12} xxl={6}>
                                            <Form.Group controlId="leadBusinessAddress">
                                                <Form.Label>Adres prowadzonej działalności</Form.Label>
                                                <Form.Control as="textarea" rows={3} placeholder={'Polska, Mazowieckie\n00-121 Warszawa\nul. Sienna 39'} />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6} xl={12} xxl={6}>
                                            <Form.Group controlId="leadCorrespondenceAddress">
                                                <Form.Label>Adres korespondencyjny</Form.Label>
                                                <Form.Control as="textarea" rows={3} placeholder={'Polska, Mazowieckie\n00-121 Warszawa\nul. Sienna 39'} />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6} xl={12} xxl={6}>
                                            <Form.Check className="lead-check" type="checkbox" id="leadSameAddress" label="Adres korespondencyjny taki sam jak siedziby" />
                                            <Form.Check className="lead-check" type="checkbox" id="leadForeignAddress" label="Adres zagraniczny" />
                                        </Col>
                                    </Row>
                                </Section>
                            </Col>

                            <Col xs={12}>
                                <Section title="Dane segmentacyjne i sektorowe" icon="↗">
                                    <Row className="g-3">
                                        <Col md={6}>
                                            <Form.Group controlId="leadLegalForm">
                                                <Form.Label>Forma prawna</Form.Label>
                                                <Form.Select defaultValue="">
                                                    <option value="" disabled>Wybierz</option>
                                                    <option>Spółka z ograniczoną odpowiedzialnością</option>
                                                    <option>Spółka akcyjna</option>
                                                    <option>Jednoosobowa działalność gospodarcza</option>
                                                    <option>Spółka komandytowa</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="leadJdgFlag">
                                                <Form.Label>Flaga JDG</Form.Label>
                                                <Form.Select defaultValue="Nie">
                                                    <option>Nie</option>
                                                    <option>Tak</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="leadPkdSection">
                                                <Form.Label>Sekcja PKD głównego</Form.Label>
                                                <Form.Select defaultValue="">
                                                    <option value="" disabled>Wybierz</option>
                                                    <option>J - Informacja i komunikacja</option>
                                                    <option>C - Przetwórstwo przemysłowe</option>
                                                    <option>H - Transport i gospodarka magazynowa</option>
                                                    <option>F - Budownictwo</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="leadMainPkd">
                                                <Form.Label>PKD główne</Form.Label>
                                                <Form.Control type="text" placeholder="72.2 - Doradztwo w zakresie oprogramowania" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="leadSegment">
                                                <Form.Label>Segment klienta</Form.Label>
                                                <Form.Select defaultValue="">
                                                    <option value="" disabled>Wybierz</option>
                                                    <option>VIP</option>
                                                    <option>Premium</option>
                                                    <option>Standard</option>
                                                    <option>Prospekt strategiczny</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="leadCmisStatus">
                                                <Form.Label>Status CMIS</Form.Label>
                                                <Form.Select defaultValue="Aktywny">
                                                    <option>Aktywny</option>
                                                    <option>Nieaktywny</option>
                                                    <option>Do weryfikacji</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Section>
                            </Col>
                        </Row>
                    </Col>

                    <Col xl={4} md={6}>
                        <Section title="Informacje dodatkowe" icon="ⓘ">
                            <Row className="g-3">
                                <Col sm={6} xl={12} xxl={6}>
                                    <Form.Group controlId="leadEmployees">
                                        <Form.Label>Liczba pracowników (rok)</Form.Label>
                                        <Form.Control type="text" placeholder="5000 (2018)" />
                                    </Form.Group>
                                </Col>
                                <Col sm={6} xl={12} xxl={6}>
                                    <Form.Group controlId="leadFoundedAt">
                                        <Form.Label>Data założenia</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col xs={12}>
                                    <Form.Check className="lead-check" type="checkbox" id="leadNotInLiquidation" label="W likwidacji / w upadłości / wykreślony z rejestru: nie dotyczy" />
                                </Col>
                                <Col xs={12}>
                                    <Form.Group controlId="leadLastDataRefresh">
                                        <Form.Label>Ostatnia data pozyskania</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col xs={12}>
                                    <Form.Group controlId="leadNotes">
                                        <Form.Label>Notatki</Form.Label>
                                        <Form.Control as="textarea" rows={4} placeholder="Dodatkowe informacje istotne dla procesu pozyskania" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Section>
                    </Col>

                    <Col xl={4} md={6}>
                        <Section title="Przychody" icon="₿">
                            <Row className="g-3">
                                <Col sm={6} xl={12} xxl={6}>
                                    <Form.Group controlId="leadNetRevenue">
                                        <Form.Label>Przychody netto</Form.Label>
                                        <Form.Control type="number" min="0" step="0.01" placeholder="40 623 487,02" />
                                    </Form.Group>
                                </Col>
                                <Col sm={6} xl={12} xxl={6}>
                                    <Form.Group controlId="leadFiscalYear">
                                        <Form.Label>Rok obrotowy</Form.Label>
                                        <Form.Control type="number" min="1900" max="2100" placeholder="2023" />
                                    </Form.Group>
                                </Col>
                                <Col sm={6} xl={12} xxl={6}>
                                    <Form.Group controlId="leadRevenueSource">
                                        <Form.Label>Źródło</Form.Label>
                                        <Form.Select defaultValue="">
                                            <option value="" disabled>Wybierz</option>
                                            <option>Użytkownik</option>
                                            <option>Sprawozdanie finansowe</option>
                                            <option>System zewnętrzny</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col sm={6} xl={12} xxl={6}>
                                    <Form.Group controlId="leadModifiedAt">
                                        <Form.Label>Data modyfikacji</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col xs={12}>
                                    <Form.Group controlId="leadModifiedBy">
                                        <Form.Label>Osoba modyfikująca</Form.Label>
                                        <Form.Control type="text" placeholder="Wiśniewski Krzysztof" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Section>
                    </Col>

                    <Col xl={4} md={12}>
                        <Section title="Dane finansowe" icon="≋">
                            <Row className="g-3">
                                <Col md={6} xl={12} xxl={6}>
                                    <Form.Group controlId="leadIncomePotential">
                                        <Form.Label>Potencjał dochodowy za 2022</Form.Label>
                                        <Form.Control type="number" min="0" step="0.01" placeholder="30 000 000,00" />
                                    </Form.Group>
                                </Col>
                                <Col md={6} xl={12} xxl={6}>
                                    <Form.Group controlId="leadAcquisitionPotential">
                                        <Form.Label>Potencjał akwizycyjny za 2022</Form.Label>
                                        <Form.Control type="number" min="0" step="0.01" placeholder="42 000 000,00" />
                                    </Form.Group>
                                </Col>
                                <Col md={4} xl={12} xxl={4}>
                                    <Form.Group controlId="leadClientsShare">
                                        <Form.Label>Udział w klientach 1H2023</Form.Label>
                                        <Form.Control type="number" min="0" step="0.01" placeholder="1,3%" />
                                    </Form.Group>
                                </Col>
                                <Col md={4} xl={12} xxl={4}>
                                    <Form.Group controlId="leadIncomeShare">
                                        <Form.Label>Udział w dochodach 1H2023</Form.Label>
                                        <Form.Control type="number" min="0" step="0.01" placeholder="1,4%" />
                                    </Form.Group>
                                </Col>
                                <Col md={4} xl={12} xxl={4}>
                                    <Form.Group controlId="leadCreditShare">
                                        <Form.Label>Udział w kredytach 1H2023</Form.Label>
                                        <Form.Control type="number" min="0" step="0.01" placeholder="0,4%" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Section>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}
