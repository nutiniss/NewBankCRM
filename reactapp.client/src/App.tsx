import './App.css';
import { ProgressBar, Card, Badge } from 'react-bootstrap';

type SalesOpportunity = {
    klient: string;
    produkt: string;
    etap: string;
    dataZamkniecia: string;
};

type Task = {
    nazwa: string;
    priorytet: 'Wysoki' | 'Średni' | 'Niski';
    termin: string;
};

type Meeting = {
    klient: string;
    dataIGodzina: string;
    tryb: 'Stacjonarnie' | 'Zdalnie';
};

type Offer = {
    tytul: string;
    opis: string;
    obraz: string;
};

const opportunities: SalesOpportunity[] = [
    {
        klient: 'PolSteel Group',
        produkt: 'Kredyt inwestycyjny',
        etap: 'Analiza finansowa',
        dataZamkniecia: '24.04.2026'
    },
    {
        klient: 'Baltic Logistics',
        produkt: 'Leasing floty',
        etap: 'Negocjacje warunków',
        dataZamkniecia: '28.04.2026'
    },
    {
        klient: 'Nova Retail',
        produkt: 'Linia obrotowa',
        etap: 'Decyzja kredytowa',
        dataZamkniecia: '30.04.2026'
    },
    {
        klient: 'EcoChem Solutions',
        produkt: 'Faktoring pełny',
        etap: 'Przygotowanie oferty',
        dataZamkniecia: '05.05.2026'
    }
];

const tasks: Task[] = [
    {
        nazwa: 'Aktualizacja dokumentacji KYC dla PolSteel Group',
        priorytet: 'Wysoki',
        termin: '22.04.2026'
    },
    {
        nazwa: 'Przygotowanie warunków cenowych dla leasingu',
        priorytet: 'Średni',
        termin: '23.04.2026'
    },
    {
        nazwa: 'Weryfikacja zabezpieczeń umowy faktoringowej',
        priorytet: 'Wysoki',
        termin: '25.04.2026'
    }
];

const meetings: Meeting[] = [
    {
        klient: 'PolSteel Group',
        dataIGodzina: '22.04.2026, 10:00',
        tryb: 'Stacjonarnie'
    },
    {
        klient: 'Nova Retail',
        dataIGodzina: '23.04.2026, 14:30',
        tryb: 'Zdalnie'
    },
    {
        klient: 'Baltic Logistics',
        dataIGodzina: '24.04.2026, 09:15',
        tryb: 'Zdalnie'
    }
];

const offers: Offer[] = [
    {
        tytul: 'Kredyt w rachunku bieżącym',
        opis: 'Elastyczne finansowanie bieżących kosztów działalności z limitem dopasowanym do sezonowości przychodów.',
        obraz: '/image/oferta-kredyt-biezacy.svg'
    },
    {
        tytul: 'Kredyt inwestycyjny',
        opis: 'Wsparcie rozwoju firmy dzięki atrakcyjnym warunkom finansowania inwestycji w moce produkcyjne i technologię.',
        obraz: '/image/oferta-kredyt-inwestycyjny.svg'
    },
    {
        tytul: 'Kredyt obrotowy',
        opis: 'Stabilna płynność finansowa przy dynamicznym wzroście sprzedaży i wydłużonych terminach płatności kontrahentów.',
        obraz: '/image/oferta-kredyt-obrotowy.svg'
    },
    {
        tytul: 'Leasing transportu',
        opis: 'Nowoczesna flota bez jednorazowego obciążenia budżetu i z możliwością elastycznej wymiany pojazdów.',
        obraz: '/image/oferta-leasing-transport.svg'
    }
];

const portfolioSummary = {
    aktywni: 16,
    potencjalni: 28
};

const salesSummary = [
    { label: 'Kredyty', value: 38, colorClass: 'bg-color2' },
    { label: 'Leasing', value: 24, colorClass: 'bg-color1' },
    { label: 'Finansowanie handlu', value: 21, colorClass: 'bg-color5' },
    { label: 'Inwestycje', value: 17, colorClass: 'bg-color3' }
];

const pieGradient = `conic-gradient(
    #654767 0% 38%,
    #463c57 38% 62%,
    #e5bbb4 62% 83%,
    #986484 83% 100%
)`;

function App() {
    return (
        <main className="dashboard-page">
            <section className="top-grid">
                <article className="dashboard-panel">
                    <h2 className="panel-title">Wykonanie celu sprzedażowego</h2>
                    <div className="goal-wrapper">
                        <ProgressBar now={64} className="goal-progress" />
                        <span className="goal-value">64%</span>
                    </div>
                </article>

                <article className="dashboard-panel">
                    <h2 className="panel-title">Podsumowanie portfela</h2>
                    <div className="portfolio-metrics">
                        <div>
                            <strong className="metric-value">{portfolioSummary.aktywni}</strong>
                            <p className="metric-label">Aktywni klienci</p>
                        </div>
                        <div>
                            <strong className="metric-value">{portfolioSummary.potencjalni}</strong>
                            <p className="metric-label">Potencjalni klienci</p>
                        </div>
                    </div>
                </article>

                <article className="dashboard-panel">
                    <h2 className="panel-title">Priorytetowe zadania</h2>
                    <ul className="entity-list compact-list">
                        {tasks.map((task) => (
                            <li key={task.nazwa} className="entity-item">
                                <div>
                                    <p className="entity-name">{task.nazwa}</p>
                                    <p className="entity-meta">Termin: {task.termin}</p>
                                </div>
                                <Badge className={`priority-badge priority-${task.priorytet.toLowerCase()}`}>{task.priorytet}</Badge>
                            </li>
                        ))}
                    </ul>
                </article>
            </section>

            <section className="middle-grid">
                <article className="dashboard-panel">
                    <h2 className="panel-title">Szanse sprzedażowe</h2>
                    <ul className="entity-list">
                        {opportunities.map((opportunity) => (
                            <li key={`${opportunity.klient}-${opportunity.produkt}`} className="entity-item with-border">
                                <p className="entity-name">{opportunity.klient}</p>
                                <p className="entity-meta">Produkt: {opportunity.produkt}</p>
                                <p className="entity-meta">Etap: {opportunity.etap}</p>
                                <p className="entity-meta">Planowana data zamknięcia etapu: {opportunity.dataZamkniecia}</p>
                            </li>
                        ))}
                    </ul>
                </article>

                <article className="dashboard-panel">
                    <h2 className="panel-title">Podsumowanie szans sprzedażowych</h2>
                    <div className="chart-layout">
                        <div className="pie-chart" style={{ backgroundImage: pieGradient }} aria-label="Wykres kołowy podsumowania szans" />
                        <ul className="chart-legend">
                            {salesSummary.map((summary) => (
                                <li key={summary.label}>
                                    <span className={`legend-dot ${summary.colorClass}`} />
                                    {summary.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                </article>

                <article className="dashboard-panel">
                    <h2 className="panel-title">Nadchodzące spotkania</h2>
                    <ul className="entity-list compact-list">
                        {meetings.map((meeting) => (
                            <li key={`${meeting.klient}-${meeting.dataIGodzina}`} className="entity-item with-border">
                                <p className="entity-name">{meeting.klient}</p>
                                <p className="entity-meta">Data i godzina: {meeting.dataIGodzina}</p>
                                <p className="entity-meta">Tryb: {meeting.tryb}</p>
                            </li>
                        ))}
                    </ul>
                </article>
            </section>

            <section className="dashboard-panel offers-panel">
                <h2 className="panel-title">Sekcja ofert</h2>
                <div className="offers-grid">
                    {offers.map((offer) => (
                        <Card key={offer.tytul} className="offer-card">
                            <Card.Img variant="top" src={offer.obraz} className="offer-image" />
                            <Card.Body>
                                <Card.Title>{offer.tytul}</Card.Title>
                                <Card.Text>{offer.opis}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default App;
