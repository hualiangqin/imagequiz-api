const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
const { response, request } = require('express');
let data = require('./data');

const app = express();

const port = process.env.PORT || 3002;

//middlewares
app.use(cors());
app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.send('Welcome to Image Quiz API');
});

app.get('/image/:name', (request, response) => {
    let name = request.params.name;
    response.sendFile(__dirname + "/images/" + name);
});

app.get('/quizzes', (request, response) => {
    let quizzes = data.quizzes;
    let metadata = quizzes.map(x => {
        return {name: x.name, id: x.id, image: x.image};
    });
    response.json(metadata);
});

app.get('/quiz/:id', (request, response) => {
    let quizzes = data.quizzes;
    let id = request.params.id;
    let found = quizzes.find(x => x.id == id);
    if (found){
        response.json(found);
    }else{
        response.status(404).json({ error: `the quiz ${id} could not be found.`});
    }
});

app.post('/score', (request, response) => {
    let score = request.body;
    data.scores.push(score);
    response.json({message: 'The score saved successfully.'})
});

app.listen(port, () => {
    console.log(`Image Quiz API listening on port ${port}!`);
});