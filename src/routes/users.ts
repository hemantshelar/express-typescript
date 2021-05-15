import express , {Request,Response,NextFunction} from 'express';

let router = express.Router();

router.get('/',(req: Request,res: Response,next: NextFunction) =>{
    res.render('users',{title: 'Test Title 1'})
});

export default router;