const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
const waitLists = [
    {
        customerName: "test",
        phoneNumber: "111",
        customerEmail: "email",
        customerId: "123"
    }
];
const tables = [
    {
        customerName: "1",
        phoneNumber: "222",
        customerEmail: "333",
        customerId: "1"
    }
];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => console.log("App listening on PORT" + PORT));

app.get("/api/waitlists", function (req, res) {
    return res.json(waitLists);
});

app.get("/api/tables", function (req, res) {
    return res.json(tables);
});

app.post("/api/waitlists", function (req, res) {
    let newWaitLists = req.body;
    waitLists.push(newWaitLists);
    res.json(newWaitLists);
})