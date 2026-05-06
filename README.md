# Campus Notification System

A responsive Campus Notification Platform built using React, Material UI, Node.js, and Express.js for the AffordMed assessment.

# Features

- Protected API integration
- Responsive dashboard UI
- Notification filtering
- Priority-based notification sorting
- Viewed/unviewed notification tracking
- Pagination support
- Backend proxy for CORS handling
- Material UI based modern design

# Tech Stack

## Frontend
- React (Vite)
- Material UI
- Axios
- React Router DOM

## Backend
- Node.js
- Express.js
- Axios
- CORS
- dotenv

# Project Structure

```txt
2117230070079/
│
├── logging_middleware/
├── notification_app_be/
├── notification_app_fe/
├── notification_system_design.md
└── README.md
```

# Setup Instructions

## Frontend Setup

```bash
cd notification_app_fe
npm install
npm run dev
```

Frontend runs on:
```txt
http://localhost:5173
```

---

## Backend Setup

```bash
cd notification_app_be
npm install
node server.js
```

Backend runs on:
```txt
http://localhost:5000
```

# Environment Variables

## Backend `.env`

```env
ACCESS_TOKEN=YOUR_ACCESS_TOKEN
```

## Frontend `.env`

```env
VITE_ACCESS_TOKEN=YOUR_ACCESS_TOKEN
```

# Functionalities

## Home Page
- Displays all notifications
- Filter notifications by type
- Viewed/unviewed notification state
- Pagination support

## Priority Inbox
- Displays top priority notifications
- Priority sorting based on:
  - Placement
  - Result
  - Event
- Top N notification selection

# Priority Logic

| Type | Priority Weight |
|------|----------------|
| Placement | 3 |
| Result | 2 |
| Event | 1 |

Notifications are sorted based on:
1. Higher priority
2. Latest timestamp

# Responsive Design

The application supports:
- Desktop view
- Tablet view
- Mobile view

Material UI Grid system is used for responsive layouts.

# Security

- Protected API authentication using Bearer Token
- Environment variables used for sensitive credentials
- `.gitignore` prevents credential exposure

# Future Improvements

- Real-time notifications
- Push notification support
- Database integration
- Authentication system
- Notification search feature

---

