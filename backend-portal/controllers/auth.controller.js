 import dotenv from 'dotenv';
 import jwt from 'jsonwebtoken';
 
 dotenv.config();
 
 export const signin = async (req, res) => {
    const {username, password} = req.body;
    const expiryDate = new Date(Date.now() + 3600000);
    try {
        if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign({username: username}, process.env.JWT_SECRET);
            res.cookie('access_token', token, {httpOnly: false, expires: expiryDate, path: '/', secure: false});
            return res.status(200).json({message: "Signin successful"});
        } else {
            return res.status(401).json({message: "Invalid credentials"});
        }
    } catch (error) {
        console.error(error);
        return res.status(error.status || 500).json({message: error.message});
    }
} 