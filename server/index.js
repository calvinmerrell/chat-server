const express = require('express')
const messctrl = require("./controllers/messages_controller");

const app = express()

app.use(express.json());
// app.use(express.static(__index + '/../public/build'));

const messagesBaseUrl = "/api/messages";
app.post(messagesBaseUrl, messctrl.create);
app.get(messagesBaseUrl, messctrl.read);
app.put(`${messagesBaseUrl}/:id`, messctrl.update);
app.delete(`${messagesBaseUrl}/:id`, messctrl.delete);

const port = 3001;
app.listen(port, ()=> {
    console.log(`Server listening on port${port}`)
})