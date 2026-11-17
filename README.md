# Busy Beaver

Busy Beaver is a small Angular web application for managing healthcare staff data. It lets users browse the nursing team, log in, and search nurses by name. It was built as a team project for module MP616 (DAW 2).

All data is local mock data: the app has no backend or database.

## Prerequisites

| Tool        | Version                                     |
| ----------- | ------------------------------------------- |
| Node.js     | 22.22.3+ or 24.15.0+ (tested with 24.20.0)  |
| npm         | Included with Node.js                       |
| Angular CLI | 22.2.6 (installed locally with the project) |

You don't need to install the Angular CLI globally. The commands below use `npx ng`, which runs the version installed in the project. If you have Angular CLI 22 installed globally, you can drop `npx` and run `ng` directly.

## Run locally

```bash
git clone https://github.com/israelalmore/MP616_BUSYBEAVER_ANGULAR.git
cd MP616_BUSYBEAVER_ANGULAR
npm ci
npx ng serve
```

Then open <http://localhost:4200> in your browser. The page reloads automatically when you change a source file. Press `Ctrl+C` in the terminal to stop the server.

## Build

```bash
npx ng build --base-href ./
```

The output is generated in `dist/BusyBeaverAngular/browser/`. With `--base-href ./`, asset paths are relative, so you can deploy the folder to any subdirectory of a web server.

## Tests

```bash
npx ng test --watch=false
```

This runs the unit tests with [Vitest](https://vitest.dev/). To keep the tests running while you edit, run `npx ng test` without the flag.

## Screens

| Route       | Screen      | Description                                                                         |
| ----------- | ----------- | ----------------------------------------------------------------------------------- |
| `/`         | Home        | Landing page with the main menu that links to every other screen.                   |
| `/registry` | Nurse list  | Lists the registered nurses and their specialties; nurses can be marked as favorites. |
| `/login`    | Login       | Login form with email and password validation and a success/error message.         |
| `/search`   | Search      | Searches nurses by name (case and accent insensitive); searching `Mar` returns 3 results. |

Any unknown route redirects to Home. Every screen has a link back to Home.

**Demo login credentials:** `enfermera@busybeaver.test` / `Salud123!`

## Project structure

Components follow [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/): small reusable pieces are combined into bigger ones, up to full pages.

```text
src/
├── app/
│   ├── atoms/          Basic UI elements: button, icon, image, input, label
│   ├── molecules/      Groups of atoms: nurse-card, search-bar
│   ├── organisms/      Complex sections: login-form, navigation-menu, nurse-list
│   ├── templates/      Shared page layout (header + content): page-layout
│   ├── pages/          One component per route: home, nurse-list, login, search
│   ├── app.routes.ts   Route definitions
│   └── app.ts          Root component (<router-outlet>)
├── index.html
├── main.ts
└── styles.css          Global styles
```

## Team

| Name               | GitHub                                               |
| ------------------ | ---------------------------------------------------- |
| Israel Alcántara   | [israelalmore](https://github.com/israelalmore)     |
| Àlex Barrera       | [alexBarrera457](https://github.com/alexBarrera457) |
| Elyas Iqbal Medina | [ElyasIT](https://github.com/ElyasIT)               |
| izaantorrico       | [izaantorrico](https://github.com/izaantorrico)     |
