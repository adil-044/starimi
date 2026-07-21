<p align="center">
  <img src="assets/icon.png" alt="Star Immigration" width="80" height="80" />
</p>

<h1 align="center">Star Immigration</h1>

<p align="center">
  Marketing site for an immigration practice — built with <strong>Expo + React Native Web</strong>.<br />
  Single-page scroll: hero, pillars, about, practice areas, results, testimonials, lead form.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Expo-~57-000020?logo=expo&logoColor=white" alt="Expo" />
  <img src="https://img.shields.io/badge/React_Native-0.86-61DAFB?logo=react&logoColor=black" alt="RN" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Platform-iOS%20%7C%20Android%20%7C%20Web-lightgrey" alt="Platforms" />
</p>

---

## What it is

Client-facing **brand landing** for Star Immigration (slug: `StarImmigration`):

- Responsive layout via custom `useResponsive` helpers
- Sectioned scroll experience (Header → Hero lead form → Pillars → … → Footer)
- Cream / ink / orange theme tokens in `src/theme.js`
- Web fonts loader for a polished desktop look
- Expo web base path experiment: `/starimi`

Useful as a portfolio piece for **cross-platform marketing sites** without a separate Next.js app.

---

## Sections

| Component | Purpose |
|---|---|
| `Header` | Nav / brand |
| `Hero` | Headline + lead capture form |
| `Pillars` | Service differentiators |
| `About` | Firm story |
| `Practice` | Practice areas |
| `Results` | Outcomes / stats |
| `Testimonials` | Social proof |
| `Areas` | Geographic coverage |
| `Footer` | Contact / legal |

---

## Quick start

```bash
git clone https://github.com/adil-044/starimi.git
cd starimi
npm install
npm start
```

| Script | |
|---|---|
| `npm start` | Expo dev server |
| `npm run web` | Web |
| `npm run ios` / `android` | Native simulators |

Requires Node 18+ and Expo Go (or simulators) for device preview.

---

## Repo map

```
App.js              Root scroll shell
src/sections/       Page sections
src/theme.js        Colors, fonts, business copy
src/ui.js           Container, Button, responsive helpers
assets/             Icons & splash
```

---

## Author

**Adil (Dean)** — Ottawa / Hamilton  
Also shipping: [HireReady](https://github.com/adil-044/resume-ats) · [SousXChef](https://github.com/adil-044/SouSxChef)

- GitHub: [@adil-044](https://github.com/adil-044)
- Book a call: [calendly.com/uptisement/30min](https://calendly.com/uptisement/30min)

---

## License

[MIT](LICENSE)
