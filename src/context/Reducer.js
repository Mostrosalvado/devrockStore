/* eslint-disable default-case */
//TYPES

const LISTAME_PRODUCTOS = "LISTAME_PRODUCTOS";
const AGREGAR_CARRITO = "AGREGAR_CARRITO";
const ELIMINAR_CARRITO = "ELIMINAR_CARRITO";

export default function Reducer(state, action) {
    const { payload, type } = action;
    switch (type) {
        case LISTAME_PRODUCTOS:
            console.log(payload);
            return { ...state, productos: payload };
        case AGREGAR_CARRITO:
            const itemToAdd = state.productos.find((item) => item.id === parseInt(payload));
            const existingCartItemIndex = state.carrito.findIndex((item) => item[0].id === itemToAdd.id);

            if (existingCartItemIndex !== -1) {
                // Si el elemento ya está en el carrito, incrementa la cantidad en 1
                const updatedCarrito = state.carrito.map((item, index) => {
                    if (index === existingCartItemIndex) {
                        return [item[0], item[1] + 1];
                    } else {
                        return item;
                    }
                });

                return { ...state, carrito: updatedCarrito };
            } else {
                // Si el elemento no está en el carrito, agrégalo con cantidad 1
                return { ...state, carrito: [...state.carrito, [itemToAdd, 1]] };
            }

        case ELIMINAR_CARRITO:
            console.log(
                payload,
                "<- payload, state ->",
                state.carrito,
                "lo que llega"
            );
            return {
                ...state,
                carrito: state.carrito.filter((items) => items[0].id !== payload),
            };

        default:
            console.log("default")
    }
}

