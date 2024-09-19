import express, {Application, Request, Response} from "express" ;
import morgan from "morgan";
import userRoutes from './routes/users';

const PORT = process.env.PORT || 7603;

const app: Application = express();

app.get("/ping", async (_req : Request, res: Response) => 
    {
    res.send
        ({
        message: "Samuel Ayres S00237258",
        });
    });
    
     app.listen(PORT, () => 
        {
        console.log("Server is running on port  --", PORT);
        });
    
app.get('/bananas', async (_req : Request, res: Response) =>
    res.send('hello world, this is bananas'));
  
app.get('/Lemon', async (_req : Request, res: Response) =>
    res.send('mmm lemon!'));

app.use('/api/v1/users', userRoutes)