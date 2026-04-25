# GitPortify

A complete production-ready portfolio builder that allows developers to create, customize, and publish professional portfolio websites instantly — without writing code. Built with modern full-stack technologies, GitPortify focuses on performance, usability, and real-world application.

---

## Features

- **Authentication (GitHub OAuth)**
  - Secure GitHub login using NextAuth
  - Automatic user profile sync (name, avatar, bio)
  - Session-based authentication
  - Protected dashboard routes 

- **Portfolio Builder Core**
  - Create and manage developer portfolio
  - Dynamic project system
  - Add project name, description, tech stack, links
  - Upload project images
  - Clean UI preview system
  - Real-time preview panel

- **Templates System**
  - Multiple modern portfolio templates
  - Frontend-focused full-stack layouts
  - Conditional UI (Navbar, Contact, Theme toggle)
  - Template-based customization
  - Responsive & minimal design

- **Publish System**
  - One user = one unique portfolio link
  - Update existing portfolio (no duplicate links)
  - Public portfolio URL:
    /portfolio/{username}
  - Works across all devices
  - Data fetched directly from MongoDB

- **Contact & Social Links**
  - Email
  - GitHub
  - LinkedIn
  - Personal Website
  - Dynamic rendering based on user input

- **SEO & Metadata**
  - Dynamic metadata per portfolio
  - OpenGraph support (LinkedIn, WhatsApp preview)
  - Twitter cards
  - Dynamic titles & descriptions
  - SEO-friendly URLs

- **Dashboard**
  - Sidebar navigation (Dashboard, Templates, Settings)
  - Live editing experience
  - Local + DB sync
  - Clean UX for managing portfolio

---

## What This Project Demonstrates

- **Full-stack SaaS architecture**
- **Real-world database integration**
- **Authentication + session handling**
- **Dynamic routing with Next.js App Router**
- **API design using server routes**
- **Data persistence with MongoDB**
- **UI/UX system design**
- **Debugging real production issues**
- **Building scalable frontend architecture**

---

## Tech Stack

- **Frontend**
  - Next.js (App Router)
  - React + TypeScript
  - Tailwind CSS
  - ShadCN UI
  - next-themes
  - React Icons

- **Backend**
  - Node.js (via Next.js API routes)
  - MongoDB + Mongoose

- **Authentication**
  - NextAuth (GitHub OAuth)

- **Deployment**
  - Frontend + Backend → Vercel
  - Database → MongoDB Atlas

---

## How to Run Locally

### Clone the repository
    git clone https://github.com/your-username/gitportify.git
    cd gitportify  

### Install dependencies
    npm install

### Setup Environment Variables

#### Create .env.local file:

    NEXTAUTH_SECRET=your_secret
    NEXTAUTH_URL=http://localhost:3000

    GITHUB_ID=your_github_client_id
    GITHUB_SECRET=your_github_secret

    MONGODB_URI=your_mongodb_uri

    NEXT_PUBLIC_APP_URL=http://localhost:3000

### Run development server
    npm run dev

### Open in browser
    http://localhost:3000

---

## Usage
- **Sign in using GitHub**
- **Customize your profile (name, bio, projects, links)**
- **Choose a template**
- **Click Publish**
- **Your portfolio is live at:**
    /portfolio/{username}

---

## Future Improvements
- **Portfolio analytics (views tracking)**
- **Dynamic OG image generator**
- **Custom domains**
- **Drag & drop portfolio builder**
- **More premium templates**
- **Auto-save system**

---

## Author
- **Safdar Chougle**
- ***Frontend-Focused Full-Stack Web Developer***

- ***GitHub: https://github.com/chouglesafdar22***
- ***Portfolio: https://safdarchougle.vercel.app***

---

## Support
- ***If you like this project, consider giving it a ⭐ on GitHub!***