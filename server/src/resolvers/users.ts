import { Prisma } from '../db.js';

export const userResolvers = {
  Query: {
    getSingleUser: async (parent: any, args: { email: string }) => {
      const user = await Prisma.user.findUnique({
        where: {
          email: args.email,
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
    createUser: async (_parent: any, args: createUserType) => {
      //Prisma.user --> "prisma/schema.prisma" dotor model User bga...
      const user = await Prisma.user.create({
        data: {
          email: args.email,
          password: args.password,
          name: args.name,
          phone: args.phone,
          age: args.age,
          role: args.role,
          rentals: args.gender,
        },
      });
      // will receive request from the frontend side
      return user;
    },
    updateUser: async (_parent: any, args: createUserType) => {
      const { email, address, username, phone, birthDate, gender, role } = args;
      //Prisma.user --> "prisma/schema.prisma" dotor model User bga...
      const user = await Prisma.user.upsert({
        where: { email: args.email },
        update: {
          email,
          address,
          username,
          phone,
          birthDate,
          gender,
          role,
        },
        create: {
          email,
          address,
          username,
          phone,
          birthDate,
          gender,
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
      } catch (error) {}
    },
    deleteUserById: async (_parent: any, args: { id: string }) => {
      try {
        await Prisma.user.delete({
          where: {
            id: args.id,
          },
        });
        return { success: true };
      } catch (error) {}
    },
  },
};

// https://www.prisma.io/docs/concepts/components/prisma-client/crud#read
