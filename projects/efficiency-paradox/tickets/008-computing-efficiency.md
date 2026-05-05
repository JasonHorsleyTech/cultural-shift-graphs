# Computing: Computational Efficiency 1990–2022

## What to Research

The energy efficiency of computation over time — how many computations (or operations) you get per kilowatt-hour of electricity consumed. Annual or periodic estimates, 1990–2022.

This is the **efficiency metric** for the computing domain.

## Where to Look

1. **Primary:** Koomey et al. (2011) "Implications of Historical Trends in the Electrical Efficiency of Computing" — the definitive study on computations per kWh from 1946–2009. Updated in subsequent papers.
2. **Secondary:** TOP500 data — power efficiency of top supercomputers (GFLOPS/watt) reported semi-annually since ~2007.
3. **Tertiary:** Industry data on server efficiency (SPECpower benchmarks, from ~2007 onward).
4. **Fallback:** Semiconductor data — transistor density (Moore's Law) and TDP trends can proxy for efficiency at the chip level.

## Scope

- We want a general-purpose efficiency metric, not just GPUs or just CPUs.
- Koomey's metric (computations per kWh) is ideal because it's technology-agnostic.
- For post-2009 (where Koomey's original paper stops), extend using TOP500 efficiency data or industry estimates.
- Don't include AI/ML training efficiency unless it's a separate clearly labeled series. The general computing efficiency trend is the primary need.

## Output Format

### Computational Efficiency

| Year | Value | Notes |
|------|-------|-------|

**Unit:** computations per kWh (order of magnitude is fine — use scientific notation or log scale)
**Source:** [Koomey 2011 for pre-2009; specify source for post-2009 extension]
**Coverage:** General-purpose computing (peak theoretical efficiency of contemporary hardware)
**Confidence:** high for hardware specs; medium for fleet-in-use estimates

### TOP500 Power Efficiency (supplemental, post-2007)

| Year | Value | Notes |
|------|-------|-------|

**Unit:** GFLOPS per watt
**Source:** TOP500 Green500 list
**Confidence:** high (directly measured)

## Data Gaps

- Koomey's series ends ~2009. The 2010-2022 extension requires synthesis from multiple sources.
- Post-2015, the picture bifurcates: general CPU efficiency plateaued while GPU/accelerator efficiency surged. Note this.
- "Fleet average" efficiency (what's actually deployed in data centers) lags cutting-edge hardware by years. The numbers above are peak efficiency of new hardware, not fleet average.

## Methodology Notes

- Koomey measures "peak theoretical computations per kWh" for the most efficient computer available in each year. This is a ceiling, not what's actually achieved in practice.
- Data center PUE (Power Usage Effectiveness) adds ~30-100% overhead on top of the computing hardware itself. PUE has improved from ~2.0 (2007) to ~1.2-1.3 (2022 hyperscale).
- Note whether values include or exclude PUE.

## What "Good Data" Looks Like

- Should show roughly a doubling every 1.5–2 years (Koomey's Law, closely related to Moore's Law).
- From 1990 to 2020, total improvement factor should be roughly 10,000-100,000x.
- Post-2015 values should note the slowing of general CPU gains vs. the GPU/AI accelerator explosion.
