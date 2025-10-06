# Portfolio Website TODO

## Project Conventions

### Design System

- **Colors**: Black/white/gray theme for professional look
- **Mobile-first**: All components should be responsive and mobile-optimized
- **Animations**: Use Framer Motion for smooth entry/exit animations

### Tech Stack

- Vite + React + TypeScript SPA
- Tailwind CSS for styling
- shadcn/ui components for UI primitives
- Framer Motion for animations
- Lucide React for icons

### Project Structure

- `src/components/` — reusable UI components (Navbar, Card, Dialog/Sheet wrappers)
- `src/pages/` — route-level views (Home, Projects, Experiences, Contact)
- `src/data/` — static data files (experiences.ts, projects.ts, certifications.ts)
- `public/assets/` — images and static files

### Content Management

- Data should live in `src/data/*.ts` as typed exports
- Edit data files to update visible copy (projects, experiences, certifications)
- Keep components focused on presentation, data separate

### Development

- Run: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`

## Current Status

✅ Basic project structure set up
✅ Tailwind CSS configured
✅ shadcn/ui components added
✅ Data models and sample data created
✅ Main components implemented (Hero, Projects, Experience, Contact)
✅ Responsive design with mobile-first approach
✅ Framer Motion animations added
✅ Navigation and smooth scrolling
✅ Certifications section with modal functionality
✅ Certificate image/PDF viewer in modal
✅ Clickable publication URLs for certifications
✅ Project detail modals with showcase images
✅ Scrollable project galleries (1920x1080 images)
✅ Enhanced project data structure with detailed information

## Next Steps

- [ ] Add actual project images to `public/assets/`
- [ ] Update personal information in data files
- [ ] Add certifications section component
- [ ] Implement dark/light mode toggle
- [ ] Add loading states and error handling
- [ ] Optimize images and add proper alt text
- [ ] Add more detailed project descriptions
- [ ] Implement contact form with validation
- [ ] Add blog/articles section (optional)
- [ ] Performance optimization and SEO
