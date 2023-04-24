import dotenv from 'dotenv';
dotenv.config();

import jwt from 'jsonwebtoken';

// for middleware in index.ts
const authScope = async (token: string) => {
  if (!token) {
    return null;
  }
  const decoded: any = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};
export default authScope;
