# Notification System Design

## Stage 1 – Priority Notification System

### Objective

The objective of this system is to build a Campus Notifications Platform that allows students to view important notifications related to:

- Placements
- Results
- Events

The platform provides:

- Real-time notification fetching
- Priority-based notification ordering
- Filtering by notification type
- Responsive frontend dashboard
- Viewed/unviewed notification tracking

---

# System Architecture

The application follows a simple frontend-backend architecture.

## Frontend

Technology Used:
- React (Vite)
- Material UI
- React Router DOM
- Axios

Responsibilities:
- Display notifications
- Filter notifications
- Show priority notifications
- Responsive UI rendering
- Viewed/unviewed state management

---

## Backend

Technology Used:
- Node.js
- Express.js
- Axios
- CORS
- dotenv

Responsibilities:
- Connect with protected AffordMed Notification API
- Handle authorization token securely
- Provide proxy APIs for frontend
- Perform filtering and limiting operations
- Avoid browser CORS restrictions

---

# API Integration

The AffordMed Notification API is protected using Bearer Token Authentication.

## Notification API

GET:
http://20.207.122.201/evaluation-service/notifications

The backend server securely forwards requests to this API using the stored access token.

---

# Priority Logic

The Priority Inbox displays notifications based on:

1. Notification Type Weight
2. Recency

Priority order:

| Notification Type | Weight |
|-------------------|--------|
| Placement         | 3      |
| Result            | 2      |
| Event             | 1      |

The notifications are sorted:
1. Higher weight first
2. Latest timestamp first

---

# Frontend Features

## Home Page

The Home page provides:

- All notifications listing
- Notification type filtering
- Pagination
- Responsive card layout
- Viewed/unviewed notification state

---

## Priority Inbox

The Priority page provides:

- Top N priority notifications
- Priority-based sorting
- Dynamic top notification selection
- Responsive dashboard view

---

# Viewed Notification Tracking

Viewed notifications are stored using browser localStorage.

Purpose:
- Improve user experience
- Distinguish already opened notifications
- Persist viewed state after refresh

---

# Responsive UI Design

Material UI Grid system is used for responsiveness.

Layouts supported:
- Desktop
- Tablet
- Mobile

Features:
- Responsive card layout
- Adaptive spacing
- Flexible grid rendering

---

# Error Handling

The system handles:

- API failures
- Empty notification responses
- Invalid token errors
- Network errors

Loading indicators are displayed while fetching data.

---

# Security Considerations

- Access tokens are stored in environment variables
- Sensitive credentials are excluded using .gitignore
- Backend proxy prevents direct frontend exposure of tokens

---

# Scalability Considerations

The system can be extended with:

- Real-time WebSocket notifications
- Notification read status persistence
- Database integration
- User authentication
- Push notifications
- Search functionality

---

# Logging Middleware

The system is designed to integrate reusable logging middleware for:

- API request tracking
- Error monitoring
- User activity tracking
- Debugging support

Logging can help monitor:
- Failed API requests
- Notification fetch operations
- Frontend interactions

---

# Conclusion

The Campus Notification System successfully implements:

- Protected API integration
- Priority notification management
- Responsive frontend design
- Filtering and sorting
- Scalable architecture

The system is lightweight, modular, and suitable for future production-scale enhancements.