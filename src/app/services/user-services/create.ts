import type { UserStatusType } from '../../types/user-status';
import { api } from '../api';

export interface CreateUsersParams {
  name: string;
  email: string;
  status: UserStatusType;
}

export async function create(params: CreateUsersParams) {
  const { data } = await api.post('/users', params);
  return data;
}
