# Kira Pan portfolio redesign: brief for Claude Code

Read this whole file before changing anything. It is the source of truth for the redesign.
If a request conflicts with it, ask Kira before deviating.

## The goal

Rebuild kira-pan.com as **a personal magazine**: editorial, warm, hand-made, confident.
It must NOT look like an AI-generated or template site. Above all it must feel **cohesive**:
fewer, better pieces, all treated the same way. Curate; don't use every asset.

Who reads it: recruiters and hiring managers for data analytics, data science, product,
UX research and UI/UX roles. They skim. Everything important must be visible on the
home page without clicking.

Positioning line: "I study how people think, work with messy data, and try to make the
answer easy to see." Strongest area is data; the site shows a data person with unusual
taste and communication skills (journalism, art, video).

## Workflow

- Work on the `redesign` branch. Never commit to `main`; Kira merges when she's happy.
- Hosted on Vercel: each push to `redesign` gets a preview URL. Push after each step so
  Kira can check it (including on her phone).
- Build one section per step, in the order under "Build order". Stop after each step and
  show Kira before starting the next.
- Keep the stack: Next.js (App Router), React, Tailwind, TypeScript. Add no UI kits.
  Small libraries are OK only if clearly needed (e.g. none for drag — use pointer events).
- Use `next/image` for images. Fonts are self-hosted via `@fontsource` packages (imported in
  `app/layout.tsx`), not `next/font/google`, so builds never depend on Google's servers.
- Tokens live in `tailwind.config.ts` (`paper`, `ink`, `muted`, `accent`, `manila`, `frame`,
  `hairline`, `on-ink-muted`, `tape`; fonts `serif`, `sans`, `mono`, `hand`). Shared classes
  `.label`, `.container-page`, `.art-frame` are in `app/globals.css`.
- Videos: compressed H.264 MP4 in `public/videos/`. Loops ≤ 3 MB (6–10 s, 720p, no audio).
  Full videos ≤ 20 MB; anything larger goes on Vimeo/YouTube unlisted and is embedded.
  Convert `.mov` files to `.mp4`. Never commit a file over 50 MB.
- Old pages (`/portfolio`, `/projects`, `/publications`, `/about`, `/contact`) are replaced.
  Add redirects in `next.config.mjs` so old links still work.

## Site structure

- `/` — one long scroll: Header → Masthead → Cover → Marquee → Letter from the editor →
  Contents → Features → Case Files → The Desk → Studio → Contributor's Note → Footer.
- Storyline rule: a recruiter or peer must be able to follow Kira's through-line (interests →
  experience → what ties it together) without being told "hire me". The Letter from the
  editor (`components/home/EditorsLetter.tsx`) tells it once, with an "At a glance" sidebar
  (half-width on laptops; each degree/role gets a red ✦ with the org on a muted second line;
  Studying includes the Berkeley Certificate in Design Innovation).
  Feature titles say plainly what the project is; personality lives in deks and design.
- Feature data lives in `lib/features.ts` (single source for cover lines and Features).
- Feature-grid images: straight, uniform 4:3, 1px hairline border (cohesive grid).
- `/features/[slug]` — full case study pages: `patent-dashboard`, `cup-fee`, `paradise`,
  `pantrypal`. All use one shared article template.
- `/desk` — archive of all Daily Californian articles, grouped by beat, with dates.
- Nav links Case Files, Studio and Contributor's Note smooth-scroll to home sections.
- Resume button → `/KiraPan-Resume.pdf`.

## Design system

Colors (define as CSS variables / Tailwind theme tokens; use nothing else):
- paper `#F4F1EA` (page background)
- ink `#161513` (text, rules, dark sections)
- muted `#5A564E` (secondary text on paper; never lighter)
- accent `#B8321C` (sparingly: kickers, stamps, one italic word per headline, progress bar)
- manila `#E8E1CF` (Case Files background only)
- frame `#FFFDF8` (border on photos/artwork)
- hairline `rgba(22,21,19,0.2)`
- On the ink background, text is paper and secondary text `#B9B3A6`.

Type (Google Fonts via next/font):
- **Instrument Serif** (regular + italic): every headline. Tight letter-spacing (-0.02 to -0.04em).
  Italic marks the emphasized phrase in a headline.
- **Hanken Grotesk** (400/500/600): body, 15–17px, line-height 1.5–1.65.
- **Geist Mono**: labels, nav, dates, kickers, captions. 11–13px, UPPERCASE, letter-spacing 0.08–0.14em.
- **KiraHandwriting** (`public/fonts/KiraHandwritingV1.woff2`, Kira's real handwriting;
  Tailwind `font-hand`): margin notes only, accent color, slight rotation. At most one per section.

Layout:
- Container max-width 1360px, side padding 24px (16px on mobile).
- Sections open with a 2px ink rule, then a mono row: "01 — FEATURES" left, "p. 04" right.
- Asymmetric editorial layouts, hairline dividers, generous whitespace.

Image treatment (this is what makes it cohesive — apply to every image the same way):
- Artwork and photos: 6px `#FFFDF8` border, no shadow, rotation between -6° and 6°.
  At most one strip of masking tape (`rgba(214,196,150,0.75)`) per cluster.
- Screenshots of software/data work: straight (no rotation), 1px hairline border, no device
  mockups, no browser chrome.
- Every image gets a mono caption underneath, museum-label style.

Motion:
- Slow and deliberate: 600–900ms, `cubic-bezier(0.65, 0, 0.35, 1)`.
- Headlines reveal with clip-path. Image hover: scale 1.03 inside its frame. Nothing else
  animates on scroll — no fade-up on every element.
- Respect `prefers-reduced-motion` everywhere (no loader animation, no marquee, no autoplay).

NEVER:
- rounded corners, drop shadows, gradients, glassmorphism, blur backdrops
- emoji, icon-in-colored-circle cards, generic feature cards
- Inter, Roboto, Arial, system-ui as a visible font
- invented copy, stats or testimonials; lorem ipsum. Missing facts stay as [PLACEHOLDER].
- a hamburger menu (the nav wraps instead)

## Mobile (under 760px)

- Masthead fills the width on one line (~24vw).
- Cover order: photo, then cover lines, then the video box.
- Dragging is desktop-only; on mobile draggable images become a horizontal scroll-snap strip.
- Grids collapse to one column; stat rows stay 3 columns with smaller numbers.
- Case File stamps sit above the headline, never over it.
- Header: row 1 = "VOL. 04" + LinkedIn/Resume buttons; row 2 = nav as one row of 5 boxed tabs
  (Features · Cases · Desk · Studio · About; full labels from lg; plain inline links from xl).
  Kira asked for this instead of wrapping text or a hidden menu. Every tap target ≥ 44px tall.
- Cover stays stacked (photo → one-liner + cover lines → video/Currently side by side) until lg.
- Body text ≥ 15px. Loader 1.5s instead of 2.5s.
- Videos: `muted playsInline loop` so they autoplay on iPhone.
- No horizontal scrolling anywhere except intentional strips.

## Content, section by section (use this copy)

### Header
Left: "VOL. 04 — FALL ISSUE 2026 · BERKELEY, CA". Nav: Features, Case Files, The Desk,
Studio, Contributor's Note. Right: outlined buttons "LINKEDIN ↗" and "RESUME ↗".

### Masthead
"Kira Pan" with "Pan" italic in accent, clamp(96px, 17vw, 250px), line-height 0.82.
Centered under the portrait (fills the cover gap): accent mono kicker "THE PORTFOLIO OF KIRA PAN", then large serif one-liner (Kira asked for this; wording is a draft for her to approve,
must say plainly it's her portfolio): "I'm a data science and cognitive science student at UC
Berkeley. I use data to understand people, and design and storytelling to make what I find
useful." Right column label: mono "DATA · RESEARCH · DESIGN · WRITING". Page title "Kira Pan — Portfolio".

### Cover (three columns)
- Left — "IN THIS ISSUE" cover lines (each links to its feature):
  - P. 04 / FEATURE — "408,000 patents and one question" — "Can a model predict USPTO approval before months of review?"
  - P. 08 / DATA DESK — "What a 25-cent cup fee actually changed" — "Reusables, compliance and Berkeley's disposable cup fee, for The Daily Californian."
  - P. 12 / MAPS — "Paradise, after the fire" — "Six years of rebuilding permits after the 2018 Camp Fire, mapped."
  - P. 16 / PRODUCT — "Dinner for the first-time cook" — "PantryPal, a meal planner for real student life."
- Center — black-and-white portrait cutout `cover-kira-bw.png` (arms crossed), pulled up so her head overlaps the masthead
  (classic magazine cover), with two artworks overlapping it
  (`IMG_2955.jpeg` charcoal bottom-left, `venice_drawing.jpeg` top-right), draggable on desktop.
  Note: "that's me! drag the drawings around ↙".
- Right — "NOW PLAYING" black 4:5 box looping a muted clip of the Yosemite video
  (`public/videos/yosemite-loop.mp4`). Top mono: "● NOW PLAYING" / "SOUND ON ↗".
  Bottom: serif "Yosemite, with the club" ("with the club" italic) and mono
  "EDITED BY ME · DATASTORY MARKETING". Click opens full video with sound in a lightbox.
  Below: outlined "CURRENTLY" box: "Researching AI-generated content on YouTube at Haas.
  AI consulting with Oracle. Drawing in charcoal and video editing on weekends."

### Marquee
Full-width ink strip, slow scroll: "DATA ANALYTICS ✦ PRODUCT ✦ UX RESEARCH ✦ DESIGN ✦ WRITING ✦"

### Contents
Serif "Contents" ("tents" italic). Numbered rows: 01 Features — Data and product stories,
start to finish — p. 04 · 02 Case Files — Consulting for Oracle and Aflac — p. 20 ·
03 The Desk — Reporting and editing at The Daily Californian — p. 26 · 04 Studio —
Charcoal, ink, collage, video — p. 30 · 05 Contributor's Note — About me, resume, contact — p. 36.

### Features
- Lead: Patent dashboard (team project with Chiara Rignot — say "with a partner"). The headline,
  dek and stats lead; media is a small static screenshot (`public/images/features/patent-dashboard.jpg`),
  never a big video — Kira doesn't want video as the focal point.
  PantryPal thumbnail is the brand logo card (`pantrypal-logo.jpg`), not the notebook sketch.
  Cup photo credit: "Photo: The Daily Californian Photo Department". Looking for: "Summer 2027 internships".
  (Final copy for all four lives in `lib/features.ts`; the copy below is the original draft.) Kicker "DATA · MACHINE LEARNING ·
  NOV 2025–JAN 2026". Headline "408,000 patents and one question". Body: "Patent applicants
  wait months to learn if they'll be approved. I trained a model on USPTO records to give
  them an estimate on day one, and built a dashboard anyone can use." Stats: 408K+
  applications · 74% accuracy · 9 tech centers. Tools: Python · XGBoost · Random Forest ·
  SMOTE · Streamlit. Code: github.com/kira-pan/predictive-patent-dashboard.
- Three smaller features:
  - Cup fee — "REPORTING · CITY & LOCAL BUSINESS" — "What a 25-cent cup fee actually changed" —
    "Berkeley's disposable cup fee nudged people toward reusables. Getting shops to comply
    was harder." Links to the Daily Cal article. Image: [NEEDED FROM KIRA].
  - Paradise — "SPATIAL ANALYSIS · 2026" — "Paradise, after the fire" — "Permits, Census data
    and fire perimeters show who rebuilt in Paradise, CA from 2019 to 2025." Image: [NEEDED].
  - PantryPal — "PRODUCT · UX RESEARCH" — "Dinner for the first-time cook" — "PantryPal turns
    what's in your pantry, your budget and your time into a week of meals." Image: the
    hand-drawn logo sketch → app icon, from Kira's deck [NEEDED AS IMAGE FILES].
- Pull quote: "Users understood the concept right away. The grocery list needed a clearer
  path." — FROM PANTRYPAL USABILITY TESTING.

### Case Files (manila background)
- FILE 01 · AFLAC · JAN–JUN 2026 — stamp "CLIENT FILE" (accent) — "Five years of federal
  filings, made into one clean dataset" — profiled Form 5500 data; Python regex pipelines
  consolidating carrier/broker names; GCP ingestion workflow. Stats: 1,200+ name variants… /
  ~280 …became entities / 96% coverage.
- FILE 02 · ORACLE · AUG 2026–NOW — stamp "IN PROGRESS" (ink) — "Scoring exercise form from
  two phone sensors, in real time" — streaming pipeline on OCI, pose estimation scoring reps,
  tempo, range of motion and form; Oracle Database 23ai. Stats: 2 phone sensors / 3 exercises
  scored / <1s target latency.
- A few inline black redaction bars for confidential specifics.
- Footnote: "Client details redacted." Do NOT say "via/through DataStory Consulting" anywhere —
  Kira wants Oracle and Aflac listed as roles in their own right.
- Kira is confirming what she may show; show nothing beyond the above until she says so.

### The Desk
Left: "From the newsroom to the data desk" + vertical timeline: General Assignment News
Reporter → Business & Economy Reporter → Deputy News Editor (May–Aug 2025, 60+ stories
edited) → Data Reporter (Aug 2025–Jun 2026, highlighted).
Right, 2×2 clips linking to dailycal.org (URLs are on the current `/publications` page):
- 'A new life': Students adorn apartments with furniture found on the street (CITY)
- Campus researchers replicate disruptive Chinese AI for $30 (RESEARCH & IDEAS)
- Bakar Labs set to launch largest climate tech incubator (RESEARCH & IDEAS)
- "All 17 stories, by beat →" → /desk
`/desk` lists every article from the current publications page, grouped by beat.

### Studio (ink background)
"Things I make by hand" + note "go on, rearrange them ↓". Curated, max 6 pieces:
`IMG_2955.jpeg` or `IMG_3879.jpg` (charcoal — use one), `london_postcard.jpg` (pen & ink),
`IMG_3848.jpeg` (recycled collage), `KiraPan_Bird_Calling_Poster.jpg` (digital),
Uncertain Footnotes (still from `KiraPan_UncertainFootnotes_Demo.mov`, links to
https://kira-pan.github.io/uncertain-footnotes/). Museum labels in mono under each.
Draggable on desktop (pointer events; dragged piece comes to front and straightens; "RESET").
Below: "Cutting Room" row of edited videos (Yosemite, `Recruitment-Timeline.mp4`, the
coffee chat story). Each tile plays muted on hover (tap on mobile), lightbox with sound.
Labels: TITLE · FOR: project · I DID: editing, motion graphics, sound.

### Contributor's Note
Portrait (one of `about_1`–`about_8`, Kira picks) + serif "I'm Kira. I study how people
think, work with messy data, and try to make the answer easy to see." + [KIRA'S BIO —
2–3 sentences in her own words] + links: kirap@berkeley.edu, LinkedIn
(linkedin.com/in/kira-z-pan), GitHub (github.com/kira-pan), Resume (PDF).

### Footer
Serif "Let's make something." ("something." italic accent). Mono line: "© 2026 Kira Pan". No colophon.

### Loader (first visit per session only, click to skip)
Paper background. Top corners mono: "KIRA PAN — VOL. 04" / "FALL ISSUE 2026". Center: a
slightly rotated stack of 4–5 sketchbook images flipping every ~150ms, note "flipping
through…". Bottom-left: italic serif "Printing the fall issue" + mono "CLICK ANYWHERE TO
SKIP". Bottom-right: huge serif counter 000→100 with small "/100". 3px accent progress line
on the bottom edge. At 100, the panel slides up to reveal the page. 2.5s desktop / 1.5s
mobile. sessionStorage flag wrapped in try/catch. None for reduced motion.

## Feature page template (`/features/[slug]`)
Mono kicker → huge serif headline → summary paragraph → byline row (ROLE · TEAM · TOOLS ·
DATES) → full-width hero media → body column (max 680px, 18px, line-height 1.65) with serif
section heads: The question / The data / The approach / What I found / What I'd do next →
stat callouts breaking wider than the text column → mono captions on all media → one pull
quote → "Next feature →". Content is drafted with Kira; never invent findings.

## Build order
1. Design tokens, fonts, layout shell, header, footer, redirects.
2. Masthead + Cover + Marquee + Contents.
3. Features (home).
4. Case Files + The Desk.
5. Studio (drag) + Cutting Room + Contributor's Note.
6. Loader.
7. Feature page template + patent-dashboard page; then the other three.
8. `/desk` archive.
9. Mobile pass at 375px, accessibility pass (contrast, focus states, alt text), Lighthouse.
