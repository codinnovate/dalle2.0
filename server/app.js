import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect';
dotenv.config();
const PORT = 8080
const app = express();
app.use(cors());
app.use(express.json({limit:'50mb'
}));

app.get('/', )



const startServer = async () => {
    try {
        connectDB(process.env.DB_URL);
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    } catch (error) {
        console.error(error);
    }
}

startServer();