# Space Travel

A React application for building spacecraft, managing a fleet, and transferring passengers between planets.

Developed as a school project during Springboard’s Software Engineering Career Track.

## Features

- Browse spacecraft and open individual detail pages.
- Build spacecraft with a name, passenger capacity, description, and optional image.
- Validate required fields before submitting the construction form.
- Remove spacecraft from the fleet.
- View planetary populations and spacecraft stationed on each planet.
- Send spacecraft to another planet and update passenger populations.
- Keep simulation data between page reloads using browser localStorage.
- Navigate between pages with React Router and show loading indicators during asynchronous operations.

## Technologies

React · JavaScript · React Router · Vite · CSS Modules · localStorage

## How it works

The interface calls an asynchronous mock API provided in the project. The mock API simulates a response delay and stores planet and spacecraft data in localStorage. No backend server or database is required.

New spacecraft start on Earth. Sending a spacecraft moves passengers up to its capacity, limited by the departure planet’s population, and updates the spacecraft’s location.

## Run locally

Install Node.js and npm, then run these commands from the project folder:

```sh
npm ci
npm run dev
```

Open the local address shown in the terminal.

## Production build

```sh
npm run build
npm run preview
```

Vite creates the production files in `dist/`. Because the app uses BrowserRouter, deployment must serve `index.html` for application routes such as `/spacecrafts` and `/planets`.

## Reset the simulation

The simulation is stored under the `MOCK_DB` localStorage key. Remove that key using your browser’s developer tools and reload the page to restore the initial planets and spacecraft.

## What I practiced

Component composition, React hooks, client-side routing, controlled forms, required-field validation, asynchronous operations, and rendering updated simulation data.
