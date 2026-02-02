# Amity

### Amity is a full-stack social networking application inspired by The Owl House’s - Amity Blight, designed to connect users across realms through seamless real-time communication. Whether you're sharing magical moments or coordinating interdimensional adventures, Amity brings friends together with instant messaging, high-quality video calls, and a robust friend system. Built with modern web technologies like React, Node.js, and Stream SDKs, it delivers a magical yet intuitive social experience with responsive design, customizable themes, and secure authentication.

<p align="center">
  <img src="screenshorts/Amity.jpg" width="300"><br>
  <b>Figure 1.0 Amity Blight</b>
</p>


## Features

- **User Authentication**: Secure signup and login with JWT tokens
- **Real-time Chat**: Instant messaging with friends using Stream Chat
- **Video Calls**: High-quality video calling powered by Stream Video SDK
- **Friend System**: Send and manage friend requests, view recommendations
- **Notifications**: Stay updated with friend requests and messages
- **Responsive Design**: Modern UI built with React and Tailwind CSS
- **Dark/Light Theme**: Customizable theme options

## Tech Stack

### Frontend
- **React 19** - Modern React with hooks and concurrent features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind CSS
- **React Router** - Client-side routing
- **Zustand** - Lightweight state management
- **React Query** - Data fetching and caching
- **Stream Chat React** - Real-time chat components
- **Stream Video React SDK** - Video calling functionality

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Stream Chat** - Real-time messaging backend
- **Cookie Parser** - HTTP cookie handling

## Prerequisites

- Node.js (v16 or higher)
- MongoDB database
- Stream account (for chat and video features)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jz1221/Amity.git
   cd Amity
   ```

2. **Install dependencies**
   ```bash
   npm run build
   ```
   This will install dependencies for both backend and frontend.

3. **Environment Setup**

   Create `.env` file in the `backend` directory:
   ```env
   PORT=5001
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   STREAM_API_KEY=your_stream_api_key
   STREAM_API_SECRET=your_stream_api_secret
   NODE_ENV=development
   ```

4. **Start the development servers**

   **Backend:**
   ```bash
   cd backend
   npm run dev
   ```

   **Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

## Usage

1. **Sign Up**: Create a new account
2. **Onboarding**: Complete your profile setup
3. **Add Friends**: Browse recommendations and send friend requests
4. **Chat**: Start conversations with your friends
5. **Video Call**: Make video calls to connect face-to-face

## Available Scripts

### Root Level
- `npm run build` - Install dependencies and build frontend
- `npm run start` - Start the production server

### Backend
- `npm run dev` - Start development server with nodemon
- `npm run start` - Start production server

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
Amity/
├── backend/
│   ├── src/
│   │   ├── controllers/     # Route handlers
│   │   ├── lib/            # Database and utility functions
│   │   ├── middleware/     # Authentication middleware
│   │   ├── models/         # MongoDB schemas
│   │   ├── routes/         # API routes
│   │   └── server.js       # Main server file
│   └── package.json
├── frontend/
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # API and utility functions
│   │   ├── pages/          # Page components
│   │   ├── store/          # Zustand stores
│   │   └── App.jsx         # Main app component
│   └── package.json
└── package.json            # Root package.json
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is part of the Jz1221 repository.</content>

For more information, visit the repository at [github.com/Jz1221/Amity](https://github.com/Jz1221/Amity)