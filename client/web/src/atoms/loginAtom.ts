import { atom } from 'recoil';

export const loggedInState = atom({
  key: 'loggedIn', // unique ID
  default: false,
});
