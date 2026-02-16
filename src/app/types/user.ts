import type { UserStatusType } from './user-status';

export type User = {
  id: string;
  name: string;
  email: string;
  status: UserStatusType;
};
