# Country-Data-Dashboard
Country Data Dashboard
Overview

The Country Data Dashboard is a full-stack web application that provides users with information about countries, including basic details such as the name, population, region, and time zone. It leverages the REST Countries API for data and features a responsive UI for an enhanced user experience.

Features

Backend (Node.js + Express + TypeScript)

Endpoints:

GET /countries: Retrieve a list of all countries.

GET /countries/:code: Get detailed information about a specific country by code.

GET /countries/region/:region: Filter countries by region.

GET /countries/search: Search countries by name, capital, region, or timezone.

Caching: Reduces API requests by caching responses.

Error Handling: Handles API errors gracefully.

Frontend (React + Next.js + TypeScript)

Country List Page:

Displays countries with basic information such as name, flag, and region.

Shows the current local time for each country.

Supports lazy loading and infinite scrolling.

Country Detail Page:

Displays detailed information about a selected country (population, languages, currency, etc.).

Search and Filters:

Search countries by name or capital.

Filter by region and timezone.

Responsive Design: Optimized for different screen sizes using Tailwind CSS.

Error and Loading States: Provides feedback for data loading or errors.

Bonus Features

Compare two countries side by side.

Map visualizations (future enhancement).

Project Setup

Prerequisites

Node.js (v16 or higher)

npm or yarn

Backend Setup

Navigate to the backend directory:

cd backend

Install dependencies:

npm install

Start the development server:

npm run dev

The backend server will run on http://localhost:3001 by default.

Frontend Setup

Navigate to the frontend directory:

cd frontend

Install dependencies:

npm install

Start the development server:

npm run dev

Access the application at http://localhost:3000.

Project Structure

Backend

src/

index.ts: Application entry point.

routes/: Contains route definitions for APIs.

services/: Handles logic for API calls to REST Countries API.

utils/: Utility functions, including caching logic.

Frontend

components/

Header.tsx: Displays the application header.

CountryCard.tsx: Reusable card component for country details.

pages/

index.tsx: Main page displaying the list of countries.

country/[code].tsx: Dynamic route for displaying detailed country information.

services/: API calls to interact with the backend.

Deployment

CI/CD Setup

GitHub Actions for automated builds and deployments.

Backend: Deploys to Heroku.

Frontend: Deploys to Vercel.

Environment Variables

Configure .env files in both backend and frontend:

Backend:

PORT=3001
REST_COUNTRIES_API=https://restcountries.com/v3.1

Frontend:

NEXT_PUBLIC_BACKEND_URL=http://localhost:3001

Testing

Backend Tests

Run backend tests:

npm test

Frontend Tests

Run frontend tests:

npm test

Technologies Used

Backend: Node.js, Express, TypeScript, Axios

Frontend: React, Next.js, TypeScript, Tailwind CSS

Testing: Jest, React Testing Library

Deployment: GitHub Actions, Heroku, Vercel
