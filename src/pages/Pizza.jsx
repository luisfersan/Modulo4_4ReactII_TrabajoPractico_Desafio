import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    Divider,
    List,
    ListItem,
    Stack,
    Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context/GlobalContext';
import { usePizzas } from '../hooks/usePizzas';
import { formatNumber } from '../utils/formatNumber';
import { Error, Loading } from '../components';

const Pizza = () => {
    const { id } = useParams();
    const { pizzas, loading } = usePizzas('/pizzas.json');
    const { addPizza } = useGlobalContext();

    let pizzaData = pizzas.find((item) => item.id === id);

    if (loading) return <Loading />;
    if (!pizzaData) return <Error />;
    return (
        <Container maxWidth="lg" sx={{ margin: '2rem auto' }}>
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    title={pizzaData.name}
                    image={pizzaData.img}
                    sx={{ width: '40%', objectFit: 'cover' }}
                />
                <Box>
                    <CardContent
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            padding: '2rem',
                        }}>
                        <Typography variant="h4" fontWeight="bold" component="h1">
                            {pizzaData.name}
                        </Typography>
                        <Divider />
                        <Typography>{pizzaData.desc}</Typography>
                        <Typography variant="h4" fontWeight="bold" component="h2">
                            Ingredientes:
                        </Typography>
                        <List>
                            {pizzaData.ingredients.map((item) => (
                                <ListItem key={item} sx={{ paddingBlock: '.2rem' }}>
                                    🍕 {item}
                                </ListItem>
                            ))}
                        </List>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography variant="h4" fontWeight="bold" component="h2">
                                Precio: $ {formatNumber(pizzaData.price)}
                            </Typography>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => addPizza(pizzaData)}>
                                Añadir
                            </Button>
                        </Stack>
                    </CardContent>
                </Box>
            </Card>
        </Container>
    );
};

export default Pizza;
