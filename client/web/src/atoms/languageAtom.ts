import { GET_ALL_LANGUAGES } from '@/graphql/queries/language';
import { useQuery } from '@apollo/client';
import { atom, useRecoilValue } from 'recoil';

export const languageAtomState = atom({
  key: 'language', // unique ID
  default: 'mn',
  effects: [
    () => {
      const data =
        typeof window !== 'undefined'
          ? window.localStorage.getItem('mn')
          : false;
      return () => {};
    },
    () => {},
  ],
});
