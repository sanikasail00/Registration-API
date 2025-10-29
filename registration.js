const express = require('express')

const app = express()
app.use(express.json())

let bookings = []
bookings.push(
    {
        id: 1,
        name: "Sanika",
        email: "sailsanika98@gmail.com",
        ticketType: "Student",
        phone: "9876543210"
    }
)

bookings.push(
    {
        id: 2,
        name: "Suhana",
        email: "suhanaaigal@gmail.com",
        ticketType: "Guest",
        phone: "9876500000"
    }
)

bookings.push(
    {
        id: 3,
        name: "Sonal",
        email: "sonal12@gmail.com",
        ticketType: "Special",
        phone: "9000001111"
    }
)

app.get('/api/bookings', (request, response) => {
    response.send(bookings)
})

app.post('/api/bookings', (request, response) => {
    let newBooking = request.body.newBooking
    newBooking.id = bookings.length + 1
    bookings.push(newBooking)
    console.log(bookings)
    response.send(bookings)
})

app.get('/api/bookings/:id', (request, response) => { 
    let bookingId = parseInt(request.params.id)
    let booking = bookings.find((b) => b.id === bookingId)
    response.send(booking)
})

app.put('/api/bookings', (request, response) => {
    let updateBooking = request.body.updateBooking
    let index = bookings.findIndex((b) => b.id === updateBooking.id)
    bookings[index] = updateBooking
    response.send(bookings)
})

app.delete('/api/bookings', (request, response) => {
    let deleteBooking = request.body.deleteBooking
    bookings = bookings.filter((b) => b.id !== deleteBooking.id)
    response.send(bookings)
})

app.listen(3000, () => {
    console.log('I have started')

})