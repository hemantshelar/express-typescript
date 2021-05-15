import express, {Request,Response,NextFunction} from 'express';
import { pathToFileURL } from 'url';
import userRoute from './routes/users'
import path from 'path';

const app = express();

app.set('views',path.join(`${__dirname}/../src`,'views'))
app.set('view engine','jade');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req: Request, res: Response,next: NextFunction) =>{
    res.send("ok");
});

app.use('/users',userRoute);

let server = app.listen(5000,() => {
    console.log('server has started...');
})