# Sofof Tech Job Task Project

This project is a React-based web application that features a product catalog and product details pages.

## Features

- Home page with a hero slider showcasing images.
- Product listing page displaying products fetched from a JSON data source using Redux Toolkit Query.
- Product details page showing detailed information about a selected product, including images, overview, key features, and suggested similar products.
- Responsive design with modern UI components.
- State management using Redux Toolkit and RTK Query for efficient data fetching.

## Technologies Used

- React
- Redux Toolkit
- RTK Query
- Tailwind CSS (assumed from class names)
- Swiper for slider functionality

## Project Structure

- `src/pages`: Contains page components like Home, Product, and ProductDetails.
- `src/redux`: Contains Redux store setup and API slices.
- `src/component`: Contains reusable components including home and product components.
- `public/product.json`: JSON file serving as the product data source.

## How to Run

- Install dependencies using `npm install`.
- Start the development server using `npm run dev`.
- Access the application in the browser at `http://localhost:5173` (or the port configured).

This project demonstrates a clean architecture for a product catalog with detailed views and interactive UI elements.