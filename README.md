# Link Sharing App

This is a link-sharing application that allows users to add, edit, and manage their social media and other links. Users can also customize their profile details and share their profiles with others.

## Features

- **Add, Edit, Remove Links**: Users can add new links, edit existing ones, and remove them as needed.
- **Profile Customization**: Users can add their personal details including profile picture, first name, last name, and email.
- **Share Profile**: Users can share their customized profiles with a single link.
- **Responsive Design**: The application is responsive and works on various screen sizes.
- **User Authentication**: Secure authentication using Firebase.
- **Data Persistence**: All user data is saved in Firebase Firestore.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Firebase**: Backend-as-a-Service (BaaS) for authentication and Firestore for data storage.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router**: For routing and navigation.
- **React Toastify**: For showing notifications.
- **TypeScript**: Superset of JavaScript for type safety.
- **Vite**: Next-generation front-end tooling for faster development.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/lomsadze123/fullstack-link-sharing-app.git
   cd fullstack-link-sharing-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root of the project and add your Firebase configuration:

   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`.

## Project Structure

- `src/components`: Contains all the reusable components like `Header`, `SaveButton`, `UploadImage`, etc.
- `src/context`: Context API setup for managing global state.
- `src/hooks`: Custom hooks used in the application.
- `src/pages`: Different pages of the application (`Auth`, `AddLinks`, `Profile`, `Preview`).
- `src/assets`: Contains images and other static assets.
- `src/firebase`: Firebase configuration and initialization.
- `src/types`: TypeScript type definitions.

## Usage

- **Sign Up/In**: Users need to sign up or log in to use the application.
- **Add Links**: Use the "Add new link" button to add a new link.
- **Edit Links**: Click on an existing link to edit it.
- **Remove Links**: Remove a link by clicking on the delete button.
- **Customize Profile**: Go to the Profile page to add or edit your profile details.
- **Share Profile**: Use the "Share Link" button to copy the link to your clipboard and share your profile with others.
