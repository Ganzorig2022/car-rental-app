import merge from 'lodash.merge';
import { userResolvers } from './user.js';
import { rentalResolvers } from './rental.js';
import { transactionResolvers } from './transaction.js';
import scalarResolvers from './scalars.js';
const resolvers = merge({}, userResolvers, rentalResolvers, transactionResolvers, scalarResolvers);
export default resolvers;