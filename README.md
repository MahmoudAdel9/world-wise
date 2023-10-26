# React WorldWise App

This project is a single-page application (SPA) built with React and Vite. It features a login page where users can register and log in. Once logged in, users can manage their travel list, which includes the cities they have ever traveled to. The app utilizes the Leaflet library for the map functionality, allowing users to view their current position, add cities to their travel list, and view city details with external API data and Wikipedia links. from (Jonas's React Course)

## Live Server

https://world-wise-mahmoud.netlify.app/

## Project Structure

The project structure follows the typical structure of a React Vite project. Here's an overview of the important files and directories:
src/
components/
AppLayout.jsx
City.jsx
CityList.jsx
Form.jsx
HomePage.jsx
Login.jsx
PageNotFound.jsx
Pricing.jsx
Product.jsx
SpinnerFullPage.jsx
hooks/
useCities.js
useAuth.js
providers/
AuthProvider.jsx
CitiesProvider.jsx
routes/
ProtectedAuth.jsx
App.jsx
main.jsx
index.html

- `src/components/`: Contains reusable React components used in the project.
- `src/hooks/`: Contains custom hooks used in the project, such as `useCities` and `useAuth`.
- `src/context/`: Contains context providers for managing global state, such as `AuthProvider` and `CitiesProvider`.
- `src/routes/`: Contains routing components, such as `ProtectedAuth`, used for route protection.
- `src/App.jsx`: The main component that renders the entire application.
- `src/main.jsx`: The entry point of the application.
- `index.html`: The HTML template for the app.

## Features

- User Authentication: Users can register and log in to access the app's features.
- City List: Users can view and manage the cities they have traveled to.
- Map: The app includes a map powered by the Leaflet library. Users can view their current position and click on cities to view city details.
- City Details: Clicking on a city on the map displays details about the city, including the date of the visit, user notes, and a link to the Wikipedia article.
- Add and Delete Cities: Users can add cities to their travel list and delete cities from the list.

## Getting Started

To get the project up and running on your local machine, follow these steps:

```bash
1. Clone the project repository:

    git clone <repository_url>

2. Navigate to the project directory:
    cd react-vite-travel-app

3. Install the dependencies:
    npm install

4. Start the development server:
    npm run dev

5. Run the Data server
    npm run server

5. Open your web browser and visit http://localhost:3000 to see the app running. The page will automatically reload if you make any changes to the source code.
```

## Customization

You can customize the app by modifying the components, styles, and map configuration according to your requirements. You can also extend the functionality by adding new components or integrating additional APIs.

## Conclusion

This README file provides an overview of the React WorldWise App project. Feel free to explore the code, customize the app, and adapt it to your specific requirements. If you have any questions or need further assistance, don't hesitate to reach out for support. Happy traveling!
