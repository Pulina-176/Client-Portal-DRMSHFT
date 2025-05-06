 import dotenv from 'dotenv';
 import jwt from 'jsonwebtoken';
 
 dotenv.config();

 const portal_username = "drm_admin";
 const portal_password = "admin";
 
 export const signin = async (req, res) => {
    const {username, password} = req.body;
    const expiryDate = new Date();
    expiryDate.setMonth(expiryDate.getMonth() + 1);
    try {
        if (username === portal_username && password === portal_password) {
            const token = jwt.sign({username: username}, process.env.JWT_SECRET);
            res.cookie('access_token', token, {httpOnly: true, path: '/', expires: expiryDate, secure: true, sameSite: 'none'});
            return res.status(200).json({message: "Signin successful"});
        } else {
            return res.status(401).json({message: "Invalid credentials"});
        }
    } catch (error) {
        console.error(error);
        return res.status(error.status || 500).json({message: error.message});
    }
} 