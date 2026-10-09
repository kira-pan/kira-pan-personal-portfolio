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
- **Vercel deployment storage is limited (free Hobby plan, 10 GB) and every push uploads
  `public/` again, to two Vercel projects.** So:
  - `public/` holds ONLY files the live site uses, already web-sized (images ≤ ~1600px wide,
    usually < 500 KB). Keep the whole folder small (~15 MB today).
  - Originals and not-yet-used assets live in `source-assets/` (excluded via `.vercelignore`,
    along with `images/` and `references/`). When a step needs one, export a compressed web
    copy into `public/`; never move the original in.
  - Push only at checkpoints Kira will look at — batch small fixes into one push.
- Videos: compressed H.264 MP4 in `public/videos/`. Loops ≤ 3 MB (6–10 s, 720p, no audio).
  Full videos ≤ 10 MB; anything larger goes on Vimeo/YouTube unlisted and is embedded.
  Convert `.mov` files to `.mp4`. Never commit a file over 50 MB.
- Old pages (`/portfolio`, `/projects`, `/publications`, `/about`, `/contact`) are replaced.
  Add redirects in `next.config.mjs` so old links still work.

## Site structure

- `/` — one long scroll: Header → Masthead → Cover → Marquee → Letter from the editor →
  Features → Case Files → The Desk → Studio → Contributor's Note → Footer.
  (The Contents section was cut: the cover's "In this issue" list and the nav do its job, and
  Kira wants Features reached quickly.)
- Storyline rule: a recruiter or peer must be able to follow Kira's through-line (interests →
  experience → what ties it together) without being told "hire me". The Letter from the
  editor (`components/home/EditorsLetter.tsx`) tells it once, in a magazine split: headline +
  handwritten "— Kira" on the left, the letter (collapsed, "Keep reading") on the right.
  "At a glance" (`components/home/AtAGlance.tsx`, data in `lib/glance.ts`) lives on the COVER's
  right column, in the same 1px ink box style used everywhere: ONE line per degree/role (red ✦,
  title, "· org" muted); Studying includes the Certificate in Design Innovation plus one muted
  line "UC Berkeley '28 · 3.92 GPA · Dean's Honors List"; no skills row. On phones/tablets it
  comes right after the intro quote, before the cover lines.
  Feature titles say plainly what the project is; personality lives in deks and design.
- Feature data lives in `lib/features.ts` (single source for cover lines and Features).
- Feature-grid images: straight, uniform 4:3, 1px hairline border (cohesive grid), shown in warm
  black and white (`.feature-bw`) that turns to color on hover (desktop only). The cover portrait
  uses the same warm B&W (`.photo-warm`). The lead patent screenshot stays in color.
  Paradise image carries BEFORE / AFTER tags on its two halves.
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
- Images are warm black and white (`.feature-bw`) and turn to color on hover; most get a mono
  caption, but small feature cards keep text minimal (description on hover).

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
- a hamburger icon (phones use the labeled "Contents" bar instead)

## Mobile (under 760px)

- Masthead fills the width on one line (~24vw).
- Header: row 1 = "VOL. 04" + LinkedIn/Resume buttons; row 2 = nav as one row of 5 boxed tabs
  (Features · Cases · Desk · Studio · About; full labels from lg; plain inline links from xl).
  Kira asked for this instead of wrapping text or a hidden menu. Every tap target ≥ 44px tall.
- Past the cover, a black "following" bar sits at the bottom of the screen ("02 · Case Files …
  Contents ↑"); tapping it opens a Contents sheet (`components/MobileContents.tsx`). Phones only.
- Cover stacks until lg: photo → intro quote → At a glance → cover lines.
- No hover on touch screens: feature-card descriptions show under the title, and `.feature-bw`
  images turn to color as they cross the middle of the screen (`components/ColorOnView.tsx`).
- On paper (Studio) becomes a swipeable scroll-snap strip (tap a piece to enlarge).
- Body text ≥ 15px. No horizontal scrolling anywhere except intentional strips.

## Workflow rule: mockup first

Kira reviews changes on the design canvas (claude.ai artifact "Kira Pan Portfolio Cover",
board "Home-v2") BEFORE they're coded. For anything beyond a small fix: update the mockup,
get her OK, then build. Keep whitespace tight — avoid empty columns and long blank gaps.

## Content (source of truth is the code; this is the map)

- Header: "VOL. 04 — FALL ISSUE 2026 · BERKELEY, CA", nav, LinkedIn ↗ + Resume ↗ buttons.
- Cover (`components/home/Cover.tsx`): masthead "Kira *Pan*"; left = "In this issue" cover lines
  from `lib/features.ts`; center = B&W portrait overlapping the masthead with two draggable
  drawings (Venice top-right, charcoal window left) and the handwritten "↖ that's me! drag the
  drawings around" placed in the empty space right of her torso (never over an image); under it
  the red label "THE PORTFOLIO OF KIRA PAN" + small italic quote; right = At a glance box.
- Marquee: DATA ANALYTICS ✦ PRODUCT ✦ UX RESEARCH ✦ DESIGN ✦ WRITING.
- Letter from the editor (`EditorsLetter.tsx`): COLLAPSED teaser (headline + one line + "Read
  the letter ↓"); opens to Kira's four paragraphs in two columns, signed "Kira" (no dash).
- Features (`Features.tsx`, data `lib/features.ts`): 01 PantryPal is the lead (solo project; process
  row Persona + problem → Wireframes → User testing → Next iteration; tools Balsamiq · Miro ·
  Figma · UX research; background-free wireframes image). Then cards 02 Patent (with a partner,
  74% accuracy), 03 Cup fee (photo credit The Daily Californian Photo Department), 04 Paradise
  (BEFORE/AFTER tags). Cards show number + kicker + title; description + link appear on hover.
  Pull quote from PantryPal usability testing.
- Case Files (`CaseFiles.tsx`): Aflac + Oracle files, stamps, redaction bars, "Client details
  redacted." Never say "via DataStory". Details were public on the club's Instagram.
- The Desk (`Desk.tsx`): timeline General News Reporter (Sep 2024–Jan 2025) → Business & Economy
  Beat Reporter (Jan–May 2025) → Deputy News Editor (May–Aug 2025, 60+ stories edited) → Data
  Reporter (Sep 2025–May 2026); clips: Help deliver dreams, Chinese AI for $30, Bakar Labs, and
  "All my Daily Cal stories →" (author page until `/desk` exists).
- Studio (`Studio.tsx`, `PaperWall.tsx`, `FilmTile.tsx`): "Things I make, *on paper, on screen
  and on film*". 01 On paper: charcoal portrait, Venice, charcoal window, London, B&W collage
  (desktop: drag to rearrange + Reset; pieces turn to color on hover (no tilt) and open large on a
  plain click via `components/Zoomable.tsx` — a drag never opens it). 02 On screen: DataStory website ("Designed, built + maintained by me"),
  stickers (DataStory, Cog Sci Students Association, Roxie), Bird Calling poster. 03 On film:
  Yosemite (lightbox) + a "Currently editing" placeholder until Kira's next video arrives.
  No Uncertain Footnotes, no recruitment/coffee-chat videos.
- Contributor's Note (`ContributorsNote.tsx`): hiking photo (B&W, color on hover), headline
  "Usually looking for a new place to eat or a new place *to go.*", Kira's paragraph, buttons
  kirap@berkeley.edu / LinkedIn / GitHub / Resume.
- Footer: slim line "© 2026 Kira Pan" · "Vol. 04 · Berkeley, CA" (room for doodles later).

### Loader (`components/Loader.tsx`; first visit per session only, click to skip) — BUILT
Paper background. Top corners mono: "KIRA PAN — VOL. 04" / "FALL ISSUE 2026". Center: a stack of
9 whole (never cropped) pieces of Kira's work — no photos of Kira. Drawings get the 8px frame;
stickers stay die-cut, unframed. The top page flies off to the side every beat (alternating
left/right), handwritten note "flipping through…" → "ready!". Bottom-left: italic serif
"Printing the fall issue" + mono "CLICK ANYWHERE TO SKIP". Bottom-right: huge serif counter
000→100 + "/100". 3px accent bar on the bottom edge. At 100 the panel lifts to reveal the page.
2.5s desktop / 1.5s phones. An inline script in `app/layout.tsx` sets `<html data-loader="on">`
before paint (sessionStorage flag in try/catch; never for reduced motion; 4s failsafe).

## Feature page template (`/features/[slug]`)
Mono kicker → huge serif headline → summary paragraph → byline row (ROLE · TEAM · TOOLS ·
DATES) → full-width hero media → body column (max 680px, 18px, line-height 1.65) with serif
section heads: The question / The data / The approach / What I found / What I'd do next →
stat callouts breaking wider than the text column → mono captions on all media → one pull
quote → "Next feature →". Content is drafted with Kira; never invent findings.

## Still to build (after the first launch)
- Case study pages `/features/[slug]` (template below): patent-dashboard first, then cup-fee,
  paradise, pantrypal. Drafted with Kira; until then feature cards link out or stay unlinked.
- `/desk` archive of all Daily Cal articles (the Desk "All my stories →" link points to the
  Daily Cal author page until then).
- Yosemite's neighbour in "On film": replace the "Currently editing" placeholder with Kira's next video.
- Mobile pass at 375px, accessibility pass (contrast, focus, alt text), Lighthouse.
- Make the old-page redirects permanent (308) once the redesign has settled.
- Analytics (Google Analytics or Vercel Analytics), once Kira has chosen and has a measurement ID.

## Build order
1–5. DONE: shell, cover, letter, features, case files, desk, studio, contributor's note, phone nav.
6. DONE: loader; Studio hover-tilt + click-to-enlarge (On paper keeps drag-to-rearrange); patent cover from the dashboard screenshot.
7. Feature page template + patent-dashboard page; then the other three.
8. `/desk` archive.
9. Mobile pass at 375px, accessibility pass (contrast, focus states, alt text), Lighthouse.
