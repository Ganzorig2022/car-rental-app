import { Prisma } from '../db.js';
export const transactionResolvers = {
    Query: {
        getSingleTransaction: async (parent, args) => {
            const transaction = await Prisma.transaction.findUnique({
                where: {
                    id: args.id,
                },
                include: {
                    renter: true, // User model data will be included. Because in the prisma.schema, User @relation field
                },
            });
            return transaction;
        },
        getAllTransactions: async () => {
            const transactions = await Prisma.transaction.findMany();
            return transactions;
        },
    },
    Mutation: {
        createTransaction: async (_parent, args) => {
            const { userId, verified } = args;
            try {
                const transaction = await Prisma.transaction.create({
                    data: {
                        userId,
                        verified,
                    },
                });
                // will receive request from the frontend side
                return transaction;
            }
            catch (error) {
                console.log('CREATE TRANSACTION ERROR', error);
                return { error };
            }
        },
        // updateRental: async (_parent: any, args: Rental) => {
        //   const { userId, dateRent, dateReturn, location, verified } = args;
        //   //Prisma.rental --> "prisma/schema.prisma" dotor model Rental bga...
        //   const rental = await Prisma.rental.upsert({
        //     where: { userId },
        //     update: {
        //       dateRent,
        //       dateReturn,
        //       location,
        //       verified,
        //     },
        //     create: {
        //       dateRent,
        //       dateReturn,
        //       location,
        //       verified,
        //     },
        //   });
        //   // will receive from the side of frontend
        //   return rental;
        // },
        deleteTransaction: async (_parent, args) => {
            try {
                await Prisma.transaction.delete({
                    where: {
                        userId: args.userId, // MUST BE @unique at prisma.schema!!!!!!!!!!!!!
                    },
                });
                return { success: true };
            }
            catch (error) {
                return { error: error };
            }
        },
    },
};
// https://www.prisma.io/docs/concepts/components/prisma-client/crud#read
