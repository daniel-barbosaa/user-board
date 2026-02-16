import { z } from 'zod';

import { STATUS_ENUM } from '../../../../../../app/types/user-status';

export const newUserFormSchema = z.object({
  name: z.string().nonempty('Nome é obrigatório'),
  email: z.email('Insira um e-mail válido').nonempty('E-mail é obrigatório'),
  status: z.enum(STATUS_ENUM),
});

export type NewUserFormSchema = z.infer<typeof newUserFormSchema>;

export const newUserFormDefaultValues: NewUserFormSchema = {
  name: '',
  email: '',
  status: 'ACTIVE',
};
