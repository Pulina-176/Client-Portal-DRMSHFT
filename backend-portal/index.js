import express from "express";
import clientRoutes from "./routes/client.route.js";
const app = express();

// app.get("/api", (req, res) => {
//     res.json({ "clients": ["client1", "client2"] })
// })

app.listen(5000, () => console.log("Server running on port 5000"));

app.use("/api/client", clientRoutes);

