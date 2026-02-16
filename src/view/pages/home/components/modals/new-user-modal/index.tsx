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

import { useNewUserController } from './use-new-user-controller';

export function ModalNewUser() {
  const { closeNewUserModal, isNewUserModalOpen } = useNewUserController();
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
      </DialogContent>
    </Dialog>
  );
}
