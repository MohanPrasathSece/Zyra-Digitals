# Zyra Digitals - Premium Web Development Studio

A minimalistic, premium, and elegant website for a one-person web development company. Built with React, Vite, and Tailwind CSS.

## 🎨 Design Philosophy

- **Minimalistic & Premium**: Clean design with generous whitespace
- **Color Palette**: Black (#000000), White (#FFFFFF), Gold (#D4AF37) accents
- **Typography**: Playfair Display (headings) + Inter (body)
- **Royal & Classic**: Sophisticated aesthetic with subtle animations

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:8080`

## 📁 Project Structure

```
src/
├── assets/              # Images and static files
├── components/          # Reusable React components
│   ├── ui/             # Shadcn UI components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Footer with links
│   ├── Hero.tsx        # Hero section
│   ├── ServiceCard.tsx # Service display card
│   ├── ProjectCard.tsx # Portfolio project card
│   ├── ContactForm.tsx # Contact form with validation
│   └── ProjectModal.tsx # Project detail modal
├── pages/              # Page components (lazy-loaded)
│   ├── Home.tsx        # Landing page
│   ├── About.tsx       # About page
│   ├── Services.tsx    # Services page
│   ├── Portfolio.tsx   # Portfolio showcase
│   ├── Contact.tsx     # Contact page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── App.tsx             # Main app with routing
├── main.tsx            # Entry point
└── index.css           # Global styles & design system
```

## 🎯 Features

### Pages
- **Home**: Hero section, services preview, CTA
- **About**: Company story, values, mission
- **Services**: Comprehensive service offerings with process
- **Portfolio**: Project showcase with modal details
- **Contact**: Contact form with business info and FAQ

### Components
- Responsive navigation with mobile menu
- Lazy-loaded routes for optimal performance
- Accessible modal for project details
- Contact form with Formspree integration ready
- SEO-optimized meta tags

### Design System
All colors and styles are defined in `src/index.css` and `tailwind.config.ts`:
- HSL color variables for easy theming
- Custom fonts configured via Google Fonts
- Button variants: `gold`, `ghost-gold`, `default`, `outline`
- Utility classes: `hover-lift`, `hover-scale`, `fade-in`
- Respect for `prefers-reduced-motion`

## 🔧 Customization

### Update Contact Information
Edit `src/components/ContactForm.tsx`:
```typescript
// Replace with your Formspree endpoint
const formspreeEndpoint = "https://formspree.io/f/YOUR_FORM_ID";
```

Or use the mailto fallback (current default).

### Update Meta Tags
Edit `index.html` for SEO:
- Title and description
- Open Graph tags
- Twitter Card tags
- Canonical URL

### Update Colors
Edit `src/index.css` to change the color scheme:
```css
:root {
  --gold: 43 55% 53%;  /* Change gold accent color */
  --primary: 0 0% 0%;  /* Change primary (black) */
}
```

### Add/Edit Projects
Edit `src/pages/Portfolio.tsx`:
```typescript
const projects = [
  {
    title: "Your Project",
    category: "Category",
    image: projectImage,
    description: "Project description...",
    technologies: ["React", "Node.js"],
  },
];
```

## 🌐 Deployment

### Netlify
```bash
npm run build
# Deploy dist/ folder
```

### Vercel
```bash
npm run build
# Deploy with Vercel CLI or GitHub integration
```

### Static Server (Node.js)
```bash
npm run build
npx serve dist -p 3000
```

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus states on interactive elements
- Alt text on all images
- Color contrast meets WCAG standards

## ⚡ Performance

- Lazy-loaded routes with React.lazy()
- Optimized images with loading="lazy"
- Google Fonts with font-display: swap
- Minimal dependencies
- Code splitting via Vite

## 📱 Responsive Design

Fully responsive across all devices:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔍 SEO

- Semantic HTML structure
- Meta tags (title, description, Open Graph, Twitter Card)
- JSON-LD structured data ready
- Canonical URLs
- robots.txt included

## 📦 Technologies

- **React 18** - UI library
- **Vite** - Build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Shadcn/ui** - UI components
- **React Router** - Client-side routing
- **Lucide React** - Icon library

## 📝 Notes

- Contact form uses mailto by default. Replace with Formspree endpoint for proper form handling
- Update social media links in Footer.tsx
- Replace placeholder contact information with your actual details
- Add your own portfolio projects and images

## 🎓 Learn More

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Formspree](https://formspree.io/) - For contact form handling

## 📄 License

This project template is provided as-is for Zyra Digitals.

---

Built with ❤️ by Zyra Digitals
