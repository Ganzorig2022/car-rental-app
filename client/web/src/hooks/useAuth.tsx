/* eslint-disable react-hooks/exhaustive-deps */
import { loggedInState } from '@/atoms/loginAtom';
import { CHECK_TOKEN } from '@/graphql/queries/users';
import { useLazyQuery, useQuery } from '@apollo/client';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useSetRecoilState } from 'recoil';
import useGraphql from './useGraphql';
import { toast } from 'react-hot-toast';

//Creating Auth Context
interface AuthType {
  loading: boolean;
  loggedIn: boolean;
  error: string;
}

const AuthContext = createContext({});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const setLoggedIn = useSetRecoilState(loggedInState);
  const [checkToken] = useLazyQuery(CHECK_TOKEN);

  // keep logged in when refresh
  useEffect(() => {
    const token = Cookies.get('token');

    (async () => {
      try {
        const data = await checkToken({
          variables: {
            token,
          },
        });

        const {
          checkToken: { success },
        } = data?.data;
        console.log('ISVALIDTOKEN', success);
        if (!success) {
          setLoggedIn(false);
          console.log('<<<<<< USER LOGGED OUT>>>>>>');
        }
        setLoggedIn(true);
        console.log('<<<<<<USER STILL SIGNED IN>>>>>>');
      } catch (error: any) {
        console.log('ERROR with getAllCarsByPassengers', error);
        const errors = new Error(error);
        toast.error(errors?.message);
      }
    })();
  }, []);

  return <AuthContext.Provider value>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
