import express from "express"
import { PORT, mongodbURL } from "./config.js"
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js"
import cors from 'cors'

const app = express();

// Middleware to parse json & CORS

app.use(express.json())
app.use(cors())

/*app.use(cors({
    origin:'http://localhost:3000',
    methods: ["GET", "POST", "PUT","DELETE"],
    allowedHeaders: ['Content-Type']
}))

*/
app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send("Welcome to mern book stack")

});

app.use('/books', booksRoute)


mongoose.connect(mongodbURL)
    .then(() => {
        console.log("App connected to the database")
        app.listen(PORT, () => {
            console.log(`App is listening on port: ${PORT}`)
        })

    }).catch((error) => {
        console.log(error)
    });

