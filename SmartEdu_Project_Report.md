# SmartEdu - Comprehensive Project Report

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technical Architecture](#technical-architecture)
3. [Features & Functionality](#features--functionality)
4. [Code Structure](#code-structure)
5. [API Integration](#api-integration)
6. [UI/UX Design](#uiux-design)
7. [Internationalization](#internationalization)
8. [Deployment & Configuration](#deployment--configuration)
9. [Development Workflow](#development-workflow)
10. [Future Enhancements](#future-enhancements)

---

## Project Overview

**SmartEdu** is a comprehensive career guidance and educational platform designed specifically for the Moroccan market. The platform combines job search functionality, university course exploration, and AI-powered career guidance to help students and professionals make informed decisions about their educational and career paths.

### Key Statistics
- **Project Name**: SmartEdu (smart-edu)
- **Version**: 0.1.0
- **Framework**: Next.js 15.4.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Target Market**: Morocco (French language support)

### Core Mission
To provide personalized career guidance, job opportunities, and educational pathways through an integrated platform that combines AI-powered insights with real-world data.

---

## Technical Architecture

### Frontend Stack
- **Framework**: Next.js 15.4.1 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **UI Components**: Lucide React (icons)
- **State Management**: React Hooks (useState, useEffect)

### Backend & APIs
- **API Routes**: Next.js API routes
- **AI Integration**: OpenAI GPT-4o-mini
- **Job Scraping**: Apify Client
- **Data Processing**: JSON repair utilities

### External Services
- **OpenAI API**: For AI-powered career guidance
- **Apify Platform**: For job data scraping
- **Cookie Management**: Client-side state persistence

### Development Tools
- **Package Manager**: npm
- **Type Checking**: TypeScript
- **Linting**: Next.js ESLint
- **Build Tool**: Next.js built-in bundler

---

## Features & Functionality

### 1. Homepage Dashboard
- **Hero Section**: Compelling value proposition in French
- **Feature Cards**: Three main functionalities (Jobs, Courses, Career Guidance)
- **Testimonials**: User success stories
- **Why Choose Section**: Platform benefits

### 2. Job Search Module (`/job`)
- **Real-time Job Listings**: Powered by Apify web scraping
- **Advanced Filtering**: Location, job type, experience level
- **Pagination**: Efficient data loading
- **Job Details**: Complete job information with company details
- **External Links**: Direct application links

**Key Features:**
- 24-hour data caching
- Responsive design
- Copy-to-clipboard functionality
- Professional job cards with badges

### 3. University Course Explorer (`/course`)
- **University Database**: 6 major Moroccan universities
- **Course Catalog**: Detailed course information
- **Interactive Selection**: University and course selection interface
- **Skill Mapping**: Technologies and skills for each course
- **Academic Levels**: License, Master, Engineering programs

**Supported Universities:**
- Faculté des Sciences
- ENSA (École Nationale des Sciences Appliquées)
- UIR (Université Internationale de Rabat)
- ENSET (École Normale Supérieure de l'Enseignement Technique)
- ENSIAS (École Nationale Supérieure d'Informatique et d'Analyse des Systèmes)
- ENSAM (École Nationale Supérieure d'Arts et Métiers)

### 4. AI-Powered Career Guidance (`/career-guidance`)
- **Comprehensive Analysis**: University and course-specific insights
- **Semester-based Skills**: Organized by academic progression
- **Technology Stack**: Market-relevant technologies
- **Moroccan Job Market**: Local market insights
- **Personalized Advice**: AI-generated recommendations

**AI-Generated Content:**
- Foundation Skills (Semester 1-2)
- License Skills (Semester 3-6)
- Master Skills (Semester 7-10)
- Technology Stack Analysis
- Career Opportunities
- Salary Ranges
- Industry Insights
- Next Steps & Actions

---

## Code Structure

### Directory Organization
```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── career-guidance/
│   │   └── get-job/
│   ├── career/            # Career guidance page
│   ├── course/            # Course explorer page
│   ├── job/               # Job search page
│   └── layout.tsx         # Root layout
├── components/            # Shared components
│   ├── Container/
│   ├── Loader/
│   └── Pagination/
├── features/              # Feature-based modules
│   ├── career/
│   ├── careerGuidance/
│   ├── home/
│   └── job/
├── hook/                  # Custom hooks
├── layout/                # Layout components
│   ├── footer.tsx
│   ├── index.tsx
│   └── navbar.tsx
├── libs/                  # External library configurations
│   ├── ApifyClient.ts
│   ├── Axios.ts
│   ├── Cookie.ts
│   └── openaiClient.ts
└── providers/             # Context providers
```

### Component Architecture
- **Feature-based Organization**: Each major feature has its own directory
- **Shared Components**: Reusable UI components
- **Custom Hooks**: API integration and state management
- **Type Safety**: Full TypeScript implementation

---

## API Integration

### 1. Career Guidance API (`/api/career-guidance`)
**Purpose**: Generate comprehensive career guidance using AI

**Input Parameters:**
- `university`: Selected university name
- `course`: Selected course name

**AI Prompt Structure:**
- Enforces French content with English keys
- Semester-based skill organization
- Comprehensive data schema
- Market relevance focus

**Response Schema:**
```json
{
  "success": true,
  "universityName": "string",
  "courseName": "string",
  "academicLevel": "string",
  "programOverview": { ... },
  "foundationSkills": { "semester1": [], "semester2": [] },
  "licenseSkills": { "semester3": [], ... },
  "masterSkills": { "semester7": [], ... },
  "technologyStack": [ ... ],
  "careerOpportunities": [ ... ],
  "moroccanJobMarket": { ... },
  "personalizedAdvice": { ... }
}
```

### 2. Job Search API (`/api/get-job`)
**Purpose**: Fetch job listings from Apify platform

**Features:**
- 24-hour data caching
- Pagination support
- Filtering capabilities
- Error handling

**Apify Integration:**
- Actor ID configuration
- Dataset management
- Cookie-based caching
- Rate limiting

---

## UI/UX Design

### Design System
- **Color Palette**: Green primary (#10B981), with supporting colors
- **Typography**: Clean, readable fonts
- **Spacing**: Consistent padding and margins
- **Components**: Card-based layout with shadows

### Responsive Design
- **Mobile-first**: Optimized for mobile devices
- **Breakpoints**: sm, md, lg, xl
- **Grid System**: CSS Grid and Flexbox
- **Navigation**: Collapsible mobile menu

### User Experience
- **Loading States**: Skeleton loaders
- **Error Handling**: User-friendly error messages
- **Accessibility**: ARIA labels and semantic HTML
- **Performance**: Optimized images and lazy loading

### French Localization
- **Complete Translation**: All UI text in French
- **Cultural Adaptation**: Moroccan context
- **Academic Terminology**: Proper French academic terms
- **Professional Language**: Business-appropriate tone

---

## Internationalization

### Translation System
The project implements a comprehensive French translation system:

**Key Translation Features:**
- **Translation Dictionary**: 50+ key-value pairs
- **Dynamic Translation**: Runtime key resolution
- **Fallback System**: English fallback for missing translations
- **Academic Terms**: Proper French academic terminology

**Translation Categories:**
- University and course names
- Academic levels and semesters
- Technology stack terms
- Career guidance terminology
- Job market insights
- UI elements and navigation

**Example Translation:**
```typescript
const keyTranslations: Record<string, string> = {
  universityName: "Nom de l'université",
  courseName: "Nom du cours",
  academicLevel: "Niveau académique",
  technologyStack: "Pile technologique",
  careerOpportunities: "Opportunités de carrière",
  moroccanJobMarket: "Marché de l'emploi marocain"
};
```

---

## Deployment & Configuration

### Environment Variables
```bash
# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key

# Apify Configuration
NEXT_PUBLIC_APIFYCLEINT_API_TOKEN=your_apify_token
NEXT_PUBLIC_ACTOR_ID=your_actor_id
```

### Build Configuration
- **Next.js Config**: TypeScript support
- **PostCSS**: Tailwind CSS processing
- **TypeScript**: Strict mode enabled
- **Path Mapping**: @/* alias for src directory

### Production Build
```bash
npm run build
npm run start
```

### Development Server
```bash
npm run dev
```

---

## Development Workflow

### Code Quality
- **TypeScript**: Full type safety
- **ESLint**: Code linting
- **Prettier**: Code formatting (implied)
- **Git**: Version control

### Component Development
- **Feature-based**: Organized by functionality
- **Reusable Components**: Shared UI elements
- **Custom Hooks**: API integration
- **Context Providers**: State management

### API Development
- **RESTful Design**: Standard HTTP methods
- **Error Handling**: Comprehensive error responses
- **Type Safety**: TypeScript interfaces
- **Documentation**: Inline code comments

---

## Future Enhancements

### Planned Features
1. **User Authentication**: User accounts and profiles
2. **Saved Jobs**: Job bookmarking functionality
3. **Career Tracking**: Progress monitoring
4. **Advanced Filtering**: More job search options
5. **Mobile App**: React Native implementation
6. **Admin Dashboard**: Content management system

### Technical Improvements
1. **Database Integration**: Persistent data storage
2. **Caching Strategy**: Redis implementation
3. **Performance Optimization**: Code splitting
4. **Testing Suite**: Unit and integration tests
5. **CI/CD Pipeline**: Automated deployment

### Market Expansion
1. **Multi-language Support**: Arabic and English
2. **Regional Expansion**: Other North African countries
3. **Industry Partnerships**: University collaborations
4. **Corporate Features**: HR integration tools

---

## Conclusion

SmartEdu represents a comprehensive solution for career guidance and educational planning in the Moroccan market. The platform successfully combines:

- **AI-powered insights** for personalized career guidance
- **Real-time job data** from multiple sources
- **Comprehensive university database** with detailed course information
- **French localization** for the target market
- **Modern web technologies** for optimal performance

The project demonstrates strong technical architecture, user-centered design, and market-specific customization, making it a valuable tool for students and professionals seeking career guidance in Morocco.

---

**Report Generated**: December 2024  
**Project Status**: Active Development  
**Version**: 0.1.0  
**Last Updated**: Current
