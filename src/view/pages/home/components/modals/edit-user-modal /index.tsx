import { Close, Delete } from '@mui/icons-material';
import {
  Box,
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
  Typography,
} from '@mui/material';

import { ConfirmDeleteModal } from '../../confirm-delete-modal';

import { useEditUserController } from './use-edit-user-controller';

export function ModalEditUser() {
  const {
    closeEditUserModal,
    isEditUserModalOpen,
    handleCloseDeleteModal,
    handleOpenDeleteModal,
    isDeleteModalOpen,
  } = useEditUserController();

  if (isDeleteModalOpen) {
    return <ConfirmDeleteModal onClose={handleCloseDeleteModal} />;
  }

  return (
    <Dialog open={isEditUserModalOpen} onClose={closeEditUserModal}>
      <DialogTitle>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <IconButton onClick={closeEditUserModal} sx={{ right: 8 }}>
            <Close />
          </IconButton>
          <Typography variant="h6">Editar usuário</Typography>

          <IconButton
            color="error"
            aria-label="Excluir usuário"
            onClick={handleOpenDeleteModal}
          >
            <Delete />
          </IconButton>
        </Box>
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

        <DialogActions sx={{ marginTop: '8px' }}>
          <Button onClick={closeEditUserModal}>Cancelar</Button>
          <Button type="submit" form="subscription-form" variant="contained">
            Salvar
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}
