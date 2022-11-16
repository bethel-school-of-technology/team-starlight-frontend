"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const recipeRoutes_1 = __importDefault(require("./routes/recipeRoutes"));
const recipeController_1 = require("./controllers/recipeController");
const models_1 = require("./models");
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const cors = require('cors');
const corsOptions = {
    origin: ['http://localhost:3001']
};
app.use(cors(corsOptions));
app.use(express_1.default.static(path_1.default.join(__dirname, '../src/public')));
// Setting our view engine as Handlebars
app.set('view engine', 'hbs');
app.set('views', path_1.default.join(__dirname, "../src/views"));
app.set('view options', { layout: 'layout' });
// TODO: Add routing middleware here
app.use('/recipes', recipeRoutes_1.default);
app.use('/', recipeController_1.defaultRecipes);
app.use((req, res, next) => {
    res.status(404).render('error', {
        message: "This is not the URL you are looking for!"
    });
});
// Syncing our database
models_1.db.sync().then(() => {
    console.info("connected to the database!");
});
app.listen(3000);
