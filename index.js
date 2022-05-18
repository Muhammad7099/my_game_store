require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan')
const path = require("path")
const cors = require('cors')
const indexRouter = require('./routes')


const app = express();

app.use(cors());
app.use(express.json());
app.use(indexRouter);
app.use(express.urlencoded({ extended: true }));
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));





const start = async () => {
    try{
        await mongoose.connect(process.env.MONGO_LINK);

        app.listen(process.env.PORT || 4000, () => console.log(`server has been started on port ${process.env.PORT}...`))

    }catch(e) {
        console.log('Server Error', e.message);
        process.exit(1)
    }
}



start();