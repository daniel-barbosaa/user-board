import type { User } from '../../types/user';
import { api } from '../api';

type UserResponse = Array<User>;

export async function getAll() {
  const { data } = await api.get<UserResponse>('/users');
  return data;
}
