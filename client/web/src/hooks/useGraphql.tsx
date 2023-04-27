import { CREATE_NEW_USER, LOGIN_USER } from '@/graphql/mutations/users';
import {
  GET_ALL_CARS_WITH_PAGINATION,
  GET_CARS_BY_PASSENGERS,
  GET_CARS_BY_TYPE,
} from '@/graphql/queries/cars';
import { useLazyQuery, useMutation } from '@apollo/client';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const useGraphql = () => {
  const [createNewUser, { loading: createUserLoading }] =
    useMutation(CREATE_NEW_USER);

  const [loginUser, { loading: loginUserLoading }] = useMutation(LOGIN_USER);

  const [getCarsByPagination, { loading: getCarsByPageLoading }] = useLazyQuery(
    GET_ALL_CARS_WITH_PAGINATION,
    { pollInterval: 500 }
  );

  const [getCarsByPassengers, { loading: getCarsByPassengerLoading }] =
    useLazyQuery(GET_CARS_BY_PASSENGERS, { pollInterval: 500 });

  const [getCarsByType, { loading: getCarsByTypeLoading }] = useLazyQuery(
    GET_CARS_BY_TYPE,
    { pollInterval: 500 }
  );

  const signUp = async (email: string, password: string, role: string) => {
    try {
      const response = (
        await createNewUser({
          variables: {
            email,
            password,
            role,
          },
        })
      ).data;

      const { createUser } = response;

      Cookies.set('token', createUser?.token);
      Cookies.set('userId', createUser?.user.id);

      return true;
    } catch (error: any) {
      console.log('error from apollo/createNewUser', error);
      const errors = new Error(error);
      toast.error(errors.message);
      return false;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = (
        await loginUser({
          variables: {
            email,
            password,
          },
        })
      ).data;

      const { loginUser: data } = response;

      Cookies.set('token', data?.success);
      Cookies.set('userId', data?.userId);

      return true;
    } catch (error: any) {
      console.log('error from apollo/loginUser', error);
      const errors = new Error(error);
      toast.error(errors?.message);
      return false;
    }
  };

  const getAllCarsByPage = async (skip: number, take: number) => {
    try {
      const response = (
        await getCarsByPagination({
          variables: {
            skip,
            take,
          },
        })
      ).data;

      return response;
    } catch (error: any) {
      console.log('ERROR with getAllCarsByPage', error);
      const errors = new Error(error);
      toast.error(errors?.message);
    }
  };

  const getAllCarsByPeople = async (passengers: number) => {
    try {
      const response = (
        await getCarsByPassengers({
          variables: {
            passengers,
          },
        })
      ).data;

      const { getCarsByPassengers: data } = response;
      return data;
    } catch (error: any) {
      console.log('ERROR with getAllCarsByPassengers', error);
      const errors = new Error(error);
      toast.error(errors?.message);
    }
  };
  const getAllCarsByType = async (type: string) => {
    try {
      const response = (
        await getCarsByType({
          variables: {
            type,
          },
        })
      ).data;

      if (!response) toast.error(`No cars found with ${type} type`);

      const data = response?.getCarsByType;
      return data;
    } catch (error: any) {
      console.log('ERROR with getAllCarsByPassengers', error);
      const errors = new Error(error);
      toast.error(errors?.message);
    }
  };

  return {
    createUserLoading,
    loginUserLoading,
    getCarsByPageLoading,
    getCarsByPassengerLoading,
    getCarsByTypeLoading,
    signUp,
    login,
    getAllCarsByPage,
    getAllCarsByPeople,
    getAllCarsByType,
  };
};

export default useGraphql;