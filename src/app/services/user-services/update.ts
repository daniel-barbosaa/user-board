import type { UserStatusType } from '../../types/user-status';
import { api } from '../api';

export interface UpdateUserParams {
  id: string;
  name: string;
  email: string;
  status: UserStatusType;
}

export async function update({ id, ...params }: UpdateUserParams) {
  const { data } = await api.put(`/users/${id}`, params);
  return data;
}
