import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
// for middleware in index.ts
const authScope = async (token) => {
    if (!token) {
        return null;
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
};
export default authScope;
