import { Prisma } from '../db.js';

export const userResolvers = {
  Query: {
    getSingleUser: async (parent: any, args: { email: string }) => {
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
    },

    getAllUsers: async () => {
      const users = await Prisma.user.findMany();
      return users;
    },
  },

  Mutation: {
    createUser: async (_parent: any, args: createUser) => {
      //Prisma.user --> "prisma/schema.prisma" dotor model User bga...
      const user = await Prisma.user.create({
        data: {
          email: args.email,
          password: args.password,
          name: args.name,
          phone: args.phone,
          age: args.age,
          role: args.role,
        },
      });
      // will receive request from the frontend side
      return user;
    },
    updateUser: async (_parent: any, args: createUser) => {
      const { email, password, name, phone, age, role } = args;
      //Prisma.user --> "prisma/schema.prisma" dotor model User bga...
      const user = await Prisma.user.upsert({
        where: { email: args.email },
        update: {
          email,
          password,
          name,
          phone,
          age,
        },
        create: {
          email,
          password,
          name,
          phone,
          age,
          role,
        },
      });
      // will receive from the side of frontend
      return user;
    },
    deleteUser: async (_parent: any, args: { email: string }) => {
      try {
        await Prisma.user.delete({
          where: {
            email: args.email,
          },
        });
        return { success: true };
      } catch (error) {
        return { error: error };
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
        return { error: error };
      }
    },
  },
};

// https://www.prisma.io/docs/concepts/components/prisma-client/crud#read
