import express from "express";
import clientRoutes from "./routes/client.route.js";
import adminRoutes from "./routes/admin.route.js";
import authRoutes from "./routes/auth.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json()); //by default we cannot send json body
const allowedOrigins = ["https://dreamshift-portal-admin.onrender.com", "https://dreamshift-portal-s3h1.onrender.com"];
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true
}));
app.options("*", cors());
app.use(cookieParser());

app.get("/test", (req, res) => {
    res.json({ "clients": "success" })
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use("/api/client", clientRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);



