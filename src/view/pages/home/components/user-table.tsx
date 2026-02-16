import { Delete, Edit } from '@mui/icons-material';
import {
  Box,
  Chip,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const usuarios = [
  {
    id: 1,
    nome: 'João Silva',
    email: 'joao.silva@example.com',
    status: 'Ativo',
  },
  {
    id: 2,
    nome: 'Maria Santos',
    email: 'maria.santos@example.com',
    status: 'Ativo',
  },
  {
    id: 3,
    nome: 'Pedro Oliveira',
    email: 'pedro.oliveira@example.com',
    status: 'Inativo',
  },
  { id: 4, nome: 'Ana Costa', email: 'ana.costa@example.com', status: 'Ativo' },
  {
    id: 5,
    nome: 'Carlos Souza',
    email: 'carlos.souza@example.com',
    status: 'Inativo',
  },
];

export function UsersTable() {
  return (
    <Paper elevation={2}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: 'grey.100' }}>
              <TableCell sx={{ fontWeight: 600 }}>Nome</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Email</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
              <TableCell sx={{ fontWeight: 600 }} align="center">
                Ações
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usuarios.map((usuario) => (
              <TableRow
                key={usuario.id}
                sx={{ '&:hover': { bgcolor: 'grey.50' } }}
              >
                <TableCell>{usuario.nome}</TableCell>
                <TableCell>{usuario.email}</TableCell>
                <TableCell>
                  <Chip
                    label={usuario.status}
                    color={usuario.status === 'Ativo' ? 'success' : 'default'}
                    size="small"
                    sx={{ fontWeight: 500 }}
                  />
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}
                  >
                    <IconButton
                      color="primary"
                      size="small"
                      aria-label="editar"
                    >
                      <Edit fontSize="small" />
                    </IconButton>
                    <IconButton color="error" size="small" aria-label="excluir">
                      <Delete fontSize="small" />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
