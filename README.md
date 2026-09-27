# achivora-website

Marketing site, admin panel and form API for Achivora — one repository, one
command to run.

## Running it

```bash
npm install
npm run dev
```

That starts both halves at once:

| | URL | What it is |
|---|---|---|
| Website | http://localhost:3000 | The public marketing site (Vite + React) |
| Admin | http://localhost:3000/admin | Form submissions dashboard |
| API | http://localhost:5000 | Express + MongoDB |

The dev server proxies `/api` to port 5000, so the browser only ever talks to
one origin and there is no base URL to configure.

Run them separately with `npm run dev:client` and `npm run dev:server`.

## Configuration

Copy `.env.example` to `.env` and fill it in. `.env` is git-ignored.

| Variable | Purpose |
|---|---|
| `PORT` | API port (default 5000) |
| `MONGODB_URI` / `MONGODB_DB` | Where submissions are stored |
| `ADMIN_EMAIL` / `ADMIN_PASSWORD` | Admin panel sign-in |
| `JWT_SECRET` / `JWT_EXPIRY` | Session token signing |
| `CORS_ORIGINS` | Comma-separated origins allowed to call the API |

**Change `ADMIN_PASSWORD` and `JWT_SECRET` before deploying anywhere.**

## The forms

Three public forms write to the API, and all three land in the same admin
inbox, told apart by `formType`:

| Form | Where | `formType` |
|---|---|---|
| Project enquiry | Home page "Reach Out" section | `enquiry` |
| Contact message | `/contact` | `contact` |
| Job application | `/career` → Apply Now | `application` |

### Endpoints

Public:

```
POST /api/submissions/contact
POST /api/submissions/enquiry
POST /api/submissions/application
GET  /api/health
```

Admin (send `Authorization: Bearer <token>`):

```
POST   /api/auth/login
GET    /api/auth/me
GET    /api/submissions?page=&limit=&formType=&status=&q=
GET    /api/submissions/stats
GET    /api/submissions/:id
PATCH  /api/submissions/:id      { status, notes }
DELETE /api/submissions/:id
```

Public submission endpoints are rate-limited; everything that reads or edits
stored data requires a token.

## Theming

The site ships light and dark themes and **defaults to dark**. Every colour
the markup can reach is a CSS variable declared twice in `src/index.css` —
once under `:root, .light` and once under `.dark` — so components use plain
classes like `bg-surface` or `text-text-main` and never carry a `dark:`
variant. The switch is in the header (and in the admin top bar).

One deliberate exception: the phone mockups in `src/components/showcase` are
pinned to the light palette with a `light` class, because they are pictures
of a phone screen rather than part of the page.

## Media

`src/constants/media.ts` is the single source for photography and video.
Images come from the Unsplash CDN with sizing baked into the URL; the two
clips (`public/hero-bg.mp4`, `public/showreel.mp4`) are self-hosted, so a
third-party outage cannot blank a hero. `photoForSlug()` gives each
catalogue entry a stable picture without hand-mapping several hundred slugs.

## Layout of the code

```
server/           Express API — config, models, routes, auth middleware
src/admin/        Admin panel: layout, auth, table, dashboard pages
src/components/   Site chrome, home sections, catalogue templates, shadcn ui
src/constants/    Site copy, navigation, media, tech icons
src/data/         Catalogue entries (services, solutions, industries, cities)
src/pages/        One file per route
```
