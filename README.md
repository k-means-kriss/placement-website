# 🎓 PlaceMe – Placement Website

A modern, responsive placement website that connects students with top employers for internships and full-time opportunities.

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Landing page with hero, featured jobs, how-it-works, testimonials |
| Jobs | `jobs.html` | Filterable job listings with search and sidebar filters |
| Students | `students.html` | Student dashboard – applications, profile editor, stats |
| Companies | `companies.html` | Employer info page with company cards |
| Post a Job | `post-job.html` | Form for employers to post new job listings |
| Login | `login.html` | Student/employer login page |
| Register | `register.html` | Account creation for students and companies |
| Contact | `contact.html` | Contact form and office information |

## Features

- **Responsive design** – works on desktop, tablet, and mobile
- **Job search & filtering** – filter by job type and work mode (remote/hybrid/on-site)
- **Student dashboard** – view application statuses, edit profile
- **Employer portal** – post jobs and browse available talent
- **Auth simulation** – login/register stored via localStorage for demo purposes
- **Toast notifications** – real-time feedback for user actions

## Project Structure

```
placement-website/
├── index.html          # Home page
├── jobs.html           # Job listings
├── students.html       # Student dashboard
├── companies.html      # Companies page
├── post-job.html       # Post a job form
├── login.html          # Login page
├── register.html       # Registration page
├── contact.html        # Contact page
├── css/
│   └── styles.css      # All styles (responsive, CSS variables)
└── js/
    └── main.js         # All interactivity (search, filters, auth, forms)
```

## Getting Started

No build tools required — simply open `index.html` in a browser, or serve with any static file server:

```bash
# Using Python
python3 -m http.server 8080

# Using Node.js (npx)
npx serve .
```

Then visit `http://localhost:8080`.
