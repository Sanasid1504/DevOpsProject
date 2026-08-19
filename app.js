const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Node.js CI/CD Pipeline is Working Successfully!");
});

app.get("/feedback", (req, res) => {
    res.send("Feedback: Application is working successfully!");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
