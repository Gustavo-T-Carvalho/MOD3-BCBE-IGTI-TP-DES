import express from 'express';
import cors from 'cors';
import winston from 'winston';
import dogsRouter from './routes/dog.route.js';
import ownerRouter from './routes/owner.route.js';
import serviceRouter from './routes/service.route.js'
import postRouter from './routes/post.route.js'

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level} ${message}`;
});
global.logger = winston.createLogger({
    level: 'silly',
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: 'store-api.log' })
    ],
    format: combine(
        label({ label: "store - api" }),
        timestamp(),
        myFormat
    )
})
const app = express();
app.use(express.json());
app.use(cors());
app.use("/animal", dogsRouter);
app.use("/proprietario", ownerRouter);
app.use("/servico", serviceRouter);
app.use("/post", postRouter);
app.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${req.message}`);
    if(err.message){
        res.status(400).send({ error: err.message });
    } else {
        res.status(400).send({ error: err });

    }

})
app.listen(3000, () => console.log("API Started!"));