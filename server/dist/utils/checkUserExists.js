import { Prisma } from '../db.js';
export const checkUserExists = async (email) => {
    try {
        //1) find user by email(unique)
        const user = await Prisma.user.findUnique({
            where: {
                email,
            },
        });
        //2) If there is no user, then throw error
        if (!user)
            return false;
        return true;
    }
    catch (error) {
        console.log('loginUser error', error);
        return false;
    }
};
