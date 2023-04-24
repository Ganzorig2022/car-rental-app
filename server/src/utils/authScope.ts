import dotenv from 'dotenv';
dotenv.config();

import jwt from 'jsonwebtoken';

const authScope = async (token: string) => {
  if (!token) {
    return null;
  }
  const decoded: any = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};
export default authScope;
