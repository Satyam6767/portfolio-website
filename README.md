# MERN Developer One-Page Portfolio

A modern, responsive React/Vite portfolio using the four original photos supplied for this project.

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Build for production

```bash
npm run build
npm run preview
```

## Customize your portfolio

Open `src/data/portfolioData.js` and update:

- Name
- Role/tagline
- Email, phone and location
- LinkedIn/GitHub URLs
- Skills
- Experience
- Projects
- Services

### Photos

The supplied photos are already included here:

`src/assets/images/`

- `presentation.png` — main Hero image
- `classroom-wide.jpeg` — About section
- `workshop-1.jpg` — professional gallery
- `workshop-2.jpg` — professional gallery

Replace any file with another photo using the same filename if you want to keep the code unchanged.

### Resume

Put your actual resume at:

`public/resume.pdf`

The Resume button is already wired to that path.

### Project links

Update each project's `github` and `live` URL in `src/data/portfolioData.js`.

### Contact form

The form is intentionally frontend-only. Connect it to your backend, Formspree, EmailJS, Resend, or another email/API service before production.

## Structure

```text
src/
├── assets/images/
├── components/
├── data/portfolioData.js
├── App.jsx
├── main.jsx
└── styles.css
public/
└── (place resume.pdf here)
```

The visual components are kept in `App.jsx` for a simple starter project. As the portfolio grows, they can be split into the `components/` folder.
