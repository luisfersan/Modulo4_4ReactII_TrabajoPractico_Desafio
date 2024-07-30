import {
    Button,
    Card,
    CardContent,
    CardMedia,
    Divider,
    List,
    ListItem,
    Stack,
    Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context/GlobalContext';
import { formatNumber } from '../utils/formatNumber';

export const PizzaCard = ({ pizza }) => {
    const { addPizza } = useGlobalContext();

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/pizza/${pizza.id}`);
    };

    return (
        <Card key={pizza.id} sx={{ width: 300 }}>
            <CardMedia sx={{ height: 160 }} image={pizza.img} title={pizza.name} />
            <CardContent>
                <Stack gap=".5em">
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }} component="h2">
                        {pizza.name}
                    </Typography>
                    <Divider variant="middle" />
                    <Typography variant="h6" component="h3">
                        Ingredientes:
                    </Typography>
                    <List>
                        {pizza.ingredients.map((item) => (
                            <ListItem key={item} sx={{ paddingBlock: '.2rem' }}>
                                🍕 {item}
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <Typography variant="h4" textAlign="center" my="1rem">
                        $ {formatNumber(pizza.price)}
                    </Typography>
                    <Stack direction="row" gap="1rem" justifyContent="center">
                        <Button variant="contained" onClick={handleNavigate}>
                            Ver mas
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => addPizza(pizza)}>
                            Añadir
                        </Button>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
};
