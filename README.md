# Personal Site

A scrapbook/collage-style personal website built with Next.js and Tailwind CSS.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/` - Next.js App Router pages
  - `page.tsx` - Homepage with collage-style layout
  - `portfolio/`, `projects/`, `publications/`, `resume/`, `about/`, `contact/` - Route pages
- `components/` - Reusable components
  - `PaperBoard.tsx` - Main container with paper texture
  - `StickerLink.tsx` - Clickable sticker-style links
  - `CutoutImage.tsx` - Image cutouts with white borders
  - `Doodle.tsx` - SVG doodle accents (stars, arrows, scribbles)
- `public/` - Static assets
  - `resume.pdf` - Resume file
  - `images/` - Portfolio images

## Color Palette

- Paper: `#F7F3EA`
- Ink: `#151515`
- Olive Grey: `#88958D`
- Deep Olive: `#606D5D`
- Blush: `#FCBFB7`

## Build

```bash
npm run build
npm start
```
