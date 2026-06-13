# BlackboxAI TODO - Improve O-Tech Solutions vs Competitor

## Phase 1 — Conversion & Lead Capture (Highest impact)
- [ ] Replace contact form “mock” submission with real submission endpoint (Formspree/Netlify Forms/custom).
- [ ] Add a “2-minute requirement wizard”:
  - [ ] Industry + module selection
  - [ ] Outcomes selection (reports, ledger, roles, inventory, bookings, etc.)
  - [ ] ERP/stack + user count
  - [ ] Constraints (deadline, data availability)
  - [ ] Generate “scope summary” preview before submit
- [ ] Make CTAs contextual across:
  - [ ] Service pages → preselect wizard/service
  - [ ] Home page → “Get a quote” → wizard
  - [ ] Buttons → WhatsApp draft prefill

## Phase 2 — Demo as a Decision Tool (Decision UX)
- [ ] Upgrade `/demo` from placeholder to interactive workflow demo.
- [ ] Add service-specific demo anchors (e.g. `/demo?service=oracle-finance`).
- [ ] Add “Export/Copy sample output” in demo (mock report text, ledger summary).
- [ ] Add in-demo CTA (“Want this for your company?”) sticky bottom.

## Phase 3 — Credibility: Make Case Studies Real
- [ ] Replace `href="#"` with real case study pages.
- [ ] Create full case study pages (Problem → Approach → Deliverables → Results → Timeline).
- [ ] Add “artifacts” per case study (mock role-rights table, report layout preview).
- [ ] Add before/after style metrics (realistic ranges) and a “who benefited” section.

## Phase 4 — Information Architecture & UX Polish
- [ ] Add “On this page” TOC with sticky section navigation for service pages.
- [ ] Improve mobile drawer UX:
  - [ ] close on outside click
  - [ ] focus trap + accessibility improvements
- [ ] Add section reveal animations for stats/process/testimonials.

## Phase 5 — Trust & Objection Handling
- [ ] Add FAQ section (Oracle integration, mapping ledgers/reports, UAT scope, data privacy).
- [ ] Add a Security/Privacy micro-page (how data is handled during discovery/demos).

## Phase 6 — SEO & Structured Data (High-leverage)
- [ ] Write SEO blocks for each service page (workflow + deliverables + FAQ).
- [ ] Add structured data:
  - [ ] Organization schema
  - [ ] Service schema
  - [ ] Review/testimonial schema
  - [ ] CaseStudy schema (where applicable)
- [ ] Add internal links:
  - [ ] Case studies → relevant service pages
  - [ ] Services → relevant case studies & demo anchor

## Acceptance Criteria
- [ ] Contact form and/or wizard captures leads with real submission (not mock).
- [ ] Demo shows interactive workflow (not placeholder).
- [ ] Case studies have real pages with full story structure.
- [ ] UX improvements increase clarity of value + reduce steps to inquiry.
