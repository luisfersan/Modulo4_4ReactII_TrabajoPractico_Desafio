import {
  AppBar,
  Badge,
  Container,
  Link,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { NavLink } from 'react-router-dom'
import { formatNumber } from '../utils/formatNumber'
import { useGlobalContext } from '../context/GlobalContext'

export const Navbar = () => {
  const { total, totalPizzaCount } = useGlobalContext()

  const activeStyle = {
    fontWeight: 'bold',
  }

  const activeLink = ({ isActive }) =>
    isActive ? activeStyle : { color: 'white' }

  return (
    <AppBar
      position="sticky"
      component="nav"
      sx={{ backgroundColor: '#2980B9' }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Stack
            direction="row"
            sx={{
              alignItems: 'center',
              gap: '.8rem',
              '> a': { color: '#fff' },
            }}
          >
            <Link
              variant="h4"
              component={NavLink}
              fontWeight="bold"
              to="/"
            >
              🍕 Pizzería Mamma Mia!!
            </Link>
          </Stack>
          <Stack
            direction="row"
            gap="1.2rem"
            sx={{ '> a': { color: '#fff' } }}
          >
            <Link
              variant="h5"
              style={activeLink}
              to="/"
              component={NavLink}
            >
              Home
            </Link>
            <Link
              variant="h5"
              style={activeLink}
              to="/carrito"
              component={NavLink}
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <Badge
                badgeContent={totalPizzaCount}
                color="secondary"
              >
                <ShoppingCartIcon />
              </Badge>
            </Link>
            <Typography
              variant="h5"
              component="span"
            >
              $ {formatNumber(total)}
            </Typography>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
