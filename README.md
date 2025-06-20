# Metrics Dashboard

A comprehensive metrics dashboard built with PatternFly React components, featuring interactive charts, data tables, and responsive design.

## Features

- **5 Complete Pages**: Home page plus dedicated Web, Component, Product, and Search metrics pages
- **Side Navigation**: Collapsible sidebar with organized navigation structure
- **Interactive Charts**: Multiple chart types with dynamic switching (donut, line, bar charts)
- **Data Tables**: Sortable, filterable tables with pagination and row selection
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **PatternFly v6**: Built with the latest PatternFly design system components

## Pages Overview

### 🏠 Home Page
- Overview of all metric categories
- Navigation cards with feature descriptions
- Quick stats and getting started guide
- Direct links to all metric pages

### 🌐 Web Metrics
- Page performance analysis
- Traffic trends and user sessions
- Load times, bounce rates, and conversion tracking
- Interactive charts showing page views and weekly traffic

### 🧩 Component Metrics
- Component usage and performance analysis
- Render time monitoring and error rates
- Props usage patterns and version tracking
- Component instance counts and health metrics

### 📊 Product Metrics
- Feature adoption and user engagement
- Revenue trends and customer satisfaction
- Customer health scores and retention metrics
- Business KPI tracking and analytics

### 🔍 Search Metrics
- Search query analysis and performance
- Response times and success rates
- Click-through rates and search patterns
- User search behavior and session tracking

## Technology Stack

- **React 18** - Modern React with hooks and functional components
- **PatternFly v6** - Red Hat's open-source design system
- **React Router** - Client-side routing for single-page application
- **Victory Charts** - Data visualization library for interactive charts
- **Webpack** - Module bundler and development server

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm (version 8 or higher)

### Installation

1. **Clone or download the project files**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   - Navigate to `http://localhost:9000`
   - The application will automatically open in your default browser

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

## Project Structure

```
metrics-dashboard/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # Reusable components
│   │   ├── SampleChart.js  # Interactive chart component
│   │   └── SampleTable.js  # Data table component
│   ├── pages/              # Page components
│   │   ├── HomePage.js     # Landing page
│   │   ├── WebPage.js      # Web metrics page
│   │   ├── ComponentPage.js # Component metrics page
│   │   ├── ProductPage.js  # Product metrics page
│   │   └── SearchPage.js   # Search metrics page
│   ├── App.js              # Main application component
│   └── index.js            # Application entry point
├── package.json            # Dependencies and scripts
├── webpack.config.js       # Webpack configuration
└── README.md              # This file
```

## Key Features

### Navigation
- **Collapsible Sidebar**: Toggle sidebar visibility with hamburger menu
- **Active State Tracking**: Visual indicators for current page
- **Expandable Menu Groups**: Organized navigation with collapsible sections
- **Responsive**: Adapts to different screen sizes

### Charts
- **Multiple Chart Types**: Donut, line, and bar charts
- **Interactive Switching**: Change chart types dynamically
- **Responsive Design**: Charts resize based on container width
- **Accessibility**: ARIA labels and keyboard navigation support
- **PatternFly Colors**: Uses design system color tokens

### Tables
- **Sorting**: Click column headers to sort data
- **Selection**: Row selection with select all functionality
- **Pagination**: Navigate through large datasets
- **Responsive**: Tables adapt to smaller screens
- **Search and Filter**: Built-in data filtering capabilities

### Data
- **Sample Data**: Realistic mock data for all metrics
- **Performance Metrics**: Load times, render times, response times
- **User Analytics**: Sessions, page views, user behavior
- **Business Metrics**: Revenue, retention, satisfaction scores
- **Technical Metrics**: Error rates, usage patterns, version tracking

## Customization

### Adding New Pages
1. Create a new component in `src/pages/`
2. Import and add route in `src/App.js`
3. Add navigation item to sidebar

### Modifying Data
- Update sample data arrays in each page component
- Modify table columns by updating the columns array
- Customize chart data by changing the data arrays

### Styling
- PatternFly utility classes are used throughout
- Custom CSS can be added to individual components
- Color scheme uses PatternFly design tokens

## Development Guidelines

This project follows PatternFly development best practices:

- **PatternFly v6 Only**: Uses `pf-v6-` prefixed classes exclusively
- **Component-First**: Prioritizes PatternFly components over custom solutions
- **Accessibility**: Implements WCAG 2.1 AA compliance standards
- **Responsive Design**: Mobile-first approach with breakpoint utilities
- **Semantic Markup**: Proper HTML structure and ARIA labels

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

When making changes to this project:

1. Follow PatternFly design guidelines
2. Test on multiple screen sizes
3. Ensure accessibility compliance
4. Update documentation as needed

## License

This project is provided as a demonstration of PatternFly React components and patterns.

## Resources

- [PatternFly Documentation](https://www.patternfly.org/)
- [PatternFly React Components](https://www.patternfly.org/components)
- [Victory Charts Documentation](https://formidable.com/open-source/victory/)
- [React Router Documentation](https://reactrouter.com/)

---

**Built with ❤️ using PatternFly React** 
