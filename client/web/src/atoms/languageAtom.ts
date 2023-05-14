import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

// const { persistAtom } = recoilPersist();

const { persistAtom } = recoilPersist({
  key: 'recoil-persist', // this key is using to store data in local storage
  storage: localStorage, // configurate which storage will be used to store the data
});

export const languageAtomState = atom({
  key: 'language', // unique ID
  default: 'mn',
  effects_UNSTABLE: [persistAtom],
});
