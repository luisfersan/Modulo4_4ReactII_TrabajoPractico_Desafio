import { Box, Stack, Typography } from '@mui/material'
import bg from '../assets/pizza-bg.jpg'

export const Header = () => {
  const style = {
    color: '#fff',
    textShadow: '2px 2px 5px rgb(0 0 0 / 90%)',
  }

  return (
    <Box
      sx={{
        background: `url(${bg})`,
        height: '40vh',
        backgroundPosition: 'center',
      }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          component="h1"
          sx={style}
        >
          ¡Pizzería Mamma Mia!
        </Typography>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={style}
        >
          ¡Tenemos las mejores Pizzas que podrás encontrar!
        </Typography>
      </Stack>
    </Box>
  )
}
