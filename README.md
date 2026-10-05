<div align="center">

<img src="src/app/icon.svg" alt="Alejandro Torres monogram" width="72" />

# Alejandro Torres

### Design thinking. Development skills. Technical mindset.

Designer by training. Developer by evolution. Technical by nature.

**A personal portfolio at the intersection of design, software and science.**

[Explore the work](#selected-work) · [Meet Atlas](#meet-atlas) · [Run locally](#run-locally) · [Let's talk](#lets-talk)

![Next.js](https://img.shields.io/badge/Next.js-16-171717?style=flat-square)
![React](https://img.shields.io/badge/React-19-171717?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5-171717?style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-171717?style=flat-square)

Argentina · Open to remote opportunities and collaboration

</div>

---

## Different disciplines. One way of thinking.

I'm Alejandro, a designer and developer with a professional background in visual communication, electron microscopy and scientific imaging. Those disciplines shape how I work: observe carefully, make complex ideas clear, and build with attention to detail.

This portfolio brings that experience together through selected projects, a graphic design archive and a conversational assistant. It gives agencies, studios, development teams and potential collaborators a way to explore both my work and the thinking behind it.

## The experience

- **An editorial visual language.** Large typography, generous spacing, black and white sections, and yellow accents keep the focus on the work.
- **Projects with context.** Dedicated pages explain the products, technologies and visual communication behind selected work.
- **Responsive navigation.** Desktop navigation and a mobile menu support browsing across screen sizes.
- **Considered interactions.** Scroll reveals respect reduced motion preferences; interactive elements include visible keyboard focus styles.
- **A conversation with Atlas.** Visitors can ask about my background, projects and collaboration opportunities in their own language.
- **Professional details within reach.** An extended biography, downloadable résumé and direct contact channels complete the experience.

## Selected work

These are projects presented in the portfolio. This repository contains the portfolio website itself.

| Project | Focus | Technologies / disciplines |
| --- | --- | --- |
| [Restaurant Reservation Platform](src/app/work/restaurant-reservation-platform/page.tsx) | Reservations and operational workflows for a restaurant with multiple branches | React, TypeScript, NestJS, REST API |
| [Digital Experiences](src/app/work/web-development/page.tsx) | Web design and development, featuring [Intelligent Business](https://intelligentbusiness.ar/) | Next.js, React, TypeScript, Tailwind CSS |
| [Bookstore API](src/app/work/bookstore-api/page.tsx) | Backend architecture, authentication, user management and email workflows | Node.js, Express, MongoDB, JWT |
| [Graphic Design Archive](src/app/work/graphic-design-archive/page.tsx) | Selected visual communication work | Identity, editorial design, scientific and cultural communication |

## Meet Atlas

**Atlas is the portfolio's AI assistant.** It helps visitors understand my professional profile, explore projects and find the right contact channel.

The chat widget sends conversations to the server-side `/api/atlas` endpoint, which uses the OpenAI Responses API. Its instructions draw on a curated [professional context](src/data/portfolio-context.ts), with explicit rules to avoid inventing experience or achievements and to follow the visitor's language.

The implementation includes:

- A sliding window rate limit of **10 requests per 15 minutes per IP**, backed by Upstash Redis.
- A maximum of **500 characters per visitor message** and **10 visitor messages per conversation**.
- The latest **10 messages** passed as conversation context.
- Server-side credentials, request validation and error responses surfaced in the chat interface.

## Built with

| Layer | Tools |
| --- | --- |
| Application | Next.js 16 App Router, React 19, TypeScript |
| Styling | Tailwind CSS 4, Geist and Geist Mono |
| Motion | Framer Motion |
| AI assistant | OpenAI SDK and Responses API |
| Rate limiting | Upstash Redis and Ratelimit |
| Analytics | Google Analytics through `@next/third-parties` |
| Code quality | ESLint with Next.js configuration |

## Run locally

Use **Node.js 20.9 or later** and npm.

```bash
git clone https://github.com/aletorresprado/portfolio.git
cd portfolio
npm install
```

Create `.env.local` in the project root and supply your OpenAI and Upstash Redis credentials:

```dotenv
OPENAI_API_KEY=your_openai_api_key
ATLAS_REDIS_KV_REST_API_URL=your_upstash_rest_url
ATLAS_REDIS_KV_REST_API_TOKEN=your_upstash_rest_token
```

These values stay on the server. `.env.local` is ignored by Git. Atlas requires these services to be configured and accessible; its API initializes the clients from these variables.

```bash
npm run dev
```

Open [localhost:3000](http://localhost:3000).

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build after building |

## Inside the repository

```text
src/
├── app/
│   ├── page.tsx                  # Homepage
│   ├── layout.tsx                # Metadata, fonts, Atlas and analytics
│   ├── globals.css               # Global styles
│   ├── about/page.tsx            # Extended biography
│   ├── work/                     # Project and archive pages
│   └── api/atlas/route.ts         # Assistant endpoint and rate limiting
├── components/
│   ├── Atlas/AtlasChat.tsx        # Conversational interface
│   ├── MobileMenu.tsx            # Mobile navigation
│   └── Reveal.tsx                # Scroll reveal component
└── data/
    └── portfolio-context.ts      # Atlas's professional source material

public/                           # Design assets, project imagery and résumé
```

To adapt the content, start with the homepage and the pages under `src/app/work/`. Keep `src/data/portfolio-context.ts` aligned with the public portfolio so Atlas reflects the same professional information. Images and the résumé live in `public/`.

## Let's talk

I'm open to remote opportunities and collaboration with agencies, design studios and development teams.

**[Email](mailto:positivoweb@gmail.com)** · **[LinkedIn](https://www.linkedin.com/in/alejandro-torres-prado/)** · **[GitHub](https://github.com/aletorresprado)** · **[Résumé](public/cv/alejandro-torres-cv.pdf)**

---

<div align="center">

**Let's build something useful.**

Designed and developed by Alejandro Torres.

</div>
