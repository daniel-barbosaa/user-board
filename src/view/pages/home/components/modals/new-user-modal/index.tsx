import { Close } from '@mui/icons-material';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import { Controller } from 'react-hook-form';

import { useNewUserController } from './use-new-user-controller';

export function ModalNewUser() {
  const {
    closeNewUserModal,
    isNewUserModalOpen,
    formMethods,
    handleSubmit,
    isPending,
  } = useNewUserController();
  return (
    <Dialog open={isNewUserModalOpen}>
      <DialogTitle sx={{ position: 'relative', textAlign: 'center' }}>
        Criar usuário
        <IconButton
          onClick={closeNewUserModal}
          sx={{
            position: 'absolute',
            left: 8,
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Stack
          component="form"
          spacing={2}
          sx={{
            width: '100%',
            minWidth: 400,
            marginTop: '8px',
          }}
          onSubmit={formMethods.handleSubmit(handleSubmit)}
        >
          <TextField
            label="Nome"
            variant="outlined"
            fullWidth
            placeholder="Digite o nome completo"
            {...formMethods.register('name')}
            error={!!formMethods.formState.errors.name}
            helperText={formMethods.formState.errors.name?.message}
          />

          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            placeholder="Digite o email"
            {...formMethods.register('email')}
            error={!!formMethods.formState.errors.email}
            helperText={formMethods.formState.errors.email?.message}
          />

          <Controller
            name="status"
            control={formMethods.control}
            defaultValue="ACTIVE"
            render={({ field }) => (
              <FormControl
                fullWidth
                error={!!formMethods.formState.errors.status}
              >
                <InputLabel>Status</InputLabel>
                <Select {...field} label="Status">
                  <MenuItem value="ACTIVE">Ativo</MenuItem>
                  <MenuItem value="INACTIVE">Inativo</MenuItem>
                </Select>
              </FormControl>
            )}
          />

          <DialogActions sx={{ marginTop: '8px' }}>
            <Button onClick={closeNewUserModal}>Cancelar</Button>
            <Button type="submit" variant="contained" loading={isPending}>
              Criar
            </Button>
          </DialogActions>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
