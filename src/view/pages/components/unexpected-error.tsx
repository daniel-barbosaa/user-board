import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Box, Container, Typography } from '@mui/material';

export function UnexpectedError() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        textAlign: 'center',
        mt: 10,
        p: 4,
      }}
    >
      <Box sx={{ mb: 2 }}>
        <ErrorOutlineIcon color="error" sx={{ fontSize: 60 }} />
      </Box>
      <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
        Ooops...
      </Typography>
      <Typography variant="body1">
        Ocorreu um erro inesperado. Já estamos tentando resolver.
      </Typography>
    </Container>
  );
}
