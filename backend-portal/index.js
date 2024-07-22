import express from "express";

const app = express();

app.get("/api", (req, res) => {
    res.json({ "clients": ["client1", "client2"] })
})

app.listen(5000, () => console.log("Server running on port 5000"))