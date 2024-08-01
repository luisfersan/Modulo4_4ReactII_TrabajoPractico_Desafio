import { Button, Container, Stack, Typography } from '@mui/material'
import { useGlobalContext } from '../context/GlobalContext'
import Swal from 'sweetalert2'
import { usePizzas } from '../hooks/usePizzas'
import { formatNumber } from '../utils/formatNumber'
import { Loading, PizzaDetail } from '../components'

const Cart = () => {
  const { pizzas, loading } = usePizzas()
  const { total } = useGlobalContext()

  const pay = () => {
    let timerInterval
    Swal.fire({
      title: 'Redirigiendo a pagos',

      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('Se cierra por tiempo de espera agotado.')
      }
    })
  }

  if (loading) return <Loading />

  return (
    <Container
      maxWidth="md"
      sx={{ margin: '2rem auto' }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
      >
        Detalles del pedido:
      </Typography>
      <Stack
        gap="2rem"
        sx={{
          margin: '1rem auto',
          padding: '2rem',
          background: '#fff',
        }}
      >
        {pizzas.map((item) => (
          <PizzaDetail
            key={item.id}
            pizza={item}
          />
        ))}
      </Stack>
      <Stack
        alignItems="flex-start"
        mt="1.2rem"
        gap="1rem"
      >
        <Typography variant="h4">Total: $ {formatNumber(total)}</Typography>
        <Button
          variant="contained"
          size="large"
          onClick={pay}
        >
          Ir a Pagar
        </Button>
      </Stack>
    </Container>
  )
}

export default Cart
