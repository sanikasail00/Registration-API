*Synergia Event Booking API*

Features:
- View all event bookings
- Register for the event
- View specific booking details
- Update participant information
- Cancel bookings

Install dependencies:
npm install express

Run the server:
node registration.js

The server starts at:
http://localhost:3000

➤ 1. Get All Bookings

Method: GET
URL: http://localhost:3000/api/bookings

➤ 2. Add New Booking

Method: POST
URL: http://localhost:3000/api/bookings

{
  "newBooking": {
    "name": "Ravi",
    "email": "ravi123@gmail.com",
    "ticketType": "VIP",
    "phone": "9998887777"
  }
}

➤ 3. Update Booking

Method: PUT
URL: http://localhost:3000/api/bookings
Body (JSON):

{
  "updateBooking": {
    "id": 1,
    "name": "Sanika Patil",
    "email": "sailsanika98@gmail.com",
    "ticketType": "Student",
    "phone": "9876543210"
  }
}

➤ 4. Delete Booking

Method: DELETE
URL: http://localhost:3000/api/bookings
Body (JSON):

{
  "deleteBooking": {
    "id": 2
  }
}

| Method     | Endpoint            | Description                |
| ---------- | ------------------- | -------------------------- |
| **GET**    | `/api/bookings`     | Get all event bookings     |
| **POST**   | `/api/bookings`     | Create a new booking       |
| **GET**    | `/api/bookings/:id` | Get booking by ID          |
| **PUT**    | `/api/bookings`     | Update participant details |
| **DELETE** | `/api/bookings`     | Cancel a booking           |

