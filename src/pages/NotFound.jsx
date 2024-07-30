import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Container, Stack, Typography } from '@mui/material';

const NotFound = () => {
    return (
        <Container maxWidth="md">
            <Stack alignItems="center" mt="3rem">
                <ErrorOutlineIcon color="secondary" sx={{ fontSize: '16rem' }} />
                <Typography variant="h2" color="secondary" fontWeight="bold">
                    Error 404
                </Typography>
                <Typography variant="h4" color="secondary">
                    Página no encontrada
                </Typography>
            </Stack>
        </Container>
    );
};

export default NotFound;
