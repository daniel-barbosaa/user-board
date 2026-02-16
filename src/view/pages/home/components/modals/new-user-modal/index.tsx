import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';

import { useNewUser } from './use-new-user-controller';

export function ModalNewUser() {
  const { closeNewUserModal, isNewUserModalOpen } = useNewUser();
  return (
    <Dialog open={isNewUserModalOpen}>
      <DialogTitle>Cadastrar novo usuário</DialogTitle>
      <DialogContent>
        <form action="">
          <Stack
            component="form"
            spacing={2}
            sx={{
              width: '100%',
              height: '100%',
              minWidth: 400,
              marginTop: '8px',
            }}
          >
            <TextField
              label="Nome"
              variant="outlined"
              fullWidth
              placeholder="Digite o nome completo"
            />

            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              placeholder="Digite o email"
            />

            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select label="Status" defaultValue="Ativo">
                <MenuItem value="Ativo">Ativo</MenuItem>
                <MenuItem value="Inativo">Inativo</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <DialogActions
            sx={{
              marginTop: '8px',
            }}
          >
            <Button onClick={closeNewUserModal}>Cancelar</Button>
            <Button type="submit" form="subscription-form" variant="contained">
              Criar
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}
