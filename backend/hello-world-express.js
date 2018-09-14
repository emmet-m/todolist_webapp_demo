const Express = require('express');
const app = Express();

app.get("/", (req, res) => {
    res.send("This is my to-do list application!");
});

app.listen(3000, () => {
    console.log("Listening on port 3000.");
});
