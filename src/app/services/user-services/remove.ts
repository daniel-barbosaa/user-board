import { api } from '../api';

export async function remove(userId: string) {
  const { data } = await api.delete(`/users/${userId}`);
  return data;
}
