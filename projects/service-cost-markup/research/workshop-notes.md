# What does a service actually cost vs. what you pay?

## The core question

For services where one skilled person gives you their expertise — how much of what you pay actually goes to the person doing the work, and how much is industry overhead? How has that ratio changed over time? Which professions are getting more detached from the person rendering the service, and which are staying tight?

## The college example (Jason's starting intuition)

A college professor makes ~$150k/year. They teach ~30 students per class. They read from a book and draw on a whiteboard. The actual inputs: one smart person, one room, some chairs, a whiteboard, a book. Back-of-napkin: $200k total cost / 30 students = ~$6,700/year. But college costs WAY more than that. Where's the rest going? Books are inflated, forced campus housing, forced meal plans, administrative bloat, grants, scholarships as bribes, state funding for something you still pay for.

## Professions to compare

- College professor
- Mechanic
- Doctor / dentist
- Tax preparer
- Taxi/Uber driver
- Stripper
- Hospital (vs. the doctor in it)

Common thread: a smart person gives you their skills in a building with minimal physical overhead.

## The hard part: where's the line?

Need a clean boolean to separate "fundamental cost" from "industry overhead" that applies across all professions.

Jason's instinct: if there were no laws, no industry-specific legal requirements, no moats, no advertising budget, no middlemen — if you just happened to know a guy and could pay him directly — what would it cost? That's the fundamental cost. Everything above that is the markup.

### Edge cases that make this messy

- Car insurance for a taxi driver: fundamental (can't drive without it)
- Union dues for a taxi driver: NOT fundamental (can drive without a union)
- Malpractice insurance for a doctor: ??? (do you need it in a hypothetical trustworthy society?)
- A mechanic's tools: fundamental (he buys his own). A lift? Probably fundamental.
- A professor's book: fundamental to write, but the price students pay is inflated

## Rejected framing: sole proprietor test

"Would a sole operator pay for this?" — clean for simple services (mechanic, tutor, taxi) but breaks down for inherently collective services: fire departments, restaurants, hotels, hospitals. Also breaks down on efficiency — a solo college professor is less efficient than a group sharing one manager and running full schedules. Sole proprietor is too narrow.

## Better framing: "minimum viable unit"

Instead of one person, think: what's the smallest functional unit of this business that anyone in the industry would recognize?

- **Fire department:** one truck, oxygen tanks, hoses, axes, enough firefighters for 24/7 coverage, one building to house it all.
- **Mechanic shop:** a few mechanics, one bay with a lift per mechanic, tools, maybe a front-desk person. Maybe not a janitor — "the guys can probably clean the bathrooms."
- **Restaurant:** a cook, a server, someone to run it. Expenses: food, drink, ambiance.
- **Grocery store:** buying food from farmers, keeping it fresh, checkout staff, stockers, delivery, waste disposal. Probably not a ton of overhead.
- **College:** a group of professors sharing one manager, full class schedules, rooms, whiteboards, books.

The test: if you asked someone who works in the industry to list their top-ten expenses, those are the fundamental costs. Anything they wouldn't list is overhead/institutional bloat.

## New angle: productive vs. antagonistic costs

Some costs are inherently zero-sum or antagonistic — spending that doesn't improve the product but exists because of competition, regulation arms races, or industry structure.

### The lawyer thought experiment

If all lawyers died in a train accident, would justice outcomes change much? One amazing lawyer vs. one amazing lawyer ≈ 50/50. Two terrible lawyers ≈ still 50/50. The entire profession is an arms race. Both sides escalating together nets out to roughly zero. The spending is real but the productive output cancels.

### The tobacco precedent

When tobacco advertising was banned, the industry's profits went UP. They were trapped in an antagonistic advertising arms race — every company had to advertise because every other company was advertising. Remove the race, they all stop spending, and the product sells itself. The advertising wasn't productive; it was defensive.

### Implication for the graph

Maybe the interesting metric isn't just "overhead vs. fundamental" but a three-way split:
1. **Productive costs** — directly create or deliver the thing (the cook's salary, the food, the fire truck)
2. **Structural costs** — don't deliver the thing but are unavoidable infrastructure (the building, insurance, basic management)
3. **Antagonistic costs** — exist only because competitors/regulators/lawyers force them to exist; if everyone stopped simultaneously, nobody would be worse off (advertising arms races, legal arms races, compliance theater, billing departments that exist to fight insurance companies)

The hypothesis: industries where antagonistic costs dominate are the ones where the price has detached most from the person doing the work.

## Industries to research (expanded)

- College education
- Mechanic shop
- Doctor / dentist / hospital
- Tax preparation
- Taxi / rideshare
- Fire department
- Police department
- Ambulance / EMS
- Restaurant
- Grocery store
- Hotel
- Jewelry (interesting: advertising may BE the product)
- Legal services (inherently antagonistic?)
- Tobacco (historical case study of antagonistic cost removal)

## SETTLED FRAMING: Fundamental Worker Ratio

The metric is simple: **what percentage of the total price paid by the customer goes to the salary of the person doing the work the customer actually wants?**

We don't care about the absolute ratio. A firefighter's salary being 5% of your property tax allocation is fine. What matters is **how that ratio changes over time.** If it's shrinking, money is being funneled away from the fundamental worker into... everything else. If it's growing, the industry is getting more efficient at connecting buyer to laborer.

### The "fundamental worker"

The person who provides the core value the customer is trying to purchase. Not their equipment, not their manager, not their billing department. Just them.

- **Fire department:** the firefighter
- **Hospital:** the doctor/nurse (collection of clinical staff who touch the patient)
- **College:** the professor
- **Jewelry:** the person who cuts and sets stones
- **Taxi:** the driver
- **Wedding band:** the musician
- **Mechanic:** the mechanic

### What we're NOT doing

- No products. No price-of-eggs vs. cost-to-lay-an-egg. Services only — people who make salaries.
- No need to categorize every cost as productive/structural/antagonistic. The graph doesn't need to explain WHERE the money goes. It just shows the gap and lets the viewer draw conclusions.

### The hypothesis (two paths of capitalism)

Some industries will show the libertarian ideal: competition drives costs down, the ratio stays tight or improves, the worker gets a fair share and the customer gets a fair price.

Other industries will show the opposite: the industry builds moats, layers, middlemen, and regulatory capture. The ratio collapses. The fundamental worker's share shrinks even as the customer pays more. Capitalism is "working" in both cases — just toward different outcomes.

### Data structure per industry per time period

- Fundamental worker's average salary (annual or hourly)
- Average price paid by customer for the service (per unit — per semester, per ride, per visit, per year of property tax, etc.)
- Number of customers served per worker (to normalize)
- Derived: worker salary / (price x customers) = fundamental worker ratio

### Research approach

Decade-by-decade per industry. Need:
- BLS/Census salary data for the fundamental worker role
- Industry pricing data (tuition, average mechanic bill, ambulance bill, taxi fare, etc.)
- Class size / patient load / ride count to normalize

### Scope rules

- **Services only.** Not products. The fundamental worker is a person earning a salary, not a chicken laying an egg.
- **Still-existing professions only.** Exclude industries where the job has been automated away or the onus shifted to the consumer (travel agents, gas station attendants, self-checkout replacing cashiers, IKEA replacing furniture makers). Those are a separate spin-off idea about "dead professions and consumer-shifted labor."
- **Skilled or unskilled, doesn't matter.** Uber driver counts (most people can drive, but it's still a person providing a service). Professor counts. Surgeon counts.

### One-to-many: multiple fundamental workers per service

Some services have multiple distinct fundamental worker roles contributing to one bill:

- **Hospital visit:** nurse + doctor + surgeon — one hospital bill
- **College education:** professor + associate professor — one tuition bill
- **Buying a house:** builder + plumber + electrician + home inspector + real estate agent — one house price
- **Flying somewhere:** pilot + flight attendant — one ticket price

Each worker role gets its own line, but they all relate to the same "price paid" denominator. This means one industry might have 2-4 lines on the graph. That's a feature — you might see the surgeon's share hold steady while the nurse's share collapses, or the pilot's share spike and then crash at specific historical moments.

### Go wide on industries

Every service job that still exists is a candidate. The more industries, the more likely we see interesting clusters and outliers. Partial list (research agents should expand):

**Healthcare:** doctor, nurse, surgeon, dentist, dental hygienist, veterinarian, EMT/paramedic, pharmacist, physical therapist, optometrist, psychiatrist/psychologist

**Education:** college professor, K-12 teacher, tutor, daycare worker

**Legal/financial:** lawyer, paralegal, accountant/CPA, tax preparer, bank teller, financial advisor, insurance adjuster

**Trades:** mechanic, plumber, electrician, HVAC tech, roofer, general contractor, welder, locksmith

**Municipal services:** firefighter, police officer, postal worker, public transit driver, sanitation worker

**Transportation:** taxi/Uber driver, airline pilot, flight attendant, truck driver, bus driver

**Food/hospitality:** restaurant cook, server/waiter, bartender, hotel housekeeper, hotel front desk

**Personal services:** barber/hairstylist, massage therapist, personal trainer, funeral director/mortician

**Entertainment:** musician/performer, stand-up comic, magician, professional athlete

**Real estate/housing:** real estate agent, home inspector, property manager, architect

**Other:** journalist, graphic designer, photographer, private investigator, security guard

### Data approach per industry

Each industry gets its own best-available proxy for "price paid by customer." Research agents decide what's most consistent longitudinally. Examples:

- **College:** average tuition + fees per student-year (NCES)
- **Hospital:** total national health expenditure / population (CMS)
- **Fire dept:** fire share of municipal budget × average property tax (Census of Governments)
- **Taxi:** average cost of standardized trip length (BLS fare index)
- **Restaurant:** average meal cost at full-service restaurant (BLS CPI)
- **Funeral:** average funeral cost (NFDA surveys)
- **Concert:** average ticket price (Pollstar)
- **Airline:** average domestic airfare (DOT)
- **Housing:** median home sale price (Census/NAR)

Different industries can start at different time periods. Taxis don't exist before cars. Airlines don't exist before 1930. But hospitals and barbers might go back to 1900. Lines start when the data starts.

The data doesn't have to be correct in absolute terms for any single year. It has to be a consistent enough measurement to show movement over time.

### Spin-off idea (separate from this graph)

"Dead professions and consumer-shifted labor" — track jobs where the work used to be done by a professional and is now done by the customer or by software: travel agents, gas station attendants, cashiers (self-checkout), switchboard operators, bank tellers (ATMs), typists/secretaries (word processors), furniture assembly (IKEA model). When did each die? What replaced them?

### Open questions

- One mega-graph with all industries, or clustered by sector?
- How far back can we get reliable data per industry?
- Do we normalize for inflation or just show the ratio? (Ratio should be inflation-agnostic since both sides inflate)
- How to handle the one-to-many worker roles in the visualization — sub-lines? Stacked? Separate panels?
