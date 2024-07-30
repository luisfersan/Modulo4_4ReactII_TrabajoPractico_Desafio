import { Container, Stack } from '@mui/material'
import { Header, PizzaCard } from '../components'

const Home = ({ pizzas }) => {
  return (
    <>
      <Header />
      <Container
        maxWidth="xl"
        sx={{ margin: '2rem auto' }}
      >
        <Stack
          direction="row"
          gap="2rem"
          flexWrap="wrap"
          justifyContent="center"
        >
          {pizzas.map((item) => (
            <PizzaCard
              key={item.id}
              pizza={item}
            />
          ))}
        </Stack>
      </Container>
    </>
  )
}

export default Home
