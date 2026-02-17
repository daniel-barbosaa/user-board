import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@mui/material';

import type { User } from '../../../../../app/types/user';
import { EmptyState } from '../../../../components/empty-state';
import { useUserManagement } from '../../users-context';
import { ModalEditUser } from '../modals/edit-user-modal';

import { SkeletonUserTable } from './skeleton-user-table';

interface UserTableProps {
  users: User[];
  isLoading: boolean;
  order: 'asc' | 'desc';
  handleSort(): void;
  totalUsers: number;
  search?: string;
}

export function UsersTable({
  users,
  handleSort,
  isLoading,
  order,
  totalUsers,
  search,
}: UserTableProps) {
  const { openEditUserModal } = useUserManagement();

  if (!isLoading && totalUsers === 0) {
    return <EmptyState />;
  }

  return (
    <>
      <Paper elevation={2}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>
                  <TableSortLabel
                    active
                    direction={order}
                    onClick={handleSort}
                    sx={{
                      '&:focus-visible': {
                        outline: '2px solid blue',
                      },
                    }}
                  >
                    Nome
                  </TableSortLabel>
                </TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Email</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading ? (
                <SkeletonUserTable />
              ) : users.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3} align="center" sx={{ py: 4 }}>
                    Nenhum usuário encontrado para
                    <strong>{` "${search}"`}</strong>
                  </TableCell>
                </TableRow>
              ) : (
                users.map((user) => (
                  <TableRow
                    key={user.id}
                    sx={{
                      '&:hover': {
                        cursor: 'pointer',
                        bgcolor: 'rgba(25, 118, 210, 0.08)',
                      },
                      '&:focus': {
                        bgcolor: 'rgba(25, 118, 210, 0.08)',
                      },
                    }}
                    onClick={() => openEditUserModal(user)}
                    tabIndex={0}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        openEditUserModal(user);
                      }
                    }}
                  >
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Chip
                        icon={
                          user.status === 'ACTIVE' ? (
                            <CheckCircleIcon fontSize="small" />
                          ) : (
                            <CancelIcon fontSize="small" />
                          )
                        }
                        label={user.status === 'ACTIVE' ? 'Ativo' : 'Inativo'}
                        color={user.status === 'ACTIVE' ? 'success' : 'error'}
                        size="small"
                        sx={{ fontWeight: 600 }}
                      />
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <ModalEditUser />
    </>
  );
}
