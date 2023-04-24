import { Prisma } from '../db.js';
export const rentalResolvers = {
    Query: {
        getSingleRental: async (parent, args) => {
            try {
                const rental = await Prisma.rental.findUnique({
                    where: {
                        id: args.id,
                    },
                    include: {
                        renter: true, // User model data will be included. Because in the prisma.schema, User @relation field
                    },
                });
                console.log('GET SINGLE RENTAL DATA', rental);
                return rental;
            }
            catch (error) {
                console.log('GET SINGLE RENTAL ERROR', error);
                return error;
            }
        },
        getAllRentals: async () => {
            const rentals = await Prisma.rental.findMany();
            return rentals;
        },
    },
    Mutation: {
        createRental: async (_parent, args) => {
            const { userId, dateRent, dateReturn, location, verified } = args;
            try {
                const rental = await Prisma.rental.create({
                    data: {
                        userId,
                        dateRent,
                        dateReturn,
                        location,
                        verified,
                    },
                    include: {
                        renter: true, // User model data will be included. Because in the prisma.schema, User @relation field
                    },
                });
                // will receive request from the frontend side
                return rental;
            }
            catch (error) {
                console.log('CREATE RENTAL ERROR', error);
                return { error };
            }
        },
        updateRental: async (_parent, args) => {
            const { id, userId, dateRent, dateReturn, location, verified } = args;
            //Prisma.rental --> "prisma/schema.prisma" dotor model Rental bga...
            const rental = await Prisma.rental.upsert({
                where: { id },
                update: {
                    dateRent,
                    dateReturn,
                    location,
                    verified,
                },
                create: {
                    userId,
                    dateRent,
                    dateReturn,
                    location,
                    verified,
                },
            });
            // will receive from the side of frontend
            return rental;
        },
        deleteRental: async (_parent, args) => {
            try {
                await Prisma.rental.delete({
                    where: {
                        id: args.id, // MUST BE @unique at prisma.schema!!!!!!!!!!!!!
                    },
                });
                return { success: true };
            }
            catch (error) {
                console.log('DELETE RENTAL ERROR', error);
                return { error: error };
            }
        },
    },
};
// https://www.prisma.io/docs/concepts/components/prisma-client/crud#read
