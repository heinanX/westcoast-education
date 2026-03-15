# WestCoast Education

A course booking platform for WestCoast Education — an IT education company based on the west coast of Sweden. Built as a Proof of Concept (POC) school assignment.

## About the Project

The platform consists of two parts:

**Step 1 — Public Site**
A course listing site where visitors can browse available courses, view course details, and book a course in either classroom or remote format.

**Step 2 — Admin Dashboard**
An admin tool for managing courses and viewing customer bookings, built with TypeScript.

## Tech Stack

- Vanilla JavaScript (Step 1)
- TypeScript (Step 2)
- HTML & CSS
- JSON Server (REST API)

## Getting Started

### Installation

```bash
git clone https://github.com/heinanX/westcoast-education.git
cd westcoast-education
npm install
```

### Running the Project

Start the JSON Server (REST API):

```bash
npx json-server db.json
```

Then open the project with Live Server in VS Code. The API will be available at `http://localhost:3000`.

### Compiling TypeScript

```bash
npx tsc --watch
```
