import { z } from 'zod';

import { STATUS_ENUM } from '../../../../../../app/types/user-status';

export const editUserFormSchema = z.object({
  name: z.string().nonempty('Nome é obrigatório'),
  email: z.email('Insira um e-mail válido').nonempty('E-mail é obrigatório'),
  status: z.enum(STATUS_ENUM),
});

export type EditUserFormSchema = z.infer<typeof editUserFormSchema>;
