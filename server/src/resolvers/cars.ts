import { Prisma } from '../db.js';
import { GraphQLError } from 'graphql';

export const carsResolvers = {
  Query: {
    getCarById: async (_parent: any, args: { id: string }) => {
      try {
        const car = await Prisma.car.findUnique({
          where: {
            id: args.id,
          },
          include: {
            user: true, // User model data will be included. Because in the prisma.schema, User @relation field
          },
        });

        return car;
      } catch (error) {
        console.log('GET SINGLE CAR ERROR', error);
        throw new GraphQLError(error);
      }
    },

    getCarsByType: async (_parent: any, args: { type: string }) => {
      try {
        const cars = await Prisma.car.findMany({
          where: { type: args.type },
          orderBy: {
            price: 'desc',
          },
        });

        return cars;
      } catch (error) {
        console.log('GET CARS ERROR', error);
        throw new GraphQLError(error);
      }
    },

    getCarsByPassengers: async (_parent: any, args: { passengers: number }) => {
      // https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#filter-conditions-and-operators
      const passengersNumber = args.passengers;
      try {
        // if passenger number LESS than or equal to 5, then return cars with 5 passengers. etc. SUV, Standard, Economy
        if (passengersNumber <= 5) {
          const cars = await Prisma.car.findMany({
            where: {
              passengers: {
                lte: 5, // lte means "less than or equal to"
              },
            },
            orderBy: {
              price: 'desc',
            },
          });
          return cars;
        }

        // if passenger number GREATER than or equal to 6, then return cars with 6 or more passengers. etc. Bus
        const cars = await Prisma.car.findMany({
          where: {
            passengers: {
              gte: 6, // gte means "greater than or equal to"
            },
          },
          orderBy: {
            price: 'desc',
          },
        });

        return cars;
      } catch (error) {
        console.log('GET CARS ERROR', error);
        throw new GraphQLError(error);
      }
    },

    getOwnCars: async (_parent: any, args: { userId: string }) => {
      try {
        const cars = await Prisma.car.findMany({
          where: { userId: args.userId },
          orderBy: {
            price: 'desc',
          },
        });
        return cars;
      } catch (error) {
        console.log('GET OWN CARS ERROR', error);
        throw new GraphQLError(error);
      }
    },

    getAllCarsWithPagination: async (
      _parent: any,
      args: { skip: number; pagination: number }
    ) => {
      // https://www.prisma.io/docs/concepts/components/prisma-client/pagination
      try {
        const cars = await Prisma.car.findMany({
          skip: args.skip,
          take: args.pagination, // pagination by number
          orderBy: {
            price: 'desc',
          },
        });
        return cars;
      } catch (error) {
        console.log('GET ALL CARS ERROR', error);
        throw new GraphQLError(error);
      }
    },
  },

  Mutation: {
    createCar: async (_parent: any, args: createCarType) => {
      const {
        image,
        type,
        typeDefinition,
        model,
        kml,
        transmission,
        passengers,
        price,
        userId,
      } = args;

      try {
        const car = await Prisma.car.create({
          data: {
            image,
            type,
            typeDefinition,
            model,
            kml,
            transmission,
            passengers,
            price,
            userId,
          },
        });

        return car;
      } catch (error) {
        console.log('CREATE CAR ERROR', error);
        throw new GraphQLError(error);
      }
    },
    updateCar: async (_parent: any, args: createCarType) => {
      const {
        id,
        image,
        type,
        typeDefinition,
        model,
        kml,
        transmission,
        passengers,
        price,
      } = args;

      try {
        const car = await Prisma.car.update({
          where: { id },
          data: {
            image,
            type,
            typeDefinition,
            model,
            kml,
            transmission,
            passengers,
            price,
          },
        });

        return car;
      } catch (error) {
        console.log('UPDATE CAR ERROR', error);
        throw new GraphQLError(error);
      }
    },

    deleteCarById: async (_parent: any, args: { id: string }) => {
      const id = args.id;
      try {
        const result = await Prisma.car.delete({
          where: {
            id,
          },
        });

        return { success: true };
      } catch (error) {
        console.log('DELETE CAR ERROR', error);
        throw new GraphQLError(
          `There is no car to be deleted with this id ${id}`
        );
      }
    },

    deleteCarsByUserId: async (_parent: any, args: { userId: string }) => {
      const userId = args.userId;
      try {
        const result = await Prisma.car.deleteMany({
          where: {
            userId,
          },
        });
        if (result.count === 0)
          throw new GraphQLError(
            `There are no cars to be deleted with this userId ${userId}`
          );

        return { success: true };
      } catch (error) {
        console.log('DELETE CAR ERROR', error);
        throw new GraphQLError(error);
      }
    },
  },
};

// https://www.prisma.io/docs/concepts/components/prisma-client/crud#read
