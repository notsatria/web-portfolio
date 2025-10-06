# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations and a mobile-first design approach.

## 🚀 Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 🎨 Features

- 📱 Mobile-first responsive design
- ✨ Smooth animations with Framer Motion
- 🎯 Clean, modern UI with shadcn/ui components
- 🚀 Fast development with Vite
- 📝 TypeScript for type safety
- 🌙 Professional black/white/gray theme

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Navbar.tsx      # Navigation component
│   ├── Hero.tsx        # Hero section
│   ├── Projects.tsx    # Projects showcase
│   ├── Experience.tsx  # Work experience
│   ├── Contact.tsx     # Contact section
│   └── Footer.tsx      # Footer component
├── data/               # Static data files
│   ├── projects.ts     # Project data
│   ├── experiences.ts  # Work experience data
│   └── certifications.ts # Certifications data
├── lib/                # Utility functions
│   └── utils.ts        # Tailwind utilities
└── pages/              # Route-level views (future use)
```

## 🚀 Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start development server**

   ```bash
   npm run dev
   ```

3. **Build for production**

   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## 📝 Customization

### Update Personal Information

1. **Projects**: Edit `src/data/projects.ts`
2. **Experience**: Edit `src/data/experiences.ts`
3. **Certifications**: Edit `src/data/certifications.ts`
4. **Personal Info**: Update the Hero component in `src/components/Hero.tsx`

### Add Images

Place your images in `public/assets/` and reference them with absolute paths like `/assets/image.jpg`.

### Styling

The project uses Tailwind CSS with a custom design system. Colors and spacing are defined in:

- `tailwind.config.js` - Tailwind configuration
- `src/index.css` - CSS custom properties and base styles

## 🎯 Sections

- **Hero**: Introduction and call-to-action
- **Projects**: Showcase of featured projects with tech stack
- **Experience**: Professional work history
- **Contact**: Contact information and social links

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:

- Responsive navigation with mobile menu
- Flexible grid layouts
- Optimized typography scaling
- Touch-friendly interactive elements

## 🔧 Development

### Code Organization

- Components are focused on presentation
- Data is separated into typed modules
- Utilities follow shadcn/ui patterns
- Animations use consistent Framer Motion patterns

### TypeScript

All components are fully typed with:

- Interface definitions for data models
- Proper component prop typing
- Type-safe data handling

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using modern web technologies.
