import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import { useGlobalContext } from '../context/GlobalContext'
import { formatNumber } from '../utils/formatNumber'
import { Loading } from './Loading'

export const PizzaDetail = ({ pizza }) => {
  const { currentPizzas, addPizza, removePizza } = useGlobalContext()

  const pizzaCart = currentPizzas.find((item) => item.id === pizza.id)

  if (!pizza) return <Loading />
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-around"
      >
        <Stack
          direction="row"
          gap="1rem"
          flexGrow="1"
          alignItems="center"
        >
          <img
            src={pizza.img}
            alt={pizza.name}
            width="100"
          />
          <Typography variant="h6">{pizza.name}</Typography>
        </Stack>
        <Stack
          direction="row"
          gap="1rem"
          alignItems="center"
        >
          <Typography variant="h6">
            $ {formatNumber(pizzaCart.unitaryTotal)}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => removePizza(pizza)}
          >
            <RemoveIcon />
          </Button>
          <Box sx={{ width: '2rem', textAlign: 'center' }}>
            <Typography variant="h6">{pizzaCart.quantity}</Typography>
          </Box>
          <Button
            variant="contained"
            size="small"
            onClick={() => addPizza(pizza)}
          >
            <AddIcon />
          </Button>
        </Stack>
      </Stack>
      <Divider />
    </>
  )
}
