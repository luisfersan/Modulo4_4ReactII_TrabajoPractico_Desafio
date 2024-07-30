import { Alert, AlertTitle, Container } from '@mui/material'

export const Error = () => {
  return (
    <Container
      maxWidth="md"
      sx={{ margin: '3rem auto' }}
    >
      <Alert
        variant="filled"
        severity="error"
      >
        <AlertTitle>Error</AlertTitle>
        Pizza <strong>no encontrada</strong>
      </Alert>
    </Container>
  )
}
