import express, { Request, Response } from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { URLController } from './controller/URLController';
import { MongoConnection } from './database/MongoConnection';

const PORT = process.env.PORT || 3000;
const urlController = new URLController();
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 100
});

const database = new MongoConnection();
database.connect();

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(helmet());
app.use(limiter);

app.get('/:hash', urlController.redirect);

app.get('/', function(req: Request, res: Response) {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.post('/shorten', urlController.shorten);

app.listen(PORT, () => { 
    console.log(`Server listening in ${PORT}`);
});