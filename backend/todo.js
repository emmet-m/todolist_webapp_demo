const Express = require('express');
const BodyParser = require('body-parser');
const cors = require('cors');

const app = Express();
app.use(cors());
app.use(BodyParser.json());

let todos = {
    1: {
        "id": 1,
        "title": "Get fish",
        "content": "Get that fish!!!!",
        "isDone": false
    }
};
let maxId = 0;

app.get("/", (req, res) => {
    res.send("This is my to-do list application!");
});

app.get("/todo/get/:id", (req, res) => {
    res.send(todos[req.params.id]);
});

app.get("/todo/list", (req, res) => {
    res.send(Object.keys(todos));
});

app.post("/create", (req, res) => {
    todos[maxId] = req.body;
    res.send({
        id: maxId
    });
    maxId += 1;
});

app.get("/todo/finish/:id", (req, res) => {
    if(todos[req.params.id] == undefined){
        res.send({msg: "Unable to find todo with ID " + req.params.id + "."});
    }
    else {
        todos[req.params.id][completed] = true;
        res.send({msg: "Done!"});
    }
});


app.listen(3000, () => {
    console.log("Listening on port 3000.");
});
