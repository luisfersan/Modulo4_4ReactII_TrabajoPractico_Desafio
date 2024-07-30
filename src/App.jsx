import { Route, Routes } from 'react-router-dom';
import { usePizzas } from './hooks/usePizzas';
import { useGlobalContext } from './context/GlobalContext';
import { useEffect } from 'react';
import { Loading, Navbar } from './components';
import { Cart, Home, NotFound, Pizza } from './pages';

function App() {
    const { pizzas, loading } = usePizzas();
    const { setCurrentPizzas } = useGlobalContext();

    const initialPizzas = pizzas.map((item) => ({
        id: item.id,
        quantity: 0,
        unitaryTotal: 0,
    }));

    useEffect(() => {
        setCurrentPizzas(initialPizzas);
    }, [pizzas]);

    if (loading) return <Loading />;

    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home pizzas={pizzas} />} />
                <Route path="/carrito" element={<Cart />} />
                <Route path="/pizza/:id" element={<Pizza />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
