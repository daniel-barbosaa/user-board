import { Close, Delete } from '@mui/icons-material';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';

interface ConfirmDeleteModalProps {
  onClose?(): void;
}

export function ConfirmDeleteModal({ onClose }: ConfirmDeleteModalProps) {
  return (
    <Dialog open onClose={onClose} maxWidth="lg">
      <DialogTitle sx={{ position: 'relative', textAlign: 'center' }}>
        Excluir
        <IconButton
          onClick={onClose}
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
        <Box
          sx={{
            backgroundColor: '#f8d7da7a',
            width: 50,
            height: 50,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginX: 'auto',
            marginBottom: 2,
            marginTop: 2,
          }}
        >
          <Delete sx={{ color: 'error.main', fontSize: 30 }} />
        </Box>
        <Typography marginBottom={4} textAlign="center">
          Tem certeza que deseja <br />
          excluir este usuário?
        </Typography>
        <Stack spacing={2}>
          <Button variant="contained" color="error">
            Sim, desejo excluir
          </Button>
          <Button variant="outlined" onClick={onClose}>
            Cancelar
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
