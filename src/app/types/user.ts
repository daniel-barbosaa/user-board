import type { UserStatusType } from './user-status';

export type User = {
  id: number;
  name: string;
  email: string;
  status: UserStatusType;
};
