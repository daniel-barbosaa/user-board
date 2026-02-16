import type { UserStatus } from './user-status';

export type User = {
  id: string;
  name: string;
  email: string;
  status: UserStatus;
};
