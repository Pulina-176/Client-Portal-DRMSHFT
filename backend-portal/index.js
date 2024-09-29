import express from "express";
import clientRoutes from "./routes/client.route.js";
import adminRoutes from "./routes/admin.route.js";
import cors from "cors";
const app = express();

app.use(express.json()); //by default we cannot send json body

app.use(cors());

// app.get("/api", (req, res) => {
//     res.json({ "clients": ["client1", "client2"] })
// })

app.listen(5000, () => console.log("Server running on port 5000"));

app.use("/api/client", clientRoutes);
app.use("/api/admin", adminRoutes);



