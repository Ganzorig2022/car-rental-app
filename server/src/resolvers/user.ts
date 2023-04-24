import { Prisma } from '../db.js';
import { createToken } from '../utils/createToken.js';
import bcrypt from 'bcryptjs';
import { GraphQLError } from 'graphql';

export const userResolvers = {
  Query: {
    loginUser: async (
      parent: any,
      args: { email: string; password: string }
    ) => {
      const { email, password } = args;

      try {
        //1) find user by email(unique)
        const user = await Prisma.user.findUnique({
          where: {
            email,
          },
        });

        //2) If there is no user, then throw error
        if (!user) {
          throw new GraphQLError('User not found!');
        }

        //3) If there is user, then check password
        const hashedPassword = user.password;
        const passwordMatch = bcrypt.compareSync(password, hashedPassword);

        //4) If password does not match, then throw error
        if (!passwordMatch) {
          throw new GraphQLError('Password does not match!');
        }

        //5) If passes all above criteria, then return final result
        const userId = user.id;

        const token = createToken(userId);

        return { success: true, token, userId };
      } catch (error: any) {
        console.log('loginUser error', error);
        throw new GraphQLError(error);
      }
    },

    getUserByEmail: async (parent: any, args: { email: string }) => {
      try {
        const user = await Prisma.user.findUnique({
          where: {
            email: args.email,
          },
          include: {
            rentals: true, // Rental model data will be included. Because in the prisma.schema, User @relation field
            cars: true, //  Cars model data will be included. Because in the prisma.schema, User @relation field
            transactions: true, // Transaction model data will be included. Because in the prisma.schema, User @relation field
          },
        });

        return user;
      } catch (error) {
        console.log('GET USER BY EMAIL ERROR', error);
        throw new GraphQLError(error);
      }
    },

    getAllUsers: async () => {
      try {
        const users = await Prisma.user.findMany();
        return users;
      } catch (error) {
        console.log('GET ALL USERS ERROR', error);
        throw new GraphQLError(error);
      }
    },
  },

  Mutation: {
    createUser: async (_parent: any, args: createUser) => {
      //Prisma.user --> "prisma/schema.prisma" dotor model User bga...

      try {
        const user = await Prisma.user.create({
          data: {
            email: args.email,
            password: await bcrypt.hash(args.password, 10),
            name: args.name,
            phone: args.phone,
            age: args.age,
            role: args.role,
          },
        });

        const userId = user.id;

        const token = createToken(userId);

        return { user, token };
      } catch (error) {
        console.log('CREATE USER ERROR', error);
        throw new GraphQLError(error);
      }
    },

    updateUser: async (_parent: any, args: createUser) => {
      const { email, password, name, phone, age, role } = args;

      try {
        const user = await Prisma.user.update({
          where: { email },
          data: {
            email,
            password,
            name,
            phone,
            age,
          },
        });
        return user;
      } catch (error) {
        console.log('UPDATE USER ERROR', error);
        throw new GraphQLError(error);
      }
    },
    deleteUserByEmail: async (_parent: any, args: { email: string }) => {
      try {
        await Prisma.user.delete({
          where: {
            email: args.email,
          },
        });
        return { success: true };
      } catch (error) {
        console.log('DELETE USER ERROR', error);
        throw new GraphQLError(error);
      }
    },
    deleteUserById: async (_parent: any, args: { id: string }) => {
      try {
        await Prisma.user.delete({
          where: {
            id: args.id,
          },
        });
        return { success: true };
      } catch (error) {
        console.log('DELETE USER ERROR', error);
        throw new GraphQLError(error);
      }
    },
  },
};

// https://www.prisma.io/docs/concepts/components/prisma-client/crud#read
