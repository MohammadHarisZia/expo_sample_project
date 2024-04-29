import {
  deleteStringAsync,
  getStringAsync,
  setStringAsync,
} from '@/core/storage';

const TOKEN = 'token';
const USER = 'user';

export type TokenType = {
  access: string;
  refresh: string;
};

export const getToken = async () => {
  const res = await getStringAsync(TOKEN);
  if (res) return JSON.parse(res);
};
export const removeToken = async () => await deleteStringAsync(TOKEN);
export const setToken = async (value: TokenType) =>
  await setStringAsync(TOKEN, JSON.stringify(value));
export const setUser = async (value: any) => {
  await setStringAsync(USER, JSON.stringify(value));
};
export const getUser = async () => {
  const res = await getStringAsync(USER);
  if (res) return JSON.parse(res);
};
export const removeUser = async () => await deleteStringAsync(USER);
