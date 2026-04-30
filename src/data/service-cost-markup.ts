// Auto-generated from projects/service-cost-markup/results/
// Run: node scripts/extract-service-cost-data.mjs

export const industryGroups = ["Education","Entertainment","Food & Hospitality","Healthcare","Legal & Financial","Personal Services","Professional","Public Safety","Trades","Transportation"] as const
export type IndustryGroup = typeof industryGroups[number]

export const industryColors: Record<IndustryGroup, string> = {
  'Education': '#22c55e',
  'Entertainment': '#6366f1',
  'Food & Hospitality': '#ec4899',
  'Healthcare': '#3b82f6',
  'Legal & Financial': '#a855f7',
  'Personal Services': '#14b8a6',
  'Professional': '#64748b',
  'Public Safety': '#ef4444',
  'Trades': '#f59e0b',
  'Transportation': '#f97316',
}

export interface DataPoint {
  year: number
  ratio: number
  confidence: string
  workerComp: number | null
}

export interface Profession {
  id: string
  profession: string
  industry: IndustryGroup
  summary: string
  annualSalary2024?: number
  data: DataPoint[]
}

export const professions: Profession[] = [
  {
    "id": "001-primary-care-physician",
    "profession": "Primary Care Physician",
    "industry": "Healthcare",
    "summary": "The primary care physician's share of total healthcare spending has collapsed from roughly 8% in 1960 to 1.3% in 2024 — an 83% decline. The steepest drop occurred between 1960 and 1975, driven by the post-Medicare explosion in healthcare spending and a simultaneous shrinkage of the GP workforce as medicine specialized. Since 2000, the ratio has stabilized at historically low levels around 1.3–1.8%, as PCP compensation growth has roughly matched the rate at which healthcare spending per capita is growing — but the damage was already done.",
    "data": [
      {
        "year": 1960,
        "ratio": 7.8,
        "confidence": "low",
        "workerComp": 18000
      },
      {
        "year": 1970,
        "ratio": 4.3,
        "confidence": "med",
        "workerComp": 32000
      },
      {
        "year": 1975,
        "ratio": 3.6,
        "confidence": "high",
        "workerComp": 44800
      },
      {
        "year": 1980,
        "ratio": 3,
        "confidence": "high",
        "workerComp": 63000
      },
      {
        "year": 1984,
        "ratio": 2.5,
        "confidence": "high",
        "workerComp": 73579
      },
      {
        "year": 1990,
        "ratio": 2.1,
        "confidence": "med",
        "workerComp": 100000
      },
      {
        "year": 2000,
        "ratio": 1.8,
        "confidence": "med",
        "workerComp": 130000
      },
      {
        "year": 2010,
        "ratio": 1.4,
        "confidence": "med",
        "workerComp": 175000
      },
      {
        "year": 2020,
        "ratio": 1.3,
        "confidence": "high",
        "workerComp": 242000
      },
      {
        "year": 2024,
        "ratio": 1.3,
        "confidence": "high",
        "workerComp": 287000
      }
    ]
  },
  {
    "id": "002-registered-nurse",
    "profession": "Registered Nurse",
    "industry": "Healthcare",
    "summary": "The registered nurse's share of healthcare spending has been remarkably stable compared to physicians — declining only about 17% over 64 years (from ~7.6% to ~6.3%), versus the PCP's 83% collapse. The ratio peaked around 1980 (~8.6%) during a massive nursing workforce expansion, held steady at 7-7.5% from 1990-2010, then dropped sharply in the 2010s as NHE growth outpaced wage growth. The post-COVID travel nursing explosion partially reversed the decline, pushing the 2024 ratio back up to ~6.3%.",
    "data": [
      {
        "year": 1960,
        "ratio": 7.6,
        "confidence": "low",
        "workerComp": 4000
      },
      {
        "year": 1970,
        "ratio": 7.2,
        "confidence": "low",
        "workerComp": 7500
      },
      {
        "year": 1980,
        "ratio": 8.4,
        "confidence": "med",
        "workerComp": 17000
      },
      {
        "year": 1990,
        "ratio": 7.3,
        "confidence": "med",
        "workerComp": 30000
      },
      {
        "year": 2000,
        "ratio": 7,
        "confidence": "high",
        "workerComp": 44000
      },
      {
        "year": 2010,
        "ratio": 7.1,
        "confidence": "high",
        "workerComp": 67720
      },
      {
        "year": 2020,
        "ratio": 5.7,
        "confidence": "high",
        "workerComp": 80010
      },
      {
        "year": 2024,
        "ratio": 6.3,
        "confidence": "med",
        "workerComp": 99000
      }
    ]
  },
  {
    "id": "003-surgeon",
    "profession": "Surgeon",
    "industry": "Healthcare",
    "summary": "The surgeon's share of total surgical cost has been in steady decline for three decades. In the early 1990s, the operating surgeon's Medicare professional fee represented roughly 15% of the total payment for a primary total knee arthroplasty (TKA). By 2024, that share has fallen to approximately 6%. The surgeon's nominal fee has barely changed over 30+ years (~$1,290 in 1992 vs ~$900 in 2024), while hospital facility payments more than doubled. Two policy inflection points drove this: the 1983 DRG system (which capped hospital payments but shifted cost pressure), and the 1992 RBRVS physician fee schedule (which standardized and progressively reduced surgical fees).",
    "annualSalary2024": 370000,
    "data": [
      {
        "year": 1992,
        "ratio": 14.7,
        "confidence": "med",
        "workerComp": 1288
      },
      {
        "year": 1995,
        "ratio": 13.3,
        "confidence": "low",
        "workerComp": 1300
      },
      {
        "year": 2000,
        "ratio": 11,
        "confidence": "med",
        "workerComp": 1300
      },
      {
        "year": 2005,
        "ratio": 10,
        "confidence": "med",
        "workerComp": 1280
      },
      {
        "year": 2010,
        "ratio": 9.1,
        "confidence": "med",
        "workerComp": 1200
      },
      {
        "year": 2012,
        "ratio": 8.4,
        "confidence": "high",
        "workerComp": 1143
      },
      {
        "year": 2015,
        "ratio": 8.1,
        "confidence": "med",
        "workerComp": 1080
      },
      {
        "year": 2017,
        "ratio": 7.9,
        "confidence": "high",
        "workerComp": 1036
      },
      {
        "year": 2020,
        "ratio": 7.2,
        "confidence": "med",
        "workerComp": 970
      },
      {
        "year": 2024,
        "ratio": 6.4,
        "confidence": "med",
        "workerComp": 900
      }
    ]
  },
  {
    "id": "004-dentist",
    "profession": "General Dentist",
    "industry": "Healthcare",
    "summary": "The dentist's share of dental spending has collapsed from ~63% in 1960 to ~22% in 2024. In the 1960s, a solo practitioner with a chair and a receptionist kept most of what patients paid. By 2024, the dentist's net income represents barely a fifth of the dental dollar — the rest absorbed by hygienists, assistants, office staff, rent, equipment, technology, insurance processing, and (increasingly) corporate overhead. The sharpest decline occurred in two waves: 1960–1990 (modernization of dental practices) and 2005–2019 (stagnating real income against surging total spending).",
    "data": [
      {
        "year": 1960,
        "ratio": 63.4,
        "confidence": "low",
        "workerComp": 14000
      },
      {
        "year": 1970,
        "ratio": 58.4,
        "confidence": "low",
        "workerComp": 27000
      },
      {
        "year": 1980,
        "ratio": 42.6,
        "confidence": "med",
        "workerComp": 47000
      },
      {
        "year": 1990,
        "ratio": 33,
        "confidence": "med",
        "workerComp": 76000
      },
      {
        "year": 2000,
        "ratio": 33.6,
        "confidence": "high",
        "workerComp": 130000
      },
      {
        "year": 2005,
        "ratio": 35.6,
        "confidence": "med",
        "workerComp": 180000
      },
      {
        "year": 2010,
        "ratio": 31.2,
        "confidence": "med",
        "workerComp": 175000
      },
      {
        "year": 2019,
        "ratio": 22.6,
        "confidence": "high",
        "workerComp": 172000
      },
      {
        "year": 2020,
        "ratio": 19.7,
        "confidence": "high",
        "workerComp": 143000
      },
      {
        "year": 2024,
        "ratio": 22.2,
        "confidence": "high",
        "workerComp": 208000
      }
    ]
  },
  {
    "id": "005-dental-hygienist",
    "profession": "Dental Hygienist",
    "industry": "Healthcare",
    "summary": "The dental hygienist's share of the cleaning fee has declined moderately from ~52% in the mid-1970s to ~36% in 2024, with a brief peak around 1990 (~56%) when wage growth outpaced fee inflation during a period of rapid professionalization and demand. The post-2000 decline has been steady but gentle — far less dramatic than the dentist's collapse from 63% to 22% over the same period. The hygienist's ratio remains relatively high because the relationship is direct: one worker, one patient, one hour, one fee. There's less room for overhead to absorb the worker's share compared to a dentist managing an entire practice.",
    "data": [
      {
        "year": 1975,
        "ratio": 51.8,
        "confidence": "low",
        "workerComp": 14500
      },
      {
        "year": 1980,
        "ratio": 50,
        "confidence": "low",
        "workerComp": 20000
      },
      {
        "year": 1990,
        "ratio": 56.3,
        "confidence": "med",
        "workerComp": 38300
      },
      {
        "year": 2000,
        "ratio": 43.8,
        "confidence": "med",
        "workerComp": 49000
      },
      {
        "year": 2005,
        "ratio": 40.3,
        "confidence": "med",
        "workerComp": 58000
      },
      {
        "year": 2010,
        "ratio": 39.1,
        "confidence": "high",
        "workerComp": 68000
      },
      {
        "year": 2015,
        "ratio": 38,
        "confidence": "high",
        "workerComp": 73000
      },
      {
        "year": 2020,
        "ratio": 36.8,
        "confidence": "high",
        "workerComp": 78000
      },
      {
        "year": 2024,
        "ratio": 36,
        "confidence": "high",
        "workerComp": 90000
      }
    ]
  },
  {
    "id": "006-pharmacist",
    "profession": "Pharmacist",
    "industry": "Healthcare",
    "summary": "The pharmacist's share of every prescription dollar has collapsed from roughly 30–36% in the 1960s–1980s to about 9% today. The steepest decline occurred in the late 1980s and 1990s — precisely when PBMs consolidated power, blockbuster drugs sent prices soaring, and chain pharmacies replaced independents. Since 2000, the ratio has slowly ground lower as drug spending growth continues to outpace pharmacist salary gains.",
    "data": [
      {
        "year": 1960,
        "ratio": 36.2,
        "confidence": "low",
        "workerComp": 8500
      },
      {
        "year": 1970,
        "ratio": 29.5,
        "confidence": "low",
        "workerComp": 13000
      },
      {
        "year": 1980,
        "ratio": 32.9,
        "confidence": "low-med",
        "workerComp": 25500
      },
      {
        "year": 1990,
        "ratio": 19.5,
        "confidence": "med",
        "workerComp": 45000
      },
      {
        "year": 2000,
        "ratio": 11.3,
        "confidence": "med-high",
        "workerComp": 65000
      },
      {
        "year": 2010,
        "ratio": 12.3,
        "confidence": "high",
        "workerComp": 113000
      },
      {
        "year": 2020,
        "ratio": 11.2,
        "confidence": "high",
        "workerComp": 128000
      },
      {
        "year": 2024,
        "ratio": 8.9,
        "confidence": "high",
        "workerComp": 137000
      }
    ]
  },
  {
    "id": "007-emt-paramedic",
    "profession": "EMT / Paramedic",
    "industry": "Healthcare",
    "summary": "The EMT/paramedic worker ratio has declined from roughly 31% in 2000 to about 18% in 2024, nearly halving over 24 years. Ambulance charges have tripled while EMT wages have grown less than 75%. The sharpest decline coincides with private equity's aggressive entry into EMS after 2008 — KKR's $9.9B acquisition of Envision/AMR in 2018 being the most notable example. Despite providing life-saving medical care, EMTs remain among the lowest-paid healthcare workers, often earning less than retail employees, while the bills they generate have become a poster child for American healthcare cost inflation.",
    "data": [
      {
        "year": 2000,
        "ratio": 31.4,
        "confidence": "low",
        "workerComp": 24000
      },
      {
        "year": 2005,
        "ratio": 28.6,
        "confidence": "low",
        "workerComp": 27000
      },
      {
        "year": 2010,
        "ratio": 25.9,
        "confidence": "med",
        "workerComp": 30360
      },
      {
        "year": 2015,
        "ratio": 20.9,
        "confidence": "med",
        "workerComp": 32000
      },
      {
        "year": 2020,
        "ratio": 18.5,
        "confidence": "med",
        "workerComp": 36650
      },
      {
        "year": 2024,
        "ratio": 17.7,
        "confidence": "med-high",
        "workerComp": 41340
      }
    ]
  },
  {
    "id": "008-veterinarian",
    "profession": "Veterinarian",
    "industry": "Healthcare",
    "summary": "The veterinarian's ratio has declined modestly from ~21% to ~17% over the past two decades — a notable erosion but nowhere near the collapse seen in human healthcare or higher education. This relative stability exists despite vet care costs inflating nearly as fast as human healthcare (3.9× since 1997). The key differentiator: pet insurance remains rare (~4% of pets), so there's no massive administrative layer eating into the customer dollar. However, accelerating corporate consolidation — Mars Inc. now owns ~30% of corporate vet practices — and the 2020-2022 pandemic pet boom (revenue surged 41% while salaries rose only 21%) are beginning to compress the ratio in a pattern eerily familiar from early-stage healthcare consolidation.",
    "data": [
      {
        "year": 2004,
        "ratio": 21,
        "confidence": "med",
        "workerComp": 78000
      },
      {
        "year": 2006,
        "ratio": 19.7,
        "confidence": "high",
        "workerComp": 81490
      },
      {
        "year": 2008,
        "ratio": 18.8,
        "confidence": "med",
        "workerComp": 86000
      },
      {
        "year": 2010,
        "ratio": 19.8,
        "confidence": "med",
        "workerComp": 90000
      },
      {
        "year": 2012,
        "ratio": 19.7,
        "confidence": "med",
        "workerComp": 93500
      },
      {
        "year": 2014,
        "ratio": 19.1,
        "confidence": "med",
        "workerComp": 97500
      },
      {
        "year": 2016,
        "ratio": 18,
        "confidence": "med",
        "workerComp": 102000
      },
      {
        "year": 2018,
        "ratio": 18,
        "confidence": "high",
        "workerComp": 105240
      },
      {
        "year": 2020,
        "ratio": 17.2,
        "confidence": "med",
        "workerComp": 116000
      },
      {
        "year": 2022,
        "ratio": 17,
        "confidence": "med",
        "workerComp": 127000
      }
    ]
  },
  {
    "id": "009-physical-therapist",
    "profession": "Physical Therapist",
    "industry": "Healthcare",
    "summary": "The physical therapist's share of what customers pay has been remarkably stable at ~29-32% over the past 25 years, making PT one of the most ratio-stable services in this dataset. This stability reflects the fundamental nature of PT: it is irreducibly a one-therapist, one-patient, one-hour service. You can't offshore it, automate it, or split it across a larger customer base. The main disruption was the COVID-19 pandemic in 2020, which temporarily spiked the ratio to ~36% as visit volumes cratered while salaries held — but the ratio snapped back as volumes recovered. Underneath this stability, PT salaries have roughly doubled in nominal terms since 2000, but so has per-visit revenue, keeping the ratio locked.",
    "data": [
      {
        "year": 2000,
        "ratio": 32.1,
        "confidence": "low",
        "workerComp": 57710
      },
      {
        "year": 2005,
        "ratio": 30,
        "confidence": "low-med",
        "workerComp": 64000
      },
      {
        "year": 2010,
        "ratio": 30.4,
        "confidence": "med",
        "workerComp": 78270
      },
      {
        "year": 2015,
        "ratio": 30.5,
        "confidence": "med",
        "workerComp": 86520
      },
      {
        "year": 2020,
        "ratio": 36.4,
        "confidence": "med",
        "workerComp": 91010
      },
      {
        "year": 2024,
        "ratio": 30.6,
        "confidence": "med",
        "workerComp": 101020
      }
    ]
  },
  {
    "id": "010-therapist-psychologist",
    "profession": "Therapist / Psychologist",
    "industry": "Healthcare",
    "summary": "Therapy is the closest thing to a pure labor transaction: one skilled person, a quiet room, and an hour of their time. The fundamental worker ratio has been remarkably stable at 57-69% across five decades — among the highest of any service industry. Managed care in the 1990s compressed per-session reimbursement but failed to collapse the ratio because therapists adapted by going private-pay, increasing volume, or both. The emerging structural threat is online therapy platforms (BetterHelp, Talkspace), which insert a technology middleman into a historically middleman-free profession, pushing platform therapist ratios down to an estimated 30-45%.",
    "data": [
      {
        "year": 1970,
        "ratio": 56,
        "confidence": "low",
        "workerComp": 14000
      },
      {
        "year": 1980,
        "ratio": 62,
        "confidence": "low",
        "workerComp": 28000
      },
      {
        "year": 1985,
        "ratio": 57,
        "confidence": "med",
        "workerComp": 36000
      },
      {
        "year": 1990,
        "ratio": 63,
        "confidence": "med",
        "workerComp": 50000
      },
      {
        "year": 1995,
        "ratio": 69,
        "confidence": "med",
        "workerComp": 58000
      },
      {
        "year": 2000,
        "ratio": 68,
        "confidence": "med",
        "workerComp": 68000
      },
      {
        "year": 2005,
        "ratio": 67,
        "confidence": "med",
        "workerComp": 74000
      },
      {
        "year": 2010,
        "ratio": 69,
        "confidence": "med",
        "workerComp": 78000
      },
      {
        "year": 2015,
        "ratio": 68,
        "confidence": "med",
        "workerComp": 82000
      },
      {
        "year": 2020,
        "ratio": 66,
        "confidence": "med",
        "workerComp": 80000
      },
      {
        "year": 2024,
        "ratio": 65,
        "confidence": "high",
        "workerComp": 96000
      }
    ]
  },
  {
    "id": "011-optometrist",
    "profession": "Optometrist",
    "industry": "Healthcare",
    "summary": "The optometrist's share of the total vision care bill has been steadily eroding — from roughly 11% in the 1980s to about 8% today. The culprit is almost entirely the eyewear side of the equation: frames that cost $70 in 1980 now average $350, a 5x increase driven largely by EssilorLuxottica's near-monopoly, while optometrist compensation has grown more modestly (4.5x over the same period). The optometrist is the person the customer interacts with, but takes home less than 9 cents of every dollar the customer spends on the visit.",
    "data": [
      {
        "year": 1980,
        "ratio": 11,
        "confidence": "low",
        "workerComp": 30000
      },
      {
        "year": 1990,
        "ratio": 11.1,
        "confidence": "med",
        "workerComp": 62000
      },
      {
        "year": 2000,
        "ratio": 10.1,
        "confidence": "med-high",
        "workerComp": 91000
      },
      {
        "year": 2005,
        "ratio": 9,
        "confidence": "med",
        "workerComp": 93000
      },
      {
        "year": 2010,
        "ratio": 8.1,
        "confidence": "med",
        "workerComp": 96000
      },
      {
        "year": 2015,
        "ratio": 7.7,
        "confidence": "med",
        "workerComp": 103000
      },
      {
        "year": 2020,
        "ratio": 9,
        "confidence": "med-high",
        "workerComp": 121000
      },
      {
        "year": 2024,
        "ratio": 8.6,
        "confidence": "high",
        "workerComp": 135000
      }
    ]
  },
  {
    "id": "012-midwife",
    "profession": "Certified Nurse-Midwife",
    "industry": "Healthcare",
    "summary": "The midwife consistently captures 61–77% of what the customer pays — one of the highest fundamental worker ratios in the dataset. This is because the out-of-hospital birth model (home birth or birth center) has inherently minimal overhead: no hospital facility, no large administrative staff, no billing department. The ratio peaked around 2000 (~77%) when CNM salaries were rising faster than birth fees, then gradually declined to ~61% by 2024 as professionalization costs (malpractice insurance, credentialing, compliance) grew. For comparison, the OB-GYN delivering the same baby in a hospital captures only ~15% of the customer cost — the hospital system absorbs the rest.",
    "data": [
      {
        "year": 1987,
        "ratio": 64.6,
        "confidence": "low",
        "workerComp": 40000
      },
      {
        "year": 1990,
        "ratio": 68.2,
        "confidence": "med",
        "workerComp": 45000
      },
      {
        "year": 1995,
        "ratio": 73.7,
        "confidence": "low",
        "workerComp": 52500
      },
      {
        "year": 2000,
        "ratio": 77,
        "confidence": "low",
        "workerComp": 61000
      },
      {
        "year": 2005,
        "ratio": 74.1,
        "confidence": "low",
        "workerComp": 72000
      },
      {
        "year": 2010,
        "ratio": 70.9,
        "confidence": "low",
        "workerComp": 84000
      },
      {
        "year": 2012,
        "ratio": 71.1,
        "confidence": "med",
        "workerComp": 89600
      },
      {
        "year": 2015,
        "ratio": 64.6,
        "confidence": "med",
        "workerComp": 93610
      },
      {
        "year": 2018,
        "ratio": 65.5,
        "confidence": "med",
        "workerComp": 106910
      },
      {
        "year": 2021,
        "ratio": 63.4,
        "confidence": "med",
        "workerComp": 118000
      },
      {
        "year": 2024,
        "ratio": 61.1,
        "confidence": "med",
        "workerComp": 128110
      }
    ]
  },
  {
    "id": "013-college-professor",
    "profession": "College Professor",
    "industry": "Education",
    "summary": "The college professor's share of tuition revenue has collapsed from roughly 108% in 1970 to 46% in 2020 — a fall of more than half. In 1970, a full-time professor's salary alone exceeded the total tuition revenue their students generated (the gap was covered by state appropriations and endowments). By the mid-1980s, tuition revenue had overtaken salary, and the ratio has fallen steadily since. The sharpest decade of decline was the 1980s, when tuition surged while faculty salaries grew modestly. When you factor in that ~68% of college instruction is now delivered by adjuncts earning ~$3,500 per course, the share going to the person actually teaching the class drops to roughly 10%.",
    "data": [
      {
        "year": 1970,
        "ratio": 108.4,
        "confidence": "med-high",
        "workerComp": 12710
      },
      {
        "year": 1975,
        "ratio": 103.8,
        "confidence": "med",
        "workerComp": 16659
      },
      {
        "year": 1980,
        "ratio": 100.2,
        "confidence": "med-high",
        "workerComp": 23302
      },
      {
        "year": 1985,
        "ratio": 83.5,
        "confidence": "med",
        "workerComp": 32392
      },
      {
        "year": 1990,
        "ratio": 74.9,
        "confidence": "med-high",
        "workerComp": 42165
      },
      {
        "year": 1995,
        "ratio": 65.6,
        "confidence": "med",
        "workerComp": 49309
      },
      {
        "year": 2000,
        "ratio": 62.9,
        "confidence": "med-high",
        "workerComp": 55888
      },
      {
        "year": 2005,
        "ratio": 54.9,
        "confidence": "med",
        "workerComp": 66172
      },
      {
        "year": 2010,
        "ratio": 50.5,
        "confidence": "med-high",
        "workerComp": 75481
      },
      {
        "year": 2015,
        "ratio": 46.9,
        "confidence": "med",
        "workerComp": 82224
      },
      {
        "year": 2020,
        "ratio": 46,
        "confidence": "med",
        "workerComp": 91908
      }
    ]
  },
  {
    "id": "014-k12-teacher",
    "profession": "Public School Teacher",
    "industry": "Education",
    "summary": "The K-12 teacher's share of per-pupil spending has nearly halved over six decades — from 44% in 1960 to 26% in 2020. The ratio was rock-stable through the 1960s, then began a steep, sustained decline starting in the 1970s that has never reversed. Per-pupil spending has grown relentlessly (driven by special education mandates, administrative expansion, benefits/pension costs, and facility spending), but almost none of that growth has reached teacher paychecks. The 1980s saw a brief partial recovery after the \"Nation at Risk\" alarm, but the long-term trend resumed immediately.",
    "data": [
      {
        "year": 1960,
        "ratio": 44,
        "confidence": "high",
        "workerComp": 4995
      },
      {
        "year": 1970,
        "ratio": 44,
        "confidence": "high",
        "workerComp": 8626
      },
      {
        "year": 1975,
        "ratio": 40.1,
        "confidence": "high",
        "workerComp": 11641
      },
      {
        "year": 1980,
        "ratio": 36.5,
        "confidence": "high",
        "workerComp": 15970
      },
      {
        "year": 1985,
        "ratio": 37.7,
        "confidence": "high",
        "workerComp": 23600
      },
      {
        "year": 1990,
        "ratio": 35.3,
        "confidence": "high",
        "workerComp": 31367
      },
      {
        "year": 1995,
        "ratio": 34.2,
        "confidence": "high",
        "workerComp": 36675
      },
      {
        "year": 2000,
        "ratio": 32.3,
        "confidence": "high",
        "workerComp": 41807
      },
      {
        "year": 2005,
        "ratio": 29.8,
        "confidence": "high",
        "workerComp": 47516
      },
      {
        "year": 2010,
        "ratio": 29.6,
        "confidence": "high",
        "workerComp": 55370
      },
      {
        "year": 2015,
        "ratio": 28,
        "confidence": "high",
        "workerComp": 57758
      },
      {
        "year": 2020,
        "ratio": 26,
        "confidence": "high",
        "workerComp": 64172
      },
      {
        "year": 2021,
        "ratio": 25.9,
        "confidence": "high",
        "workerComp": 65293
      }
    ]
  },
  {
    "id": "015-daycare-worker",
    "profession": "Daycare Worker",
    "industry": "Education",
    "summary": "The childcare worker ratio is among the highest of any industry at 43–51%, yet the worker remains near poverty wages. This is the structural paradox: mandated staff-to-child ratios (typically 1:4 for infants, 1:8 for preschoolers) cap the revenue each worker can generate at roughly $45,000–$62,000 per year. Even taking half of that leaves workers earning $20,000–$32,000. The ratio dipped to its lowest (~43%) from 2010–2015 as childcare costs outpaced stagnant wages, then recovered post-2018 as tight labor markets and minimum wage increases pushed childcare wages up significantly. Unlike college or healthcare, the \"bloat\" in childcare isn't administrative overhead — labor already consumes 60–80% of revenue. The problem is that the denominator (children per worker) is structurally capped by regulation.",
    "data": [
      {
        "year": 1990,
        "ratio": 49,
        "confidence": "low",
        "workerComp": 10000
      },
      {
        "year": 1995,
        "ratio": 51.3,
        "confidence": "low",
        "workerComp": 12500
      },
      {
        "year": 2000,
        "ratio": 51.5,
        "confidence": "low",
        "workerComp": 15000
      },
      {
        "year": 2005,
        "ratio": 49.4,
        "confidence": "med",
        "workerComp": 17300
      },
      {
        "year": 2010,
        "ratio": 45.3,
        "confidence": "med",
        "workerComp": 19300
      },
      {
        "year": 2012,
        "ratio": 43.6,
        "confidence": "high",
        "workerComp": 19510
      },
      {
        "year": 2015,
        "ratio": 43.2,
        "confidence": "high",
        "workerComp": 20320
      },
      {
        "year": 2018,
        "ratio": 46.5,
        "confidence": "high",
        "workerComp": 23240
      },
      {
        "year": 2020,
        "ratio": 48,
        "confidence": "high",
        "workerComp": 25460
      },
      {
        "year": 2022,
        "ratio": 50.9,
        "confidence": "high",
        "workerComp": 28520
      },
      {
        "year": 2024,
        "ratio": 51.3,
        "confidence": "med",
        "workerComp": 32050
      }
    ]
  },
  {
    "id": "016-lawyer-civil",
    "profession": "Lawyer",
    "industry": "Legal & Financial",
    "summary": "The civil litigation lawyer's share of what clients pay has been roughly halved over 54 years — from ~53% in 1970 to ~25% in 2024. Unlike most industries in this project where the worker is arguably underpaid, civil litigation lawyers are highly compensated in absolute terms ($151K median, $225K+ at BigLaw). The collapsing ratio isn't about depressed wages — it's about an ever-growing superstructure of overhead, technology, non-lawyer staff, and firm profit extraction built on top of the lawyer's billable hour. BigLaw associates represent the extreme case: billed at $895-1,000/hour but earning ~$118/hour, yielding a ratio of only ~12%.",
    "data": [
      {
        "year": 1970,
        "ratio": 53,
        "confidence": "low",
        "workerComp": 20000
      },
      {
        "year": 1980,
        "ratio": 41,
        "confidence": "low",
        "workerComp": 40000
      },
      {
        "year": 1990,
        "ratio": 38,
        "confidence": "med",
        "workerComp": 65000
      },
      {
        "year": 2000,
        "ratio": 32,
        "confidence": "med",
        "workerComp": 90000
      },
      {
        "year": 2010,
        "ratio": 31,
        "confidence": "med-high",
        "workerComp": 115000
      },
      {
        "year": 2016,
        "ratio": 30,
        "confidence": "high",
        "workerComp": 120000
      },
      {
        "year": 2020,
        "ratio": 29,
        "confidence": "med-high",
        "workerComp": 135000
      },
      {
        "year": 2024,
        "ratio": 25,
        "confidence": "high",
        "workerComp": 151000
      }
    ]
  },
  {
    "id": "017-tax-preparer",
    "profession": "Tax Preparer",
    "industry": "Legal & Financial",
    "summary": "The tax preparer's share of customer fees has declined steadily from roughly 40% in 1990 to about 22% in 2024. Preparation fees have roughly quadrupled while front-line preparer hourly wages have barely doubled, with the widening gap absorbed by franchise overhead, marketing, technology platforms, and corporate profit. The most dramatic shift isn't visible in the human-assisted channel at all — it's the 50%+ of filers who now use software like TurboTax, where the \"worker\" (a software engineer) earns perhaps 12% of the revenue they generate, and the customer pays nearly as much as they would for a human preparer.",
    "data": [
      {
        "year": 1990,
        "ratio": 39.6,
        "confidence": "low",
        "workerComp": 4900
      },
      {
        "year": 1995,
        "ratio": 35.6,
        "confidence": "low",
        "workerComp": 5600
      },
      {
        "year": 2000,
        "ratio": 34.6,
        "confidence": "low",
        "workerComp": 7000
      },
      {
        "year": 2005,
        "ratio": 31.1,
        "confidence": "med",
        "workerComp": 7700
      },
      {
        "year": 2009,
        "ratio": 31.4,
        "confidence": "med",
        "workerComp": 9100
      },
      {
        "year": 2013,
        "ratio": 29,
        "confidence": "med",
        "workerComp": 9800
      },
      {
        "year": 2017,
        "ratio": 26.5,
        "confidence": "med",
        "workerComp": 10500
      },
      {
        "year": 2021,
        "ratio": 22.6,
        "confidence": "med",
        "workerComp": 11200
      },
      {
        "year": 2024,
        "ratio": 22.4,
        "confidence": "med",
        "workerComp": 12600
      }
    ]
  },
  {
    "id": "018-financial-advisor",
    "profession": "Wealth Management",
    "industry": "Legal & Financial",
    "summary": "The financial advisor ratio tells a story of fee-structure engineering. During the commission era (1980s–1990s), advisors kept roughly 40% of relatively modest per-client revenue ($500–1,000/year in trade commissions). The shift to AUM-based fees in the late 1990s–2000s dramatically increased total revenue per client (to $3,000–5,500+/year as portfolios grew and the 1% fee compounded), but advisor compensation only roughly doubled. The ratio collapsed from ~40% to ~20% — the advisor's absolute pay rose, but the industry captured far more revenue per unit of advisor labor. The ratio has stabilized around 20% since 2015.",
    "data": [
      {
        "year": 1985,
        "ratio": 40,
        "confidence": "low",
        "workerComp": 40000
      },
      {
        "year": 1990,
        "ratio": 42,
        "confidence": "low",
        "workerComp": 52000
      },
      {
        "year": 1995,
        "ratio": 39,
        "confidence": "low",
        "workerComp": 58000
      },
      {
        "year": 2000,
        "ratio": 33,
        "confidence": "low/med",
        "workerComp": 72000
      },
      {
        "year": 2005,
        "ratio": 26,
        "confidence": "med",
        "workerComp": 90000
      },
      {
        "year": 2010,
        "ratio": 26,
        "confidence": "med",
        "workerComp": 82000
      },
      {
        "year": 2015,
        "ratio": 23,
        "confidence": "med",
        "workerComp": 95000
      },
      {
        "year": 2020,
        "ratio": 20,
        "confidence": "med/high",
        "workerComp": 98000
      },
      {
        "year": 2024,
        "ratio": 20,
        "confidence": "med/high",
        "workerComp": 108000
      }
    ]
  },
  {
    "id": "019-insurance-agent",
    "profession": "Insurance Agent",
    "industry": "Legal & Financial",
    "summary": "The insurance agent's share of the customer's premium dollar has been in steady decline for six decades, falling from roughly 15% in 1960 to under 9% today. The driver isn't collapsing commission rates per policy — agents who sell still earn 8–15% — it's the growing market share of direct-to-consumer channels (GEICO, Progressive online, USAA) that bypass agents entirely. The customer hasn't benefited proportionally: premiums rose tenfold while the agent's slice shrank by a third. The savings from cutting out the middleman went mostly to insurer profits and rising claims costs, not to lower prices.",
    "annualSalary2024": 60000,
    "data": [
      {
        "year": 1960,
        "ratio": 15,
        "confidence": "low",
        "workerComp": 18
      },
      {
        "year": 1970,
        "ratio": 14.3,
        "confidence": "low",
        "workerComp": 25
      },
      {
        "year": 1980,
        "ratio": 13.4,
        "confidence": "low",
        "workerComp": 45
      },
      {
        "year": 1990,
        "ratio": 12.5,
        "confidence": "med",
        "workerComp": 66
      },
      {
        "year": 2000,
        "ratio": 11.5,
        "confidence": "med",
        "workerComp": 79
      },
      {
        "year": 2003,
        "ratio": 10.6,
        "confidence": "med",
        "workerComp": 88
      },
      {
        "year": 2010,
        "ratio": 10.5,
        "confidence": "med",
        "workerComp": 83
      },
      {
        "year": 2015,
        "ratio": 10,
        "confidence": "med",
        "workerComp": 90
      },
      {
        "year": 2020,
        "ratio": 9.5,
        "confidence": "high",
        "workerComp": 100
      },
      {
        "year": 2024,
        "ratio": 9,
        "confidence": "med",
        "workerComp": 117
      }
    ]
  },
  {
    "id": "020-airline-pilot",
    "profession": "Airline Pilot",
    "industry": "Transportation",
    "summary": "The pilot's share of airfare revenue has undergone a dramatic transformation. In the regulated era (pre-1978), pilots captured roughly 25% of what passengers paid — a function of high fares, small aircraft, and powerful unions. Deregulation halved this ratio almost overnight, stabilizing around 12% through the 1990s. The post-9/11 crisis, airline bankruptcies, and continuous efficiency gains pushed it down to a nadir of ~8% by 2010. The current pilot shortage has driven a sharp recovery: landmark union contracts in 2023–2024 delivered 18–46% cumulative raises, pushing the ratio back toward ~16% — still well below its regulated-era peak.",
    "data": [
      {
        "year": 1970,
        "ratio": 24.7,
        "confidence": "low",
        "workerComp": 42000
      },
      {
        "year": 1978,
        "ratio": 13.3,
        "confidence": "low",
        "workerComp": 60000
      },
      {
        "year": 1985,
        "ratio": 12.2,
        "confidence": "med",
        "workerComp": 90000
      },
      {
        "year": 1990,
        "ratio": 12.3,
        "confidence": "med",
        "workerComp": 110000
      },
      {
        "year": 1995,
        "ratio": 12.6,
        "confidence": "high",
        "workerComp": 122484
      },
      {
        "year": 2000,
        "ratio": 10.5,
        "confidence": "high",
        "workerComp": 132295
      },
      {
        "year": 2005,
        "ratio": 9.9,
        "confidence": "high",
        "workerComp": 133283
      },
      {
        "year": 2010,
        "ratio": 8.4,
        "confidence": "high",
        "workerComp": 132125
      },
      {
        "year": 2015,
        "ratio": 9.4,
        "confidence": "high",
        "workerComp": 191995
      },
      {
        "year": 2019,
        "ratio": 12.6,
        "confidence": "high",
        "workerComp": 236239
      },
      {
        "year": 2024,
        "ratio": 15.6,
        "confidence": "med",
        "workerComp": 270000
      }
    ]
  },
  {
    "id": "021-flight-attendant",
    "profession": "Flight Attendant",
    "industry": "Transportation",
    "summary": "The flight attendant's share of airfare revenue has been remarkably stable for decades — hovering around 3% from 1970 through 2010, a flat line compared to the dramatic swings in the pilot ratio over the same period. This stability reflects offsetting forces: FA pay grew modestly while passenger loads per attendant increased proportionally. The ratio has begun climbing since 2015 (reaching ~4.4% by 2019), and the wave of 18–22% contract raises in 2023–2024 is pushing it toward ~5.6% — the highest it's been in the data. Plotted against the pilot line on the same airfare denominator, the two roles tell starkly different stories: the pilot captured 25% in 1970 and still holds ~16% today, while the flight attendant has always been in the 3–6% range.",
    "data": [
      {
        "year": 1970,
        "ratio": 3,
        "confidence": "low",
        "workerComp": 8500
      },
      {
        "year": 1985,
        "ratio": 2.9,
        "confidence": "low",
        "workerComp": 22000
      },
      {
        "year": 1990,
        "ratio": 3,
        "confidence": "low",
        "workerComp": 27000
      },
      {
        "year": 1995,
        "ratio": 3.3,
        "confidence": "high",
        "workerComp": 32247
      },
      {
        "year": 2000,
        "ratio": 3,
        "confidence": "high",
        "workerComp": 31739
      },
      {
        "year": 2005,
        "ratio": 3.2,
        "confidence": "high",
        "workerComp": 39800
      },
      {
        "year": 2010,
        "ratio": 3.4,
        "confidence": "high",
        "workerComp": 45618
      },
      {
        "year": 2015,
        "ratio": 3.5,
        "confidence": "high",
        "workerComp": 50826
      },
      {
        "year": 2019,
        "ratio": 4.4,
        "confidence": "high",
        "workerComp": 60724
      },
      {
        "year": 2024,
        "ratio": 5.6,
        "confidence": "med",
        "workerComp": 70000
      }
    ]
  },
  {
    "id": "022-taxi-rideshare-driver",
    "profession": "Taxi / Rideshare Driver",
    "industry": "Transportation",
    "summary": "This is arguably the most dramatic before/after story in the dataset. The taxi industry cycled through three distinct intermediary models — commission (pre-1979), medallion lease (1979–2013), and platform commission (2014–present) — each of which started with a better deal for drivers before eroding over time. Uber's initial 80/20 split in 2014 was a massive jump from the ~58% drivers were keeping under the medallion lease system. But by 2024, the platform take rate has crept to ~30%, bringing the driver's share down to ~70% — and the trajectory suggests continued erosion. The \"cut out the middleman\" disruption may be converging back toward the old middleman's cut.",
    "annualSalary2024": 36000,
    "data": [
      {
        "year": 1960,
        "ratio": 45,
        "confidence": "medium",
        "workerComp": 1
      },
      {
        "year": 1965,
        "ratio": 46,
        "confidence": "medium",
        "workerComp": 1
      },
      {
        "year": 1970,
        "ratio": 48,
        "confidence": "medium",
        "workerComp": 1
      },
      {
        "year": 1975,
        "ratio": 47,
        "confidence": "medium",
        "workerComp": 1
      },
      {
        "year": 1980,
        "ratio": 65,
        "confidence": "low",
        "workerComp": 2
      },
      {
        "year": 1985,
        "ratio": 64,
        "confidence": "low",
        "workerComp": 4
      },
      {
        "year": 1990,
        "ratio": 68,
        "confidence": "medium",
        "workerComp": 6
      },
      {
        "year": 1995,
        "ratio": 63,
        "confidence": "medium",
        "workerComp": 7
      },
      {
        "year": 2000,
        "ratio": 65,
        "confidence": "medium",
        "workerComp": 7
      },
      {
        "year": 2005,
        "ratio": 63,
        "confidence": "medium",
        "workerComp": 8
      },
      {
        "year": 2010,
        "ratio": 58,
        "confidence": "medium",
        "workerComp": 8
      },
      {
        "year": 2013,
        "ratio": 57,
        "confidence": "medium",
        "workerComp": 8
      },
      {
        "year": 2014,
        "ratio": 80,
        "confidence": "high",
        "workerComp": 10
      },
      {
        "year": 2016,
        "ratio": 75,
        "confidence": "medium",
        "workerComp": 10
      },
      {
        "year": 2019,
        "ratio": 78,
        "confidence": "medium",
        "workerComp": 10
      },
      {
        "year": 2022,
        "ratio": 73,
        "confidence": "high",
        "workerComp": 13
      },
      {
        "year": 2024,
        "ratio": 70,
        "confidence": "medium",
        "workerComp": 11
      }
    ]
  },
  {
    "id": "023-long-haul-trucker",
    "profession": "Long-Haul Truck Driver",
    "industry": "Transportation",
    "summary": "The long-haul truck driver's share of industry revenue per driver seat has collapsed from roughly 44% in 1980 to a low of about 14% in 2015, before partially recovering to ~19% by 2024. The Motor Carrier Act of 1980 (deregulation) is the single largest inflection point — within a decade, the driver's share was cut nearly in half. The continued decline through the 2000s–2010s reflects the compounding effects of freight brokers (a middleman layer that barely existed before deregulation), rising non-labor operating costs (fuel, equipment, insurance, compliance), and industry revenue growing far faster than driver wages.",
    "data": [
      {
        "year": 1980,
        "ratio": 44.1,
        "confidence": "low",
        "workerComp": 38618
      },
      {
        "year": 1990,
        "ratio": 23.9,
        "confidence": "low",
        "workerComp": 26000
      },
      {
        "year": 2000,
        "ratio": 19.1,
        "confidence": "med",
        "workerComp": 30000
      },
      {
        "year": 2005,
        "ratio": 14.6,
        "confidence": "med",
        "workerComp": 33000
      },
      {
        "year": 2010,
        "ratio": 14.6,
        "confidence": "med",
        "workerComp": 36500
      },
      {
        "year": 2015,
        "ratio": 13.9,
        "confidence": "high",
        "workerComp": 40260
      },
      {
        "year": 2020,
        "ratio": 17.5,
        "confidence": "high",
        "workerComp": 47000
      },
      {
        "year": 2024,
        "ratio": 19.4,
        "confidence": "high",
        "workerComp": 57440
      }
    ]
  },
  {
    "id": "024-public-transit-driver",
    "profession": "Public Transit Bus Driver",
    "industry": "Transportation",
    "summary": "The bus driver's share of total operating cost per trip has been cut nearly in half since 1960, falling from ~46% in the private-transit era to ~20–24% today. The sharpest decline occurred during the 1970s–1990s, as publicly-owned transit agencies built up administrative overhead, maintenance bureaucracies, and purchased-transportation contracts. Since 2000 the ratio has stabilized around 20–24%, with a slight recent uptick driven by pandemic-era driver shortages pushing wages higher. The driver didn't get cheaper — everything around the driver got more expensive.",
    "data": [
      {
        "year": 1960,
        "ratio": 46,
        "confidence": "low",
        "workerComp": 5500
      },
      {
        "year": 1970,
        "ratio": 37,
        "confidence": "low",
        "workerComp": 8500
      },
      {
        "year": 1980,
        "ratio": 31,
        "confidence": "low",
        "workerComp": 18000
      },
      {
        "year": 1990,
        "ratio": 27,
        "confidence": "med",
        "workerComp": 25000
      },
      {
        "year": 2000,
        "ratio": 23,
        "confidence": "med",
        "workerComp": 30000
      },
      {
        "year": 2005,
        "ratio": 22,
        "confidence": "med",
        "workerComp": 32500
      },
      {
        "year": 2010,
        "ratio": 20,
        "confidence": "med",
        "workerComp": 35500
      },
      {
        "year": 2015,
        "ratio": 22,
        "confidence": "med",
        "workerComp": 40000
      },
      {
        "year": 2019,
        "ratio": 24,
        "confidence": "med",
        "workerComp": 47000
      },
      {
        "year": 2024,
        "ratio": 24,
        "confidence": "med",
        "workerComp": 57440
      }
    ]
  },
  {
    "id": "025-firefighter",
    "profession": "Firefighter",
    "industry": "Public Safety",
    "summary": "The firefighter's share of what the taxpayer pays for fire protection has collapsed from ~90% in 1960 to ~30% in 2024. In 1960, fire departments were essentially payroll operations — almost every dollar went to the person on the truck. By 2024, pension obligations for retired firefighters, ballooning benefits costs, administrative overhead, and equipment expenses consume over two-thirds of every fire protection dollar, even as actual fire calls have dropped 55% since 1980. The fire service quietly transformed into an EMS/ambulance operation (64% of calls are now medical, only 4% are fires) while the cost structure grew as if the original mission had intensified.",
    "data": [
      {
        "year": 1960,
        "ratio": 90.1,
        "confidence": "low",
        "workerComp": 5300
      },
      {
        "year": 1970,
        "ratio": 85,
        "confidence": "low",
        "workerComp": 8500
      },
      {
        "year": 1980,
        "ratio": 67.1,
        "confidence": "med",
        "workerComp": 17000
      },
      {
        "year": 1990,
        "ratio": 56.2,
        "confidence": "med",
        "workerComp": 28000
      },
      {
        "year": 2000,
        "ratio": 45.2,
        "confidence": "med",
        "workerComp": 36000
      },
      {
        "year": 2010,
        "ratio": 37.3,
        "confidence": "high",
        "workerComp": 45250
      },
      {
        "year": 2020,
        "ratio": 32.9,
        "confidence": "high",
        "workerComp": 52500
      },
      {
        "year": 2024,
        "ratio": 29.5,
        "confidence": "med",
        "workerComp": 59530
      }
    ]
  },
  {
    "id": "026-police-officer",
    "profession": "Police Officer (Patrol)",
    "industry": "Public Safety",
    "summary": "The patrol officer's share of police spending has been cut roughly in half — from ~58% in 1960 to ~29% in 2024. Unlike firefighters, who started at 90% because their departments were pure payroll operations, police departments always had more overhead (patrol cars, specialized units, civilian staff). But both converge to roughly the same ~29% by 2024, driven by the same forces: ballooning pension obligations, rising benefits costs, expanding civilian staffing, technology investments, and legal liability. The steepest decline occurred 1980–2000 during the \"tough on crime\" era, when police budgets swelled with SWAT teams, forensics labs, surveillance systems, and administrative growth — none of which flowed to the street-level officer.",
    "data": [
      {
        "year": 1960,
        "ratio": 58.3,
        "confidence": "low",
        "workerComp": 5400
      },
      {
        "year": 1970,
        "ratio": 54.4,
        "confidence": "low",
        "workerComp": 9500
      },
      {
        "year": 1980,
        "ratio": 52.2,
        "confidence": "med",
        "workerComp": 19000
      },
      {
        "year": 1990,
        "ratio": 43.5,
        "confidence": "med",
        "workerComp": 31000
      },
      {
        "year": 2000,
        "ratio": 38.4,
        "confidence": "med",
        "workerComp": 43000
      },
      {
        "year": 2010,
        "ratio": 32.3,
        "confidence": "high",
        "workerComp": 55620
      },
      {
        "year": 2020,
        "ratio": 30.1,
        "confidence": "med",
        "workerComp": 68500
      },
      {
        "year": 2024,
        "ratio": 28.7,
        "confidence": "med",
        "workerComp": 74910
      }
    ]
  },
  {
    "id": "027-postal-worker",
    "profession": "Postal Worker (Mail Carrier)",
    "industry": "Public Safety",
    "summary": "The mail carrier's share of stamp-equivalent revenue has collapsed from ~80% in the 1960s to ~37% by 2020. Two inflection points drive the story: the 1970 Postal Reorganization Act (which forced USPS toward self-sufficiency, causing stamp prices to rise faster than wages) and the post-2006 email-driven mail volume crash (which shrank the workforce but pushed per-employee overhead costs far above salary). The carrier went from being practically the only cost of delivering mail to being barely a third of it.",
    "data": [
      {
        "year": 1960,
        "ratio": 77.1,
        "confidence": "low",
        "workerComp": 4800
      },
      {
        "year": 1970,
        "ratio": 80.8,
        "confidence": "med",
        "workerComp": 7500
      },
      {
        "year": 1980,
        "ratio": 63.9,
        "confidence": "med",
        "workerComp": 19000
      },
      {
        "year": 1990,
        "ratio": 53.1,
        "confidence": "med",
        "workerComp": 29000
      },
      {
        "year": 2000,
        "ratio": 44.8,
        "confidence": "med",
        "workerComp": 39000
      },
      {
        "year": 2005,
        "ratio": 39.9,
        "confidence": "high",
        "workerComp": 44460
      },
      {
        "year": 2010,
        "ratio": 39,
        "confidence": "high",
        "workerComp": 50250
      },
      {
        "year": 2015,
        "ratio": 34.2,
        "confidence": "high",
        "workerComp": 51130
      },
      {
        "year": 2020,
        "ratio": 37.1,
        "confidence": "high",
        "workerComp": 53180
      },
      {
        "year": 2024,
        "ratio": 36.6,
        "confidence": "med",
        "workerComp": 56000
      }
    ]
  },
  {
    "id": "028-corrections-officer",
    "profession": "Corrections Officer",
    "industry": "Public Safety",
    "summary": "The corrections officer's share of what taxpayers pay to incarcerate inmates has declined from roughly 32% in 1990 to about 21% in 2024. Officer wages have grown at roughly 2.7% annually over this period, but the cost of incarceration has grown at roughly 3.6% annually — with the gap driven primarily by exploding inmate healthcare costs, administrative overhead, and legal compliance mandates. The inmate-to-officer ratio has remained remarkably stable at approximately 5:1 across the entire period, so the story here is not about staffing changes but about non-personnel costs swelling around a stagnant workforce.",
    "data": [
      {
        "year": 1990,
        "ratio": 31.9,
        "confidence": "low",
        "workerComp": 23000
      },
      {
        "year": 1995,
        "ratio": 28.2,
        "confidence": "low",
        "workerComp": 26500
      },
      {
        "year": 2000,
        "ratio": 25,
        "confidence": "med",
        "workerComp": 30000
      },
      {
        "year": 2005,
        "ratio": 26.6,
        "confidence": "med",
        "workerComp": 36000
      },
      {
        "year": 2010,
        "ratio": 29.1,
        "confidence": "high",
        "workerComp": 42780
      },
      {
        "year": 2015,
        "ratio": 26.7,
        "confidence": "high",
        "workerComp": 44400
      },
      {
        "year": 2020,
        "ratio": 22.4,
        "confidence": "med",
        "workerComp": 47400
      },
      {
        "year": 2024,
        "ratio": 22.7,
        "confidence": "med",
        "workerComp": 57970
      }
    ]
  },
  {
    "id": "029-sanitation-worker",
    "profession": "Sanitation Worker",
    "industry": "Public Safety",
    "summary": "The sanitation worker's share of what households pay for garbage collection collapsed from roughly 68% in 1970–1980 to about 13% by 2020–2023. The ratio was remarkably stable during the manual-labor era (three-person rear-loader crews, cheap landfills, minimal regulation), then crashed during the late 1980s–1990s as environmental regulations dramatically increased non-labor costs and automation replaced multi-person crews with single-operator trucks. Today the person hauling your trash captures barely one-eighth of your garbage bill.",
    "data": [
      {
        "year": 1970,
        "ratio": 68.4,
        "confidence": "low",
        "workerComp": 6500
      },
      {
        "year": 1980,
        "ratio": 67.9,
        "confidence": "low",
        "workerComp": 14500
      },
      {
        "year": 1990,
        "ratio": 37.4,
        "confidence": "med",
        "workerComp": 21000
      },
      {
        "year": 2000,
        "ratio": 23.1,
        "confidence": "med",
        "workerComp": 26000
      },
      {
        "year": 2010,
        "ratio": 16.2,
        "confidence": "med",
        "workerComp": 32000
      },
      {
        "year": 2020,
        "ratio": 12.8,
        "confidence": "med-high",
        "workerComp": 36000
      },
      {
        "year": 2023,
        "ratio": 12.9,
        "confidence": "high",
        "workerComp": 40620
      }
    ]
  },
  {
    "id": "030-auto-mechanic",
    "profession": "Auto Mechanic",
    "industry": "Trades",
    "summary": "The auto mechanic's share of the customer's labor dollar has been cut roughly in half since 1970, falling from ~38% to ~18% by 2024. The ratio peaked around 1970 when shops had minimal overhead and mechanic wages were rising fast, then declined steadily as diagnostic equipment costs, regulatory compliance, insurance, support staff, and facility expenses ballooned. A sharp post-COVID spike in shop labor rates (the CPI for motor vehicle maintenance jumped 33% from 2020 to 2024) widened the gap further, pushing the ratio to its lowest point.",
    "data": [
      {
        "year": 1960,
        "ratio": 33.3,
        "confidence": "low",
        "workerComp": 6240
      },
      {
        "year": 1970,
        "ratio": 41.7,
        "confidence": "low",
        "workerComp": 10400
      },
      {
        "year": 1980,
        "ratio": 35.2,
        "confidence": "med",
        "workerComp": 19760
      },
      {
        "year": 1990,
        "ratio": 27.9,
        "confidence": "med",
        "workerComp": 24960
      },
      {
        "year": 2000,
        "ratio": 23.1,
        "confidence": "med",
        "workerComp": 28288
      },
      {
        "year": 2005,
        "ratio": 22.9,
        "confidence": "med/high",
        "workerComp": 32448
      },
      {
        "year": 2010,
        "ratio": 20.5,
        "confidence": "med/high",
        "workerComp": 34944
      },
      {
        "year": 2015,
        "ratio": 20.4,
        "confidence": "med/high",
        "workerComp": 38272
      },
      {
        "year": 2020,
        "ratio": 21,
        "confidence": "high",
        "workerComp": 44096
      },
      {
        "year": 2024,
        "ratio": 17.7,
        "confidence": "high",
        "workerComp": 49670
      }
    ]
  },
  {
    "id": "031-plumber",
    "profession": "Plumber",
    "industry": "Trades",
    "summary": "The plumber's share of the customer's labor dollar has eroded from roughly 50% in 1960 to about 32% in 2024 — a 36% decline over six decades. Unlike healthcare or education where ratios collapsed dramatically, plumbing shows a slow, steady slide driven by the cumulative weight of insurance, regulation, technology, and benefits costs. The trade's strong union tradition and licensing barriers have protected wages better than most blue-collar occupations, but overhead has grown faster than wages in every decade since 1970. The myth that \"trades are honest industries where the worker keeps a fair share\" is partially true — plumbers do better than auto mechanics (18%) or nurses (1.4%) — but the trend line points firmly downward.",
    "data": [
      {
        "year": 1960,
        "ratio": 50,
        "confidence": "low",
        "workerComp": 7800
      },
      {
        "year": 1970,
        "ratio": 50,
        "confidence": "low",
        "workerComp": 13520
      },
      {
        "year": 1980,
        "ratio": 46.3,
        "confidence": "med",
        "workerComp": 26000
      },
      {
        "year": 1990,
        "ratio": 43.4,
        "confidence": "med",
        "workerComp": 34320
      },
      {
        "year": 2000,
        "ratio": 41,
        "confidence": "med",
        "workerComp": 42640
      },
      {
        "year": 2005,
        "ratio": 39.1,
        "confidence": "med/high",
        "workerComp": 44720
      },
      {
        "year": 2010,
        "ratio": 36.9,
        "confidence": "med/high",
        "workerComp": 49920
      },
      {
        "year": 2015,
        "ratio": 34.7,
        "confidence": "med/high",
        "workerComp": 54080
      },
      {
        "year": 2020,
        "ratio": 32.4,
        "confidence": "high",
        "workerComp": 57200
      },
      {
        "year": 2024,
        "ratio": 31.9,
        "confidence": "high",
        "workerComp": 62962
      }
    ]
  },
  {
    "id": "032-electrician",
    "profession": "Electrician",
    "industry": "Trades",
    "summary": "The electrician's share of the customer's labor dollar has declined from roughly 50% in 1960 to about 33% in 2024 — a 33% decline over six decades. The trajectory is nearly identical to plumbing: same union heritage, same apprenticeship model, same slow overhead creep. The \"licensing moat\" from strict electrical codes doesn't meaningfully protect the ratio — it boosts absolute wages slightly but also adds compliance overhead that cancels much of the benefit. The ratio has stabilized somewhat since 2010, holding in the 33–36% range rather than continuing to freefall, suggesting the trades may be approaching an overhead ceiling.",
    "data": [
      {
        "year": 1960,
        "ratio": 50,
        "confidence": "low",
        "workerComp": 8320
      },
      {
        "year": 1970,
        "ratio": 50,
        "confidence": "low",
        "workerComp": 14560
      },
      {
        "year": 1980,
        "ratio": 46.6,
        "confidence": "med",
        "workerComp": 28080
      },
      {
        "year": 1990,
        "ratio": 43.8,
        "confidence": "med",
        "workerComp": 36400
      },
      {
        "year": 2000,
        "ratio": 40,
        "confidence": "med",
        "workerComp": 41600
      },
      {
        "year": 2005,
        "ratio": 38.2,
        "confidence": "med/high",
        "workerComp": 43680
      },
      {
        "year": 2010,
        "ratio": 36.2,
        "confidence": "med/high",
        "workerComp": 48880
      },
      {
        "year": 2015,
        "ratio": 35.4,
        "confidence": "med/high",
        "workerComp": 53040
      },
      {
        "year": 2020,
        "ratio": 34.1,
        "confidence": "high",
        "workerComp": 58240
      },
      {
        "year": 2024,
        "ratio": 33.3,
        "confidence": "high",
        "workerComp": 62400
      }
    ]
  },
  {
    "id": "033-hvac-technician",
    "profession": "HVAC Technician",
    "industry": "Trades",
    "summary": "The HVAC technician's share of what customers pay has been gradually declining — from roughly 26% in the early 2000s to about 19% today — even as absolute wages have grown significantly ($36K to $60K). The compression is driven by rising equipment costs (higher SEER requirements, refrigerant transitions), growing compliance overhead, technology platform fees, and the expansion of middleman layers like home warranty companies. The 2023-2024 period shows a slight rebound as a post-pandemic skilled-trade wage surge temporarily outpaced revenue growth.",
    "data": [
      {
        "year": 2004,
        "ratio": 25.6,
        "confidence": "low",
        "workerComp": 36100
      },
      {
        "year": 2008,
        "ratio": 24.2,
        "confidence": "low",
        "workerComp": 40200
      },
      {
        "year": 2012,
        "ratio": 22.5,
        "confidence": "med",
        "workerComp": 43640
      },
      {
        "year": 2015,
        "ratio": 20.7,
        "confidence": "med",
        "workerComp": 45110
      },
      {
        "year": 2018,
        "ratio": 19.4,
        "confidence": "med",
        "workerComp": 47610
      },
      {
        "year": 2020,
        "ratio": 19.1,
        "confidence": "med",
        "workerComp": 50590
      },
      {
        "year": 2022,
        "ratio": 17.9,
        "confidence": "med",
        "workerComp": 51390
      },
      {
        "year": 2024,
        "ratio": 19.3,
        "confidence": "med",
        "workerComp": 59810
      }
    ]
  },
  {
    "id": "034-general-contractor",
    "profession": "General Contractor",
    "industry": "Trades",
    "summary": "The general contractor's share of a new home's sale price has been remarkably stable at 14-18% over the past quarter century, averaging about 15.5%. This is measured as builder profit plus overhead/general expenses from NAHB surveys — which represents the GC/builder's total compensation after paying subcontractors, materials, land, and other costs. Meanwhile, total construction labor (all trades combined) accounts for roughly 30% of the final home price, and this share has been similarly stable despite massive nominal price increases. The big story isn't the GC's cut — it's that the GC ratio barely moves while the home price itself has quintupled since 1970.",
    "data": [
      {
        "year": 1970,
        "ratio": 15,
        "confidence": "low",
        "workerComp": 3510
      },
      {
        "year": 1980,
        "ratio": 15,
        "confidence": "low",
        "workerComp": 9690
      },
      {
        "year": 1990,
        "ratio": 15,
        "confidence": "low",
        "workerComp": 18435
      },
      {
        "year": 1998,
        "ratio": 14.9,
        "confidence": "high",
        "workerComp": 22723
      },
      {
        "year": 2002,
        "ratio": 17.5,
        "confidence": "high",
        "workerComp": 32830
      },
      {
        "year": 2004,
        "ratio": 15.6,
        "confidence": "high",
        "workerComp": 34476
      },
      {
        "year": 2007,
        "ratio": 18.2,
        "confidence": "high",
        "workerComp": 45118
      },
      {
        "year": 2009,
        "ratio": 14.3,
        "confidence": "high",
        "workerComp": 30988
      },
      {
        "year": 2017,
        "ratio": 16,
        "confidence": "med",
        "workerComp": 51472
      },
      {
        "year": 2019,
        "ratio": 14,
        "confidence": "high",
        "workerComp": 45136
      },
      {
        "year": 2022,
        "ratio": 15.2,
        "confidence": "high",
        "workerComp": 72884
      },
      {
        "year": 2024,
        "ratio": 16.7,
        "confidence": "high",
        "workerComp": 71192
      }
    ]
  },
  {
    "id": "035-roofer",
    "profession": "Roofer",
    "industry": "Trades",
    "summary": "The roofer's share of the customer dollar has declined from roughly 25% in 1990 to about 20% in 2024 — a modest but steady erosion. The decline was steepest in the 1990s and 2000s, driven by surging workers' compensation insurance costs (roofing has the highest injury rate of any occupation), rising material costs as asphalt shingles tracked oil prices, and the growing weight of regulatory compliance. The ratio stabilized around 19–20% after 2010 as acute labor shortages in roofing put upward pressure on wages, roughly matching cost inflation. Notably, when you strip out materials (which account for ~40% of a roof bill), the roofer's share of the labor-plus-overhead portion is ~31% — virtually identical to a plumber's. The lower headline ratio isn't because roofers are more exploited; it's because shingles are expensive.",
    "data": [
      {
        "year": 1990,
        "ratio": 25,
        "confidence": "low",
        "workerComp": 20800
      },
      {
        "year": 2000,
        "ratio": 21.7,
        "confidence": "low/med",
        "workerComp": 27040
      },
      {
        "year": 2005,
        "ratio": 20.3,
        "confidence": "med",
        "workerComp": 30576
      },
      {
        "year": 2010,
        "ratio": 19.5,
        "confidence": "med",
        "workerComp": 34424
      },
      {
        "year": 2015,
        "ratio": 18.8,
        "confidence": "high",
        "workerComp": 36712
      },
      {
        "year": 2020,
        "ratio": 19.7,
        "confidence": "high",
        "workerComp": 43576
      },
      {
        "year": 2024,
        "ratio": 19.6,
        "confidence": "high",
        "workerComp": 50960
      }
    ]
  },
  {
    "id": "036-restaurant-cook",
    "profession": "Line Cook",
    "industry": "Food & Hospitality",
    "summary": "The line cook's share of the customer's meal cost has roughly halved over 60 years, declining from about 11% in the mid-1960s to under 5% by 2023. Cook wages have risen ~12x in nominal terms ($1.40 to $17.02/hr), but average full-service meal prices have risen ~19x ($1.25 to $24.00), and cooks have also gotten more productive (more covers per hour due to better equipment and pre-prepped supply chains). The result: even though cooks earn more, they capture an ever-shrinking slice of each dollar the diner spends.",
    "data": [
      {
        "year": 1965,
        "ratio": 11.2,
        "confidence": "low",
        "workerComp": 2912
      },
      {
        "year": 1970,
        "ratio": 10,
        "confidence": "low",
        "workerComp": 4160
      },
      {
        "year": 1975,
        "ratio": 9.5,
        "confidence": "low",
        "workerComp": 5928
      },
      {
        "year": 1980,
        "ratio": 8,
        "confidence": "med",
        "workerComp": 7488
      },
      {
        "year": 1985,
        "ratio": 6.6,
        "confidence": "med",
        "workerComp": 9048
      },
      {
        "year": 1990,
        "ratio": 6.5,
        "confidence": "med",
        "workerComp": 11440
      },
      {
        "year": 1995,
        "ratio": 6.3,
        "confidence": "med",
        "workerComp": 14040
      },
      {
        "year": 2000,
        "ratio": 6.2,
        "confidence": "med-high",
        "workerComp": 16682
      },
      {
        "year": 2005,
        "ratio": 5.6,
        "confidence": "med-high",
        "workerComp": 19594
      },
      {
        "year": 2010,
        "ratio": 5.8,
        "confidence": "high",
        "workerComp": 22131
      },
      {
        "year": 2015,
        "ratio": 5.3,
        "confidence": "high",
        "workerComp": 24586
      },
      {
        "year": 2019,
        "ratio": 5.4,
        "confidence": "high",
        "workerComp": 28434
      },
      {
        "year": 2023,
        "ratio": 4.7,
        "confidence": "high",
        "workerComp": 35402
      }
    ]
  },
  {
    "id": "037-restaurant-server",
    "profession": "Restaurant Server",
    "industry": "Food & Hospitality",
    "summary": "The server's ratio is one of the most stable in the entire dataset, hovering between 14% and 18.5% across 55 years. This stability exists despite the federal tipped minimum wage being frozen at $2.13/hr since 1991 — the tipping mechanism acts as an automatic cost-of-living adjustment that few other industries enjoy. The ratio peaked around 1980 (~18.5%) when the base wage was relatively generous, and has gradually settled to ~14-15% as the frozen base wage's contribution eroded from ~8% of the ratio to ~2%. Rising tip norms (12% actual average in 1970 → 20% in 2024) partially compensated, but didn't fully offset the base wage collapse.",
    "data": [
      {
        "year": 1970,
        "ratio": 17.4,
        "confidence": "low",
        "workerComp": 3640
      },
      {
        "year": 1975,
        "ratio": 17,
        "confidence": "low",
        "workerComp": 5200
      },
      {
        "year": 1980,
        "ratio": 18.5,
        "confidence": "med",
        "workerComp": 8736
      },
      {
        "year": 1985,
        "ratio": 17,
        "confidence": "med",
        "workerComp": 10400
      },
      {
        "year": 1990,
        "ratio": 16.2,
        "confidence": "med",
        "workerComp": 12272
      },
      {
        "year": 1995,
        "ratio": 15.8,
        "confidence": "med",
        "workerComp": 13520
      },
      {
        "year": 2000,
        "ratio": 15.4,
        "confidence": "med",
        "workerComp": 15080
      },
      {
        "year": 2005,
        "ratio": 14.5,
        "confidence": "med",
        "workerComp": 16432
      },
      {
        "year": 2010,
        "ratio": 14.1,
        "confidence": "med",
        "workerComp": 18720
      },
      {
        "year": 2015,
        "ratio": 15.5,
        "confidence": "med",
        "workerComp": 21840
      },
      {
        "year": 2020,
        "ratio": 14.5,
        "confidence": "med",
        "workerComp": 23920
      },
      {
        "year": 2024,
        "ratio": 14.7,
        "confidence": "high",
        "workerComp": 33758
      }
    ]
  },
  {
    "id": "038-bartender",
    "profession": "Bartender",
    "industry": "Food & Hospitality",
    "summary": "The bartender's share of drink revenue follows a gentle U-curve: roughly 24% in 1980, compressing to ~17.5% through the 2000s–2010s as drink prices outpaced wage growth, then recovering to ~21.5% by 2024 as post-pandemic labor shortages drove aggressive wage increases. Bartending is unique among service industries because a significant portion of worker compensation (tips) bypasses the business entirely, flowing directly from customer to worker. This makes the bartender's effective share of total customer spending much higher than the bar's labor cost line would suggest.",
    "data": [
      {
        "year": 1980,
        "ratio": 24.1,
        "confidence": "low",
        "workerComp": 13104
      },
      {
        "year": 1990,
        "ratio": 19.8,
        "confidence": "low",
        "workerComp": 18720
      },
      {
        "year": 2000,
        "ratio": 18,
        "confidence": "med",
        "workerComp": 24336
      },
      {
        "year": 2005,
        "ratio": 17.5,
        "confidence": "med",
        "workerComp": 28080
      },
      {
        "year": 2010,
        "ratio": 17.8,
        "confidence": "med",
        "workerComp": 34070
      },
      {
        "year": 2015,
        "ratio": 18,
        "confidence": "med",
        "workerComp": 38938
      },
      {
        "year": 2020,
        "ratio": 19.5,
        "confidence": "med",
        "workerComp": 46426
      },
      {
        "year": 2024,
        "ratio": 21.5,
        "confidence": "med",
        "workerComp": 60362
      }
    ]
  },
  {
    "id": "039-hotel-housekeeper",
    "profession": "Hotel Housekeeper",
    "industry": "Food & Hospitality",
    "summary": "The hotel housekeeper's share of the room rate has been remarkably low and stable — hovering between 4.7% and 5.5% for over three decades, with a brief dip to ~4.7% during the pre-recession peak (2008) and a COVID-era anomaly. Unlike healthcare or education where the fundamental worker ratio collapsed, the hotel housekeeper ratio was already near rock-bottom by 1980 and has barely moved since. The main story is that in the 1970s a housekeeper's daily wage could pay for a room; by the 2020s it covers about 77% of one — but her per-room labor share was always tiny because she cleans 13–14 rooms per shift.",
    "annualSalary2024": 36000,
    "data": [
      {
        "year": 1970,
        "ratio": 7.3,
        "confidence": "low",
        "workerComp": 13
      },
      {
        "year": 1980,
        "ratio": 5.5,
        "confidence": "low",
        "workerComp": 27
      },
      {
        "year": 1990,
        "ratio": 4.9,
        "confidence": "med",
        "workerComp": 38
      },
      {
        "year": 2000,
        "ratio": 4.7,
        "confidence": "med",
        "workerComp": 56
      },
      {
        "year": 2005,
        "ratio": 5,
        "confidence": "med",
        "workerComp": 64
      },
      {
        "year": 2008,
        "ratio": 4.7,
        "confidence": "high",
        "workerComp": 70
      },
      {
        "year": 2010,
        "ratio": 5.4,
        "confidence": "high",
        "workerComp": 74
      },
      {
        "year": 2015,
        "ratio": 4.9,
        "confidence": "high",
        "workerComp": 82
      },
      {
        "year": 2019,
        "ratio": 5.2,
        "confidence": "high",
        "workerComp": 96
      },
      {
        "year": 2020,
        "ratio": 6.9,
        "confidence": "med",
        "workerComp": 100
      },
      {
        "year": 2023,
        "ratio": 5.5,
        "confidence": "high",
        "workerComp": 120
      }
    ]
  },
  {
    "id": "040-barber-hairstylist",
    "profession": "Barber / Hairstylist",
    "industry": "Personal Services",
    "summary": "Even in the \"control case\" of barbering — perhaps the purest one-worker-one-customer service that exists — the fundamental worker ratio has declined substantially, from roughly 85% in 1960 to about 50–56% today. The decline tracks the shift from owner-operator barbershops to chain employment (Supercuts, Great Clips) and rising commercial overhead. A modest recovery since ~2018 coincides with the \"barber revival\" (premium independent shops, booth-rental model, tight labor market), but the ratio remains far below its mid-century peak.",
    "data": [
      {
        "year": 1960,
        "ratio": 86,
        "confidence": "low",
        "workerComp": 4000
      },
      {
        "year": 1970,
        "ratio": 75,
        "confidence": "low",
        "workerComp": 6000
      },
      {
        "year": 1980,
        "ratio": 75,
        "confidence": "low",
        "workerComp": 11500
      },
      {
        "year": 1990,
        "ratio": 63,
        "confidence": "med",
        "workerComp": 16500
      },
      {
        "year": 2000,
        "ratio": 55,
        "confidence": "med",
        "workerComp": 20000
      },
      {
        "year": 2005,
        "ratio": 53,
        "confidence": "med",
        "workerComp": 22000
      },
      {
        "year": 2010,
        "ratio": 51,
        "confidence": "med",
        "workerComp": 24000
      },
      {
        "year": 2015,
        "ratio": 49,
        "confidence": "high",
        "workerComp": 24850
      },
      {
        "year": 2020,
        "ratio": 56,
        "confidence": "high",
        "workerComp": 32470
      },
      {
        "year": 2024,
        "ratio": 56,
        "confidence": "high",
        "workerComp": 38960
      }
    ]
  },
  {
    "id": "041-funeral-director",
    "profession": "Funeral Director",
    "industry": "Personal Services",
    "summary": "The funeral director's share of the funeral dollar has been in steady decline since the 1960s, dropping from roughly 15–18% to around 8–10%. Funeral costs have risen 11.7× since 1960 (from $708 to $8,300), dramatically outpacing funeral director wage growth (~9× over the same period). The main drivers are industry consolidation by corporations like Service Corporation International, rising casket and facility markups, and growing corporate overhead — the classic pattern where the customer pays more but the worker doesn't see it. The FTC Funeral Rule (1984) and the cremation revolution haven't reversed the trend.",
    "data": [
      {
        "year": 1960,
        "ratio": 15.9,
        "confidence": "low",
        "workerComp": 6200
      },
      {
        "year": 1970,
        "ratio": 18.2,
        "confidence": "low",
        "workerComp": 10500
      },
      {
        "year": 1980,
        "ratio": 19.6,
        "confidence": "low",
        "workerComp": 19500
      },
      {
        "year": 1985,
        "ratio": 15.4,
        "confidence": "low",
        "workerComp": 24000
      },
      {
        "year": 1990,
        "ratio": 12.3,
        "confidence": "low",
        "workerComp": 28000
      },
      {
        "year": 1996,
        "ratio": 10.5,
        "confidence": "med",
        "workerComp": 34000
      },
      {
        "year": 2000,
        "ratio": 10.3,
        "confidence": "med",
        "workerComp": 39000
      },
      {
        "year": 2006,
        "ratio": 9.5,
        "confidence": "med",
        "workerComp": 47000
      },
      {
        "year": 2012,
        "ratio": 8.7,
        "confidence": "med",
        "workerComp": 50000
      },
      {
        "year": 2014,
        "ratio": 9.1,
        "confidence": "med",
        "workerComp": 52000
      },
      {
        "year": 2019,
        "ratio": 9.5,
        "confidence": "med",
        "workerComp": 55000
      },
      {
        "year": 2023,
        "ratio": 9.4,
        "confidence": "med",
        "workerComp": 57000
      }
    ]
  },
  {
    "id": "042-massage-therapist",
    "profession": "Massage Therapist",
    "industry": "Personal Services",
    "summary": "The employed massage therapist's share of the session fee has been gradually *improving* — from roughly 39% in the early 2000s to about 58% by 2024. This is counterintuitive given the Massage Envy narrative (franchise takes 65%+), but the explanation is straightforward: therapist wages have grown at ~3.7% annually while average session prices have been held down (~1.7% CAGR) by franchise competition and membership-model discounting. The franchise model simultaneously depresses both the numerator (therapist pay) and the denominator (session price), but session prices have been suppressed more. Meanwhile, the 67% of therapists who are self-employed — and aren't captured by BLS data — likely maintain ratios of 70–85%, making this one of the highest \"true\" fundamental worker ratios on the graph if measured correctly.",
    "data": [
      {
        "year": 2003,
        "ratio": 38.6,
        "confidence": "low",
        "workerComp": 27000
      },
      {
        "year": 2005,
        "ratio": 40,
        "confidence": "low",
        "workerComp": 29000
      },
      {
        "year": 2008,
        "ratio": 39.3,
        "confidence": "low",
        "workerComp": 30000
      },
      {
        "year": 2010,
        "ratio": 40,
        "confidence": "med",
        "workerComp": 32000
      },
      {
        "year": 2012,
        "ratio": 41.3,
        "confidence": "med",
        "workerComp": 34100
      },
      {
        "year": 2015,
        "ratio": 43.6,
        "confidence": "med",
        "workerComp": 37600
      },
      {
        "year": 2018,
        "ratio": 46,
        "confidence": "high",
        "workerComp": 41420
      },
      {
        "year": 2020,
        "ratio": 47,
        "confidence": "med",
        "workerComp": 43500
      },
      {
        "year": 2022,
        "ratio": 52.5,
        "confidence": "high",
        "workerComp": 49860
      },
      {
        "year": 2024,
        "ratio": 58,
        "confidence": "high",
        "workerComp": 57950
      }
    ]
  },
  {
    "id": "043-personal-trainer",
    "profession": "Personal Trainer",
    "industry": "Professional",
    "summary": "Personal trainers capture roughly 49–60% of what clients pay per session, and the ratio has been gradually compressing. In the early 2000s, trainers averaged about 60% of session revenue. By 2015, that had fallen to ~49%, where it has roughly stabilized. The key driver is a structural shift: as big-box gym chains captured more of the personal training market, they inserted themselves between trainer and client, taking 50–70% of session fees while trainer hourly wages stagnated. Independent trainers maintain near-100% ratios, but they're a shrinking share of the market.",
    "annualSalary2024": 51000,
    "data": [
      {
        "year": 2000,
        "ratio": 60,
        "confidence": "low",
        "workerComp": 29
      },
      {
        "year": 2004,
        "ratio": 60,
        "confidence": "med",
        "workerComp": 31
      },
      {
        "year": 2006,
        "ratio": 55,
        "confidence": "med",
        "workerComp": 31
      },
      {
        "year": 2008,
        "ratio": 58,
        "confidence": "med",
        "workerComp": 35
      },
      {
        "year": 2010,
        "ratio": 57,
        "confidence": "med",
        "workerComp": 34
      },
      {
        "year": 2013,
        "ratio": 51,
        "confidence": "med",
        "workerComp": 31
      },
      {
        "year": 2015,
        "ratio": 49,
        "confidence": "med",
        "workerComp": 31
      },
      {
        "year": 2020,
        "ratio": 48,
        "confidence": "low",
        "workerComp": 28
      },
      {
        "year": 2025,
        "ratio": 49,
        "confidence": "med",
        "workerComp": 32
      }
    ]
  },
  {
    "id": "044-concert-musician",
    "profession": "Concert Musician / Performing Artist",
    "industry": "Entertainment",
    "summary": "The performing artist's share of what a concertgoer pays has been cut nearly in half over three decades — from roughly 65% in 1996 to 39% in 2024. Ticket prices have risen 427% ($25.81 to $135.92), but the artist's per-ticket gross earnings have only tripled. The difference has been captured by an explosion in ticketing fees (from ~5% to ~25% of total price), escalating production costs, and the vertical consolidation of the live music industry through the Live Nation–Ticketmaster merger. Paradoxically, artists earn more dollars per ticket than ever, but the customer's dollar buys less musician and more middleman.",
    "annualSalary2024": 49000,
    "data": [
      {
        "year": 1996,
        "ratio": 65,
        "confidence": "med",
        "workerComp": 17
      },
      {
        "year": 2000,
        "ratio": 60,
        "confidence": "med",
        "workerComp": 26
      },
      {
        "year": 2005,
        "ratio": 53,
        "confidence": "med",
        "workerComp": 30
      },
      {
        "year": 2008,
        "ratio": 49,
        "confidence": "med",
        "workerComp": 33
      },
      {
        "year": 2010,
        "ratio": 46,
        "confidence": "med",
        "workerComp": 35
      },
      {
        "year": 2015,
        "ratio": 43,
        "confidence": "med",
        "workerComp": 34
      },
      {
        "year": 2019,
        "ratio": 41,
        "confidence": "med",
        "workerComp": 39
      },
      {
        "year": 2022,
        "ratio": 40,
        "confidence": "med",
        "workerComp": 42
      },
      {
        "year": 2024,
        "ratio": 39,
        "confidence": "med",
        "workerComp": 53
      }
    ]
  },
  {
    "id": "045-professional-athlete",
    "profession": "Professional Athlete (MLB)",
    "industry": "Entertainment",
    "summary": "The professional athlete's share of revenue tells a dramatic three-act story: suppression under the reserve clause (~12-17% before 1976), explosive growth after free agency pushed the ratio to a peak of ~56% in 1995, then a steady decline back to ~31-33% as league revenue growth (driven by TV deals and streaming) outpaced salary growth. Despite average salaries rising from $19,000 to $4.9 million, players now capture a smaller share of the pie than they did in the late 1990s because the pie grew even faster.",
    "data": [
      {
        "year": 1967,
        "ratio": 11.9,
        "confidence": "low",
        "workerComp": 19000
      },
      {
        "year": 1970,
        "ratio": 14.7,
        "confidence": "low",
        "workerComp": 29303
      },
      {
        "year": 1975,
        "ratio": 17.4,
        "confidence": "low",
        "workerComp": 44676
      },
      {
        "year": 1980,
        "ratio": 27.5,
        "confidence": "med",
        "workerComp": 143756
      },
      {
        "year": 1985,
        "ratio": 36.3,
        "confidence": "med",
        "workerComp": 371571
      },
      {
        "year": 1990,
        "ratio": 37.3,
        "confidence": "med",
        "workerComp": 597537
      },
      {
        "year": 1995,
        "ratio": 56.3,
        "confidence": "med",
        "workerComp": 1110766
      },
      {
        "year": 2000,
        "ratio": 47.4,
        "confidence": "med",
        "workerComp": 1895630
      },
      {
        "year": 2005,
        "ratio": 35.7,
        "confidence": "med",
        "workerComp": 2476589
      },
      {
        "year": 2010,
        "ratio": 32.3,
        "confidence": "med",
        "workerComp": 3014572
      },
      {
        "year": 2015,
        "ratio": 33.6,
        "confidence": "med",
        "workerComp": 4250000
      },
      {
        "year": 2019,
        "ratio": 30.7,
        "confidence": "med",
        "workerComp": 4380000
      },
      {
        "year": 2023,
        "ratio": 32.9,
        "confidence": "high",
        "workerComp": 4900000
      }
    ]
  },
  {
    "id": "046-standup-comedian",
    "profession": "Stand-Up Comedian (Feature Act)",
    "industry": "Entertainment",
    "summary": "Stand-up comedy at the club level is one of the most extractive industries in entertainment. Feature act pay has been frozen at roughly $75–100 per show since the mid-1980s — a rate that was literally won through a labor strike in 1979 and has barely moved since. Meanwhile, ticket prices have quintupled and drink prices have quadrupled. The comedian's share of total customer spend has collapsed from ~3% in the 1980s to ~1% today. The two-drink minimum, originally designed to keep the lights on, now generates more revenue per show than the entire talent budget.",
    "annualSalary2024": 25000,
    "data": [
      {
        "year": 1975,
        "ratio": 0,
        "confidence": "med",
        "workerComp": 0
      },
      {
        "year": 1979,
        "ratio": 2.8,
        "confidence": "med",
        "workerComp": 25
      },
      {
        "year": 1985,
        "ratio": 2.9,
        "confidence": "med",
        "workerComp": 75
      },
      {
        "year": 1990,
        "ratio": 3.5,
        "confidence": "med",
        "workerComp": 100
      },
      {
        "year": 1995,
        "ratio": 3.2,
        "confidence": "low",
        "workerComp": 100
      },
      {
        "year": 2000,
        "ratio": 2.5,
        "confidence": "med",
        "workerComp": 100
      },
      {
        "year": 2005,
        "ratio": 2.1,
        "confidence": "low",
        "workerComp": 100
      },
      {
        "year": 2010,
        "ratio": 1.7,
        "confidence": "med",
        "workerComp": 100
      },
      {
        "year": 2015,
        "ratio": 1.4,
        "confidence": "med",
        "workerComp": 100
      },
      {
        "year": 2020,
        "ratio": 1.3,
        "confidence": "med",
        "workerComp": 100
      },
      {
        "year": 2025,
        "ratio": 1.1,
        "confidence": "med",
        "workerComp": 100
      }
    ]
  },
  {
    "id": "047-movie-theater-worker",
    "profession": "Movie Theater Worker",
    "industry": "Entertainment",
    "summary": "The movie theater worker's share of ticket revenue has been remarkably stable at 17–21% for five decades, despite massive structural changes — the death of the unionized projectionist, the multiplex revolution, digital projection, and premium formats. Two notable dips coincide with the two longest federal minimum wage freezes (1981–1990 and 1997–2009), when wages stagnated while ticket prices kept climbing. The ratio recovers each time the minimum wage catches up. Post-2015, the federal minimum understates actual theater wages as state minimums have diverged sharply upward.",
    "data": [
      {
        "year": 1970,
        "ratio": 21,
        "confidence": "low",
        "workerComp": 3328
      },
      {
        "year": 1980,
        "ratio": 19.7,
        "confidence": "low",
        "workerComp": 6448
      },
      {
        "year": 1990,
        "ratio": 16.8,
        "confidence": "med",
        "workerComp": 7904
      },
      {
        "year": 2000,
        "ratio": 18.9,
        "confidence": "med",
        "workerComp": 10712
      },
      {
        "year": 2007,
        "ratio": 16.8,
        "confidence": "high",
        "workerComp": 12168
      },
      {
        "year": 2010,
        "ratio": 18,
        "confidence": "high",
        "workerComp": 15080
      },
      {
        "year": 2019,
        "ratio": 18.7,
        "confidence": "med",
        "workerComp": 15080
      }
    ]
  },
  {
    "id": "048-real-estate-agent",
    "profession": "Agent (Home Sales)",
    "industry": "Professional",
    "summary": "The real estate agent's ratio has gradually improved from ~25% to ~35% over five decades — one of the few industries where the worker's share has grown. This is driven entirely by the proliferation of agent-friendly brokerage models (RE/MAX's 100% model in 1973, Keller Williams's cap system in the 2000s, eXp's virtual model in the 2010s). Meanwhile, the total commission rate has barely budged — sliding from ~6% to ~5% over 30+ years despite massive technological disruption — meaning the dollar amount of commissions has skyrocketed with home prices. The 2024 NAR antitrust settlement was supposed to blow this up; early data shows commission rates bounced back to pre-settlement levels within months.",
    "annualSalary2024": 57000,
    "data": [
      {
        "year": 1960,
        "ratio": 25,
        "confidence": "low",
        "workerComp": 265
      },
      {
        "year": 1970,
        "ratio": 25,
        "confidence": "low",
        "workerComp": 369
      },
      {
        "year": 1980,
        "ratio": 25,
        "confidence": "low",
        "workerComp": 852
      },
      {
        "year": 1991,
        "ratio": 26,
        "confidence": "med",
        "workerComp": 1665
      },
      {
        "year": 1995,
        "ratio": 29.2,
        "confidence": "med",
        "workerComp": 1830
      },
      {
        "year": 2000,
        "ratio": 27.5,
        "confidence": "med",
        "workerComp": 2013
      },
      {
        "year": 2005,
        "ratio": 29,
        "confidence": "med",
        "workerComp": 2921
      },
      {
        "year": 2010,
        "ratio": 30,
        "confidence": "med",
        "workerComp": 2971
      },
      {
        "year": 2015,
        "ratio": 32.5,
        "confidence": "med",
        "workerComp": 3580
      },
      {
        "year": 2020,
        "ratio": 33.5,
        "confidence": "high",
        "workerComp": 4550
      },
      {
        "year": 2023,
        "ratio": 26.6,
        "confidence": "high",
        "workerComp": 5538
      },
      {
        "year": 2024,
        "ratio": 35,
        "confidence": "high",
        "workerComp": 7247
      }
    ]
  },
  {
    "id": "049-home-inspector",
    "profession": "Home Inspector",
    "industry": "Trades",
    "summary": "Home inspection is one of the most transparent services in real estate: one person, one house, one fee, no middlemen. The fundamental worker ratio is remarkably high (~70–80%) and has been slowly declining as the industry professionalized — licensing requirements, mandatory E&O insurance, report-writing software, and continuing education have all added overhead since the industry's informal origins in the 1970s–80s. This is the \"control case\" for real estate: adjacent to home buying but free of commission distortion.",
    "data": [
      {
        "year": 1990,
        "ratio": 80,
        "confidence": "low",
        "workerComp": 28000
      },
      {
        "year": 1995,
        "ratio": 78,
        "confidence": "low",
        "workerComp": 39500
      },
      {
        "year": 2000,
        "ratio": 77,
        "confidence": "low-med",
        "workerComp": 48000
      },
      {
        "year": 2005,
        "ratio": 75,
        "confidence": "med",
        "workerComp": 59600
      },
      {
        "year": 2010,
        "ratio": 73,
        "confidence": "med",
        "workerComp": 41400
      },
      {
        "year": 2015,
        "ratio": 72,
        "confidence": "med",
        "workerComp": 53800
      },
      {
        "year": 2020,
        "ratio": 72,
        "confidence": "med",
        "workerComp": 55400
      },
      {
        "year": 2025,
        "ratio": 70,
        "confidence": "med",
        "workerComp": 64400
      }
    ]
  },
  {
    "id": "050-architect",
    "profession": "Architect",
    "industry": "Professional",
    "summary": "The architecture firm's fee as a share of residential construction cost has been surprisingly stable — declining only modestly from ~12% in the AIA-schedule era (pre-1972) to ~10% today. Contrary to the common \"race to the bottom\" narrative, US residential architect fees never collapsed. The 1972 and 1990 DOJ antitrust actions removed AIA-published fee guidance, but the market rate for custom home design barely budged. The real erosion is invisible in the fee percentage: within that stable ~10% fee, a growing share now goes to subconsultants, technology, insurance, and overhead, leaving the individual architect's take-home declining relative to construction costs.",
    "annualSalary2024": 93000,
    "data": [
      {
        "year": 1960,
        "ratio": 12,
        "confidence": "low",
        "workerComp": 1580
      },
      {
        "year": 1970,
        "ratio": 12,
        "confidence": "low",
        "workerComp": 2110
      },
      {
        "year": 1980,
        "ratio": 10,
        "confidence": "low",
        "workerComp": 4520
      },
      {
        "year": 1990,
        "ratio": 10,
        "confidence": "low",
        "workerComp": 7990
      },
      {
        "year": 2000,
        "ratio": 10,
        "confidence": "med",
        "workerComp": 10140
      },
      {
        "year": 2010,
        "ratio": 10,
        "confidence": "med",
        "workerComp": 13090
      },
      {
        "year": 2020,
        "ratio": 10,
        "confidence": "med",
        "workerComp": 20550
      },
      {
        "year": 2024,
        "ratio": 10,
        "confidence": "med",
        "workerComp": 27070
      }
    ]
  },
  {
    "id": "051-journalist",
    "profession": "Journalist / Reporter",
    "industry": "Professional",
    "summary": "Journalists have consistently captured only 3-5% of what customers (subscribers + advertisers) pay into the newspaper system. The advertising bubble of the 1990s-2000s inflated revenue per journalist past $1 million while salaries barely moved, compressing the ratio to under 3%. When the bubble burst, the ratio \"improved\" — not because journalists got paid more, but because revenue collapsed faster than headcount. The fundamental story: the advertising-funded newspaper model was never really about paying for journalism.",
    "data": [
      {
        "year": 1960,
        "ratio": 3.6,
        "confidence": "low",
        "workerComp": 6000
      },
      {
        "year": 1970,
        "ratio": 4.3,
        "confidence": "low",
        "workerComp": 9500
      },
      {
        "year": 1980,
        "ratio": 3.8,
        "confidence": "med",
        "workerComp": 17000
      },
      {
        "year": 1990,
        "ratio": 3.6,
        "confidence": "med",
        "workerComp": 25000
      },
      {
        "year": 2000,
        "ratio": 2.6,
        "confidence": "med",
        "workerComp": 28000
      },
      {
        "year": 2005,
        "ratio": 2.9,
        "confidence": "med",
        "workerComp": 32000
      },
      {
        "year": 2010,
        "ratio": 4,
        "confidence": "med",
        "workerComp": 34500
      },
      {
        "year": 2015,
        "ratio": 4.3,
        "confidence": "med",
        "workerComp": 37000
      },
      {
        "year": 2020,
        "ratio": 5.1,
        "confidence": "med",
        "workerComp": 43000
      }
    ]
  },
  {
    "id": "052-wedding-photographer",
    "profession": "Wedding Photographer",
    "industry": "Professional",
    "summary": "The wedding photographer's ratio has been remarkably stable at ~30–37% across three decades — but the composition of costs has completely transformed underneath. In the film era (~1990), material costs (film, processing, prints/albums) consumed 25–30% of revenue, leaving the photographer ~30% after all overhead. The digital transition (2000–2005) temporarily boosted margins to ~38–42% as film costs vanished but prices didn't drop. By 2010, new digital-era expenses (platform fees, software subscriptions, faster equipment depreciation, social media marketing) had filled the gap, returning the ratio to ~33–35% where it has flatlined. The \"wedding tax\" — couples paying 3–6× more for photography than a comparable corporate or portrait session — doesn't enrich the photographer; their effective hourly rate ($50–75 gross) is actually *lower* than a portrait photographer's ($100–250/hr) because wedding work demands 40–50 total hours per event.",
    "data": [
      {
        "year": 1990,
        "ratio": 30,
        "confidence": "low",
        "workerComp": 11700
      },
      {
        "year": 2000,
        "ratio": 40,
        "confidence": "low",
        "workerComp": 20160
      },
      {
        "year": 2005,
        "ratio": 42,
        "confidence": "low",
        "workerComp": 23100
      },
      {
        "year": 2008,
        "ratio": 35,
        "confidence": "med",
        "workerComp": 23200
      },
      {
        "year": 2010,
        "ratio": 32,
        "confidence": "med",
        "workerComp": 18400
      },
      {
        "year": 2015,
        "ratio": 33,
        "confidence": "med",
        "workerComp": 21600
      },
      {
        "year": 2017,
        "ratio": 35,
        "confidence": "high",
        "workerComp": 23000
      },
      {
        "year": 2019,
        "ratio": 33,
        "confidence": "med",
        "workerComp": 19800
      },
      {
        "year": 2022,
        "ratio": 33,
        "confidence": "med",
        "workerComp": 21450
      },
      {
        "year": 2024,
        "ratio": 35,
        "confidence": "med",
        "workerComp": 25375
      }
    ]
  },
  {
    "id": "053-locksmith",
    "profession": "Locksmith",
    "industry": "Trades",
    "summary": "The locksmith ratio is remarkably high (~40-45%) and has been relatively stable over the past two decades — reflecting an industry with minimal institutional overhead where the worker IS the product. A modest decline from ~44% to ~40% is visible in recent years (2017-2024), driven by escalating digital marketing costs, the growth of dispatch middlemen, and the shift toward higher-value electronic/smart lock work that inflates the per-visit bill faster than wages rise. Locksmithing remains one of the purest \"person with tools\" trades, but the customer-acquisition layer is slowly capturing more of the transaction.",
    "data": [
      {
        "year": 2005,
        "ratio": 43,
        "confidence": "low",
        "workerComp": 32700
      },
      {
        "year": 2008,
        "ratio": 43,
        "confidence": "low",
        "workerComp": 34700
      },
      {
        "year": 2013,
        "ratio": 44,
        "confidence": "med",
        "workerComp": 37950
      },
      {
        "year": 2017,
        "ratio": 44,
        "confidence": "med",
        "workerComp": 40680
      },
      {
        "year": 2022,
        "ratio": 46,
        "confidence": "med",
        "workerComp": 47400
      },
      {
        "year": 2024,
        "ratio": 40,
        "confidence": "med",
        "workerComp": 48340
      }
    ]
  },
  {
    "id": "054-pest-control",
    "profession": "Pest Control Technician",
    "industry": "Trades",
    "summary": "The pest control technician's share of industry revenue has been remarkably stable at roughly 22–25% over the past two decades, despite massive industry consolidation (Rollins/Orkin, Rentokil/Terminix). However, the per-visit story is different: when measured against the price of a single one-time service call, the tech's labor cost has shrunk from ~17% to ~13%, because visit prices have risen faster than wages. The gap is explained by productivity — techs now serve more customers per day through recurring subscription plans, which compensates for the lower per-visit share.",
    "data": [
      {
        "year": 2000,
        "ratio": 24.1,
        "confidence": "low",
        "workerComp": 26000
      },
      {
        "year": 2004,
        "ratio": 23.6,
        "confidence": "low",
        "workerComp": 27830
      },
      {
        "year": 2010,
        "ratio": 23.3,
        "confidence": "med",
        "workerComp": 32340
      },
      {
        "year": 2015,
        "ratio": 21.6,
        "confidence": "med",
        "workerComp": 33930
      },
      {
        "year": 2020,
        "ratio": 22.7,
        "confidence": "med",
        "workerComp": 40150
      },
      {
        "year": 2024,
        "ratio": 23,
        "confidence": "med",
        "workerComp": 45800
      }
    ]
  },
  {
    "id": "055-security-guard",
    "profession": "Security Guard (Unarmed, Contract)",
    "industry": "Professional",
    "summary": "The security guard's share of what clients pay has been remarkably stable at roughly 60–67% over decades — one of the flattest lines in this entire dataset. Real wages have been essentially stagnant since at least 2003 ($17.05/hr in 2024 dollars then vs. $17.03 in 2022), but billing rates moved in lockstep, keeping the ratio steady. The real story isn't a collapsing ratio — it's that both the numerator and denominator are anchored near the bottom of the labor market, and the ~35–40% spread covers a well-documented stack of payroll taxes, workers' comp insurance, liability coverage, supervision, and a thin 10–15% profit margin.",
    "annualSalary2024": 35000,
    "data": [
      {
        "year": 1980,
        "ratio": 66.7,
        "confidence": "low",
        "workerComp": 5
      },
      {
        "year": 1990,
        "ratio": 65.8,
        "confidence": "low",
        "workerComp": 6
      },
      {
        "year": 2000,
        "ratio": 64.3,
        "confidence": "med",
        "workerComp": 9
      },
      {
        "year": 2005,
        "ratio": 64.6,
        "confidence": "med",
        "workerComp": 11
      },
      {
        "year": 2010,
        "ratio": 66.1,
        "confidence": "med",
        "workerComp": 12
      },
      {
        "year": 2015,
        "ratio": 64.1,
        "confidence": "med",
        "workerComp": 13
      },
      {
        "year": 2019,
        "ratio": 59.7,
        "confidence": "high",
        "workerComp": 14
      },
      {
        "year": 2022,
        "ratio": 64,
        "confidence": "med-high",
        "workerComp": 16
      },
      {
        "year": 2024,
        "ratio": 61.5,
        "confidence": "high",
        "workerComp": 18
      }
    ]
  },
  {
    "id": "056-exotic-dancer",
    "profession": "Exotic Dancer / Stripper",
    "industry": "Personal Services",
    "summary": "This is one of the most unusual entries in the dataset: the exotic dancer is classified as an independent contractor who *pays the venue* to work, earns nothing from the venue itself, and relies entirely on direct tips and dance fees from customers. The dancer's share of total customer spending has likely declined from roughly 60-70% in the early 1990s to 35-45% by the 2020s, driven by rising house fees, stagnant lap dance prices ($20 since ~1990), and the venue capturing an ever-larger share through inflated drink prices, VIP room surcharges, and \"funny money\" exchange fees. The COVID-19 pandemic and OnlyFans (where performers keep 80%) have disrupted the model, but the in-person club economics remain heavily tilted toward the house.",
    "annualSalary2024": 55000,
    "data": [
      {
        "year": 1980,
        "ratio": 68,
        "confidence": "low",
        "workerComp": 150
      },
      {
        "year": 1990,
        "ratio": 63,
        "confidence": "low",
        "workerComp": 250
      },
      {
        "year": 1995,
        "ratio": 58,
        "confidence": "low",
        "workerComp": 300
      },
      {
        "year": 2000,
        "ratio": 54,
        "confidence": "med",
        "workerComp": 350
      },
      {
        "year": 2005,
        "ratio": 50,
        "confidence": "med",
        "workerComp": 375
      },
      {
        "year": 2010,
        "ratio": 45,
        "confidence": "med",
        "workerComp": 350
      },
      {
        "year": 2015,
        "ratio": 42,
        "confidence": "med",
        "workerComp": 325
      },
      {
        "year": 2020,
        "ratio": 36,
        "confidence": "low",
        "workerComp": 200
      },
      {
        "year": 2024,
        "ratio": 40,
        "confidence": "med",
        "workerComp": 300
      }
    ]
  }
]
