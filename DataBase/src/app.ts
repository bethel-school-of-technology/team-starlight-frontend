import express, { NextFunction, Request, Response } from 'express';
import path from 'path';
import morgan from 'morgan';
import recipeRoutes from './routes/recipeRoutes';
import { defaultRecipes } from './controllers/recipeController';
import { db } from './models';

const app = express();
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
const cors = require('cors');
const corsOptions = {
    origin: [ 'http://localhost:3001' ]
};
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, '../src/public')));

// Setting our view engine as Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "../src/views"));
app.set('view options', {layout: 'layout'});

// TODO: Add routing middleware here
app.use('/recipes', recipeRoutes);
app.use('/', defaultRecipes);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).render('error', {
        message: "This is not the URL you are looking for!"
    })});

    // Syncing our database
db.sync().then(() => {
    console.info("connected to the database!")
});

app.listen(3000);