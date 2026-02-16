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
import { Controller } from 'react-hook-form';

import { ConfirmDeleteModal } from '../confirm-delete-modal';

import { useEditUserController } from './use-edit-user-controller';

export function ModalEditUser() {
  const {
    closeEditUserModal,
    isEditUserModalOpen,
    handleCloseDeleteModal,
    handleOpenDeleteModal,
    isDeleteModalOpen,
    formMethods,
    handleSubmit,
    isPending,
    handleDeleteUser,
    isPendingDelete,
  } = useEditUserController();

  if (isDeleteModalOpen) {
    return (
      <ConfirmDeleteModal
        onClose={handleCloseDeleteModal}
        onConfirm={handleDeleteUser}
        isLoading={isPendingDelete}
      />
    );
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
            <Button onClick={closeEditUserModal}>Cancelar</Button>
            <Button type="submit" variant="contained" loading={isPending}>
              Salvar
            </Button>
          </DialogActions>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
