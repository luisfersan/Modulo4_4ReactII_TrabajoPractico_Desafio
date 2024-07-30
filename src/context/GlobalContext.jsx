import { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [currentPizzas, setCurrentPizzas] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalPizzaCount, setTotalPizzaCount] = useState(0);

    const addPizza = (pizza) => {
        Swal.fire({
            title: "Producto agregado",
            icon: "success",
            timer: 1000,
            toast: true,
            position: "bottom-right",
            showConfirmButton: false,
            showClass: {
                popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
                popup: "animate__animated animate__fadeOut",
            },
        });
        setTotal(total + pizza.price);
        setTotalPizzaCount(totalPizzaCount + 1);
        const pizzaIndex = currentPizzas.findIndex(
            (item) => item.id === pizza.id
        );
        let newPizzas = [...currentPizzas];
        newPizzas[pizzaIndex] = {
            id: currentPizzas[pizzaIndex].id,
            quantity: currentPizzas[pizzaIndex].quantity + 1,
            unitaryTotal: currentPizzas[pizzaIndex].unitaryTotal + pizza.price,
        };
        setCurrentPizzas(newPizzas);
    };

    const removePizza = (pizza) => {
        let newPizzas = [...currentPizzas];

        const pizzaIndex = currentPizzas.findIndex(
            (item) => item.id === pizza.id
        );
        if (currentPizzas[pizzaIndex].quantity === 0) return;
        Swal.fire({
            title: "Producto eliminado",
            icon: "error",
            timer: 1000,
            toast: true,
            position: "bottom-right",
            showConfirmButton: false,
            showClass: {
                popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
                popup: "animate__animated animate__fadeOut",
            },
        });
        setTotal(total - pizza.price);
        setTotalPizzaCount(totalPizzaCount - 1);
        newPizzas[pizzaIndex] = {
            id: currentPizzas[pizzaIndex].id,
            quantity: currentPizzas[pizzaIndex].quantity - 1,
            unitaryTotal: currentPizzas[pizzaIndex].unitaryTotal - pizza.price,
        };
        setCurrentPizzas(newPizzas);
    };

    return (
        <GlobalContext.Provider
            value={{
                total,
                setTotal,
                totalPizzaCount,
                setTotalPizzaCount,
                setCurrentPizzas,
                currentPizzas,
                addPizza,
                removePizza,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);
