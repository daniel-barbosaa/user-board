export const USER_STATUS = {
  ACTIVE: 'Ativo',
  INACTIVE: 'Inativo',
};

export type UserStatusType = keyof typeof USER_STATUS;

export const STATUS_ENUM = Object.keys(USER_STATUS) as [UserStatusType];
