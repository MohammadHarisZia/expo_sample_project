import { create } from 'zustand';

import { createSelectors } from '../utils';
import type { TokenType } from './utils';
import {
  getToken,
  getUser,
  removeToken,
  removeUser,
  setToken,
  setUser,
} from './utils';

interface AuthState {
  token: TokenType | null;
  user: any | null;
  status: 'idle' | 'signOut' | 'signIn';
  signIn: (data: any) => void;
  signOut: () => void;
  hydrate: () => void;
}

const _useAuth = create<AuthState>((set, get) => ({
  status: 'idle',
  token: null,
  user: null,
  signIn: ({ token, user }) => {
    if (user && token) {
      setToken(token);
      setUser(user);
    }
    set({ status: 'signIn', token, user });
  },
  signOut: () => {
    removeToken();
    removeUser();
    set({ status: 'signOut', token: null, user: null });
  },
  hydrate: async () => {
    try {
      const userToken = await getToken();
      const userObj = await getUser();
      if (userToken !== null && userObj !== null) {
        get().signIn({ userToken, userObj });
      } else {
        get().signOut();
      }
    } catch (e) {
      // catch error here
      // Maybe sign_out user!
      console.log('error hydrating UI', e);
    }
  },
}));

export const useAuth = createSelectors(_useAuth);

export const signOut = () => _useAuth.getState().signOut();
export const signIn = (token: TokenType, user: any) =>
  _useAuth.getState().signIn({ token, user });
export const hydrateAuth = () => _useAuth.getState().hydrate();
