<!-- .github/copilot-instructions.md - Guidance for AI coding agents working on this repo -->

# Copilot instructions — web-portfolio

Purpose: Give an AI coding agent the exact, discoverable patterns and commands it needs to be productive in this repository.

High-level project picture

- Vite + React + TypeScript SPA (single-page portfolio) with Tailwind CSS, shadcn/ui components, and Framer Motion for animations. Expected top-level layout:
  - src/components/ — reusable UI components (Navbar, Card, Dialog/Sheet wrappers)
  - src/pages/ — route-level views (Home, Projects, Experiences, Contact)
  - src/data/ — static data files (e.g., `data/experiences.ts`, `data/projects.ts`, `data/certifications.ts`)
  - public/assets/ — images and static files

Key goals for edits

- Keep the site mobile-first and Tailwind-based (no inline CSS overrides unless necessary).
- Data should live in `src/data/*.ts` as typed exports (use small plain objects / arrays). Example: `export const projects: Project[] = [...]`.
- Use shadcn/ui primitives for dialogs, cards and sheets (Dialog/Sheet components) and Framer Motion for entry/exit animations.

Developer workflows & commands

- Install dependencies:
  - npm install
- Run local dev server:
  - npm run dev
- Build for production:
  - npm run build
- Preview the built output (if available):
  - npm run preview

If you add a different package manager (pnpm/yarn) update README and package scripts accordingly.

Project-specific conventions (do not invent alternatives)

- Project is TypeScript-first: prefer typed props and small domain types in `src/data`.
- Data files are canonical sources of content. Edit `data/*` to update visible copy (projects, experiences, certifications).
- Component styling: use Tailwind utility classes and the project's Tailwind config (colors: black/white/gray per todo.md).
- UI primitives: prefer shadcn/ui components over homegrown modal code for consistency.
- Animations: use Framer Motion patterns (motion.div with animate/initial/exit) for page/section transitions.

Patterns to follow when editing

- Small, focused commits. Good commit message examples:
  - feat(projects): add new project card and data entry
  - fix(contact): validate email format in contact form
  - chore: add asset images to public/assets
- Where to change copy: edit `src/data/*.ts` instead of hard-coding copy inside components.
- A minimal type example to follow in `src/data`:
  - Project: { id: string; title: string; description: string; tech: string[]; github?: string }

Integration & endpoints

- The contact flow is a simple `mailto:` or a dummy endpoint `/api/contact` (serverless). If implementing an API route, keep it minimal and avoid persistent storage unless explicitly requested.

What an AI should do first when asked to implement a feature

1. Look for existing data under `src/data/` and reuse it. If no matching file exists, create `src/data/<entity>.ts` and a small typed example.
2. Add or update a component under `src/components/` and wire it into the appropriate `src/pages/` view.
3. Run the dev server (`npm run dev`) and verify visually (mobile & desktop widths).

Edge cases & checks before creating PRs

- Ensure no TypeScript errors in edited files.
- Keep Tailwind classes atomic; avoid adding large CSS files.
- When adding images, place them in `public/assets/` and reference them with absolute paths like `/assets/foo.png`.

Files & locations worth checking

- `src/data/` — source-of-truth content files (projects, experiences, certifications)
- `src/components/` — shared UI
- `src/pages/` — page scaffolding
- `public/assets/` — images and static assets
- `todo.md` — current project TODO and style conventions (mobile-first, colors, animations)

If you can’t find an expected file (this repo is minimal), follow the `todo.md` structure: create the `src/` directories, add typed `data/` files and small example components. Keep changes minimal and documented.

Questions to ask the human when uncertain

- Do you prefer npm, pnpm or yarn for this project?
- Should contact submissions go to `mailto:` or be wired to a serverless endpoint?
- Do you have exact Tailwind color tokens or a theme file to match?

---

Please review this guidance and tell me what sections are unclear or need to reference other files so I can iterate.
