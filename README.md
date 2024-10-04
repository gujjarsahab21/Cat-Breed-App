# Cat Breeds Project

## Overview
This project is a web application that displays various cat breeds, allowing users to search, view details, and enjoy an interactive experience. The application utilizes the Cat API to fetch data about different cat breeds and presents it in a user-friendly interface.

## Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone https://github.com/gujjarsahab21/Cat-Breed-App
   cd cat-breeds-project
   ```

2. **Install dependencies**:
   Make sure you have Node.js and npm installed. Then run:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:3000`.

## Dependencies
- React
- React Router
- Bootstrap
- fetch 
- CSS for styling

## Features
- **Search Functionality**: A search bar allows users to filter cat breeds by name.
- **View More Feature**: Users can load more cat breeds in increments of 16.
- **Detailed View**: Clicking on a cat breed redirects to a detailed view with more information.
- **Audio Feedback**: An audio clip plays when a user clicks on a cat for details.
- **Responsive Design**: The layout adjusts for different screen sizes using Bootstrap.

## Code Structure
- **`src/`**: Contains the main application files.
  - **`components/`**: Reusable components.
    - **`CatList.jsx`**: Displays the list of cat breeds.
    - **`CatDetail.jsx`**: Displays detailed information about a selected cat.
    - **`SearchBar.jsx`**: Implements the search functionality.
  - **`CatList.css`**: Custom styles for the CatList component.
  - **`SearchBar.css`**: Custom styles for the SearchBar component.
  - **`CatDetail.css`**: Custom styles for the CatDetail component.
- **`App.js`**: Main application file where routing is configured.

## API
The application uses the [Cat API](https://thecatapi.com/) to fetch information about cat breeds. The endpoint used is:
```
https://api.thecatapi.com/v1/breeds
```

### Additional Notes
- Ensure you have an active internet connection to fetch data from the API.
- The project is styled using Bootstrap and custom CSS for an attractive and responsive design.
- Additional features can be implemented for further enhancements.
