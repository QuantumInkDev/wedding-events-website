# Weddings~N~Events Website

A beautiful, modern wedding and events planning website built with React, TypeScript, and Vite featuring markdown-driven content management and elegant design.

![Wedding Events Website](https://img.shields.io/badge/Built%20with-React%20%2B%20TypeScript-blue?style=for-the-badge)
![Vite](https://img.shields.io/badge/Powered%20by-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## 🌟 Features

- **Modern React Architecture**: Built with React 19, TypeScript, and Vite for optimal performance
- **Markdown-Driven Content**: Easy content management through markdown files
- **Responsive Design**: Beautiful layouts that work perfectly on all devices
- **Elegant Animations**: Smooth transitions, floating hearts, twinkling sparkles, and subtle background patterns
- **FontAwesome Integration**: Rich iconography throughout the site
- **SEO Optimized**: Dynamic page titles and meta content
- **Google Fonts**: Elegant typography with Cormorant Garamond and Playfair Display

## 💍 About

**Weddings~N~Events** specializes in creating unforgettable experiences that reflect your unique style and vision. Founded by Brigette Towers-Diaz, a seasoned professional with 22+ years in event organization, we serve Central and North New Jersey with:

### Our Services
- **Wedding Planning**: Complete wedding planning services from intimate ceremonies to grand celebrations
- **Event Coordination**: Corporate events, social gatherings, and special occasions
- **Design & Styling**: Elegant design that transforms your vision into reality

### Featured Packages
- **Stress-Free Package** - $1,800 (10 hours coordination)
- **The Bliss Package** - $2,500 (12 hours full-service coordination)  
- **Corporate Events** - Starting at $1,800

### Contact Information
- **Phone**: (201) 284-2688
- **Email**: weddingsnthings22@gmail.com
- **Online Scheduling**: [Schedule via Calendly](https://calendly.com/weddingsnthings22/30min)

## 📋 Pages & Routes

- **Home** (`/`) - Business overview, hero section with animations, and contact info
- **About** (`/about`) - Company story, mission, values, and team
- **Services** (`/services`) - Detailed service offerings and specializations
- **Packages** (`/packages`) - Service packages with detailed pricing
  - **Stress-Free** (`/packages/stress-free`) - 10-hour coordination package
  - **Bliss** (`/packages/bliss`) - 12-hour full-service package
  - **Corporate** (`/packages/corporate`) - Corporate event coordination
- **Wedding Coordination** (`/services/wedding-coordination`) - Specialized wedding services
- **Testimonials** (`/testimonials`) - Client reviews and success stories
- **FAQs** (`/faqs`) - Frequently asked questions
- **Gallery** (`/gallery`) - Portfolio of beautiful events
- **Consultation** (`/consultation`) - Free consultation booking

## 🛠 Technology Stack

### Frontend
- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool and development server
- **React Router** - Client-side routing
- **CSS3** - Custom styling with CSS Grid and Flexbox

### Content Management
- **React Markdown** - Markdown rendering with GitHub Flavored Markdown support
- **YAML Frontmatter** - Metadata support for pages
- **Static Assets** - Images and content served from public directory

### Icons & Typography
- **FontAwesome** - Comprehensive icon library
- **Google Fonts** - Cormorant Garamond and Playfair Display
- **Custom Animations** - CSS keyframes and transitions

## 🏗 Architecture

### Markdown-Driven Content System

The site uses a unique content management approach that allows non-technical content updates:

```
public/content/
├── home.md              # Homepage content
├── packages/
│   ├── stress-free.md   # Package details
│   ├── bliss.md
│   └── corporate.md
├── services/
│   └── wedding-coordination.md
├── about.md
├── gallery.md
├── consultation.md
├── testimonials.md
├── faqs.md
└── contact.md
```

Each markdown file supports YAML frontmatter:

```markdown
---
title: Page Title
subtitle: Optional subtitle  
---

Content goes here in markdown format...
```

### Component Architecture

```
src/
├── components/
│   ├── Page.tsx         # Layout wrapper component
│   ├── Navigation.tsx   # Header navigation
│   ├── Footer.tsx       # Site footer
│   └── Loading.tsx      # Loading states
├── pages/
│   ├── Home.tsx         # Homepage with custom layout
│   ├── PackageDetail.tsx # Dynamic package pages
│   └── [page].tsx       # Standard page layout
├── utils/
│   └── markdownLoader.ts # Content loading utility
└── hooks/
    └── usePageTitle.ts  # Dynamic page titles
```

### Page Header Images

Images are automatically loaded for page headers following the naming convention:
- `public/content/home.jpg` - Homepage header
- `public/content/packages/stress-free.jpg` - Package page header
- `public/content/services/wedding-coordination.jpg` - Service page header

### Styling System

- **Global Styles**: `src/index.css` with CSS custom properties
- **Component Styles**: Co-located CSS files with BEM-like naming
- **Design System**: Purple gradient theme with gold accents
- **Responsive**: Mobile-first approach with clamp() functions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/wedding-events-website.git
   cd wedding-events-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

```bash
# Development server with hot reload
pnpm dev

# Build for production
pnpm build

# Preview production build locally
pnpm preview

# Lint code
pnpm lint
```

## 🎨 Design Features

### Visual Elements
- **Floating Hearts**: Animated heart icons in hero section
- **Twinkling Sparkles**: Animated star elements with staggered timing
- **Background Patterns**: Subtle radial gradient patterns with movement
- **Animated Underlines**: Dynamic underlines for headings
- **Hover Effects**: Background blur effects on page headers

### Color Scheme
```css
:root {
  --color-primary: #667eea;
  --color-primary-dark: #764ba2;
  --color-gold: #d4af37;
  --color-light-gold: #f7dc6f;
  --gradient-hero: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --gradient-gold: linear-gradient(45deg, #d4af37, #f7dc6f);
}
```

### Typography
- **Headers**: Cormorant Garamond (elegant serif)
- **Body**: System font stack for optimal readability
- **Responsive**: clamp() functions for fluid typography

## 🚀 Deployment

### Build for Production

```bash
pnpm build
```

### Deploy to Static Hosting

The `dist/` folder contains all static assets ready for deployment to:

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use GitHub Actions workflow
- **AWS S3**: Upload dist contents to S3 bucket

### Environment Variables

No environment variables required - this is a static site with no server-side dependencies.

## 📝 Content Management

### Adding New Pages

1. **Create markdown file**
   ```bash
   # Add content file
   public/content/new-page.md
   ```

2. **Add frontmatter**
   ```markdown
   ---
   title: New Page Title
   subtitle: Optional subtitle
   ---
   
   Your content here...
   ```

3. **Create React component** (if needed)
   ```typescript
   // src/pages/NewPage.tsx
   import { useState, useEffect } from 'react';
   import { Page } from '../components/Page';
   import { loadMarkdownContent } from '../utils/markdownLoader';

   export const NewPage = () => {
     const [content, setContent] = useState(null);
     
     useEffect(() => {
       loadMarkdownContent('new-page').then(setContent);
     }, []);

     return (
       <Page 
         title={content?.title} 
         subtitle={content?.subtitle}
         markdownContent={content?.content}
         pageName="new-page"
       />
     );
   };
   ```

4. **Update routing**
   ```typescript
   // src/App.tsx - Add route
   <Route path="/new-page" element={<NewPage />} />
   ```

### Adding Page Header Images

Place images in `public/content/` following the naming convention:
- `public/content/home.jpg` - Homepage header
- `public/content/packages/stress-free.jpg` - Package page header
- `public/content/services/wedding-coordination.jpg` - Service page header

## 🔧 Development

### Project Structure

```
wedding-events-website/
├── public/                 # Static assets
│   ├── content/           # Markdown content files
│   ├── pictures/          # Image assets
│   └── index.html         # HTML template
├── src/                   # Source code
│   ├── components/        # Reusable components
│   ├── pages/            # Page components  
│   ├── utils/            # Utility functions
│   ├── hooks/            # Custom hooks
│   └── App.tsx           # Main app component
├── package.json          # Dependencies and scripts
└── vite.config.ts        # Vite configuration
```

### Code Style

- **TypeScript**: Strict mode enabled with type-only imports
- **ESLint**: Configured with React and TypeScript rules
- **CSS**: BEM-like naming convention
- **Components**: Functional components with hooks

## 🐛 Troubleshooting

### Common Issues

**White page on load**
- Check browser console for TypeScript errors
- Run `pnpm build` to see compilation issues
- Verify all imports use correct paths

**Markdown not loading**
- Ensure files exist in `public/content/`
- Check frontmatter YAML syntax
- Verify file paths match component expectations

**Images not displaying**
- Confirm images are in `public/` directory
- Check file paths and extensions
- Verify image naming convention

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`  
5. **Open Pull Request**

### Development Guidelines

- Follow existing code style and conventions
- Add TypeScript types for new components
- Test responsive design on multiple screen sizes
- Ensure accessibility best practices
- Update documentation for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Vite Team** - For the lightning-fast build tool
- **FontAwesome** - For the beautiful icon library
- **Google Fonts** - For elegant typography options
- **Brigette Towers-Diaz** - For the inspiration and content

---

**Built with ❤️ for creating unforgettable moments**

*Weddings~N~Events - Where Dreams Become Reality*
